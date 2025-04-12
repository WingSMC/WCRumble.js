export const Minies = {
    AngryChickens: 0x01,
    ArcaneBlast: 0x02,
    Blizzard: 0x03,
    ChainLightning: 0x04,
    CheatDeath: 0x05,
    DeepBreath: 0x06,
    EarthAndMoon: 0x07,
    Eclipse: 0x08,
    Execute: 0x09,
    HolyNova: 0x0a,
    LivingBomb: 0x0b,
    Polymorph: 0x0c,
    SmokeBomb: 0x0d,
    Abomination: 0x0e,
    AncientOfWar: 0x0f,
    AnubArak: 0x10,
    Banshee: 0x11,
    BaronRivendare: 0x12,
    BatRider: 0x13,
    BloodmageThalnos: 0x14,
    BogBeast: 0x15,
    CairneBloodhoof: 0x16,
    Cenarius: 0x17,
    Charlga: 0x18,
    Chimaera: 0x19,
    CoreHounds: 0x1a,
    DarkIronMiner: 0x1b,
    DarkspearTroll: 0x1c,
    DefiasBandits: 0x1d,
    DireBatlings: 0x1e,
    OrgrimDoomhammer: 0x1f,
    Drake: 0x20,
    GeneralDrakkisath: 0x21,
    DruidOfTheClaw: 0x22,
    Dryad: 0x23,
    EarthElemental: 0x24,
    EmperorThaurissan: 0x25,
    FaerieDragon: 0x26,
    FireElemental: 0x27,
    Firehammer: 0x28,
    Flamewaker: 0x29,
    Footmen: 0x2a,
    Gargoyle: 0x2b,
    Ghoul: 0x2c,
    GnollBrute: 0x2d,
    SAFEPilot: 0x2e,
    GoblinSappers: 0x2f,
    Grommash: 0x30,
    GryphonRider: 0x31,
    Harpies: 0x32,
    HarvestGolem: 0x33,
    HeadlessHorseman: 0x34,
    Hogger: 0x35,
    Huntress: 0x36,
    Jaina: 0x37,
    Maiev: 0x38,
    Malfurion: 0x39,
    Meatwagon: 0x3a,
    MoltenGiant: 0x3b,
    Moonkin: 0x3c,
    Mountaineer: 0x3d,
    //MountaineerDwarf: 0x3e, // Invalid mini
    MurlocTidehunters: 0x3f,
    Necromancer: 0x40,
    OgreMage: 0x41,
    OldMurkeye: 0x42,
    Onu: 0x43,
    PlagueFarmer: 0x44,
    Prowler: 0x45,
    Pyromancer: 0x46,
    Quillboar: 0x47,
    Ragnaros: 0x48,
    Raptors: 0x49,
    RendBlackhand: 0x4a,
    Shaman: 0x4b,
    SkeletonParty: 0x4c,
    Skeletons: 0x4d,
    Sneed: 0x4e,
    Spiderlings: 0x4f,
    StonehoofTauren: 0x50,
    SwoleTroll: 0x51,
    Sylvanas: 0x52,
    Tirion: 0x53,
    Treants: 0x54,
    Vultures: 0x55,
    WarsongGrunts: 0x56,
    WarsongRaider: 0x57,
    Whelps: 0x58,
    WitchDoctor: 0x59,
    Worgen: 0x5a,
    Ysera: 0x5b,
    //MountaineerBear: 0x5c, //Invalid Mini
    Priestess: 0x5d,
    Arthas: 0x5e
} as const;

export const Talents = {
    //Angry Chickens
    Snackrifice: Minies.AngryChickens << 2,
    WalkingCrate: (Minies.AngryChickens << 2) + 1,
    FuriousFowl: (Minies.AngryChickens << 2) + 2,

    //Arcane Blast
    Amplification: Minies.ArcaneBlast << 2,
    ArcanePower: (Minies.ArcaneBlast << 2) + 1,
    Torrent: (Minies.ArcaneBlast << 2) + 2,

    //Blizzard
    Coldsnap: Minies.Blizzard << 2,
    Icecrown: (Minies.Blizzard << 2) + 1,
    BrittleIce: (Minies.Blizzard << 2) + 2,

    //Chain Lightning
    BrilliantFlash: Minies.ChainLightning << 2,
    StormsReach: (Minies.ChainLightning << 2) + 1,
    Reverberation: (Minies.ChainLightning << 2) + 2,

    //Cheat Death
    SealFate: Minies.CheatDeath << 2,
    Vampirism: (Minies.CheatDeath << 2) + 1,
    Apocalypse: (Minies.CheatDeath << 2) + 2,

    //Deep Breath
    Attunement: Minies.DeepBreath << 2,
    MeltingPoint: (Minies.DeepBreath << 2) + 1,
    DoubleDragon: (Minies.DeepBreath << 2) + 2,

    //Earth And Moon
    Moonfury: Minies.EarthAndMoon << 2,
    NaturesGrace: (Minies.EarthAndMoon << 2) + 1,
    Balance: (Minies.EarthAndMoon << 2) + 2,

    //Eclipse
    SolarFlare: Minies.Eclipse << 2,
    UmbralForce: (Minies.Eclipse << 2) + 1,
    CelestialFocus: (Minies.Eclipse << 2) + 2,

    //Execute
    Bloodthirsty: Minies.Execute << 2,
    KillingSpree: (Minies.Execute << 2) + 1,
    Overpower: (Minies.Execute << 2) + 2,

    //Holy Nova
    InnerFire: Minies.HolyNova << 2,
    Renew: (Minies.HolyNova << 2) + 1,
    AmplifyMagic: (Minies.HolyNova << 2) + 2,

    //Living Bomb
    BurdenOfFate: (Minies.LivingBomb << 2),
    ChainReaction: (Minies.LivingBomb << 2) + 1,
    BlastRadius: (Minies.LivingBomb << 2) + 2,

    //Polymorph
    GoldenFleece: (Minies.Polymorph << 2),
    ExplodingSheep: (Minies.Polymorph << 2) + 1,
    StableTransfiguration: (Minies.Polymorph << 2) + 2,

    //Smoke Bomb
    StrangersInTheNight: (Minies.SmokeBomb << 2),
    BandOfThieves: (Minies.SmokeBomb << 2) + 1,
    ThroughTheShadows: (Minies.SmokeBomb << 2) + 2,

    //Abomination
    NoxiousPresence: (Minies.Abomination << 2),
    Cannonball: (Minies.Abomination << 2) + 1,
    MeatHook: (Minies.Abomination << 2) + 2,

    //Ancient of War
    Sapling: (Minies.AncientOfWar << 2),
    Behemoth: (Minies.AncientOfWar << 2) + 1,
    LightningRod: (Minies.AncientOfWar << 2) + 2,

    //Anub'arak
    Regenerate: (Minies.AnubArak << 2),
    ExplosiveShells: (Minies.AnubArak << 2) + 1,
    TrapDoor: (Minies.AnubArak << 2) + 2,

    //Banshee
    SoulEruption: (Minies.Banshee << 2),
    UnholyFrenzy: (Minies.Banshee << 2) + 1,
    WillOfTheNecropolis: (Minies.Banshee << 2) + 2,

    //Baron Rivendare
    DeathPact: (Minies.BaronRivendare << 2),
    SkeletalFrenzy: (Minies.BaronRivendare << 2) + 1,
    ChillofTheGrave: (Minies.BaronRivendare << 2) + 2,

    //Bat Rider
    FlamingPitch: (Minies.BatRider << 2),
    EnchantedVials: (Minies.BatRider << 2) + 1,
    FierySurplus: (Minies.BatRider << 2) + 2,

    //Bloodmage Thalnos
    Bane: (Minies.BloodmageThalnos << 2),
    DrainLife: (Minies.BloodmageThalnos << 2) + 1,
    Dominance: (Minies.BloodmageThalnos << 2) + 2,

    //Bog Beast
    Flourish: (Minies.BogBeast << 2),
    RampantGrowth: (Minies.BogBeast << 2) + 1,
    LivingWood: (Minies.BogBeast << 2) + 2,

    //Cairne Bloodhoof
    Reincarnation: (Minies.CairneBloodhoof << 2),
    Plainsrunning: (Minies.CairneBloodhoof << 2) + 1,
    Aftershock: (Minies.CairneBloodhoof << 2) + 2,

    //Cenarius
    Revitalize: (Minies.Cenarius << 2),
    ForceOfNature: (Minies.Cenarius << 2) + 1,
    WildGrowth: (Minies.Cenarius << 2) + 2,

    //Charlga
    NaturesGrasp: (Minies.Charlga << 2),
    CavernousMists: (Minies.Charlga << 2) + 1,
    SpiritPassage: (Minies.Charlga << 2) + 2,

    //Chimaera
    CorrosiveBreath: (Minies.Chimaera << 2),
    FrostShock: (Minies.Chimaera << 2) + 1,
    Leviathan: (Minies.Chimaera << 2) + 2,

    //Core Hounds
    FieryRebirth: (Minies.CoreHounds << 2),
    GuardDog: (Minies.CoreHounds << 2) + 1,
    EternalBond: (Minies.CoreHounds << 2) + 2,

    //Dark Iron Miner
    DarkIronArmaments: (Minies.DarkIronMiner << 2),
    GoldMine: (Minies.DarkIronMiner << 2) + 1,
    DwarvenAmbition: (Minies.DarkIronMiner << 2) + 2,

    //Darkspear Troll
    BigBadVoodoo: (Minies.DarkspearTroll << 2),
    Headhunting: (Minies.DarkspearTroll << 2) + 1,
    SerpentSting: (Minies.DarkspearTroll << 2) + 2,

    //Defias Bandits
    DeadlyPoison: (Minies.DefiasBandits << 2),
    Lockpick: (Minies.DefiasBandits << 2) + 1,
    LastResort: (Minies.DefiasBandits << 2) + 2,

    //Dire Batlings
    MidnightsCall: (Minies.DireBatlings << 2),
    Soundbite: (Minies.DireBatlings << 2) + 1,
    GuanoHappens: (Minies.DireBatlings << 2) + 2,

    //Doomhammer
    DeathlessRage: (Minies.OrgrimDoomhammer << 2),
    RallyTheClan: (Minies.OrgrimDoomhammer << 2) + 1,
    ConquerorsDiplomacy: (Minies.OrgrimDoomhammer << 2) + 2,

    //Drake
    MotherDrake: (Minies.Drake << 2),
    Roost: (Minies.Drake << 2) + 1,
    EngulfingFlames: (Minies.Drake << 2) + 2,

    //Drakkisath
    ChromaticScales: (Minies.GeneralDrakkisath << 2),
    PiercingBlows: (Minies.GeneralDrakkisath << 2) + 1,
    LastingLegacy: (Minies.GeneralDrakkisath << 2) + 2,

    //Druid of the Claw
    Regrowth: (Minies.DruidOfTheClaw << 2),
    Rejuvination: (Minies.DruidOfTheClaw << 2) + 1,
    LeaderOfThePack: (Minies.DruidOfTheClaw << 2) + 2,

    //Dryad
    Barrage: (Minies.Dryad << 2),
    NaturesSwiftness: (Minies.Dryad << 2) + 1,
    Thorns: (Minies.Dryad << 2) + 2,

    //Earth Elemental
    ReadyToRumble: (Minies.EarthElemental << 2),
    ShrapnelBlast: (Minies.EarthElemental << 2) + 1,
    ObsidianShard: (Minies.EarthElemental << 2) + 2,

    //Emperor Thaurissan
    MoirasWit: (Minies.EmperorThaurissan << 2),
    Hubris: (Minies.EmperorThaurissan << 2) + 1,
    Incinerate: (Minies.EmperorThaurissan << 2) + 2,

    //Faerie Dragon
    PhaseShift: (Minies.FaerieDragon << 2),
    Invisibility: (Minies.FaerieDragon << 2) + 1,
    FaeBlessing: (Minies.FaerieDragon << 2) + 2,

    //Fire Elemental
    ImmolationAura: (Minies.FireElemental << 2),
    MoltenCore: (Minies.FireElemental << 2) + 1,
    FanTheFlames: (Minies.FireElemental << 2) + 2,

    //Firehammer
    MoultinMetal: (Minies.Firehammer << 2),
    BlazingSpeed: (Minies.Firehammer << 2) + 1,
    HeightenedRage: (Minies.Firehammer << 2) + 2,

    //Flamewaker
    HeatStroke: (Minies.Flamewaker << 2),
    Engulf: (Minies.Flamewaker << 2) + 1,
    Backdraft: (Minies.Flamewaker << 2) + 2,

    //Gnoll Brute
    Rabid: (Minies.GnollBrute << 2),
    Pillage: (Minies.GnollBrute << 2) + 1,
    ThickHide: (Minies.GnollBrute << 2) + 2,

    //Grommash
    Bladestorm: (Minies.Grommash << 2),
    MirrorImage: (Minies.Grommash << 2) + 1,
    SavageStrikes: (Minies.Grommash << 2) + 2,

    //Harpies
    InfectiousSwipes: (Minies.Harpies << 2),
    TrinketCollectors: (Minies.Harpies << 2) + 1,
    TalonDive: (Minies.Harpies << 2) + 2,

    //Footmen
    ShieldBash: (Minies.Footmen << 2),
    Fortification: (Minies.Footmen << 2) + 1,
    LastStand: (Minies.Footmen << 2) + 2,

    //Gargoyle
    WingBuffet: (Minies.Gargoyle << 2),
    ObsidianStatue: (Minies.Gargoyle << 2) + 1,
    AerialSuperiority: (Minies.Gargoyle << 2) + 2,

    //Ghoul
    BoneShield: (Minies.Ghoul << 2),
    Ravenous: (Minies.Ghoul << 2) + 1,
    TasteForBlood: (Minies.Ghoul << 2) + 2,

    //Safe Pilot
    GnomishCloakingDevice: (Minies.SAFEPilot << 2),
    ComingInHot: (Minies.SAFEPilot << 2) + 1,
    GnomishMuttonizer: (Minies.SAFEPilot << 2) + 2,

    //Goblin Sappers
    ExtraBoom: (Minies.GoblinSappers << 2),
    RocketPoweredTurboBoots: (Minies.GoblinSappers << 2) + 1,
    CrudeGunpowder: (Minies.GoblinSappers << 2) + 2,

    //Gryphon Rider
    AirDrop: (Minies.GryphonRider << 2),
    OdynsFury: (Minies.GryphonRider << 2) + 1,
    MightyThrow: (Minies.GryphonRider << 2) + 2,

    //Harvest Golem
    TrojanChickens: (Minies.HarvestGolem << 2),
    UnstableCore: (Minies.HarvestGolem << 2) + 1,
    BountifulHarvest: (Minies.HarvestGolem << 2) + 2,

    //Headless Horseman
    NightWatch: (Minies.HeadlessHorseman << 2),
    Decapitate: (Minies.HeadlessHorseman << 2) + 1,
    NeighDeathExperience: (Minies.HeadlessHorseman << 2) + 2,

    //Hogger
    HamHock: (Minies.Hogger << 2),
    SpoiledMeat: (Minies.Hogger << 2) + 1,
    FatalFrenzy: (Minies.Hogger << 2) + 2,

    //Huntress
    DarnassianSteel: (Minies.Huntress << 2),
    ElvenMight: (Minies.Huntress << 2) + 1,
    Shadowmeld: (Minies.Huntress << 2) + 2,

    //Jaina
    Blink: (Minies.Jaina << 2),
    Clearcasting: (Minies.Jaina << 2) + 1,
    Flurry: (Minies.Jaina << 2) + 2,

    //Maiev
    EvelopingShadows: (Minies.Maiev << 2),
    Shadowstep: (Minies.Maiev << 2) + 1,
    Remorseless: (Minies.Maiev << 2) + 2,

    //Malfurion
    NaturalSalve: (Minies.Malfurion << 2),
    DeepSlumber: (Minies.Malfurion << 2) + 1,
    Germinate: (Minies.Malfurion << 2) + 2,

    //Meatwagon
    MeatAndBones: (Minies.Meatwagon << 2),
    FiletTrebuchet: (Minies.Meatwagon << 2) + 1,
    GreasedGears: (Minies.Meatwagon << 2) + 2,

    //Molten Giant
    ThreateningPresence: (Minies.MoltenGiant << 2),
    BloodOfTheMountain: (Minies.MoltenGiant << 2) + 1,
    Bolster: (Minies.MoltenGiant << 2) + 2,

    //Moonkin
    Vengeance: (Minies.Moonkin << 2),
    Moonglow: (Minies.Moonkin << 2) + 1,
    Typhoon: (Minies.Moonkin << 2) + 2,

    //Mountaineer
    FrenziedSpirit: (Minies.Mountaineer << 2),
    MendPets: (Minies.Mountaineer << 2) + 1,
    Intimidation: (Minies.Mountaineer << 2) + 2,

    //Murloc Tidehunters
    SafetyBubble: (Minies.MurlocTidehunters << 2),
    CarefulAim: (Minies.MurlocTidehunters << 2) + 1,
    Morelocs: (Minies.MurlocTidehunters << 2) + 2,

    //Necromancer
    CultOfTheDamned: Minies.Necromancer << 2,
    JeweledSkulls: (Minies.Necromancer << 2) + 1,
    BreathOfTheDying: (Minies.Necromancer << 2) + 2,

    //Ogre Mage
    FrostfireBolt: (Minies.OgreMage << 2),
    Ignite: (Minies.OgreMage << 2) + 1,
    Avarice: (Minies.OgreMage << 2) + 2,

    //Old Murkeye
    TipOfTheSpear: (Minies.OldMurkeye << 2),
    Marathon: (Minies.OldMurkeye << 2) + 1,
    ElectricEels: (Minies.OldMurkeye << 2) + 2,

    //Onu
    Barkskin: (Minies.Onu << 2),
    Petrify: (Minies.Onu << 2) + 1,
    FromTheTrees: (Minies.Onu << 2) + 2,

    //Plague Farmer
    PartingGift: (Minies.PlagueFarmer << 2),
    Virulence: (Minies.PlagueFarmer << 2) + 1,
    SplashingPumpkins: (Minies.PlagueFarmer << 2) + 2,

    //Prowler
    OnTheProwl: (Minies.Prowler << 2),
    PackLeader: (Minies.Prowler << 2) + 1,
    PredatoryInstincts: (Minies.Prowler << 2) + 2,

    //Pyromancer
    Pyroblast: (Minies.Pyromancer << 2),
    Conflagrate: (Minies.Pyromancer << 2) + 1,
    BlazeOfGlory: (Minies.Pyromancer << 2) + 2,

    //Quillboar
    Bristleback: (Minies.Quillboar << 2),
    TunnelVision: (Minies.Quillboar << 2) + 1,
    BrambleBurst: (Minies.Quillboar << 2) + 2,

    //Ragnaros
    ConcussiveBlast: (Minies.Ragnaros << 2),
    RadiantFlames: (Minies.Ragnaros << 2) + 1,
    SonsOfFlame: (Minies.Ragnaros << 2) + 2,

    //Raptors
    StrengthInNumbers: (Minies.Raptors << 2),
    FastFood: (Minies.Raptors << 2) + 1,
    Motivation: (Minies.Raptors << 2) + 2,

    //Rend Blackhand
    FlamingSoul: (Minies.RendBlackhand << 2),
    ScaleAndSteel: (Minies.RendBlackhand << 2) + 1,
    Legionnaire: (Minies.RendBlackhand << 2) + 2,

    //Shaman
    EarthwallTotem: (Minies.Shaman << 2),
    LightningMastery: (Minies.Shaman << 2) + 1,
    EarthShield: (Minies.Shaman << 2) + 2,

    //Skeleton Party
    FiveMan: (Minies.SkeletonParty << 2),
    CorpseRun: (Minies.SkeletonParty << 2) + 1,
    RitualOfRime: (Minies.SkeletonParty << 2) + 2,

    //Skeletons
    QuestingBuddies: (Minies.Skeletons << 2),
    Cackle: (Minies.Skeletons << 2) + 1,
    Exhume: (Minies.Skeletons << 2) + 2,

    //Sneed
    MineIsMoneyFriend: (Minies.Sneed << 2),
    LeadWithGreed: (Minies.Sneed << 2) + 1,
    LandGrab: (Minies.Sneed << 2) + 2,

    //Spiderlings
    BloatedCarapace: (Minies.Spiderlings << 2),
    CaveDwellers: (Minies.Spiderlings << 2) + 1,
    Envenom: (Minies.Spiderlings << 2) + 2,

    //Stonehoof Tauren
    Pummel: (Minies.StonehoofTauren << 2),
    Momentum: (Minies.StonehoofTauren << 2) + 1,
    Provoke: (Minies.StonehoofTauren << 2) + 2,

    //Swole Troll
    Trollnado: (Minies.SwoleTroll << 2),
    TrollTrain: (Minies.SwoleTroll << 2) + 1,
    MeatierElbow: (Minies.SwoleTroll << 2) + 2,

    //Sylvanas
    QueensReach: (Minies.Sylvanas << 2),
    BansheesWail: (Minies.Sylvanas << 2) + 1,
    ForsakenFury: (Minies.Sylvanas << 2) + 2,

    //Tirion
    DivineShield: (Minies.Tirion << 2),
    Consecrate: (Minies.Tirion << 2) + 1,
    ByTheLight: (Minies.Tirion << 2) + 2,

    //Treants
    Composting: (Minies.Treants << 2),
    Uproot: (Minies.Treants << 2) + 1,
    Propagation: (Minies.Treants << 2) + 2,

    //Vultures
    TendonRip: (Minies.Vultures << 2),
    FeedingFrenzy: (Minies.Vultures << 2) + 1,
    Migration: (Minies.Vultures << 2) + 2,

    //Warsong Grunts
    BloodPact: (Minies.WarsongGrunts << 2),
    GuardDuty: (Minies.WarsongGrunts << 2) + 1,
    Command: (Minies.WarsongGrunts << 2) + 2,

    //Warsong Raider
    Saboteur: (Minies.WarsongRaider << 2),
    RazingFocus: (Minies.WarsongRaider << 2) + 1,
    SunderArmor: (Minies.WarsongRaider << 2) + 2,

    //Whelps
    Rookery: (Minies.Whelps << 2),
    FlameBurst: (Minies.Whelps << 2) + 1,
    ChromaticPlating: (Minies.Whelps << 2) + 2,

    //Witch Doctor
    Alchemist: (Minies.WitchDoctor << 2),
    AmplifyCurse: (Minies.WitchDoctor << 2) + 1,
    SpiritWard: (Minies.WitchDoctor << 2) + 2,

    //Worgen
    LoneWolf: (Minies.Worgen << 2),
    Premeditation: (Minies.Worgen << 2) + 1,
    Frenzy: (Minies.Worgen << 2) + 2,

    //Ysera
    RecurringDream: (Minies.Ysera << 2),
    CorruptedDream: (Minies.Ysera << 2) + 1,
    SharedDream: (Minies.Ysera << 2) + 2,

    //Priestess
    PowerWordShield: (Minies.Priestess << 2),
    EmpoweredRenew: (Minies.Priestess << 2) + 1,
    SpiritOfRedemption: (Minies.Priestess << 2) + 2,

    //Arthas
    DeathGrip: (Minies.Arthas << 2),
    NecroticPlague: (Minies.Arthas << 2) + 1,
    Purgatory: (Minies.Arthas << 2) + 2
} as const;

export type Mini = keyof typeof Minies;
export type Talent = keyof typeof Talents;
