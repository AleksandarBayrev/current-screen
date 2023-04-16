import { Logger, Screenshotter, Storage } from "./services";
import { AppServices } from "./types";

const services: AppServices = {
    logger: new Logger(),
    workers: new Map(),
    storage: Storage.getInstance()
}

services.workers.set('Screenshotter', new Screenshotter(services.logger, services.storage));

export default services;