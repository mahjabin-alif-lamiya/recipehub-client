"use client";

import { useState } from "react";
import { FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import api from "@/lib/api";

const REASONS = ["Spam", "Offensive Content", "Copyright Issue"];

export default function ReportModal({ recipeId, onClose }) {
  const [reason, setReason] = useState(REASONS[0]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/reports", { recipeId, reason });
      toast.success("Report submitted. Thanks for flagging this.");
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not submit the report.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/40 px-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-sm rounded-card bg-surface p-6 dark:bg-surface-dark">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Report this recipe</h2>
          <button onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            {REASONS.map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="reason"
                  value={r}
                  checked={reason === r}
                  onChange={() => setReason(r)}
                  className="accent-spice-500"
                />
                {r}
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-brick-500 py-2.5 text-sm font-medium text-white hover:bg-brick-600 disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit report"}
          </button>
        </form>
      </div>
    </div>
  );
}