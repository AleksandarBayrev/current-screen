export interface IWorker {
    readonly name: string;
    start(): Promise<void>;
    stop(): Promise<void>;
}