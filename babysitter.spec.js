import { startTime } from "./babysitter";

describe("start time", () => {
  test("Testing for start time", () => {
    expect(startTime(1700)).toEqual(1700);
    expect(startTime(1900)).toEqual(1900);
  });
});
