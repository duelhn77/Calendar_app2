"use client";
import React from "react";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
};

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  message = "この操作を実行してもよろしいですか？",
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="modal" // ← Modal.tsx と同じクラス名にする
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ textAlign: "center" }}
      >
        <h3 className="text-base font-semibold mb-4 text-gray-800">{message}</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded text-sm"
            onClick={onClose}
          >
            キャンセル
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            更新を確定する
          </button>
        </div>
      </div>
    </div>
  );
}
