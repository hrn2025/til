type User = {
  name: string;
  age: number;
  entry: boolean;
};

const userList: User[] = [
  {
    name: 'taro',
    age: 23,
    entry: false
  },
  {
    name: 'hana',
    age: 26,
    entry: true
  }
];

interface Member {
  name: string;
  team: string;
  leader: boolean;
};

const members: Member[] = [
  {
    name: 'jiro',
    team: 'A',
    leader: true
  },
  {
    name: 'riko',
    team: 'D',
    leader: false
  }
];