"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "@/lib/api";
import Loader from "@/components/Loader";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    api.get("/admin/users").then(({ data }) => setUsers(data.users)).finally(() => setLoading(false));
  };

  useEffect(fetchUsers, []);

  const toggleBlock = async (user) => {
    try {
      await api.patch(`/admin/users/${user._id}/${user.isBlocked ? "unblock" : "block"}`);
      setUsers((prev) =>
        prev.map((u) => (u._id === user._id ? { ...u, isBlocked: !u.isBlocked } : u))
      );
      toast.success(user.isBlocked ? "User unblocked." : "User blocked.");
    } catch {
      toast.error("Could not update user.");
    }
  };

  if (loading) return <Loader label="Loading users" />;

  return (
    <div>
      <p className="eyebrow">Admin</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Manage Users</h1>

      <div className="mt-6 overflow-x-auto rounded-card ring-1 ring-ink/8 dark:ring-ink-dark/10">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-ink/5 dark:bg-white/5">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/8 dark:divide-ink-dark/10">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3 text-ink/60 dark:text-ink-dark/60">{user.email}</td>
                <td className="px-4 py-3 capitalize">{user.role}</td>
                <td className="px-4 py-3">
                  {user.isBlocked ? (
                    <span className="rounded-full bg-brick-400/10 px-2.5 py-1 text-xs text-brick-500">Blocked</span>
                  ) : (
                    <span className="rounded-full bg-herb-50 px-2.5 py-1 text-xs text-herb-600 dark:bg-herb-600/20 dark:text-herb-400">Active</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {user.role !== "admin" && (
                    <button
                      onClick={() => toggleBlock(user)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                        user.isBlocked
                          ? "bg-herb-500 text-white"
                          : "bg-brick-500 text-white"
                      }`}
                    >
                      {user.isBlocked ? "Unblock" : "Block"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}