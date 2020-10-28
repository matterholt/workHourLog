import { convertNumberHrsToTime } from "../helpers/convertNumberHrsToTime";

test("Convert the hours work to a workable time input", () => {
  expect(convertNumberHrsToTime("8")).toStrictEqual(['08','0']);
  expect(convertNumberHrsToTime("8.5")).toStrictEqual(['08','5']);
  expect(convertNumberHrsToTime("10")).toStrictEqual(['10','0']);
  expect(convertNumberHrsToTime("10.1")).toStrictEqual(['10','1']);
});
