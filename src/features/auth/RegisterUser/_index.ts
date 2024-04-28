import { RegisterUserController } from "./RegisterUserController";

export const makeRegisterUserController = (): RegisterUserController => {
  return new RegisterUserController();
};
