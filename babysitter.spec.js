import { startTime } from "./babysitter";

describe("start time", () => {
  test("Testing for start time", () => {
    expect(startTime(1700)).toEqual(1700);
    expect(startTime(1900)).toEqual(1900);
  });
  test("Testing is no earlier than 5pm", () => {
    expect(startTime(1600)).toEqual(1700);
    expect(startTime(1500)).toEqual(1700);
  });
});
