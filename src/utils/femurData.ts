// Femur length data by gestational week (in mm)
export const femurLengthData: Record<number, { P1: number; P5: number; P50: number; P95: number }> = {
  14: { P1: 7, P5: 9, P50: 14, P95: 18 },
  15: { P1: 10, P5: 12, P50: 17, P95: 21 },
  16: { P1: 13, P5: 15, P50: 20, P95: 24 },
  17: { P1: 16, P5: 18, P50: 23, P95: 27 },
  18: { P1: 19, P5: 21, P50: 22, P95: 30 },
  19: { P1: 22, P5: 24, P50: 28, P95: 33 },
  20: { P1: 24, P5: 26, P50: 31, P95: 36 },
  21: { P1: 27, P5: 29, P50: 34, P95: 38 },
  22: { P1: 30, P5: 32, P50: 36, P95: 41 },
  23: { P1: 33, P5: 35, P50: 39, P95: 44 },
  24: { P1: 35, P5: 37, P50: 42, P95: 46 },
  25: { P1: 38, P5: 40, P50: 44, P95: 49 },
  26: { P1: 40, P5: 42, P50: 47, P95: 51 },
  27: { P1: 43, P5: 45, P50: 49, P95: 54 },
  28: { P1: 45, P5: 47, P50: 52, P95: 56 },
  29: { P1: 48, P5: 50, P50: 54, P95: 59 },
  30: { P1: 50, P5: 52, P50: 56, P95: 61 },
  31: { P1: 52, P5: 54, P50: 59, P95: 63 },
  32: { P1: 54, P5: 56, P50: 61, P95: 65 },
  33: { P1: 56, P5: 58, P50: 63, P95: 67 },
  34: { P1: 58, P5: 60, P50: 65, P95: 69 },
  35: { P1: 60, P5: 62, P50: 67, P95: 71 },
  36: { P1: 62, P5: 64, P50: 68, P95: 73 },
  37: { P1: 63, P5: 65, P50: 70, P95: 74 },
  38: { P1: 65, P5: 67, P50: 71, P95: 76 },
  39: { P1: 66, P5: 68, P50: 73, P95: 77 }
};

export function calculatePercentile(weeks: number, femurLength: number): string {
  const weekData = femurLengthData[weeks];
  if (!weekData) return "Fuera de rango";

  if (femurLength < weekData.P1) return "< P1";
  if (femurLength < weekData.P5) return "P1-P5";
  if (femurLength < weekData.P50) return "P5-P50";
  if (femurLength < weekData.P95) return "P50-P95";
  return "> P95";
}