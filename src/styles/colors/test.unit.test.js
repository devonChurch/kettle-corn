require('babel-polyfill');

import createColor from './index';
import { parseToRgb } from 'polished';

describe('defaults', () => {
  const expectedSchema = { red: 33, green: 150, blue: 243, alpha: 1 };

  test('should default to a "medium" tint and a "alpha" value of "1" when only a "color type" value is supplied', () => {
    const color = createColor('blue');
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should default to a "medium" tint when only "color type" and "alpha" values are supplied', () => {
    const color = createColor('blue', 1);
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should default to a "alpha" value of "1" when only "color type" and "tint" values are supplied', () => {
    const color = createColor('blue', 'medium');
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject(expectedSchema);
  });
});

describe('tints', () => {
  test('should return the "lightest" tint option', () => {
    const color = createColor('green', 'lightest');
    const colorSchema = parseToRgb(color);
    const expectedSchema = { red: 48, green: 255, blue: 236, alpha: 1 };

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should return the "light" tint option', () => {
    const color = createColor('green', 'light');
    const colorSchema = parseToRgb(color);
    const expectedSchema = { red: 0, green: 227, blue: 205, alpha: 1 };

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should return the "medium" tint option', () => {
    const color = createColor('green', 'medium');
    const colorSchema = parseToRgb(color);
    const expectedSchema = { red: 0, green: 150, blue: 136, alpha: 1 };

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should return the "dark" tint option', () => {
    const color = createColor('green', 'dark');
    const colorSchema = parseToRgb(color);
    const expectedSchema = { red: 0, green: 112, blue: 101, alpha: 1 };

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should return the "darkest" tint option', () => {
    const color = createColor('green', 'darkest');
    const colorSchema = parseToRgb(color);
    const expectedSchema = { red: 0, green: 74, blue: 67, alpha: 1 };

    expect(colorSchema).toMatchObject(expectedSchema);
  });
});

describe('alphas', () => {
  const expectedSchema = { red: 244, green: 67, blue: 54 };

  test('should return an alpha of 1', () => {
    const color = createColor('red', 1);
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject({ ...expectedSchema, alpha: 1 });
  });

  test('should return an alpha of 0.5', () => {
    const color = createColor('red', 0.5);
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject({ ...expectedSchema, alpha: 0.5 });
  });

  test('should return an alpha of 0', () => {
    const color = createColor('red', 0);
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject({ ...expectedSchema, alpha: 0 });
  });
});

describe('fallbacks', () => {
  const expectedSchema = { red: 96, green: 125, blue: 139, alpha: 1 };

  test('should return an "alpha" of 1 when an supplied alpha value is greater than 1', () => {
    const color = createColor('gray', 100);
    const colorSchema = parseToRgb(color);

    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should return an "alpha" of 1 when an supplied alpha value is less than 0', () => {
    const color = createColor('gray', -0.5);
    const colorSchema = parseToRgb(color);
    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('should return an "tint" of medium when a irregular tint is supplied', () => {
    const color = createColor('gray', 'bright');
    const colorSchema = parseToRgb(color);
    expect(colorSchema).toMatchObject(expectedSchema);
  });

  test('return a fallback gray when a valid "misc" color tint is not supplied', () => {
    const color = createColor('misc');
    const colorSchema = parseToRgb(color);
    expect(colorSchema).toMatchObject(expectedSchema);
  });
});
