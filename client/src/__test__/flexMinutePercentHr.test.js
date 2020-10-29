import { flexMinutePercentHr } from "../helpers/flexMinutePercentHr";

test("Convert the hours work to a workable time input", () => {
  expect(flexMinutePercentHr("27")).toBe("0.5");

});
