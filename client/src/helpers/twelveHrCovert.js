/**
 * The punch value in the PM time is in 24hr format,
 * return the PM values as a 12hr format.
 * mainly for display purpose and no calculation are performed
 *
 * @param {String} time
 */
export function twelveHrCovert(time) {
  const [hour, min] = time.split(":");
  const subtractHr = hour - 12;
  const twelveHrFormat = `${subtractHr} : ${min} `;

  return twelveHrFormat;
}
