import type { IHttpRequest } from "./IHttpResquest";

export interface IControllerResponse {
  statusCode: number;
  payload: any;
}

export interface IController {
  handle(request: IHttpRequest): Promise<IControllerResponse>;
}
