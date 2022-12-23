import koa from 'koa';
import instances from './instances';
import { mapMiddlewares, mapRoutes, start, getConfiguration } from './server';
import { mapWorkers } from './server/mapWorkers';
import { workers } from './server/storage';
import { AppContext, AppState, AppServices, AppConfig } from './types';

(async (services: AppServices) => {
    const config: AppConfig = getConfiguration();
    const app = new koa<AppState, AppContext>();
    mapMiddlewares(app, services, config);
    mapRoutes(app, services);
    mapWorkers(app, instances);
    start(app, services, config.port);
    process.on('beforeExit', () => {
        workers.forEach(async (x) => await x.stop());
        workers.clear();
    });
})(instances);