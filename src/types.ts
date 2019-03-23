export declare class CarbonCache {
    constructor(expire?: number);
    isEmpty(): boolean;
    get(key: any): any;
    has(key: any): boolean;
    put(key: any, value: any, doReplace?: boolean): boolean;
    del(key: any): boolean;
    importJson(data: any): boolean;
    exportJson(): JSON;
    flush(): boolean;
}