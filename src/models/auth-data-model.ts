export interface optDataModel {
  id: string;
  phone: string;
}

export interface authModel {
  userId: string;
  email: string;
  name: string;
  status: string;
  nextStep: string;
  redirectTo: string;
  message: string;
}

export interface fullData {
  success: boolean;
  statusCode: number;
  message: string;
  data: authModel;
}

export interface userLoginModel {
  email: string;
  password: string;
}

export interface dataOfReturnLogin {
  userId: string;
  email: string;
  nextStep: string;
}

export interface returnLoginModel {
  success: boolean;
  statusCode: number;
  message: string;
  data: dataOfReturnLogin;
}

export interface userofData {
  userId: string;
  email: string;
  name: string;
  profileImage: string | null;
}

export interface userTokenModel {
  accessToken: string;
  // refreshToken: string;
}

export interface dataofToken {
  user: userofData;
  tokens: userTokenModel;
}

export interface tokenModel {
  success: boolean;
  statusCode: number;
  message: string;
  data: dataofToken;
}

export interface getAccessTokenModel {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
  };
}
