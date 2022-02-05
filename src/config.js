const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Reborn Angels";
const description = "A collection of 5055 Angels characters reborned on the Elrond blockchain. Human blood, blessed with angel feathers. Sinful, but ready to be forgiven.";
const baseUri = "ipfs://QmZhnrnNaj472kZ8d2WXmzUvpzsodPsbEo5qURpgZPyAG8";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const clothingWithNecklaces = [
  'black bullet proof',
  'black turtle neck',
  'blue bullet proof',
  'blue elrond T',
  'blue greek toga',
  'blue turtle neck',
  'brown greek toga',
  'brown tank top',
  'dark-blue bullet proof',
  'grey elrond T',
  'grey greek toga',
  'grey tank top',
  'pink tank top',
  'purple elrond T',
  'red bullet proof',
  'red elrond T',
  'white tank top',
  'yellow bullet proof',
  'yellow elrond T',
  'yellow greek toga',
  'yellow tank top',
  'purple bullet proof',
]

const clothingWithoutNecklaces = [
  'blue hoodie',
  'grey hoodie',
  'purple hoodie',
  'green hoodie',
  'blue contrast brocade',
  'yellow contrast brocade',
  'red contrast brocade',
  'purple brocade',
  'red brocade',
  'yellow brocade',
  'blue brocade',
  'green contrast brocade',
  'grey brocade',
  'cosmos puffer',
  'crocodille puffer',
  'denim puffer',
  'elephant puffer',
  'giraffe puffer',
  'tiger puffer',
  'yellow puffer',
  'brown crewneck',
  'grey crewneck',
  'purple crewneck',
  'bleu crewneck',
]

const masksWithGlasses = [
  'black cloth',
  'blue cyborg',
  'blue samurai',
  'green cyborg',
  'green cloth',
  'green samurai',
  'grey cloth',
  'purple cyborg',
  'purple samurai',
  'red cloth',
  'red samurai',
  'yellow cyborg',
  'yellow samurai',
]

const masksWithoutGlasses = [
  'punk kaleidoscope',
  'rave kaleidoscope',
  'techno kaleidoscope',
  'gold punk',
  'silver punk',
  'blue skull',
  'green skull',
  'red skull',
  'pink skull',
  'yellow skull',
]

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "SERAPH BACKGROUND" },
      { name: "SERAPH BODY" },
      { name: 'SERAPH TATTOOS' },
      { name: "SERAPH WINGS" },
      { name: 'SERAPH EYES' },
      { name: 'SERAPH CROWN' },
    ]
  },
  {
    growEditionSizeTo: 1320,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "WINGS" },
      { name: "BODY" },
      { 
        name: "TATTOO",
        options: {
          chance: 0.65,
        }
      },
      { 
        name: "EYES",
        options: {
          chance: 0.98,
        }
      },
      {
        name: "EYE SHADOW",
        options: {
          chance: 0.3,
        }
      },
      {
        name: "auxiliar",
        options: {
          chance: 0.05,
        }
      },
      { 
        name: "HAIR",
        options: {
          chance: 0.95,
        }
      },
      { name: "HORNS" },
      { 
        name: "CLOTHING",
        options: {
          chance: 0.98,
          choices: clothingWithNecklaces
        }
      },
      { 
        name: "NECKLACES",
        options: {
          chance: 0.75,
        }
      },
      { 
        name: "PIERCINGS",
        options: {
          chance: 0.7,
        }
      },
      {
        name: "MASK",
        options: {
          chance: 0.75,
          choices: masksWithGlasses
        }
      },
      { 
        name: "GLASSES",
        options: {
          chance: 0.75,
        }
      },
    ],
  },
  {
    growEditionSizeTo: 2605,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "WINGS" },
      { name: "BODY" },
      { 
        name: "TATTOO",
        options: {
          chance: 0.6,
        }
      },
      { 
        name: "EYES",
        options: {
          chance: 0.98,
        }
      },
      {
        name: "EYE SHADOW",
        options: {
          chance: 0.3,
        }
      },
      {
        name: "auxiliar",
        options: {
          chance: 0.05,
        }
      },
      { 
        name: "HAIR",
        options: {
          chance: 0.95,
        }
      },
      { name: "HORNS" },
      { 
        name: "CLOTHING",
        options: {
          chance: 0.98,
          choices: clothingWithoutNecklaces
        }
      },
      { 
        name: "PIERCINGS",
        options: {
          chance: 0.7,
        }
      },
      {
        name: "MASK",
        options: {
          chance: 0.75,
          choices: masksWithGlasses
        }
      },
      { 
        name: "GLASSES",
        options: {
          chance: 0.6,
        }
      },
    ],
  },
  {
    growEditionSizeTo: 3805,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "WINGS" },
      { name: "BODY" },
      { 
        name: "TATTOO",
        options: {
          chance: 0.6,
        }
      },
      { 
        name: "EYES",
        options: {
          chance: 0.98,
        }
      },
      {
        name: "EYE SHADOW",
        options: {
          chance: 0.3,
        }
      },
      {
        name: "auxiliar",
        options: {
          chance: 0.05,
        }
      },
      { 
        name: "HAIR",
        options: {
          chance: 0.95,
        }
      },
      { name: "HORNS" },
      { 
        name: "CLOTHING",
        options: {
          chance: 0.98,
          choices: clothingWithNecklaces
        }
      },
      { 
        name: "NECKLACES",
        options: {
          chance: 0.6,
        }
      },
      { 
        name: "PIERCINGS",
        options: {
          chance: 0.7,
        }
      },
      {
        name: "MASK",
        options: {
          chance: 0.75,
          choices: masksWithoutGlasses
        }
      },
    ],
  },
  {
    growEditionSizeTo: 5055,
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "WINGS" },
      { name: "BODY" },
      { 
        name: "TATTOO",
        options: {
          chance: 0.6,
        }
      },
      { 
        name: "EYES",
        options: {
          chance: 0.98,
        }
      },
      {
        name: "EYE SHADOW",
        options: {
          chance: 0.3,
        }
      },
      {
        name: "auxiliar",
        options: {
          chance: 0.05,
        }
      },
      { 
        name: "HAIR",
        options: {
          chance: 0.95,
        }
      },
      { name: "HORNS" },
      { 
        name: "CLOTHING",
        options: {
          chance: 0.98,
          choices: clothingWithoutNecklaces
        }
      },
      { 
        name: "PIERCINGS",
        options: {
          chance: 0.7,
        }
      },
      {
        name: "MASK",
        options: {
          chance: 0.75,
          choices: masksWithoutGlasses
        }
      },
    ],
  },
]

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 200,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
