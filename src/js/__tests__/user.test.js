import getLevel from '../app';
import fetchData from '../http';

test('fetchData', () => {
  expect(fetchData()).toBe(undefined);
});

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel', () => {
  fetchData.mockReturnValue('{}');
  getLevel(1);
  expect(fetchData).toBeCalledTimes(1);
  expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
});

test('getLevel', () => {
  const responseObj = {
    status: 'ok',
    level: 5,
  };
  fetchData.mockReturnValue(responseObj);
  expect(getLevel(1)).toEqual(`Ваш текущий уровень: ${5}`);
});
