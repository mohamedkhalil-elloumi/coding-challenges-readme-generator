export class MinStack {
  private stack: Array<{ val: number; min: number }>;

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push({
      val,
      min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
    });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack.length === 0 ? 0 : this.stack[this.stack.length - 1].min;
  }
}
