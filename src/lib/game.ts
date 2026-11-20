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

export type GameOutcome = "win" | "loss";

export function getGameOutcome(
  score: number,
  strikes: number,
): GameOutcome {
  return score >= 4 && strikes < 3 ? "win" : "loss";
}
