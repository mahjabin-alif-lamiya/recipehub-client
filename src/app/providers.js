"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Providers({ children }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      <ThemeProvider>
        <AuthProvider>
          {children}
          <Toaster position="top-center" toastOptions={{ style: { fontSize: "14px" } }} />
        </AuthProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}