export interface Id {
  id: number;
}

export interface NewUser {
  email: string;
  token?: string;
}

export type User = Id & NewUser;
