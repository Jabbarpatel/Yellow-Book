import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  exp: number;
  iat: number;
  UserName: string;
  Role: string;
};

export const decodeToken = (Token: string): DecodedToken | null => {
  try {
    return jwtDecode(Token);
  } catch {
    return null;
  }
};
