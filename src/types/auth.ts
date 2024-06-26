export type LoginInput = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  roles: string[];
};

export type RegisterInput = LoginInput & {
  name: string;
  confirmPassword: string;
};
