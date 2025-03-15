"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setErrorMessage("すべてのフィールドを入力してください。");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("新しいパスワードが一致しません。");
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      setErrorMessage("ログイン情報がありません。");
      return;
    }

    try {
      const response = await fetch("/api/changePassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, currentPassword, newPassword }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "パスワード変更に失敗しました。");
      }

      alert("✅ パスワードが変更されました。");
      router.push("/calendar"); // 成功したらダッシュボードへ遷移
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>🔑 パスワード変更</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <label>現在のパスワード:</label>
      <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

      <label>新しいパスワード:</label>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

      <label>新しいパスワード（再入力）:</label>
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      <button onClick={handleChangePassword} style={{ marginTop: "10px" }}>変更</button>
    </div>
  );
}
