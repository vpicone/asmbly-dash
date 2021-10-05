type tools = {
  name: string;
  id: string;
  zone: string;
  image: string;
  description: string;
  safety: string;
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
      "The SawStop system is designed to reduce the risk of personal injury when using the table saw. The brake cartridge is single-use and must be replaced after engagement. It may be falsely triggered by conductive materials.",
  },
  {
    name: "Powermatic Planer",
    id: "0002",
    zone: "Wood Shop",
    image: "https://wiki.asmbly.org/images/c/cf/Powermatic15HH.jpg",
    description: `The Powermatic 15HH is a 3HP thickness planer with 15" cutting width and helical head. It was acquired by ATX Hackerspace in 2019.`,
    safety: `Read, understand and follow the safety and operating instructions found in this manual. Know the
    limitations and hazards associated with this machine.`,
  },
  {
    name: "Router Table with Router Lift",
    id: "0003",
    zone: "Wood Shop",
    image: "https://wiki.asmbly.org/images/2/2e/Craftsman_Scroll_Saw.jpg",
    description: `Craftsman 16-inch Variable Speed Scroll Saw (model 113.236090)`,
    safety: `This tool is owned by Danny Miller and hosted at Asmbly for members to use. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Band Saws",
    id: "0004",
    zone: "Wood Shop",
    image:
      "https://wiki.asmbly.org/images/9/9c/Rikon_14in_band_saw_300x610.jpg",
    description: `The Rikon 14-inch Deluxe Bandsaw model 10-325 features two speeds (1445 and 2950 ft/min), a 13-inch resaw capacity and a 1-1/2 HP 110/220V motor. It accepts 1/8-inch to 3/4-inch blade width. Changeout is easy with a hinged blade guard that provides 2 inches of access.`,
    safety: `Do not cut metal with this tool. This bandsaw is to be used for wood only. For metal, use the Central Machinery 4x6-inch Metal-Cutting Bandsaw.`,
  },
  {
    name: "Delta 6′ Jointer",
    id: "0005",
    zone: "Wood Shop",
    image: "https://wiki.asmbly.org/images/b/b3/Delta_Jointer.jpg",
    description: `The Delta JT360 is a conventional jointer with 6" cutting width. A helical head is installed.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Jet Drum Sander",
    id: "0008",
    zone: "Wood Shop",
    image: "https://wiki.asmbly.org/images/2/2b/Jet22-44Plus.jpg",
    description: `The Jet 22-44Plus is a cantilevered or open-ended wide drum sander. The sanding drum is 22" long and open on one end, so parts up to 44" in width may be sanded in two passes.`,
    safety: `While some sandpaper can often be found in the base cabinet, it's recommended that users bring their own. Sandpaper is available online or may be picked up locally at Woodcraft. This tool is owned by Joe Ngo and hosted at Asmbly for members to use. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Laguna Revo Lathe",
    id: "0009",
    zone: "Wood Shop",
    image: "https://wiki.asmbly.org/images/7/7d/Revo1836.jpg",
    description: `Laguna Revo 18|36 wood lathe`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },

  {
    name: "Tormach PCNC 1100 Mill",
    id: "0010",
    zone: "Metal Shop",
    image: "https://via.placeholder.com/650x600",
    description: `Tormach PCNC 1100 Series 3 – Table Size: 34" x 9.5"`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Manual Mill",
    id: "0011",
    zone: "Metal Shop",
    image: "https://wiki.asmbly.org/images/0/0c/RongFu45.jpg",
    description: `This mill is for accurately machining/drilling metals and other materials.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "TK-105 Lathe",
    id: "0012",
    zone: "Metal Shop",
    image: "https://wiki.asmbly.org/images/9/97/Tk105.jpg",
    description: `Asmbly's lathe is believed to be a Takang TK-105 17x60 Engine Lathe. It was probably built in the late 1970's and features a 3-jaw chuck and a built-in recirculating coolant system.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "MIG Welder: Power iMIG 200",
    id: "0013",
    zone: "Metal Shop",
    image: "https://wiki.asmbly.org/images/3/32/Powerimig200.jpg",
    description: `The Power iMIG 200 is a MIG welder. If you are a heavy users of this machine it is expected that you purchase consumables periodically such as wire, gas, and nozzles.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "TIG Welder: Synchrowave 180SD",
    id: "0014",
    zone: "Metal Shop",
    image: "https://wiki.asmbly.org/images/1/17/Synchrowave180sd.jpg",
    description: `The Miller Synchrowave 180SD is a TIG and stick welder.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Stick welder: Lincwelder225",
    id: "0015",
    zone: "Metal Shop",
    image: "https://wiki.asmbly.org/images/6/67/Lincwelder225.jpg",
    description: `The Lincoln Lincwelder 225 is a stick welder.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Cut50DY Plasma Cutter",
    id: "0016",
    zone: "Metal Shop",
    image: "https://wiki.asmbly.org/images/d/d3/Cut50dy.jpg",
    description: `The Power Technologies Division of Ramsond Group has introduced its new Ramsond CUT50, a 50 Amp, Pilot Arc starting, Dual Voltage (110V and 220V), Dual Frequency (50 and 60 Hz), Inverter Technology, High Frequency Plasma Cutter. The CUT50 is the latest generation of Ramsond's plasma cutter line. This new Plasma Cutter is equipped with a DIGITAL AMPS DISPLAY and INTEGRATED PRESSURE GAUGE located on the front panel.`,
    safety: `Use of the Cut50DY plasma cutter is covered in all welding classes.`,
  },
  {
    name: "Polyprinter 229",
    id: "0023",
    zone: "3D Printing",
    image: "https://wiki.asmbly.org/images/3/30/PolyPrinter229.jpg",
    description: `The Polyprinter 229 is fast, reliable and straightforward to use. 4mm nozzle, 9"x9"x9" (229mm) volume.`,
    safety: `Do NOT use metal tools on the Bed. Avoid touching the plate with your fingers. Skin oil can affect performances. Only use Polyprinter brand filament reels`,
  },
  {
    name: "TAZ Dual-feed",
    id: "0024",
    zone: "3D Printing",
    image: "https://wiki.asmbly.org/images/d/d3/Lulzbot_TAZ.jpg",
    description: `The Lulzbot TAZ is a large dual-extruder 3D printer. It lives in the printer cabinet.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Creality CR-10",
    id: "0025",
    zone: "3D Printing",
    image: "https://wiki.asmbly.org/images/6/60/CR10.jpg",
    description: `The Creality CR-10S is a 3D printer at the space.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Form 2 Resin Printer",
    id: "0026",
    zone: "3D Printing",
    image: "https://wiki.asmbly.org/images/9/98/Form2.jpg",
    description: `The Formlabs Form 2 is a desktop SLA printer. Only resin purchased from Asmbly may be used in this printer. There is an extra charge to use this tool.`,
    safety: `This tool is owned by James Manley and hosted at Asmbly for members to use. Please contact the workshop committee if maintenance is required.`,
  },
  {
    name: "Qidi X-Max",
    id: "0027",
    zone: "3D Printing",
    image: "https://wiki.asmbly.org/images/f/f5/QIDI_X-Max.jpg",
    description: `The QIDI X-Max is an enclosed single-extruder 3D Printer with a build envelope of 11.8x9.8x11.8.`,
    safety: `This tool is owned by Asmbly Makerspace for the use of its members. Please contact the workshop committee if maintenance is required.`,
  },
];
