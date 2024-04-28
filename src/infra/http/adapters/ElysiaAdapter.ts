import { Elysia, type Context } from "elysia";
import type { IController } from "../IHttpController";
import type { IMiddlaware } from "../IHttpMiddleware";
import type { HTTPMethods, IHttpServer } from "../IHttpServer";

export default class ElysiaAdapter implements IHttpServer {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
  }
  on(
    method: HTTPMethods,
    url: string,
    controller: IController,
    middleware?: IMiddlaware | undefined
  ): void {
    console.log(method);
    switch (method) {
      case "GET":
        this.app.get(
          url,
          async (context: Context) => {
            const { statusCode, payload } = await controller.handle({
              body: context.body,
            });

            console.log(payload);
            context.set.status = statusCode;
            return payload;
          },
          {
            beforeHandle: async (req: any) => {
              if (middleware) {
                const { statusCode, payload } = await middleware?.handle(req);
              }
            },
          }
        );
        break;
      default:
        throw new Error(`HTTP method ${method} not supported`);
    }
  }

  async listen(port: number): Promise<void> {
    this.app.listen(port);
  }

  close(): void {
    throw new Error(`Method undefined!`);
  }
}
