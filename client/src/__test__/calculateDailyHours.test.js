import { calculateDailyHours } from "../helpers/calculateDailyHours";

test("calculates correct hours worked for the day", () => {
  expect(calculateDailyHours("8:00", "16:30")).toBe("8.0");
  expect(calculateDailyHours("7:30", "16:30")).toBe("8.5");
  expect(calculateDailyHours("8:00", "16:33")).toBe("8.1");
});
