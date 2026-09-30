// Jalali <-> Gregorian conversion (no external deps).
function div(a: number, b: number) { return ~~(a / b); }

export function g2j(gy: number, gm: number, gd: number): [number, number, number] {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const jy0 = gy <= 1600 ? 0 : 979;
  let gy2 = gy <= 1600 ? gy - 621 : gy - 1600;
  const gy2b = gm > 2 ? gy2 + 1 : gy2;
  let days = 365 * gy2 + div(gy2b + 3, 4) - div(gy2b + 99, 100) + div(gy2b + 399, 400) - 80 + gd + g_d_m[gm - 1];
  let jy = jy0 + 33 * div(days, 12053);
  days %= 12053;
  jy += 4 * div(days, 1461);
  days %= 1461;
  if (days > 365) { jy += div(days - 1, 365); days = (days - 1) % 365; }
  const jm = days < 186 ? 1 + div(days, 31) : 7 + div(days - 186, 30);
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return [jy, jm, jd];
}

export function j2g(jy: number, jm: number, jd: number): [number, number, number] {
  const jy0 = jy <= 979 ? 0 : 979;
  let jy2 = jy <= 979 ? jy : jy - 979;
  let days = 365 * jy2 + div(jy2, 33) * 8 + div(((jy2 % 33) + 3), 4) + 78 + jd + (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  let gy = 1600 + 400 * div(days, 146097);
  days %= 146097;
  let leap = true;
  if (days >= 36525) {
    days--; gy += 100 * div(days, 36524); days %= 36524;
    if (days >= 365) days++; else leap = false;
  }
  gy += 4 * div(days, 1461); days %= 1461;
  if (days >= 366) { leap = false; gy += div(days - 1, 365); days = (days - 1) % 365; }
  const g_d_m = [0, 31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let gm = 0, gd = days + 1;
  for (gm = 1; gm <= 12 && gd > g_d_m[gm]; gm++) gd -= g_d_m[gm];
  void jy0;
  return [gy, gm, gd];
}
