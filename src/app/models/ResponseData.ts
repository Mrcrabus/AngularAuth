export interface ResponseData {
  userInfo: {
    userId: number;
    userName: string;
    userAvatar: string;
    userRole: number;
  };
  tokens: {
    token: string;
    refreshToken: string;
  };
}
