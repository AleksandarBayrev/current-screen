import { action, IObservableValue, observable } from "mobx";
import { AppStatus } from "./types";

export class Store {
    @observable currentScreen: IObservableValue<string | null>;
    @observable status: IObservableValue<string>;
    @observable appStatus: IObservableValue<AppStatus>;


    private fileReader: FileReader;

    constructor(fileReader: FileReader) {
        this.fileReader = fileReader;
        this.currentScreen = observable.box(null);
        this.appStatus = observable.box(AppStatus.Loading);
        this.status = observable.box('');
        this.fileReader.addEventListener('load', () => {
            this.currentScreen.set(this.fileReader.result as string);
        });
    }

    @action
    getCurrentScreen = async (url: string) => {
        const data = await fetch(url);
        this.fileReader.readAsDataURL(await data.blob());
    }

    @action
    getCurrentStatus = async (url: string) => {
        const data = await fetch(url);
        this.status.set(await data.text());
    }

    @action
    setAppStatus = async (status: AppStatus) => {
        this.appStatus.set(status);
    }
}