export interface User {
  userId: number;
  userName: string;
  userAvatar: string;
  userRole: number;
}

export interface UserData {
  login: string;
  password: string;
  remember: boolean;
}
