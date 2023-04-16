import koa from "koa";
import Router from "koa-router";
import { AppContext, AppServices, AppState } from "../types";
import { configurationRouteGet, currentStatusRouteGet, indexRouteGet, screenshotRouteGet } from "./routes";

export const mapRoutes = (app: koa<AppState, AppContext>, services: AppServices) => {
    const router = new Router();
    indexRouteGet(router);
    screenshotRouteGet(router, services);
    currentStatusRouteGet(router);
    configurationRouteGet(router);
    app.use(router.routes());
}