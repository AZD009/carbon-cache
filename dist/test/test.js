"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = require("../src/cache");
var myCache = new cache_1.CarbonCache(100);
var sampleJson = {
    "apple": { "color": "red", "weight": 200 },
    "orange": { "color": "orange", "weight": 100 },
};
test('put', function () {
    expect(myCache.put("banana", { "color": "yellow", "weight": 50 })).toEqual(true);
});
test('put', function () {
    expect(myCache.put("banana", { "color": "yellow", "weight": 50 })).toEqual(false);
});
test('put', function () {
    expect(myCache.put("banana", { "color": "yellow", "weight": 75 }, true)).toEqual(true);
});
test("isEmpty", function () {
    expect(myCache.isEmpty()).toEqual(false);
});
test('importJson', function () {
    expect(myCache.importJson(sampleJson)).toEqual(true);
});
test('get', function () {
    expect(myCache.get("apple")).toEqual({ "color": "red", "weight": 200 });
});
test('has', function () {
    expect(myCache.has("apple")).toEqual(true);
});
test('del', function () {
    expect(myCache.del("apple")).toEqual(true);
});
test('flush', function () {
    expect(myCache.flush()).toEqual(true);
});
test('exportJson', function () {
    expect(myCache.exportJson()).toEqual(null);
});
