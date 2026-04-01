import { STALE_TIMES } from "@/constants/query";
import { useQuery } from "@tanstack/react-query";

export interface TokenPayload {
  sub: string | number;
  userType: "user" | "association";
  name?: string;
  email?: string;
  exp?: number;
}

const getUser = (): TokenPayload | null => {
  return {
    sub: 1, 
    userType: "user",
    name: "Jota (Modo Teste)",
    email: "jota@teste.com",
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), 
  };
};

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: STALE_TIMES.SHORT,
    retry: false,
  });
}