import koa from "koa";
import { AppConfig, AppContext, AppServices, AppState } from "../types";
import { corsMiddleware, jsonMiddleware, requestHandlerMiddleware, staticFilesMiddleware } from "./routes/middlewares";

export const mapMiddlewares = (app: koa<AppState, AppContext>, services: AppServices, configuration: AppConfig) => {
    corsMiddleware(app);
    jsonMiddleware(app);
    requestHandlerMiddleware(app, services.logger);
    staticFilesMiddleware(app, services.logger, configuration);
}