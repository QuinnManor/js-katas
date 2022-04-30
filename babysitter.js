export function startTime(time) {
  if (time < 17) {
    time = 17;
  }
  return time;
}

export function endTime(time) {
  if (time > 4) {
    time = 4;
  }
  return time;
}
