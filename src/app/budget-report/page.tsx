"use client";

import { useEffect, useState } from "react";

type ReportRow = {
  engagement: string;
  activityId: string;
  activity: string;
  budget: number;
  actual: number;
  month?: string;
};

type ActivityMasterRow = {
  engagement: string;
  activityId: string;
  activity: string;
  budget: number;
};

type RawActivityRow = {
  engagement: string;
  activity_id: string;
  activity: string;
  budget?: number;
};

export default function BudgetReportPage() {
  const [reportData, setReportData] = useState<ReportRow[]>([]);
  const [activityMaster, setActivityMaster] = useState<ActivityMasterRow[]>([]);
  const [engagements, setEngagements] = useState<string[]>([]);
  const [selectedEngagement, setSelectedEngagement] = useState<string>("");

  const [startMonth, setStartMonth] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("");

  useEffect(() => {
    const fetchReportData = async () => {
      const res = await fetch("/api/fetchBudgetAndActuals");
      const data: ReportRow[] = await res.json();
      setReportData(data);
    };

    const fetchActivities = async () => {
      try {
        const res = await fetch("/api/fetchActivities");
        const raw: RawActivityRow[] = await res.json();
        const mapped: ActivityMasterRow[] = raw.map((row) => ({
          engagement: row.engagement,
          activityId: row.activity_id,
          activity: row.activity,
          budget: row.budget || 0,
        }));
        setActivityMaster(mapped);
      } catch (err) {
        console.error("❌ fetchActivities エラー:", err);
      }
    };

    const fetchEngagements = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;
      try {
        const res = await fetch(`/api/fetchEngagements?userId=${userId}`);
        const json = await res.json();
        const names = json.map((e: { name: string }) => e.name);
        setEngagements(names);
      } catch (error) {
        console.error("❌ fetchEngagements エラー:", error);
      }
    };

    fetchReportData();
    fetchActivities();
    fetchEngagements();
  }, []);

  const allMonths = Array.from(
    new Set(
      reportData
        .filter(r => r.engagement === selectedEngagement && r.actual > 0)
        .map(r => r.month)
    )
  ).sort((a, b) => new Date(a!).getTime() - new Date(b!).getTime());

  const filteredReportData = reportData.filter((row) => {
    if (row.engagement !== selectedEngagement) return false;
    const time = new Date(row.month || "").getTime();
    const from = startMonth ? new Date(startMonth).getTime() : -Infinity;
    const to = endMonth ? new Date(endMonth).getTime() : Infinity;
    return time >= from && time <= to;
  });

  const activityMap: { [key: string]: ReportRow } = {};

  activityMaster.forEach((row) => {
    if (row.engagement !== selectedEngagement) return;
    const key = `${row.activityId}_${row.activity}`;
    activityMap[key] = {
      engagement: row.engagement,
      activityId: row.activityId,
      activity: row.activity,
      budget: row.budget || 0,
      actual: 0,
    };
  });

  filteredReportData.forEach((row) => {
    const key = `${row.activityId}_${row.activity}`;
    if (activityMap[key]) {
      activityMap[key].actual += row.actual || 0;
    }
  });

  const filteredData = Object.values(activityMap).sort((a, b) =>
    a.activityId.localeCompare(b.activityId, "ja", { numeric: true })
  );

  const totalBudget = filteredData.reduce((sum, row) => sum + row.budget, 0);
  const totalActual = filteredData.reduce((sum, row) => sum + row.actual, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 予実レポート</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-8">
        <div>
          <label className="block mb-2 font-semibold text-lg">Engagement（会社）：</label>
          <select
            value={selectedEngagement}
            onChange={(e) => setSelectedEngagement(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">-- 選択してください --</option>
            {engagements.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-lg">開始月：</label>
          <select
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">-- 指定なし --</option>
            {allMonths.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-lg">終了月：</label>
          <select
            value={endMonth}
            onChange={(e) => setEndMonth(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">-- 指定なし --</option>
            {allMonths.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      {selectedEngagement && (
        <>
          <h2 className="text-xl font-semibold mb-3">「{selectedEngagement}」の予算・実績一覧</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse border">
              <thead className="bg-blue-200 font-bold">
                <tr>
                  <th className="border px-4 py-2 w-[100px]">Activity ID</th>
                  <th className="border px-4 py-2 w-[250px]">Activity</th>
                  <th className="border px-4 py-2 text-right w-[120px]">予定時間</th>
                  <th className="border px-4 py-2 text-right w-[120px]">実績時間</th>
                  <th className="border px-4 py-2 text-right w-[120px]">差分</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => {
                  const diff = row.actual - row.budget;
                  return (
                    <tr key={idx}>
                      <td className="border px-4 py-2 text-center">{row.activityId}</td>
                      <td className="border px-4 py-2 text-center">{row.activity}</td>
                      <td className="border px-4 py-2 text-right">{row.budget.toFixed(2)} h</td>
                      <td className="border px-4 py-2 text-right">{row.actual.toFixed(2)} h</td>
                      <td
                        className="border px-4 py-2 font-bold text-right"
                        style={{
                          color: diff > 0 ? "red" : diff < 0 ? "green" : "black",
                        }}
                      >
                        {(diff >= 0 ? "+" : "") + diff.toFixed(2)} h
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-blue-200 font-semibold border-t-2 border-b-2 border-black">
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center">合計</td>
                  <td className="border px-4 py-2 text-right">{totalBudget.toFixed(2)} h</td>
                  <td className="border px-4 py-2 text-right">{totalActual.toFixed(2)} h</td>
                  <td
                    className="border px-4 py-2 text-right"
                    style={{
                      color:
                        totalActual - totalBudget > 0 ? "red" :
                        totalActual - totalBudget < 0 ? "green" :
                        "black",
                    }}
                  >
                    {(totalActual - totalBudget >= 0 ? "+" : "") + (totalActual - totalBudget).toFixed(2)} h
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
