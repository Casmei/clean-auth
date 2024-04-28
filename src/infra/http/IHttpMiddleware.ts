import type { IHttpRequest } from "./IHttpResquest";

export interface IMiddlewareResponse {
  statusCode: number;
  payload: any;
}

export interface IMiddlaware {
  handle(request: IHttpRequest): Promise<IMiddlewareResponse>;
}
