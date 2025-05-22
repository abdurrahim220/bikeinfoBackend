export interface ILoginUser {
    email: string;
    password: string;
  }
  
  export interface ILoginUserResponse {
    accessToken: string;
    refreshToken?: string;
    user: {
      id: string;
      email: string;
      role: string;
    };
  }
  
  export interface IRefreshTokenResponse {
    accessToken: string;
  }
  
  export interface IChangePassword {
    oldPassword: string;
    newPassword: string;
  }