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
}

export interface fullData {
  success: boolean;
  statusCode: number;
  message: string;
  data: authModel;
}
