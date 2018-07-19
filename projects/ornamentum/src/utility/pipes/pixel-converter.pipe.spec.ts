import {PixelConverterPipe} from "./pixel-converter.pipe";

describe('PixelConverterPipe', () => {
  let pipe : PixelConverterPipe;
  beforeEach(() => {
    pipe = new PixelConverterPipe();
  });

  it('#transform should return a string starting with the param when passing a number',() => {
    expect(pipe.transform(15)).toBe('15px');
  });

  it('#transform should return the same string when passing a string as the parameter',() => {
    expect(pipe.transform('15px')).toBe('15px');
  });

  it('#transform should return undefined when passing a null value',() => {
    expect(pipe.transform(null)).toBeUndefined();
  });

  it('#transform should return undefined when passing a minus value',() => {
    expect(pipe.transform(-15)).toBeUndefined();
  });

  it('#transform should return 0px when passing an 0 value',() => {
    expect(pipe.transform(0)).toBe('0px');
  });

  it('#transform should return undefined when passing an minus value as a string',() => {
    expect(pipe.transform('-1px')).toBeUndefined();
  });
});
