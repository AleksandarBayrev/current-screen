import koa from "koa";
import { AppContext, AppServices, AppState, IWorker } from "../types";
import { workers } from "./storage";

export const mapWorkers = (app: koa<AppState, AppContext>, services: AppServices) => {
    workers.set('Screenshotter', services.workers.get('Screenshotter') as IWorker);

    // Start all workers
    workers.forEach(async (x) => await x.start());
}