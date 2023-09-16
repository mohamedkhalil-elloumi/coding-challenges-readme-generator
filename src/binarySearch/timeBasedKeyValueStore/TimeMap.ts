export class TimeMap {
  private map: Map<string, Map<number, string>>;

  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, new Map());
    }
    this.map.get(key)!.set(timestamp, value);
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) {
      return "";
    }

    const map = this.map.get(key)!;

    if (!map.has(timestamp)) {
      const keys = [...map.keys()];
      const index = this.binarySearch(keys, timestamp);

      if (index === -1) {
        return "";
      }

      return map.get(keys[index])!;
    }

    return map.get(timestamp)!;
  }

  private binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  }
}
