import koa from "koa";
import Router from "koa-router";
import { AppContext, AppServices, AppState } from "../types";
import { configurationRouteGet, currentStatusRouteGet, indexRouteDelete, indexRouteGet, indexRoutePatch, indexRoutePost, indexRoutePut, screenshotRouteGet } from "./routes";

export const mapRoutes = (app: koa<AppState, AppContext>, services: AppServices) => {
    const router = new Router();
    indexRouteGet(router);
    indexRouteDelete(router);
    indexRoutePatch(router);
    indexRoutePost(router);
    indexRoutePut(router);
    screenshotRouteGet(router);
    currentStatusRouteGet(router);
    configurationRouteGet(router);
    app.use(router.routes());
}