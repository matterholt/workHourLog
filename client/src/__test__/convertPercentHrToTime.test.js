import { convertPercentHrToTime } from "../helpers/convertPercentHrToTime";

test("Convert the hours work to a workable time input", () => {
  expect(convertPercentHrToTime(8)).toBe("08:00");
  expect(convertPercentHrToTime(8.5)).toBe("08:27");
  expect(convertPercentHrToTime(10.6)).toBe("10:33");
  expect(convertPercentHrToTime(14.1)).toBe("14:03");
});
