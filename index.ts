import { setupRoutes } from "./src/adapters/routes/routes";
import ElysiaAdapter from "./src/infra/http/adapters/ElysiaAdapter";

const httpServer = new ElysiaAdapter();
setupRoutes(httpServer);
httpServer.listen(3006);
