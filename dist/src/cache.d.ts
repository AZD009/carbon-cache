export declare class CarbonCache {
    constructor(expire?: number);
    private timer;
    private cache;
    private expire;
    isEmpty(): boolean;
    get(key: any): any;
    has(key: any): boolean;
    keys(): string[];
    put(key: any, value: any, doReplace?: boolean): boolean;
    del(key: any): boolean;
    importJson(data: any): boolean;
    exportJson(): JSON;
    flush(): boolean;
    private insert;
    private setExpiry;
}
