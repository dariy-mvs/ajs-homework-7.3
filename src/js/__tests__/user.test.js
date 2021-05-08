import Settings from '../app';

test('Create settings', () => {
  const mySettings = new Settings();
  const expectMapValuesSettings = new Map([
    ['theme', ['dark', 'light', 'gray']],
    ['music', ['pop', 'rock', 'chillout', 'off', 'trance']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
  ]);
  const expectDefaultMapSettings = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(mySettings).toEqual({
    settingsValues: expectMapValuesSettings,
    settingsDefault: expectDefaultMapSettings,
    ssettingsUser: new Map(),
  });
});

test('settings setter', () => {
  const mySettings = new Settings();
  const expectMapValuesSettings = new Map([
    ['theme', ['dark', 'light', 'gray']],
    ['music', ['pop', 'rock', 'chillout', 'off', 'trance']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
  ]);
  const expectDefaultMapSettings = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  mySettings.settingsUser = { prop: 'music', value: 'rock' };
  mySettings.settingsUser = { prop: 'theme', value: 'dark' };
  expect(mySettings).toEqual({
    settingsValues: expectMapValuesSettings,
    settingsDefault: expectDefaultMapSettings,
    ssettingsUser: new Map([
      ['music', 'rock'],
      ['theme', 'dark'],
    ]),
  });
});

test('settings setter', () => {
  const mySettings = new Settings();
  const expectMapValuesSettings = new Map([
    ['theme', ['dark', 'light', 'gray']],
    ['music', ['pop', 'rock', 'chillout', 'off', 'trance']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
  ]);
  const expectDefaultMapSettings = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  mySettings.settingsUser = { prop: 'music', value: 'rock' };
  expect(mySettings).toEqual({
    settingsValues: expectMapValuesSettings,
    settingsDefault: expectDefaultMapSettings,
    ssettingsUser: new Map([
      ['music', 'rock'],
    ]),
  });
});

test('settings getter', () => {
  expect(() => {
    const mySettings = new Settings();
    mySettings.settingsUser = { prop: 'art', value: 'rock' };
  }).toThrow('такого свойства не существует');
});

test('settings getter', () => {
  const mySettings = new Settings();
  mySettings.settingsUser = { prop: 'music', value: 'rock' };
  const settingsAll = mySettings.settings;
  expect(settingsAll).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]));
});
