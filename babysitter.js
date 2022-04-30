export function startTime(time) {
  return time < 17 ? 17 : time;
}

export function endTime(time) {
  return time > 4 ? 4 : time;
}
