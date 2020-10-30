import { convertTimePercentTime } from "../helpers/convertTimePercentTime";

test("Convert time inputs to Percent", () => {
  expect(convertTimePercentTime("11:27")).toBe(11.5);
  expect(convertTimePercentTime("4:00")).toBe(4.0);
  expect(convertTimePercentTime("8:41")).toBe(8.7);
  expect(convertTimePercentTime("12:59")).toBe(12.0);
});
