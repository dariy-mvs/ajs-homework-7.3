import Team from '../app';

test('Creating Team', () => {
  let myTeam = new Team;
  console.log(myTeam);
  expect(myTeam).toEqual({
    members: new Set()
  })
});

test('Add Hero in team', () => {
  let myTeam = new Team;
  let myHero = {
    attack: 25
  };
  let setHero = new Set();
  setHero.add(myHero);
  myTeam.add(myHero);
  expect(myTeam).toEqual({
    members: setHero
    })
});

test('Add Hero in team Error', () => {
  
  expect(() => {
    let myTeam = new Team;
    const myHero = {
    attack: 25
  };
  myTeam.add(myHero);
  myTeam.add(myHero);
  }).toThrow('такой персонаж уже есть в команде');
});

test('Add Heroes in team', () => {
  let myTeam = new Team;
  const myHero = {
    attack: 25
  };
  const notMyHero = {
    attack: 15
  }
  let setHero = new Set();
  setHero.add(myHero);
  setHero.add(notMyHero);
  myTeam.addAll(myHero, notMyHero, myHero);
  expect(myTeam).toEqual({
    members: setHero
    })
});

test('Set in Array', () => {
  let myTeam = new Team;
  const myHero = {
    attack: 25
  };
  myTeam.add(myHero);
  const teamArray = myTeam.toArray();
  expect(teamArray).toEqual([myHero]);
});
