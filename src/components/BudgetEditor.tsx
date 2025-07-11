"use client";

import { useEffect, useState } from "react";
import ConfirmModal from "./ConfirmModal";

type ActivityRow = {
  activityId: string;
  activityName: string;
  budget: number;
};

type RawBudgetRow = {
  engagement: string;
  activityId: string;
  activity: string;
  budget: number;
};

type Props = {
  engagement: string;
};

export default function BudgetEditor({ engagement }: Props) {
  const [activities, setActivities] = useState<ActivityRow[]>([]);
  const [editedBudgets, setEditedBudgets] = useState<Record<string, string>>({});
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("🧪 isModalOpen の状態:", isModalOpen);
  }, [isModalOpen]);

  // 1. データ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/fetchBudgetAndActuals");
        const allData: RawBudgetRow[] = await res.json();

        const filtered = allData
          .filter((d) => d.engagement === engagement)
          .reduce((map: Record<string, ActivityRow>, row) => {
            if (!map[row.activityId]) {
              map[row.activityId] = {
                activityId: row.activityId,
                activityName: row.activity,
                budget: row.budget,
              };
            }
            return map;
          }, {});

        const activityList = Object.values(filtered).sort((a, b) =>
          a.activityId.localeCompare(b.activityId)
        );
        setActivities(activityList);
      } catch (err) {
        console.error("❌ データ取得エラー:", err);
      }
    };

    fetchData();
  }, [engagement]);

  // 2. 入力値更新
  const handleChange = (activityId: string, value: string) => {
    setEditedBudgets({ ...editedBudgets, [activityId]: value });
  };

  // 3. モーダル表示
  const handleUpdate = (activityId: string) => {
    console.log("🟡 更新ボタン押下 - activityId:", activityId);
    setSelectedActivity(activityId);
    setIsModalOpen(true);
  };

  // 4. 実際の更新処理
  const confirmUpdate = async () => {
    if (!selectedActivity) return;

    const newBudget = editedBudgets[selectedActivity];
    if (newBudget === undefined || isNaN(Number(newBudget))) {
      alert("数値を入力してください");
      return;
    }

    try {
      const res = await fetch("/api/updateBudget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          engagement,
          activityId: selectedActivity,
          newBudget: Number(newBudget),
        }),
      });

      if (!res.ok) throw new Error("更新に失敗しました");

      const updatedList = activities.map((act) =>
        act.activityId === selectedActivity
          ? { ...act, budget: Number(newBudget) }
          : act
      );
      setActivities(updatedList);
      setIsModalOpen(false);
      alert("✅ 更新しました");
    } catch (error) {
      console.error("❌ 更新失敗:", error);
      alert("更新に失敗しました");
    }
  };

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold mb-4">活動別予算編集：{engagement}</h3>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Activity ID</th>
            <th className="border p-2">Activity名</th>
            <th className="border p-2">予算（h）</th>
            <th className="border p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((act) => (
            <tr key={act.activityId} style={{ lineHeight: "1", height: "28px" }}>
              <td style={{ border: "1px solid #ccc", padding: "2px 4px" }}>
                {act.activityId}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "2px 4px" }}>
                {act.activityName}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "2px 4px" }}>
                <input
                  type="number"
                  value={editedBudgets[act.activityId] ?? act.budget.toString()}
                  onChange={(e) => handleChange(act.activityId, e.target.value)}
                  style={{
                    padding: "1px",
                    height: "20px",
                    fontSize: "12px",
                    width: "100px",
                  }}
                />
              </td>
              <td style={{ border: "1px solid #ccc", padding: "2px 4px" }}>
                <button
                  onClick={() => handleUpdate(act.activityId)}
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "2px 8px",
                    fontSize: "12px",
                    borderRadius: "4px",
                    height: "24px",
                  }}
                >
                  更新
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmUpdate}
        message="予算を更新してよろしいですか？"
      />
    </div>
  );
}
