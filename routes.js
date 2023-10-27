import { Router } from "express";
import WPController from "./routes/WPController";

const routes = new Router();

routes.post('/wpvenom/mensagem', WPController.sendMessage);

export default routes;