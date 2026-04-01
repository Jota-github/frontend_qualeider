import { logger } from "./logger";

export interface TokenPayload {
  sub: string | number;
  userType: "user" | "association";
  name?: string;
  email?: string;
}

/**
 * Get the auth token from localStorage safely (MOCK)
 */
export function getAuthToken(): string | null {
  return "token-falso-para-teste";
}

/**
 * Decode JWT token safely using jwt-decode library (MOCK)
 */
export function decodeToken(token: string): TokenPayload | null {
  return {
    sub: 1,
    userType: "user", // Mude para "association" se for testar as telas de associação
    name: "Jota Mockado",
    email: "jota@mock.com"
  };
}

/**
 * Get user type from stored token (MOCK)
 */
export function getUserTypeFromToken(): "user" | "association" {
  return "user"; // Mude para "association" se precisar
}

/**
 * Get user ID from stored token (MOCK)
 */
export function getUserIdFromToken(): number | null {
  return 1;
}

/**
 * Check if user is authenticated (MOCK)
 */
export function isAuthenticated(): boolean {
  return true; // Força a aplicação a achar que está SEMPRE logada
}

/**
 * Remove auth token (logout) (MOCK)
 */
export function clearAuthToken(): void {
  if (typeof window === "undefined") return;
  console.log("Mock: Simulou logout");
}

/**
 * Store auth token (MOCK)
 */
export function setAuthToken(token: string): void {
  if (typeof window === "undefined") return;
  console.log("Mock: Simulou salvamento de token");
}