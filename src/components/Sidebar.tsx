import { useState, useEffect, useRef } from "react";
import { FaCog } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ExportModal from "./ExportModal";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isExportMyDataOpen, setIsExportMyDataOpen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  const reportRef = useRef<HTMLLIElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const response = await fetch(`/api/getUserRole?userId=${userId}`);
        const data = await response.json();

        if (data.role) {
          setUserRole(data.role);
        }
      } catch (error) {
        console.error("❌ ユーザー役職の取得エラー:", error);
      }
    };

    fetchUserRole();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  const handleChangePassword = () => {
    router.push("/change-password");
  };

  const handleExport = async (startDate: string, endDate: string, format: string, userId?: string): Promise<boolean> => {
    console.log(`📥 エクスポート開始: ${startDate} ～ ${endDate}, フォーマット: ${format}, ユーザーID: ${userId || "全データ"}`);

    try {
      const response = await fetch("/api/exportData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startDate, endDate, format, userId }) // ✅ `userId` がある場合、自分のデータのみ
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "対象期間に該当データはありません") {
          return false; // 修正箇所: データがない場合は `false` を返す
        }
        throw new Error("エクスポート処理に失敗しました");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", `export.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      console.log("✅ エクスポート成功！");
      return true; // 修正箇所: エクスポート成功時に `true` を返す
    } catch (error) {
      console.error("❌ エクスポートエラー:", error);
      return false; // 修正箇所: エラー時は `false` を返す
    }
  };

  // ✅ 外部クリックでホップアップを閉じる
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (reportRef.current && !reportRef.current.contains(event.target as Node)) {
        setIsReportOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Haleiwaシステム</h1>

      {/* 📌 レポートメニュー */}
      <ul>
        <li 
          onClick={() => setIsReportOpen(!isReportOpen)}
          ref={reportRef}
        >
          レポート
          {isReportOpen && (
            <div className="menu-popup_report">
              {/* 全ユーザーが使用可能なExport（My Data） */}
              <button
                className="export-button"
                onClick={() => setIsExportMyDataOpen(true)}
              >
                📤 Export（My Data）
              </button>

              {isExportMyDataOpen && (
               <ExportModal 
                 isOpen={isExportMyDataOpen}
                 onClose={() => setIsExportMyDataOpen(false)}
                 onExport={async (startDate, endDate, format) => {
                  const userId = localStorage.getItem("userId") || ""; // 🔹 ユーザーIDを取得
                  return await handleExport(startDate, endDate, format, userId); // 🔹 `await` を追加し `Promise<boolean>` を返す
                }}
               />
              )}

              
              
              {/* 管理者のみ表示されるExport（all Data） */}
              {userRole === "管理者" && (
                <button
                  className="export-button"
                  onClick={() => setIsExportOpen(true)}
                >
                  📤 Export（all Data）
                </button>
              )}
            </div>
          )}
        </li>
      </ul>

      {/* Exportのモーダル */}
      {isExportMyDataOpen && (
        <ExportModal 
          isOpen={isExportMyDataOpen}
          onClose={() => setIsExportMyDataOpen(false)}
          onExport={async (startDate, endDate, format) => {
            const userId = localStorage.getItem("userId") || ""; // 🔹 ユーザーIDを取得
            return await handleExport(startDate, endDate, format, userId); // 🔹 `await` を追加し `Promise<boolean>` を返す
          }}
        />
      )}

      {isExportOpen && (
        <ExportModal 
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          onExport={(startDate, endDate, format) => handleExport(startDate, endDate, format)}
        />
      )}

      {/* 📌 管理メニュー */}
      <div 
        className="settings"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        ref={menuRef}
      >
        <FaCog size={20} />
        <span>管理メニュー</span>
        {isMenuOpen && (
          <div className="menu-popup">
            <button className="pw-change-button" onClick={handleChangePassword}>
              🔑 PW変更
            </button>

            <button className="logout-button" onClick={handleLogout}>
              ログアウト
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
