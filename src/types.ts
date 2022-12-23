export enum AppStatus {
    Loading,
    Loaded,
    Error
};

export type AppConfiguration = {
    currentScreenUrl: string;
    statusUrl: string;
}