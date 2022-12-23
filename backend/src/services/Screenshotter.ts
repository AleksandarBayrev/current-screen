import screenshot from 'screenshot-desktop';
import { ILogger, IWorker } from '../types';

export class Screenshotter implements IWorker {
    private interval: NodeJS.Timer | null;
    private readonly logger: ILogger;

    public readonly name: string = 'Screenshotter';

    constructor(logger: ILogger) {
        this.logger = logger;
        this.interval = null;
    }

    async start(): Promise<void> {
        if (this.interval) {
            this.logger.log(`Worker ${this.name} already started`);
            return;
        }
        this.interval = setInterval(async () => {
            await screenshot({ format: 'jpg', filename: './image.jpg' });
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