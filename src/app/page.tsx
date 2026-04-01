"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboardUser");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Redirecionando para o Dashboard...</p>
    </div>
  );
}