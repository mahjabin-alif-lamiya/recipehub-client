"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export default function RegisterPage() {
  const { register, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", image: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!PASSWORD_RULE.test(form.password)) {
      toast.error("Password needs 6+ characters, one uppercase and one lowercase letter.");
      return;
    }

    setSubmitting(true);
    try {
      await register(form);
      toast.success("Account created. Welcome to RecipeHub.");
      router.push("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not create account.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async (credentialResponse) => {
    try {
      await loginWithGoogle(credentialResponse.credential);
      toast.success("Welcome to RecipeHub.");
      router.push("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Google sign-up failed.");
    }
  };

  return (
    <div className="mx-auto max-w-sm px-5 py-16">
      <p className="eyebrow">Join RecipeHub</p>
      <h1 className="mt-2 font-display text-3xl font-semibold">Create an account</h1>
      <p className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">
        Start collecting and sharing recipes.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="text-sm">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
        <div>
          <label className="text-sm">Photo URL (optional)</label>
          <input
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 pr-10 text-sm dark:border-ink-dark/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/50 dark:text-ink-dark/50"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-spice-500 py-2.5 text-sm font-medium text-white hover:bg-spice-600 disabled:opacity-60"
        >
          {submitting ? "Creating account…" : "Create account"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs text-ink/40">
        <span className="h-px flex-1 bg-ink/10 dark:bg-ink-dark/15" />
        or
        <span className="h-px flex-1 bg-ink/10 dark:bg-ink-dark/15" />
      </div>

      <div className="flex justify-center">
        <GoogleLogin
          locale="en"
          onSuccess={handleGoogle}
          onError={() => toast.error("Google sign-up failed.")}
        />
      </div>

      <p className="mt-8 text-center text-sm text-ink/60 dark:text-ink-dark/60">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-spice-600 dark:text-spice-100">
          Log in
        </Link>
      </p>
    </div>
  );
}