import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pixel converter pipe.
 * Append px if value is number type. Return the same if value is string.
 */
@Pipe({
  name: 'ngPx'
})
export class PixelConverterPipe implements PipeTransform {

  /**
   * Pipe transform implementation.
   * @param {string | number} value Source value.
   * @returns {string} Converted pixel value.
   */
  public transform(value: string | number): string {
    if (value === undefined || value === null || value.toString().startsWith("-") || value < 0) {
      return;
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number') {
      return `${value}px`;
    }
  }
}
