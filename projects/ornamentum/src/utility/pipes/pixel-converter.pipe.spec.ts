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
    expect(pipe.transform(null)).toBe(undefined);
  });

  it('#transform should return undefined when passing an undefined value',() => {
    expect(pipe.transform(undefined)).toBe(undefined);
  });
});
