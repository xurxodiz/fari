export enum CharacterTemplates {
  FateCondensed = "FateCondensed",
  FateCore = "FateCore",
  FateAccelerated = "FateAccelerated",
  FateOfCthulhu = "FateOfCthulhu",
  DresdenFilesAccelerated = "DresdenFilesAccelerated",
  VentureCity = "VentureCity",
  Heartbreaker = "Heartbreaker",
  IronEddaAccelerated = "IronEddaAccelerated",
  StrandsOfFate = "StrandsOfFate",
  EvolutionPulse_Hydrah = "EvolutionPulse_Hydrah",
  EvolutionPulse_Hyonos = "EvolutionPulse_Hyonos",
  EvolutionPulse_LostH = "EvolutionPulse_LostH",
  EvolutionPulse_Obscura = "EvolutionPulse_Obscura",
  EvolutionPulse_Proxy = "EvolutionPulse_Proxy",
  ThePool = "ThePool",
  TunnelsAndTrolls = "TunnelsAndTrolls",
  Maze = "Maze",
  Dnd5e = "Dnd5e",
  TheWitchIsDead = "TheWitchIsDead",
  EdgeOfTheEmpire = "EdgeOfTheEmpire",
  EdgeOfTheEmpire_FR = "EdgeOfTheEmpire_FR",
  Blank = "Blank",
}

export type ICharacterTemplateWithGroup = {
  template: CharacterTemplates;
  group: string;
};

export const CharacterTemplatesWithGroups: Array<ICharacterTemplateWithGroup> =
  [
    { group: "Fate", template: CharacterTemplates.FateCondensed },
    { group: "Fate", template: CharacterTemplates.FateCore },
    { group: "Fate", template: CharacterTemplates.FateAccelerated },
    { group: "Fate", template: CharacterTemplates.FateOfCthulhu },
    { group: "Fate", template: CharacterTemplates.DresdenFilesAccelerated },
    { group: "Fate", template: CharacterTemplates.VentureCity },
    { group: "Fate", template: CharacterTemplates.Heartbreaker },
    { group: "Fate", template: CharacterTemplates.IronEddaAccelerated },
    { group: "Fate", template: CharacterTemplates.StrandsOfFate },
    {
      group: "Evolution Pulse",
      template: CharacterTemplates.EvolutionPulse_Hydrah,
    },
    {
      group: "Evolution Pulse",
      template: CharacterTemplates.EvolutionPulse_Hyonos,
    },
    {
      group: "Evolution Pulse",
      template: CharacterTemplates.EvolutionPulse_LostH,
    },
    {
      group: "Evolution Pulse",
      template: CharacterTemplates.EvolutionPulse_Obscura,
    },
    {
      group: "Evolution Pulse",
      template: CharacterTemplates.EvolutionPulse_Proxy,
    },
    { group: "Maze", template: CharacterTemplates.Maze },
    {
      group: "Tunnels & Trolls",
      template: CharacterTemplates.TunnelsAndTrolls,
    },
    { group: "The Pool", template: CharacterTemplates.ThePool },
    { group: "Dungeons & Dragons", template: CharacterTemplates.Dnd5e },
    { group: "Grant Howitt", template: CharacterTemplates.TheWitchIsDead },
    { group: "Star Wars", template: CharacterTemplates.EdgeOfTheEmpire },
    { group: "Star Wars", template: CharacterTemplates.EdgeOfTheEmpire_FR },
    { group: "Blank", template: CharacterTemplates.Blank },
  ];
