/* eslint-disable @typescript-eslint/no-empty-function */
interface AuthResponse {
  user: User;
  jwt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export class AuthService {
  static async signIn() {}

  static async signOut() {}

  static async signUp() {}
}
