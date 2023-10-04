export type RegistrationPayload = {
  username: string;
  password: string;
  email: string;
  course_group?: number;
};
export type ActivationPayload = {
  uid: string;
  token: string;
};

export type ActivationResponse = {
  uid: string;
  token: string;
};
