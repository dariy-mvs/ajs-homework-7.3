import ErrorRepository from '../app';

test('Creating ErrorRepository', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository).toEqual({
    errors: new Map(),
  });
});

test('getErrorText', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(1, 'you just left the room');
  const textOfMyError = errorRepository.translate(1);
  expect(textOfMyError).toBe('you just left the room');
});

test('getUnknownErrorText', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set(1, 'you just left the room');
  const textOfMyError = errorRepository.translate(2);
  expect(textOfMyError).toBe('Unknown error');
});
