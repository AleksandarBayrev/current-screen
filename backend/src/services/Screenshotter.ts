import screenshot from 'screenshot-desktop';
import { ILogger, IWorker } from '../types';
import { Storage } from './Storage';

export class Screenshotter implements IWorker {
    private interval: NodeJS.Timer | null;
    private readonly logger: ILogger;
    private readonly storage: Storage;

    public readonly name: string = 'Screenshotter';

    constructor(
        logger: ILogger,
        storage: Storage) {
        this.logger = logger;
        this.storage = storage;
        this.interval = null;
    }

    async start(): Promise<void> {
        if (this.interval) {
            this.logger.log(`Worker ${this.name} already started`);
            return;
        }
        this.interval = setInterval(async () => {
            this.storage.setScreenData(await screenshot({ format: 'jpg' }));
        }, 1000);
    }
    
    async stop(): Promise<void> {
        if (!this.interval) {
            this.logger.log(`Worker ${this.name} not started`);
            return;
        }
        clearInterval(this.interval);
        this.interval = null;
    }
}