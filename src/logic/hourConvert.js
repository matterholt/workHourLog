export function twelveHrCovert(time) {
  const [hour, min] = time.split(":");
  const subtractHr = hour - 12;
  const twelveHrFormat = `${subtractHr} : ${min} `;

  return twelveHrFormat;
}
