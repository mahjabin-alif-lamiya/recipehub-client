"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user, refreshUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.patch("/users/profile", { name, image });
      await refreshUser();
      toast.success("Profile updated.");
    } catch {
      toast.error("Could not update profile.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <p className="eyebrow">Account</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Profile</h1>

      <form onSubmit={handleSubmit} className="mt-6 max-w-sm space-y-4">
        <div>
          <label className="text-sm">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
        <div>
          <label className="text-sm">Photo URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            disabled
            value={user?.email || ""}
            className="mt-1 w-full rounded-lg border border-ink/10 bg-ink/5 px-3 py-2 text-sm text-ink/50 dark:border-ink-dark/10 dark:bg-white/5"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-spice-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-spice-600 disabled:opacity-60"
        >
          {submitting ? "Saving…" : "Save changes"}
        </button>
      </form>
    </div>
  );
}