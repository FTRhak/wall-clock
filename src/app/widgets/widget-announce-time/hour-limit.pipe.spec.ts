import { HourLimitPipe } from './hour-limit.pipe';

describe('HourLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new HourLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
