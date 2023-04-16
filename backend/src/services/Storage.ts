export class Storage {
    private static instance: Storage;
    private screenData: Buffer | null;
    private constructor() {
        this.screenData = null;
    }

    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    setScreenData(buffer: Buffer) {
        this.screenData = buffer;
    }

    getScreenData(): Buffer {
        if (!this.screenData) {
            throw new Error("No screen data captured");
        }
        return this.screenData;
    }
}