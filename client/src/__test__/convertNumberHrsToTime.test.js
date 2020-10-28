import { convertNumberHrsToTime } from "../helpers/convertNumberHrsToTime";

test("Convert the hours work to a workable time input", () => {
  expect(convertNumberHrsToTime("8")).toBe("08.0");
  expect(convertNumberHrsToTime("8.5")).toBe("08.5");
  expect(convertNumberHrsToTime("10")).toBe("10.0");
  expect(convertNumberHrsToTime("10.1")).toBe("10.1");
});
