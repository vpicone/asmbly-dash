type tools = {
  name: string;
  id: string;
  zone: string;
  image?: string;
  description?: string;
  safety?: string;
};

export const tools: tools[] = [
  {
    name: "Sawstop 7.5HP 230V table saw ",
    id: "0001",
    zone: "Wood Shop",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/SawStop.jpg",
    description:
      "A general-purpose blade suitable for most applications is provided by ATXHS. We understand that some users may wish to provide a more application-specific blade; if this is the case, please discuss with the Workshop Committee on getting checked out to change the blade and properly adjust the SawStop brake cartridge. Inexpert blade changes can lead to misfire of the blade brake.",
    safety:
      "The SawStop system is designed to reduce the risk of personal injury when using the table saw. The brake cartridge is single-use and must be replaced after engagement. It may be falsely triggered by conductive materials",
  },
  {
    name: "Powermatic Planer",
    id: "0002",
    zone: "Wood Shop",
  },
  {
    name: "Router Table with Router Lift",
    id: "0003",
    zone: "Wood Shop",
  },
  {
    name: "Band Saws",
    id: "0004",
    zone: "Wood Shop",
  },
  {
    name: "Delta 6′ Jointer",
    id: "0005",
    zone: "Wood Shop",
  },
  {
    name: "Compound Miter Saw",
    id: "0006",
    zone: "Wood Shop",
  },
  {
    name: "Craftsman Drill Press",
    id: "0007",
    zone: "Wood Shop",
  },
  {
    name: "Jet Drum Sander",
    id: "0008",
    zone: "Wood Shop",
  },
  {
    name: "Laguna Revo Lathe",
    id: "0009",
    zone: "Wood Shop",
  },

  {
    name: "Tormach PCNC 1100 Mill",
    id: "0010",
    zone: "Metal Shop",
  },
  {
    name: "Manual Mill",
    id: "0011",
    zone: "Metal Shop",
  },
  {
    name: "TK-105 Lathe",
    id: "0012",
    zone: "Metal Shop",
  },
  {
    name: "MIG Welder: Power iMIG 200",
    id: "0013",
    zone: "Metal Shop",
  },
  {
    name: "TIG Welder: Synchrowave 180SD",
    id: "0014",
    zone: "Metal Shop",
  },
  {
    name: "Stick welder: Lincwelder225",
    id: "0015",
    zone: "Metal Shop",
  },
  {
    name: "Cut50DY Plasma Cutter",
    id: "0016",
    zone: "Metal Shop",
  },
  {
    name: "Floor Jack, stands, hoist",
    id: "0017",
    zone: "Autobay",
  },
  {
    name: "Hand tools & Vise",
    id: "0018",
    zone: "Autobay",
  },
  {
    name: "Air tools/compressors",
    id: "0019",
    zone: "Autobay",
  },
  {
    name: "Welding table",
    id: "0020",
    zone: "Autobay",
  },
  {
    name: "Lubricants, cleaners, paint, adhesives, sealants",
    id: "0021",
    zone: "Autobay",
  },
  {
    name: "20 ton press",
    id: "0022",
    zone: "Autobay",
  },
  {
    name: "Polyprinter 229",
    id: "0023",
    zone: "3D Printing",
  },
  {
    name: "TAZ Dual-feed",
    id: "0024",
    zone: "3D Printing",
  },
  {
    name: "Creality CR-10",
    id: "0025",
    zone: "3D Printing",
  },
  {
    name: "Form 2 Resin Printer",
    id: "0026",
    zone: "3D Printing",
  },
  {
    name: "Qidi X-Max",
    id: "0027",
    zone: "3D Printing",
  },
];
