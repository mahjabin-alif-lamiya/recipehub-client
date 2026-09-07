"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "@/lib/api";
import Loader from "@/components/Loader";

export default function AdminReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReports = () => {
    api.get("/reports").then(({ data }) => setReports(data.reports)).finally(() => setLoading(false));
  };

  useEffect(fetchReports, []);

  const handleAction = async (id, action) => {
    try {
      await api.patch(`/reports/${id}`, { action });
      setReports((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status: action === "remove" ? "resolved" : "dismissed" } : r))
      );
      toast.success(action === "remove" ? "Recipe removed." : "Report dismissed.");
    } catch {
      toast.error("Could not update report.");
    }
  };

  if (loading) return <Loader label="Loading reports" />;

  return (
    <div>
      <p className="eyebrow">Admin</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Reports</h1>

      {reports.length === 0 ? (
        <p className="mt-10 text-sm text-ink/60 dark:text-ink-dark/60">No reports yet.</p>
      ) : (
        <div className="mt-6 divide-y divide-ink/8 rounded-card ring-1 ring-ink/8 dark:divide-ink-dark/10 dark:ring-ink-dark/10">
          {reports.map((report) => (
            <div key={report._id} className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <p className="text-sm font-medium">{report.reason}</p>
                <p className="text-xs text-ink/55 dark:text-ink-dark/55">
                  Reported by {report.reporterEmail} · Status: {report.status}
                </p>
              </div>
              {report.status === "pending" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAction(report._id, "dismiss")}
                    className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium dark:border-ink-dark/20"
                  >
                    Dismiss
                  </button>
                  <button
                    onClick={() => handleAction(report._id, "remove")}
                    className="rounded-full bg-brick-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Remove Recipe
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}