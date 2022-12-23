import { Logger, Screenshotter } from "./services";
import { AppServices } from "./types";

const services: AppServices = {
    logger: new Logger(),
    workers: new Map()
}

services.workers.set('Screenshotter', new Screenshotter(services.logger));

export default services;