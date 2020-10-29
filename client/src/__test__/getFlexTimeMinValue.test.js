import{getFlexTimeMinValue} from "../helpers/getFlexTimeMinValue"


test("Convert the hours work to a workable time input", () => {
  expect(getFlexTimeMinValue(0.5)).toBe("27");
  expect(getFlexTimeMinValue(0.0)).toBe("00");
  expect(getFlexTimeMinValue(0.9)).toBe("51");;
  expect(getFlexTimeMinValue(0.3)).toBe("15");;
});
