/*
    Shared animal data used by the "All Animals" list page and by
    each animal's individual detail page.

    Last modified by: An Luu (08/11/2026)
*/

export type Animal = {
  name: string;
  scientificName: string;
  habitat: string;
  uri: string;
  description: string;
  diet: string;
  weight: string;
  lifespan: string;
  conservationStatus: string;
  funFact: string;
};

export const animals: Animal[] = [
  {
    name: "African Lion",
    scientificName: "Panthera leo",
    habitat: "Savanna",
    uri: "https://aquilasafari.com/wp-content/uploads/2025/12/image-54-300x201.png",
    description:
      "Known as the king of the savanna, the African Lion lives in social groups called prides made up of related females, their cubs, and a small number of males.",
    diet: "Carnivore — zebras, wildebeest, and other large grazing animals",
    weight: "265 – 420 lbs (120 – 190 kg)",
    lifespan: "10 – 14 years in the wild",
    conservationStatus: "Vulnerable",
    funFact: "A lion's roar can be heard from up to 5 miles away.",
  },
  {
    name: "Alligator",
    scientificName: "Alligator mississippiensis",
    habitat: "Swamp",
    uri: "https://tse1.mm.bing.net/th/id/OIP.kPopJ0rqi5F_iOBXDpTxwwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "The Alligator is a powerful reptile that spends most of its time floating in swamps and rivers, waiting patiently for prey to come near.",
    diet: "Carnivore — fish, birds, and small mammals",
    weight: "800 – 1,000 lbs (360 – 450 kg)",
    lifespan: "35 – 50 years in the wild",
    conservationStatus: "Least Concern",
    funFact: "Alligators can go through thousands of teeth in a lifetime, regrowing each one as it falls out.",
  },
  {
    name: "Arctic Wolf",
    scientificName: "Canis lupus arctos",
    habitat: "Polar",
    uri: "https://th.bing.com/th/id/R.ac707bf93aa0c61c4cb7e2c742feb51c?rik=NcoBIwzJwmC9vw&pid=ImgRaw&r=0",
    description:
      "The Arctic Wolf is built for the cold, with a thick white coat that keeps it warm in temperatures far below freezing.",
    diet: "Carnivore — muskoxen, arctic hares, and caribou",
    weight: "70 – 175 lbs (32 – 80 kg)",
    lifespan: "7 – 10 years in the wild",
    conservationStatus: "Least Concern",
    funFact: "Arctic Wolves can survive months of total darkness during the polar winter.",
  },
  {
    name: "Beaver",
    scientificName: "Castor canadensis",
    habitat: "Swamp",
    uri: "https://tse4.mm.bing.net/th/id/OIP.k2msxXUXc_PbcaSbMr87IwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "Beavers are nature's engineers, building dams and lodges out of branches, mud, and stones to create their own ponds.",
    diet: "Herbivore — bark, leaves, and aquatic plants",
    weight: "35 – 65 lbs (16 – 30 kg)",
    lifespan: "10 – 15 years in the wild",
    conservationStatus: "Least Concern",
    funFact: "A beaver's front teeth never stop growing, so it gnaws on wood to keep them worn down.",
  },
  {
    name: "Black Panther",
    scientificName: "Panthera pardus / Panthera onca (melanistic)",
    habitat: "Rain Forest",
    uri: "https://tse3.mm.bing.net/th/id/OIP.5pfRfD9kNKpwYiqe0xzqDQHaEQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description:
      "\"Black Panther\" isn't a separate species, but a leopard or jaguar with extra dark pigment, giving it a sleek all-black coat.",
    diet: "Carnivore — deer, wild boar, and monkeys",
    weight: "80 – 200 lbs (36 – 90 kg)",
    lifespan: "12 – 17 years in the wild",
    conservationStatus: "Vulnerable (species dependent)",
    funFact: "In the right light, a black panther's spots are still visible under its dark coat.",
  },
  {
    name: "Vulture",
    scientificName: "Gyps africanus",
    habitat: "Savanna",
    uri: "https://www.treehugger.com/thmb/FcryrteVLDU1pTpU0FiqE0f3_xo=/5120x0/filters:no_upscale():max_bytes(150000):strip_icc()/nubian-vulture-522613486-c8949af3df004fb494ceb991925987ff.jpg",
    description:
      "Vultures soar high above the savanna, using their sharp eyesight to spot carrion from miles away and clean up the ecosystem.",
    diet: "Scavenger — carrion (dead animals)",
    weight: "9 – 15 lbs (4 – 7 kg)",
    lifespan: "20 – 30 years in the wild",
    conservationStatus: "Critically Endangered",
    funFact: "A group of vultures circling in the sky is called a kettle.",
  },
  {
    name: "Meerkat",
    scientificName: "Suricata suricatta",
    habitat: "Savanna",
    uri: "https://vignette.wikia.nocookie.net/zawa-mod/images/e/e8/Fateofmeerka.jpg/revision/latest/scale-to-width-down/2000?cb=20200318215727",
    description:
      "Meerkats live in tight-knit family groups called mobs, taking turns standing guard on their hind legs to watch for predators.",
    diet: "Omnivore — insects, small reptiles, and roots",
    weight: "1.5 – 2 lbs (0.7 – 1 kg)",
    lifespan: "8 – 12 years in the wild",
    conservationStatus: "Least Concern",
    funFact: "Meerkats have dark patches around their eyes that work like built-in sunglasses.",
  },
  {
    name: "Platypus",
    scientificName: "Ornithorhynchus anatinus",
    habitat: "Swamp",
    uri: "https://image.pbs.org/video-assets/RbbeLAc-asset-mezzanine-16x9-kfeaK7I.jpg?crop=1920x1080&format=jpg",
    description:
      "One of the only venomous mammals, the Platypus uses its sensitive bill to detect prey underwater by feeling electrical signals.",
    diet: "Carnivore — insects, larvae, and small crustaceans",
    weight: "1.5 – 5 lbs (0.7 – 2.4 kg)",
    lifespan: "11 – 17 years in the wild",
    conservationStatus: "Near Threatened",
    funFact: "The Platypus is one of the few mammals that lays eggs instead of giving live birth.",
  },
  {
    name: "Sea Otter",
    scientificName: "Enhydra lutris",
    habitat: "Polar",
    uri: "https://www.animalspot.net/wp-content/uploads/2022/01/Sea-Otter.jpg",
    description:
      "Sea Otters float on their backs in cold coastal waters, often holding hands with each other so they don't drift apart while sleeping.",
    diet: "Carnivore — sea urchins, crabs, and shellfish",
    weight: "30 – 100 lbs (14 – 45 kg)",
    lifespan: "10 – 20 years in the wild",
    conservationStatus: "Endangered",
    funFact: "Sea Otters have the densest fur of any animal, with up to a million hairs per square inch.",
  },
  {
    name: "Snowy Owl",
    scientificName: "Bubo scandiacus",
    habitat: "Polar",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPaxm3lNISueljv_0CutZZJY3dpCiCXUbFnWv2rKXzg&s=10",
    description:
      "The Snowy Owl is a silent hunter of the arctic tundra, blending into the snow with its pale feathers while it watches for prey.",
    diet: "Carnivore — lemmings, rodents, and small birds",
    weight: "3.5 – 6.5 lbs (1.6 – 3 kg)",
    lifespan: "9 – 10 years in the wild",
    conservationStatus: "Vulnerable",
    funFact: "Unlike most owls, Snowy Owls are active hunting during the day as well as at night.",
  },
  {
    name: "Toucan",
    scientificName: "Ramphastos toco",
    habitat: "Rain Forest",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBQHVRwoAY_q7dqDUGHvTGchpFcMYkgYa0qXcV9RJbA&s=10",
    description:
      "With its oversized, colorful bill, the Toucan is one of the most recognizable birds of the rain forest canopy.",
    diet: "Omnivore — fruit, insects, and small lizards",
    weight: "1 – 1.5 lbs (0.4 – 0.7 kg)",
    lifespan: "18 – 20 years in the wild",
    conservationStatus: "Least Concern",
    funFact: "A toucan's bill looks heavy, but it's mostly hollow and made of light keratin.",
  },
  {
    name: "Tree Frog",
    scientificName: "Dendropsophus microcephalus",
    habitat: "Rain Forest",
    uri: "https://cdn.hswstatic.com/gif/shutterstock-2559217813.jpg",
    description:
      "Tree Frogs spend most of their lives above the ground, using sticky toe pads to grip leaves and branches high in the rain forest.",
    diet: "Carnivore — insects and other small invertebrates",
    weight: "0.02 – 0.1 lbs (10 – 50 g)",
    lifespan: "5 – 10 years in the wild",
    conservationStatus: "Least Concern",
    funFact: "Many Tree Frogs can change their skin color slightly depending on temperature and mood.",
  },
];

export function findAnimalBySlug(slug: string): Animal | undefined {
  const normalized = decodeURIComponent(slug).replace(/_/g, " ").toLowerCase();
  return animals.find((animal) => animal.name.toLowerCase() === normalized);
}
