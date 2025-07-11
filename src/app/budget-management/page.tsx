"use client";
import { useEffect, useState } from "react";
import BudgetEditor from "@/components/BudgetEditor";

export default function BudgetManagement() {
  const [engagements, setEngagements] = useState<string[]>([]);
  const [selectedEngagement, setSelectedEngagement] = useState<string>("");

  useEffect(() => {
    const fetchEngagements = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) throw new Error("ユーザーIDが未設定です");
    
        const res = await fetch(`/api/fetchEngagements?userId=${userId}`);
        const data = await res.json();
    
        if (!Array.isArray(data)) {
          throw new Error("APIレスポンスが配列ではありません: " + JSON.stringify(data));
        }
    
        const names = data.map((item: any) => item.name || item.Engagement名);
        setEngagements(names);
      } catch (err) {
        console.error("❌ Engagement取得エラー:", err);
      }
    };
    
    fetchEngagements();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">💰 予算管理</h2>
      <div className="mb-4">
        <label className="block mb-2">Engagement を選択：</label>
        <select
          onChange={(e) => setSelectedEngagement(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">-- 選択してください --</option>
          {engagements.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      {selectedEngagement && (
        <BudgetEditor engagement={selectedEngagement} />
      )}
    </div>
  );
}
