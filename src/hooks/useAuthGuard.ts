import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuthGuard(requiredType: "user" | "association" = "user") {
  const router = useRouter();
  
  const fakeUser = {
    sub: 1,
    userType: "user" 
  };
  const isLoading = false;

  useEffect(() => {
    if (isLoading) return;

    if (fakeUser.userType !== requiredType) {
      const dashboardRoute =
        fakeUser.userType === "user" ? "/dashboardUser" : "/dashboardAssociation";
      router.push(dashboardRoute);
    }
  }, [requiredType, router]);

  return {
    userId: fakeUser.sub,
    isLoading,
  };
}