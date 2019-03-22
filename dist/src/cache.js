"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarbonCache = /** @class */ (function () {
    function CarbonCache(expire) {
        this.expire = expire;
        this.cache = null;
    }
    CarbonCache.prototype.isEmpty = function () {
        return (this.cache === null);
    };
    CarbonCache.prototype.get = function (key) {
        var value = (this.cache === null) ? undefined : this.cache[key];
        return (value === undefined) ? {} : value;
    };
    CarbonCache.prototype.has = function (key) {
        var value = (this.cache === null) ? undefined : this.cache[key];
        return (value !== undefined);
    };
    CarbonCache.prototype.put = function (key, value, doReplace) {
        if (this.cache === null) {
            this.cache = JSON;
            return this.insert(key, value);
        }
        else if (this.cache[key] === undefined || doReplace === true) {
            return this.insert(key, value);
        }
        else {
            return false;
        }
    };
    CarbonCache.prototype.del = function (key) {
        var value = (this.cache === null) ? undefined : this.cache[key];
        return (value === undefined) ? false : delete this.cache[key];
    };
    CarbonCache.prototype.importJson = function (data) {
        this.cache = data;
        this.setExpiry();
        return true;
    };
    CarbonCache.prototype.exportJson = function () {
        return this.cache;
    };
    CarbonCache.prototype.flush = function () {
        this.cache = null;
        return true;
    };
    // Helper methods
    CarbonCache.prototype.insert = function (key, value) {
        this.cache[key] = value;
        this.setExpiry();
        return true;
    };
    CarbonCache.prototype.setExpiry = function () {
        var _this = this;
        if (this.expire !== undefined) {
            clearTimeout(this.timer);
            this.timer = setTimeout(function () { _this.flush(); }, this.expire * 1000);
        }
    };
    return CarbonCache;
}());
exports.CarbonCache = CarbonCache;
