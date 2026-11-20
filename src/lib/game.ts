import type { CreatorSlug } from "./creators";

export const gameRounds = [
  {
    id: "storage",
    prompt:
      "A game sits on a mechanical drive and takes too long to load. Which upgrade usually helps most?",
    context: "The goal is faster storage access, not more cooling or lighting.",
    answerId: "nvme",
    explanation:
      "An SSD can reduce loading times compared with a mechanical hard drive. An NVMe drive is a fast solid-state option.",
    choices: [
      {
        id: "hdd",
        label: "Mechanical hard drive",
        detail: "Spinning platters and slower random reads.",
      },
      {
        id: "nvme",
        label: "NVMe SSD",
        detail: "Fast solid-state storage over PCIe.",
      },
      {
        id: "fan",
        label: "RGB case fan",
        detail: "Useful for airflow, not storage speed.",
      },
    ],
  },
  {
    id: "power",
    prompt:
      "The PC powers off when the graphics card is under heavy load. What should you inspect first?",
    context: "Start with the component supplying power to the system.",
    answerId: "psu",
    explanation:
      "The power supply's capacity, quality, connectors, and condition should be checked before assuming another part is faulty.",
    choices: [
      {
        id: "psu",
        label: "Power supply capacity and condition",
        detail: "Check wattage, quality, connectors, and health.",
      },
      {
        id: "refresh",
        label: "Screen refresh rate",
        detail: "This affects display smoothness, not system power.",
      },
      {
        id: "switches",
        label: "Keyboard switch type",
        detail: "A typing preference, not a power issue.",
      },
    ],
  },
  {
    id: "memory",
    prompt: "You're adding memory. What must be compatible?",
    context: "Memory is not a universal plug-and-play part.",
    answerId: "ddr",
    explanation:
      "Check the DDR generation, supported capacity, and motherboard compatibility before buying a memory kit.",
    choices: [
      {
        id: "ddr",
        label: "DDR generation and motherboard support",
        detail: "Confirm the memory type and supported capacity.",
      },
      {
        id: "case",
        label: "Case colour and fan count",
        detail: "Appearance does not determine memory compatibility.",
      },
      {
        id: "monitor",
        label: "Monitor resolution",
        detail: "The display resolution does not set the RAM type.",
      },
    ],
  },
  {
    id: "graphics",
    prompt: "Which component does most graphics rendering in modern games?",
    context: "Think about the component built to process graphics workloads.",
    answerId: "gpu",
    explanation:
      "The graphics processing unit handles most real-time game rendering, while the CPU coordinates game logic and other work.",
    choices: [
      {
        id: "gpu",
        label: "Graphics card (GPU)",
        detail: "Designed to process graphics workloads.",
      },
      {
        id: "ssd",
        label: "Solid-state drive",
        detail: "Stores and loads game data.",
      },
      {
        id: "psu",
        label: "Power supply",
        detail: "Delivers electrical power to the components.",
      },
    ],
  },
  {
    id: "cooling",
    prompt: "CPU temperature climbs quickly under load. What should you check?",
    context: "Inspect the physical cooling setup before chasing software settings.",
    answerId: "cooler",
    explanation:
      "A poorly mounted cooler or bad thermal contact can prevent heat from moving away from the CPU effectively.",
    choices: [
      {
        id: "cooler",
        label: "Cooler mounting and thermal contact",
        detail: "Check the mount, fan operation, and thermal paste.",
      },
      {
        id: "wallpaper",
        label: "Wallpaper resolution",
        detail: "Desktop wallpaper is not a cooling solution.",
      },
      {
        id: "rgb",
        label: "RGB control app",
        detail: "Lighting controls do not fix poor thermal contact.",
      },
    ],
  },
  {
    id: "case-fit",
    prompt: "Before choosing a PC case, what should you confirm?",
    context: "The parts need to fit before the case gets ordered.",
    answerId: "clearance",
    explanation:
      "Check motherboard form factor, graphics card length, CPU cooler height, radiator support, and available clearances.",
    choices: [
      {
        id: "clearance",
        label: "Motherboard form factor and component clearance",
        detail: "Confirm board size, GPU length, and cooler space.",
      },
      {
        id: "ssd-brand",
        label: "SSD brand",
        detail: "The storage brand does not determine case fit.",
      },
      {
        id: "keyboard",
        label: "Keyboard layout",
        detail: "A keyboard choice has no bearing on case dimensions.",
      },
    ],
  },
] as const;


export const kayjayRounds = [
  {
    id: "tire-airflow",
    prompt: "A gaming PC is going inside a car tire. What has to be solved before the first power-on?",
    context: "A creative enclosure still has to move heat away from the components.",
    answerId: "airflow",
    explanation:
      "A confined enclosure needs a deliberate intake and exhaust path, enough open area, and temperature checks under load. Sealing it can trap heat.",
    choices: [
      { id: "sealed", label: "Seal every opening to keep dust out", detail: "A sealed enclosure can trap heat around the hardware." },
      { id: "airflow", label: "Plan a clear intake and exhaust path", detail: "Give cool air a route in and warm air a route out." },
      { id: "lighting", label: "Add more RGB lighting", detail: "Lighting does not solve thermal airflow." },
    ],
  },
  {
    id: "radiator-fit",
    prompt: "A 360 mm radiator is planned for a custom enclosure. What should you measure?",
    context: "The advertised radiator length is only one part of the space it needs.",
    answerId: "radiator-clearance",
    explanation:
      "Measure the radiator and fan stack, mounting points, nearby components, and room for tubes. The full assembly needs to fit without pressure or obstruction.",
    choices: [
      { id: "radiator-clearance", label: "Radiator, fan stack, mounting points and clearance", detail: "Check the complete assembly, not just the radiator." },
      { id: "radiator-length", label: "Only the radiator's advertised length", detail: "Fans, fittings and mounting space add to the footprint." },
      { id: "rgb-headers", label: "The motherboard's RGB header count", detail: "Headers do not tell you whether a radiator fits." },
    ],
  },
  {
    id: "gpu-clearance",
    prompt: "A long, thick GPU must fit inside a narrow custom shell. What do you verify?",
    context: "A card can fit on paper and still collide with a panel or power cable.",
    answerId: "gpu-dimensions",
    explanation:
      "Check card length, thickness, slot space, nearby obstructions, and the bend room required by its power connector.",
    choices: [
      { id: "outputs", label: "Only the GPU's display outputs", detail: "Display ports do not determine physical clearance." },
      { id: "gpu-dimensions", label: "Card length, thickness, slot space and cable bend room", detail: "Check the whole installed footprint, including the power cable." },
      { id: "fan-count", label: "Only the number of case fans", detail: "Fan count does not confirm GPU fit." },
    ],
  },
  {
    id: "power-budget",
    prompt: "A powerful GPU is paired with a high-draw CPU. How should the power supply be chosen?",
    context: "The connector fitting is not proof that the unit is suitable.",
    answerId: "quality-psu",
    explanation:
      "Use the component makers' guidance, account for total system demand and connector requirements, and choose a reputable PSU with suitable capacity and protections.",
    choices: [
      { id: "big-number", label: "Pick the biggest wattage number, regardless of quality", detail: "A large label alone says little about build quality or protections." },
      { id: "reuse", label: "Reuse any PSU if its plug fits", detail: "Matching plugs do not guarantee safe capacity or wiring." },
      { id: "quality-psu", label: "Check system load, connectors and PSU quality", detail: "Capacity, cable requirements and quality all matter." },
    ],
  },
  {
    id: "board-mount",
    prompt: "A motherboard is going onto a custom metal panel. What must be fitted first?",
    context: "The board should not rest directly against conductive metal.",
    answerId: "standoffs",
    explanation:
      "Use the correct motherboard standoffs aligned with the board's mounting holes. They create the required clearance and help prevent shorts.",
    choices: [
      { id: "direct", label: "Mount the board directly on the metal", detail: "Direct contact can create an electrical short." },
      { id: "standoffs", label: "Install the correct standoffs at the mounting points", detail: "The standoffs keep the board safely clear of the panel." },
      { id: "foam", label: "Use ordinary foam tape as a spacer", detail: "Unspecified adhesive is not a substitute for proper standoffs." },
    ],
  },
  {
    id: "first-post",
    prompt: "Before closing a one-off enclosure, what is the smart first build check?",
    context: "Find fit, wiring and boot problems while the parts are still accessible.",
    answerId: "bench-test",
    explanation:
      "A controlled POST test on a stable, non-conductive surface helps confirm the core parts and wiring before final assembly. Then verify temperatures with the enclosure installed.",
    choices: [
      { id: "sealed-first", label: "Power it once with every panel sealed", detail: "That makes faults harder to inspect and can hide airflow problems." },
      { id: "carpet", label: "Place it on carpet and test all the fans", detail: "Carpet is not a suitable electronics test surface." },
      { id: "bench-test", label: "POST on a stable, non-conductive test surface", detail: "Check the core hardware before the final enclosure fit." },
    ],
  },
] as const;

export function getRoundsForCreator(slug: CreatorSlug) {
  return slug === "kayjayohpcs" ? kayjayRounds : gameRounds;
}

export type GameOutcome = "win" | "loss";

export function getGameOutcome(
  score: number,
  strikes: number,
): GameOutcome {
  return score >= 4 && strikes < 3 ? "win" : "loss";
}
