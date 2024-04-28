import type { IController } from "./IHttpController";
import type { IMiddlaware } from "./IHttpMiddleware";
export type HTTPMethods =
  | "DELETE"
  | "GET"
  | "HEAD"
  | "PATCH"
  | "POST"
  | "PUT"
  | "OPTIONS";

export interface IHttpServer {
  on(
    method: HTTPMethods,
    url: string,
    controller: IController,
    middleware?: IMiddlaware
  ): void;

  listen(port: number): Promise<void>;

  close(): void;
}
