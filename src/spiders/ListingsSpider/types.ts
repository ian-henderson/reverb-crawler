export type ListingsSpiderConfig =
  | Config<ProductType.Accessories, AccessoriesCategory>
  | Config<ProductType.AcousticGuitars, AcousticGuitarsCategory>
  | Config<ProductType.Amps, AmpsCategory>
  | Config<ProductType.BassGuitars, BassGuitarsCategory>
  | Config<ProductType.EffectsAndPedals, EffectsAndPedalsCategory>
  | Config<ProductType.ElectricGuitars, ElectricGuitarsCategory>
  | Config<ProductType.KeyboardsAndSynths, KeyboardsAndSynthsCategory>
  | Config<ProductType.Parts, PartsCategory>;

export interface Config<ProductType, Category> {
  productType: ProductType;
  categories?: Category[];
}

export enum ProductType {
  Accessories = "accessories",
  AcousticGuitars = "acoustic-guitars",
  Amps = "amps",
  BassGuitars = "bass-guitars",
  EffectsAndPedals = "effects-and-pedals",
  ElectricGuitars = "electric-guitars",
  KeyboardsAndSynths = "keyboards-and-synths",
  Parts = "parts",
}

export type Category =
  | AccessoriesCategory
  | AcousticGuitarsCategory
  | AmpsCategory
  | BassGuitarsCategory
  | EffectsAndPedalsCategory
  | ElectricGuitarsCategory
  | KeyboardsAndSynthsCategory
  | PartsCategory;

export enum AccessoriesCategory {
  AmpCovers = "amp-covers",
  BanjoStrings = "banjo-strings",
  BassCases = "bass-cases",
  BassGigBags = "bass-gig-bags",
  BassStrings = "bass-strings",
  BooksAndDvds = "books-and-dvds",
  CableAdaptersAndSplitters = "cables-adapters-and-splitters",
  Cables = "cables",
  Capos = "capos",
  CaseCandy = "case-candy",
  CasesAndGigBags = "cases-and-gig-bags",
  GuitarCases = "guitar-cases",
  GuitarGigBags = "guitar-gig-bags",
  GuitarStrings = "guitar-strings",
  Headphones = "headphones",
  Humidifiers = "humidifiers",
  MandolinStrings = "mandolin-strings",
  Merchandise = "merchandise",
  Metronome = "metronome",
  OtherStrings = "other-strings",
  Picks = "picks",
  PowerSupplies = "power-supplies",
  Slides = "slides",
  Stands = "stands",
  Straps = "straps",
  Strings = "strings",
  Tools = "tools",
  Tuners = "tuners",
  UkuleleStrings = "ukulele-strings",
}

export enum AcousticGuitarsCategory {
  Archtop = "archtop",
  Baritone = "baritone",
  BuiltInElectronics = "built-in-electronics",
  Classical = "classical",
  Concert = "concert",
  Dreadnought = "dreadnought",
  Jumbo = "jumbo",
  LeftHanded = "left-handed",
  MiniSlashTravel = "mini-slash-travel",
  OmAndAuditorium = "om-and-auditorium",
  Parlor = "parlor",
  Resonator = "resonator",
  TwelveString = "12-string",
}

export enum AmpsCategory {
  AcousticAmps = "acoustic-amps",
  Attenuators = "attenuators",
  BassCabinets = "bass-cabinets",
  BassCombos = "bass-combos",
  BassHeads = "bass-heads",
  BoutiqueAmps = "boutique-amps",
  GuitarCabinets = "guitar-cabinets",
  GuitarCombos = "guitar-combos",
  GuitarHeads = "guitar-heads",
  KeyboardAmps = "keyboard-amps",
  ModelingAmps = "modeling-amps",
  SmallAmps = "small-amps",
}

export enum BassGuitarsCategory {
  AcousticBassGuitars = "acoustic-bass-guitars",
  ActiveElectronics = "active-electronics",
  FiveStringOrMore = "5-string-or-more",
  FourString = "4-string",
  Fretless = "fretless",
  LeftHanded = "left-handed",
  ShortScale = "short-scale",
}

export enum EffectsAndPedalsCategory {
  AmpModeling = "amp-modeling",
  BassPedals = "bass-pedals",
  Buffer = "buffer",
  CabSims = "cab-sims",
  ChorusAndVibrato = "chorus-and-vibrato",
  CompressionAndSustain = "compression-and-sustain",
  ControllersVolumeAndExpression = "controllers-volume-and-expression",
  Delay = "delay",
  Distortion = "distortion",
  EQ = "eq",
  Flanger = "flanger",
  Fuzz = "fuzz",
  GuitarSynths = "guitar-synths",
  LoopPedalsAndSamplers = "loop-pedals-and-samplers",
  MultiEffectUnit = "multi-effect-unit",
  NoiseGenerators = "noise-generators",
  NoiseReductionAndGates = "noise-reduction-and-gates",
  OctaveAndPitch = "octave-and-pitch",
  OverdriveAndBoost = "overdrive-and-boost",
  PedalBoardsAndPowerSupplies = "pedalboards-and-power-supplies",
  PhaseShifters = "phase-shifters",
  Preamps = "preamps",
  Reverb = "reverb",
  RingModulators = "ring-modulators",
  Tremolo = "tremolo",
  TuningPedals = "tuning-pedals",
  Vocal = "vocal",
  WahsAndFilters = "wahs-and-filters",
}

export enum ElectricGuitarsCategory {
  Archtop = "archtop",
  Baritone = "baritone",
  HollowBody = "hollow-body",
  LapSteel = "lap-steel",
  LeftHanded = "left-handed",
  PedalSteel = "pedal-steel",
  SemiHollow = "semi-hollow",
  SolidBody = "solid-body",
  Tenor = "tenor",
  TravelSlashMini = "travel-slash-mini",
  TwelveString = "12-string",
}

export enum KeyboardsAndSynthsCategory {
  AcousticPianos = "acoustic-pianos",
  AnalogSynths = "analog-synths",
  Benches = "benches",
  Cases = "cases",
  Controllers = "controllers",
  DigitalPianos = "digital-pianos",
  DigitalSynths = "digital-synths",
  ElectricPianos = "electric-pianos",
  Eurorack = "eurorack",
  GrandPianos = "grand-pianos",
  KeyboardAccessories = "keyboard-accessories",
  KeyboardParts = "keyboard-parts",
  ModularSynths = "modular-synths",
  Organs = "organs",
  Pedals = "pedals",
  RackmountSynths = "rackmount-synths",
  Stands = "stands",
  Synths = "synths",
  UprightPianos = "upright-pianos",
  Workstations = "workstations",
}

export enum PartsCategory {
  AcousticPickups = "acoustic-pickups",
  AmpParts = "amp-parts",
  BassGuitarParts = "bass-guitar-parts",
  BassPickups = "bass-pickups",
  GuitarBodies = "guitar-bodies",
  GuitarParts = "guitar-parts",
  GuitarPickups = "guitar-pickups",
  Knobs = "knobs",
  PedalParts = "pedal-parts",
  Pickguards = "pickguards",
  ReplacementSpeakers = "replacement-speakers",
  Tubes = "tubes",
  TuningHeads = "tuning-heads",
}
