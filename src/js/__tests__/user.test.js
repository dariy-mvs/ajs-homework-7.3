import getLevel from '../app';
import fetchData from '../http';

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
