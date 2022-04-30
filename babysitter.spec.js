import { startTime } from "./babysitter";

describe("start time", () => {
  test("Testing for start time", () => {
    expect(startTime).toEqual(1700);
  });
});
