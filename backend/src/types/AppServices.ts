import { ILogger } from "./ILogger"
import { IWorker } from "./IWorker";

export type AppServices = {
    workers: Map<string, IWorker>;
    logger: ILogger;
}