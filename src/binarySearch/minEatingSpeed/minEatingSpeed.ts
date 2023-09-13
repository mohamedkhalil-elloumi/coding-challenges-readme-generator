export function minEatingSpeed(piles: Array<number>, h: number) {
  let low = 1;
  let high = Math.max(...piles);
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (canEatAllBananas(piles, h, mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function canEatAllBananas(piles: Array<number>, h: number, mid: number) {
  let time = 0;
  for (let pile of piles) {
    time += Math.ceil(pile / mid);
  }
  return time <= h;
}
