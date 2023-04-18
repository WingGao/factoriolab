import { SelectItem } from 'primeng/api';

export enum Game {
  None = 'None',
  JiangCity = 'JiangCity',
  Factorio = 'Factorio',
  CaptainOfIndustry = 'CaptainOfIndustry',
  DysonSphereProgram = 'DysonSphereProgram',
  Satisfactory = 'Satisfactory',
}

export const games = [
  Game.JiangCity,
  // Game.Factorio,
  // Game.DysonSphereProgram,
  // Game.Satisfactory,
  // Game.CaptainOfIndustry,
];

export const gameOptions: SelectItem<Game>[] = [
  { value: Game.JiangCity, label: 'options.game.jiangcity' },
  // { value: Game.Factorio, label: 'options.game.factorio' },
  // { value: Game.DysonSphereProgram, label: 'options.game.dysonSphereProgram' },
  // { value: Game.Satisfactory, label: 'options.game.satisfactory' },
  // { value: Game.CaptainOfIndustry, label: 'options.game.captainOfIndustry' },
];
