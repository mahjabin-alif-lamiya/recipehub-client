"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import Loader from "@/components/Loader";

export default function AdminTransactionsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/payments").then(({ data }) => setPayments(data.payments)).finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader label="Loading transactions" />;

  return (
    <div>
      <p className="eyebrow">Admin</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Transactions</h1>

      {payments.length === 0 ? (
        <p className="mt-10 text-sm text-ink/60 dark:text-ink-dark/60">No transactions yet.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-card ring-1 ring-ink/8 dark:ring-ink-dark/10">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-ink/5 dark:bg-white/5">
              <tr>
                <th className="px-4 py-3 font-medium">User</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Transaction ID</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/8 dark:divide-ink-dark/10">
              {payments.map((p) => (
                <tr key={p._id}>
                  <td className="px-4 py-3">{p.userEmail}</td>
                  <td className="px-4 py-3">${p.amount}</td>
                  <td className="px-4 py-3 text-ink/60 dark:text-ink-dark/60">
                    {new Date(p.paidAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-herb-50 px-2.5 py-1 text-xs text-herb-600 dark:bg-herb-600/20 dark:text-herb-400">
                      {p.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-ink/60 dark:text-ink-dark/60">
                    {p.transactionId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}