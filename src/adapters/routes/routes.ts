import { makeRegisterUserController } from "../../features/auth/RegisterUser/_index";
import type { IHttpServer } from "../../infra/http/IHttpServer";

export async function setupRoutes(httpServer: IHttpServer) {
  httpServer.on("GET", "/register", makeRegisterUserController());
}
