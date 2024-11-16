const fib = require("./index");

test("Fib function is defined", () => {
  expect(typeof fib).toEqual("function");
});

test("calculates correct fib value for 1", () => {
  expect(fib(1)).toEqual(1);
});

test("calculates correct fib value for 2", () => {
  expect(fib(2)).toEqual(1);
});

test("calculates correct fib value for 3", () => {
  expect(fib(3)).toEqual(2);
});

test("calculates correct fib value for 4", () => {
  expect(fib(4)).toEqual(3);
});

test("calculates correct fib value for 15", () => {
  expect(fib(39)).toEqual(63245986);
});

test("calculates correct fib value for 52", () => {
  expect(fib(52)).toEqual(32951280099);
});

test("calculates correct fib value for 61", () => {
  expect(fib(61)).toEqual(2504730781961);
});

test("calculates correct fib value for 67", () => {
  expect(fib(67)).toEqual(44945570212853);
});

test("calculates correct fib value for 73", () => {
  expect(fib(73)).toEqual(806515533049393);
});
