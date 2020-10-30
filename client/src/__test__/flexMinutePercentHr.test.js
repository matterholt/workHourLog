import { flexMinutePercentHr } from "../helpers/flexMinutePercentHr";

test("Convert the hours work to a workable time input", () => {
  expect(flexMinutePercentHr("27")).toBe(0.5);
  expect(flexMinutePercentHr("00")).toBe(0.0);
  expect(flexMinutePercentHr("41")).toBe(0.7);
  expect(flexMinutePercentHr("59")).toBe(0.0);
});
