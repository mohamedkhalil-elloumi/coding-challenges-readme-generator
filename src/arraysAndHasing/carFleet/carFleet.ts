export function carFleet(
  target: number,
  position: Array<number>,
  speed: Array<number>
) {
  const cars = position.map((pos, i) => ({
    pos,
    time: (target - pos) / speed[i],
  }));

  cars.sort((a, b) => b.pos - a.pos);

  let result = 0;
  let slowest = 0;

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].time > slowest) {
      result++;
      slowest = cars[i].time;
    }
  }

  return result;
}
