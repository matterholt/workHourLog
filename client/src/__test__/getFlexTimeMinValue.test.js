import{getFlexTimeMinValue} from "../helpers/getFlexTimeMinValue"


test("Convert the hours work to a workable time input", () => {
  expect(getFlexTimeMinValue(0.5)).toBe("27");;
});
