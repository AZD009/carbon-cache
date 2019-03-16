import { CarbonCache } from '../src/cache';

const myCache = new CarbonCache(100);

let sampleJson = {
    "apple":{"color":"red","weight":200},
    "orange":{"color":"orange","weight":100},
}

test('put', () => {
  expect(myCache.put("banana",{"color":"yellow","weight":50})).toEqual(true);
});

test('put', () => {
  expect(myCache.put("banana",{"color":"yellow","weight":50})).toEqual(false);
});

test('put', () => {
  expect(myCache.put("banana",{"color":"yellow","weight":75},true)).toEqual(true);
});

test("isEmpty", () => {
  expect(myCache.isEmpty()).toEqual(false);
});

test('importJson', () => {
  expect(myCache.importJson(sampleJson)).toEqual(true);
});

test('get', () => {
  expect(myCache.get("apple")).toEqual({"color":"red","weight":200});
});

test('has', () => {
  expect(myCache.has("apple")).toEqual(true);
});

test('del', () => {
  expect(myCache.del("apple")).toEqual(true);
});

test('flush', () => {
  expect(myCache.flush()).toEqual(true);
});

test('exportJson', () => {
  expect(myCache.exportJson()).toEqual(null);
});