import type {
  IController,
  IControllerResponse,
} from "../../../infra/http/IHttpController";
import type { IHttpRequest } from "../../../infra/http/IHttpResquest";

export class RegisterUserController implements IController {
  async handle(request: IHttpRequest): Promise<IControllerResponse> {
    return { statusCode: 200, payload: { message: "Olá mundo!" } };
  }
}
