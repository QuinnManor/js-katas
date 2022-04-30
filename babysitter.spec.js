import { startTime, endTime } from "./babysitter";

describe("start time", () => {
  test("Testing for start time", () => {
    expect(startTime(17)).toEqual(17);
    expect(startTime(19)).toEqual(19);
  });
  test("Testing is no earlier than 5pm", () => {
    expect(startTime(16)).toEqual(17);
    expect(startTime(15)).toEqual(17);
  });
});

describe("End Time", () => {
  test("Testing for end of shift", () => {
    expect(endTime(4)).toEqual(4);
    expect(endTime(3)).toEqual(3);
  });
});
