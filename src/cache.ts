export class CarbonCache {

    constructor(expire?: number){
        this.expire = expire;
        this.cache = null;
    }

    private timer: any;
    private cache: JSON;
    private expire: number;

    public isEmpty(){
        return (this.cache === null);
    }

    public get(key){
        const value = (this.cache === null) ? undefined : this.cache[key];
        return (value === undefined) ? {} : value;
    }

    public has(key){
        const value = (this.cache === null) ? undefined : this.cache[key];
        return (value !== undefined);
    }

    public keys(){
        return (this.cache === null) ? [] : Object.keys(this.cache);
    }

    public put(key, value: any, doReplace?: boolean){
        if (this.cache === null){
            this.cache = JSON;
            return this.insert(key, value);
        }
        else if (this.cache[key] === undefined || doReplace === true) {
            return this.insert(key, value);
        }
        else{
            return false;
        }
    }

    public del(key){
        const value = (this.cache === null) ? undefined : this.cache[key];
        return (value === undefined) ? false : delete this.cache[key];
    }

    public importJson(data){
        this.cache = data;
        this.setExpiry();
        return true;
    }

    public exportJson(){
        return this.cache;
    }

    public flush(){
        this.cache = null;
        return true;
    }

    // Helper methods
    private insert(key, value){
        this.cache[key] = value;
        this.setExpiry();
        return true;
    }

    private setExpiry(){
        if (this.expire !== undefined){
            clearTimeout(this.timer);
            this.timer = setTimeout(() => { this.flush(); }, this.expire*1000);
        }
    }
}