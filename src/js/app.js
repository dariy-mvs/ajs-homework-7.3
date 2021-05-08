// TODO: write your code here

export default class Settings {
  constructor() {
    this.settingsValues = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['pop', 'rock', 'chillout', 'off', 'trance']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);
    this.settingsDefault = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.ssettingsUser = new Map();
    // Здесь необходима пара комментариев))
    // 1. Изначально я хотела сделать одно свойство settingsUser: {
    //  get() {...}
    //  set() {...}
    //}, но! Тогда проверить это через toEqual в jest тяжеловато. Есть какая-то функция для проверки подобных свойств?

    // 2. Далее я придумала новые свойства с нижним подчёркиванием. Но это уже не одобрил Lint. Пыталась переделать код по примеру с их сайта - не получилось, проще оказалось заменить _ на s, хотя понимаю что на реальном проекте меня закидают тапками за такое. В реальной разработке это правило игнорируется, или просто придумываются более длинные имена? 
    
    //Спасибо! 
  }

  set settingsUser(value) {
    if (this.settingsValues.has(value.prop)
    && this.settingsValues.get(value.prop).includes(value.value)) {
      this.ssettingsUser.set(value.prop, value.value);
    } else throw Error('такого свойства не существует');
  }

  get settings() {
    this.ssettings = new Map([...this.settingsDefault, ...this.ssettingsUser]);
    return this.ssettings;
  }
}
