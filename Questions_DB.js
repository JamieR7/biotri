const QUESTIONS_DB = [
  {
    id: "Q001",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which property of water allows it to act as a transport medium in the blood?",
    options: {
      i: "High specific heat capacity",
      ii: "Transparency",
      iii: "Solvent properties due to dipolarity",
      iv: "Its ability to quench thirst during a marathon"
    },
    correct: "iii",
    explanation: "Water's polarity makes it an excellent solvent, allowing many substances to dissolve and be transported in blood."
  },
  {
    id: "Q002",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What type of bond connects the hydrogen and oxygen atoms within a single water molecule?",
    options: {
      i: "Hydrogen bond",
      ii: "Ionic bond",
      iii: "Covalent bond",
      iv: "James Bond"
    },
    correct: "iii",
    explanation: "Within a water molecule, hydrogen and oxygen atoms are held together by polar covalent bonds."
  },
  {
    id: "Q003",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "In nucleic acids, which base pairs with Cytosine?",
    options: {
      i: "Adenine",
      ii: "Uracil",
      iii: "Guanine",
      iv: "Cytoplasm"
    },
    correct: "iii",
    explanation: "In DNA, cytosine pairs with guanine via three hydrogen bonds."
  },
  {
    id: "Q004",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What is the primary function of nucleosomes in eukaryotes?",
    options: {
      i: "To synthesize proteins",
      ii: "To transport mRNA",
      iii: "To supercoil DNA",
      iv: "To tie the DNA in a bow knot"
    },
    correct: "iii",
    explanation: "Nucleosomes help package and supercoil DNA so it fits inside the nucleus and can be efficiently regulated."
  },
  {
    id: "Q005",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which theory explains the origin of eukaryotic cells from prokaryotic ancestors?",
    options: {
      i: "Spontaneous generation",
      ii: "Pasteurization theory",
      iii: "Endosymbiotic theory",
      iv: "The Big Bang Theory (Sheldon’s version)"
    },
    correct: "iii",
    explanation: "Endosymbiotic theory proposes that some eukaryotic organelles originated from free-living prokaryotes engulfed by an ancestral cell."
  },
  {
    id: "Q006",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which of the following is a feature of prokaryotic cells?",
    options: {
      i: "80S ribosomes",
      ii: "Membrane-bound nucleus",
      iii: "70S ribosomes and naked DNA",
      iv: "Tiny invisible legs for walking"
    },
    correct: "iii",
    explanation: "Prokaryotes have 70S ribosomes and circular, naked DNA not associated with histones."
  },
  {
    id: "Q007",
    topic: "Theme A: Unity and Diversity",
    level: "HL",
    question: "Which cycle involves a virus integrating its DNA into the host bacterium's genome?",
    options: {
      i: "The lytic cycle",
      ii: "The Krebs cycle",
      iii: "The lysogenic cycle",
      iv: "The unicycle"
    },
    correct: "iii",
    explanation: "In the lysogenic cycle, viral DNA is integrated into the host genome and replicated with it."
  },
  {
    id: "Q008",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which organelles are evidence for endosymbiosis due to their double membranes and own DNA?",
    options: {
      i: "Ribosomes and Lysosomes",
      ii: "Golgi apparatus and ER",
      iii: "Mitochondria and Chloroplasts",
      iv: "The spleen and the appendix"
    },
    correct: "iii",
    explanation: "Mitochondria and chloroplasts have double membranes, their own DNA, and 70S ribosomes, supporting an endosymbiotic origin."
  },
  {
    id: "Q009",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What is the standard system used to name species?",
    options: {
      i: "Dichotomous naming",
      ii: "Phylogenetic naming",
      iii: "Binomial nomenclature",
      iv: "Calling them \"Thing 1\" and \"Thing 2\""
    },
    correct: "iii",
    explanation: "Binomial nomenclature uses a two-part Latin name: genus and species."
  },
  {
    id: "Q010",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "How many chromosomes are found in a normal human diploid cell?",
    options: {
      i: "23",
      ii: "92",
      iii: "46",
      iv: "A baker's dozen"
    },
    correct: "iii",
    explanation: "Human somatic (diploid) cells contain 46 chromosomes arranged in 23 pairs."
  },
  {
    id: "Q011",
    topic: "Theme A: Unity and Diversity",
    level: "HL",
    question: "What evidence is primarily used to construct modern cladograms?",
    options: {
      i: "Analogous structures",
      ii: "Physical appearance",
      iii: "DNA and amino acid sequences",
      iv: "The organism's favorite food"
    },
    correct: "iii",
    explanation: "Molecular data such as DNA and protein sequences provide high-resolution evidence for evolutionary relationships."
  },
  {
    id: "Q012",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What are homologous structures evidence of?",
    options: {
      i: "Convergent evolution",
      ii: "Interbreeding",
      iii: "Divergent evolution from a common ancestor",
      iv: "Identity theft"
    },
    correct: "iii",
    explanation: "Homologous structures share a common evolutionary origin, indicating descent from a common ancestor."
  },
  {
    id: "Q013",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which process drives evolution by favoring individuals with advantageous traits?",
    options: {
      i: "Artificial selection",
      ii: "Genetic drift",
      iii: "Natural selection",
      iv: "Survival of the chillest"
    },
    correct: "iii",
    explanation: "Natural selection increases the frequency of heritable traits that improve survival and reproduction."
  },
  {
    id: "Q014",
    topic: "Theme A: Unity and Diversity",
    level: "HL",
    question: "What leads to sympatric speciation?",
    options: {
      i: "Geographical separation",
      ii: "Physical barriers like mountains",
      iii: "Reproductive isolation within the same geographical area",
      iv: "A really bad breakup"
    },
    correct: "iii",
    explanation: "Sympatric speciation occurs when reproductive barriers arise within a population living in the same area."
  },
  {
    id: "Q015",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What is a \"clade\"?",
    options: {
      i: "A group of organisms with similar physical features",
      ii: "A group of organisms living in the same habitat",
      iii: "A group of organisms consisting of an ancestor and all its descendants",
      iv: "A type of weapon used in the board game Clue"
    },
    correct: "iii",
    explanation: "A clade includes a common ancestor and all of its evolutionary descendants."
  },
  {
    id: "Q016",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What creates the cohesive property of water?",
    options: {
      i: "Covalent bonds between molecules",
      ii: "Ionic interactions",
      iii: "Hydrogen bonds between water molecules",
      iv: "Superglue"
    },
    correct: "iii",
    explanation: "Hydrogen bonding between water molecules produces cohesion, allowing water to form a continuous column."
  },
  {
    id: "Q017",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which of the following is an exception to the cell theory?",
    options: {
      i: "Bacteria",
      ii: "Skin cells",
      iii: "Striated muscle fibres",
      iv: "Lego bricks"
    },
    correct: "iii",
    explanation: "Striated muscle fibres are much larger and multinucleated, challenging the idea of cells as simple, single units."
  },
  {
    id: "Q018",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What is the main component of plant cell walls?",
    options: {
      i: "Starch",
      ii: "Glycogen",
      iii: "Cellulose",
      iv: "Brick and mortar"
    },
    correct: "iii",
    explanation: "Plant cell walls are primarily composed of cellulose, a polysaccharide made of β-glucose units."
  },
  {
    id: "Q019",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which process results in the production of two genetically identical daughter nuclei?",
    options: {
      i: "Meiosis",
      ii: "Binary fission",
      iii: "Mitosis",
      iv: "Cloning a sheep named Dolly using a xerox machine"
    },
    correct: "iii",
    explanation: "Mitosis produces two genetically identical daughter nuclei from one parent nucleus."
  },
  {
    id: "Q020",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What is a karyogram?",
    options: {
      i: "A diagram of energy flow",
      ii: "A map of metabolic pathways",
      iii: "An image of chromosomes arranged in homologous pairs",
      iv: "A telegram sent by a Karen"
    },
    correct: "iii",
    explanation: "A karyogram shows chromosomes ordered in homologous pairs by size and position of centromere."
  },
  {
    id: "Q021",
    topic: "Theme A: Unity and Diversity",
    level: "HL",
    question: "What is the \"Goldilocks zone\" in astrobiology?",
    options: {
      i: "A zone with high radiation",
      ii: "A zone where gravity is strongest",
      iii: "A zone where water can exist as a liquid",
      iv: "A zone where porridge is always just right"
    },
    correct: "iii",
    explanation: "The habitable or Goldilocks zone is the range of distances from a star where liquid water can exist on a planet's surface."
  },
  {
    id: "Q022",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "Which scientist used swan-neck flasks to disprove spontaneous generation?",
    options: {
      i: "Charles Darwin",
      ii: "Robert Hooke",
      iii: "Louis Pasteur",
      iv: "Louis Vuitton"
    },
    correct: "iii",
    explanation: "Louis Pasteur's swan-neck flask experiments showed that microorganisms come from other microorganisms, not spontaneous generation."
  },
  {
    id: "Q023",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What distinguishes an autotroph from a heterotroph?",
    options: {
      i: "Autotrophs move; heterotrophs do not",
      ii: "Heterotrophs photosynthesis; autotrophs do not",
      iii: "Autotrophs synthesize their own organic molecules; heterotrophs ingest them",
      iv: "Autotrophs drive cars; heterotrophs ride bicycles"
    },
    correct: "iii",
    explanation: "Autotrophs make their own organic molecules from inorganic sources; heterotrophs obtain them by feeding."
  },
  {
    id: "Q024",
    topic: "Theme A: Unity and Diversity",
    level: "HL",
    question: "What is polyploidy?",
    options: {
      i: "Having one set of chromosomes",
      ii: "Having no chromosomes",
      iii: "Having more than two sets of chromosomes",
      iv: "A parrot named Polly playing Monopoly"
    },
    correct: "iii",
    explanation: "Polyploid organisms have three or more complete sets of chromosomes, which can contribute to speciation, especially in plants."
  },
  {
    id: "Q025",
    topic: "Theme A: Unity and Diversity",
    level: "SL",
    question: "What is the function of the ribosome?",
    options: {
      i: "DNA replication",
      ii: "Lipid synthesis",
      iii: "Protein synthesis",
      iv: "Making the cell look polka-dotted"
    },
    correct: "iii",
    explanation: "Ribosomes translate mRNA into polypeptide chains, synthesizing proteins."
  },

  // --------------------------------------------------------------------------
  // Theme B: Form and Function
  // --------------------------------------------------------------------------
  {
    id: "Q026",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which reaction links monosaccharides to form polysaccharides?",
    options: {
      i: "Hydrolysis",
      ii: "Oxidation",
      iii: "Condensation",
      iv: "Conversation"
    },
    correct: "iii",
    explanation: "Condensation reactions join monosaccharides together, releasing water and forming glycosidic bonds."
  },
  {
    id: "Q027",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which lipid is a primary component of the plasma membrane bilayer?",
    options: {
      i: "Triglycerides",
      ii: "Cellulose",
      iii: "Phospholipids",
      iv: "Butter"
    },
    correct: "iii",
    explanation: "Phospholipids form a bilayer with hydrophilic heads and hydrophobic tails, making up the core of cell membranes."
  },
  {
    id: "Q028",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What happens to a protein when it is denatured?",
    options: {
      i: "It breaks into amino acids",
      ii: "It becomes a carbohydrate",
      iii: "It loses its specific conformational shape and function",
      iv: "It has an identity crisis"
    },
    correct: "iii",
    explanation: "Denaturation alters the three-dimensional structure of a protein, typically abolishing its function."
  },
  {
    id: "Q029",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "How do oxygen and carbon dioxide move across the cell membrane?",
    options: {
      i: "Active transport",
      ii: "Facilitated diffusion",
      iii: "Simple diffusion",
      iv: "They take an Uber"
    },
    correct: "iii",
    explanation: "Small non-polar molecules like O₂ and CO₂ cross membranes by simple diffusion down their concentration gradient."
  },
  {
    id: "Q030",
    topic: "Theme B: Form and Function",
    level: "HL",
    question: "What is the role of cholesterol in mammalian membranes?",
    options: {
      i: "To generate ATP",
      ii: "To act as a receptor",
      iii: "To modulate membrane fluidity",
      iv: "To clog the arteries of the cell"
    },
    correct: "iii",
    explanation: "Cholesterol helps regulate membrane fluidity and stability, especially at different temperatures."
  },
  {
    id: "Q031",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What defines an integral protein?",
    options: {
      i: "It is attached to the surface of the membrane",
      ii: "It floats in the cytoplasm",
      iii: "It is embedded in the hydrophobic core of the membrane",
      iv: "It is a protein with high moral integrity"
    },
    correct: "iii",
    explanation: "Integral (intrinsic) proteins span or are embedded within the hydrophobic region of the phospholipid bilayer."
  },
  {
    id: "Q032",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which property of stem cells makes them valuable for therapy?",
    options: {
      i: "They are large",
      ii: "They have a short lifespan",
      iii: "They can differentiate into specialized cell types",
      iv: "They are extremely polite"
    },
    correct: "iii",
    explanation: "Stem cells are unspecialized and can differentiate into various specialized cell types, enabling regenerative therapies."
  },
  {
    id: "Q033",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What is the primary function of the xylem in plants?",
    options: {
      i: "Transport of sugar",
      ii: "Photosynthesis",
      iii: "Transport of water and mineral ions",
      iv: "Providing a home for termites"
    },
    correct: "iii",
    explanation: "Xylem tissue conducts water and dissolved mineral ions from roots to leaves."
  },
  {
    id: "Q034",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "In the human lungs, where does gas exchange occur?",
    options: {
      i: "Trachea",
      ii: "Bronchi",
      iii: "Alveoli",
      iv: "The deep end of the pool"
    },
    correct: "iii",
    explanation: "Gas exchange occurs across the thin walls of the alveoli and surrounding capillaries."
  },
  {
    id: "Q035",
    topic: "Theme B: Form and Function",
    level: "HL",
    question: "Which proteins interact to cause muscle contraction?",
    options: {
      i: "Collagen and Keratin",
      ii: "DNA and RNA",
      iii: "Actin and Myosin",
      iv: "Batman and Robin"
    },
    correct: "iii",
    explanation: "Muscle contraction is produced when myosin heads bind to and pull on actin filaments."
  },
  {
    id: "Q036",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What binds to oxygen in red blood cells?",
    options: {
      i: "White blood cells",
      ii: "Plasma",
      iii: "Hemoglobin",
      iv: "Oxygen-binding glue"
    },
    correct: "iii",
    explanation: "Hemoglobin is the protein in red blood cells that reversibly binds oxygen."
  },
  {
    id: "Q037",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which type of fatty acid contains one or more double bonds?",
    options: {
      i: "Saturated",
      ii: "Amino acid",
      iii: "Unsaturated",
      iv: "A moody fatty acid"
    },
    correct: "iii",
    explanation: "Unsaturated fatty acids have one or more double bonds in their hydrocarbon chains."
  },
  {
    id: "Q038",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which variable is plotted on the x-axis of an enzyme activity graph?",
    options: {
      i: "Rate of reaction",
      ii: "Enzyme efficiency",
      iii: "Temperature or pH",
      iv: "The enzyme's mood swings"
    },
    correct: "iii",
    explanation: "Enzyme activity is often graphed as rate of reaction versus an independent variable such as temperature or pH."
  },
  {
    id: "Q039",
    topic: "Theme B: Form and Function",
    level: "HL",
    question: "What is the Bohr shift?",
    options: {
      i: "A change in heart rate",
      ii: "A change in lung volume",
      iii: "A shift in the oxygen dissociation curve due to CO2/pH",
      iv: "When a boar shifts its weight from one leg to another"
    },
    correct: "iii",
    explanation: "The Bohr shift describes how increased CO₂ and lower pH reduce hemoglobin's affinity for oxygen, shifting the curve to the right."
  },
  {
    id: "Q040",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What moves materials against a concentration gradient?",
    options: {
      i: "Osmosis",
      ii: "Facilitated diffusion",
      iii: "Active transport",
      iv: "Swimming upstream"
    },
    correct: "iii",
    explanation: "Active transport uses energy, often from ATP, to move substances against their concentration gradient."
  },
  {
    id: "Q041",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which polysaccharide is used for energy storage in animals?",
    options: {
      i: "Starch",
      ii: "Cellulose",
      iii: "Glycogen",
      iv: "Fat rolls"
    },
    correct: "iii",
    explanation: "Glycogen is the main storage carbohydrate in animals, stored in liver and muscle."
  },
  {
    id: "Q042",
    topic: "Theme B: Form and Function",
    level: "HL",
    question: "What triggers the release of calcium ions in muscle fibers?",
    options: {
      i: "ATP binding",
      ii: "Myosin sliding",
      iii: "An action potential/depolarization",
      iv: "Asking the muscle nicely"
    },
    correct: "iii",
    explanation: "Depolarization of the muscle fibre membrane triggers calcium release from the sarcoplasmic reticulum."
  },
  {
    id: "Q043",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which part of the leaf allows gas exchange?",
    options: {
      i: "Cuticle",
      ii: "Xylem",
      iii: "Stomata",
      iv: "The nostrils"
    },
    correct: "iii",
    explanation: "Stomata are pores in the leaf epidermis that open and close to regulate gas exchange and water loss."
  },
  {
    id: "Q044",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What is the role of the surfactant in alveoli?",
    options: {
      i: "To increase surface area",
      ii: "To transport oxygen",
      iii: "To reduce surface tension and prevent collapse",
      iv: "To clean the lungs with soap"
    },
    correct: "iii",
    explanation: "Pulmonary surfactant lowers surface tension, preventing alveoli from collapsing during exhalation."
  },
  {
    id: "Q045",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What describes the \"fluid mosaic model\"?",
    options: {
      i: "Rigid proteins in a fluid lipid layer",
      ii: "Fluid proteins in a rigid lipid layer",
      iii: "Proteins moving laterally within a fluid phospholipid bilayer",
      iv: "Art class with wet tiles"
    },
    correct: "iii",
    explanation: "The fluid mosaic model describes a dynamic bilayer with mobile proteins embedded in or attached to phospholipids."
  },
  {
    id: "Q046",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What is the function of the phloem?",
    options: {
      i: "Water transport",
      ii: "Structural support",
      iii: "Transport of organic compounds (translocation)",
      iv: "Sending text messages between leaves"
    },
    correct: "iii",
    explanation: "Phloem transports sugars and other organic molecules from sources to sinks in plants."
  },
  {
    id: "Q047",
    topic: "Theme B: Form and Function",
    level: "HL",
    question: "Which ion binds to troponin to expose binding sites on actin?",
    options: {
      i: "Sodium",
      ii: "Potassium",
      iii: "Calcium",
      iv: "Vibranium"
    },
    correct: "iii",
    explanation: "Calcium ions bind to troponin, causing tropomyosin to move and expose myosin-binding sites on actin."
  },
  {
    id: "Q048",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What creates turgor pressure in plant cells?",
    options: {
      i: "The cell wall",
      ii: "The nucleus",
      iii: "The central vacuole filling with water (water potential)",
      iv: "Peer pressure from other plants"
    },
    correct: "iii",
    explanation: "Water entering the central vacuole exerts pressure against the cell wall, producing turgor pressure."
  },
  {
    id: "Q049",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "Which environmental factor most directly affects transpiration rate?",
    options: {
      i: "Soil pH",
      ii: "Plant height",
      iii: "Humidity/Temperature",
      iv: "The price of bottled water"
    },
    correct: "iii",
    explanation: "Transpiration is strongly influenced by humidity, temperature, and also wind and light intensity."
  },
  {
    id: "Q050",
    topic: "Theme B: Form and Function",
    level: "SL",
    question: "What determines the specificity of an enzyme?",
    options: {
      i: "Its size",
      ii: "Its weight",
      iii: "The shape of its active site",
      iv: "Its zodiac sign"
    },
    correct: "iii",
    explanation: "Only substrates with a complementary shape and chemistry can bind to an enzyme's active site."
  },

  // --------------------------------------------------------------------------
  // Theme C: Interaction and Interdependence
  // --------------------------------------------------------------------------
  {
    id: "Q051",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What lowers the activation energy of metabolic reactions?",
    options: {
      i: "Heat",
      ii: "Substrates",
      iii: "Enzymes",
      iv: "Energy drinks"
    },
    correct: "iii",
    explanation: "Enzymes act as biological catalysts, lowering the activation energy needed for reactions."
  },
  {
    id: "Q052",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "Where does the Krebs cycle take place?",
    options: {
      i: "Cytoplasm",
      ii: "Thylakoid membrane",
      iii: "Matrix of the mitochondrion",
      iv: "On a bicycle built for two"
    },
    correct: "iii",
    explanation: "The Krebs (citric acid) cycle occurs in the mitochondrial matrix of eukaryotic cells."
  },
  {
    id: "Q053",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What are the products of aerobic cell respiration?",
    options: {
      i: "Lactate and ATP",
      ii: "Ethanol and Carbon Dioxide",
      iii: "Carbon Dioxide, Water, and ATP",
      iv: "Sweat and tears"
    },
    correct: "iii",
    explanation: "Aerobic respiration of glucose produces carbon dioxide, water, and a large yield of ATP."
  },
  {
    id: "Q054",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "Where do the light-dependent reactions of photosynthesis occur?",
    options: {
      i: "Stroma",
      ii: "Outer membrane",
      iii: "Thylakoid membranes/intermembrane space",
      iv: "In the dark"
    },
    correct: "iii",
    explanation: "Light-dependent reactions occur in the thylakoid membranes and the thylakoid space."
  },
  {
    id: "Q055",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What is the main photosynthetic pigment?",
    options: {
      i: "Melanin",
      ii: "Hemoglobin",
      iii: "Chlorophyll",
      iv: "Green paint"
    },
    correct: "iii",
    explanation: "Chlorophyll is the primary pigment that absorbs light energy for photosynthesis."
  },
  {
    id: "Q056",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "In an ecosystem, how much energy is typically passed to the next trophic level?",
    options: {
      i: "50%",
      ii: "90%",
      iii: "10%",
      iv: "None, the plants keep it all out of greed"
    },
    correct: "iii",
    explanation: "On average, about 10% of energy is transferred from one trophic level to the next."
  },
  {
    id: "Q057",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What is the function of a neurotransmitter?",
    options: {
      i: "To generate ATP",
      ii: "To contract muscles directly",
      iii: "To transmit signals across a synapse",
      iv: "To send emails to the brain"
    },
    correct: "iii",
    explanation: "Neurotransmitters are chemical messengers that carry signals across synapses between neurons or to effectors."
  },
  {
    id: "Q058",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What is a pathogen?",
    options: {
      i: "A white blood cell",
      ii: "An antibody",
      iii: "An organism or virus that causes disease",
      iv: "A path that goes to a garden"
    },
    correct: "iii",
    explanation: "Pathogens are disease-causing agents such as bacteria, viruses, fungi, or parasites."
  },
  {
    id: "Q059",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What is end-product inhibition?",
    options: {
      i: "When the enzyme stops working due to heat",
      ii: "When the substrate runs out",
      iii: "When the final product inhibits the first enzyme in a pathway",
      iv: "When the factory workers go on strike"
    },
    correct: "iii",
    explanation: "In end-product inhibition, the pathway's final product binds an enzyme early in the pathway, reducing its activity."
  },
  {
    id: "Q060",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What is the role of saprotrophs in an ecosystem?",
    options: {
      i: "They eat living plants",
      ii: "They hunt prey",
      iii: "They digest dead organic matter externally",
      iv: "They are just there for moral support"
    },
    correct: "iii",
    explanation: "Saprotrophs secrete digestive enzymes onto dead organic material and absorb the products, recycling nutrients."
  },
  {
    id: "Q061",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "In the Calvin cycle, what enzyme catalyzes carbon fixation?",
    options: {
      i: "Amylase",
      ii: "Catalase",
      iii: "Rubisco",
      iv: "Nabisco (maker of Oreos)"
    },
    correct: "iii",
    explanation: "Rubisco catalyzes the fixation of CO₂ to RuBP in the first step of the Calvin cycle."
  },
  {
    id: "Q062",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "Which gas is a waste product of photosynthesis?",
    options: {
      i: "Carbon dioxide",
      ii: "Nitrogen",
      iii: "Oxygen",
      iv: "Helium (which makes plants talk in high voices)"
    },
    correct: "iii",
    explanation: "Oxygen is released as a by-product of the light-dependent reactions of photosynthesis."
  },
  {
    id: "Q063",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What is a food web?",
    options: {
      i: "A linear sequence of feeding relationships",
      ii: "A list of ingredients",
      iii: "A system of interlocking and interdependent food chains",
      iv: "A trap made of sticky spaghetti"
    },
    correct: "iii",
    explanation: "A food web shows how multiple food chains in a community are interconnected."
  },
  {
    id: "Q064",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What is the process called where protons diffuse through ATP synthase?",
    options: {
      i: "Active transport",
      ii: "Diffusion",
      iii: "Chemiosmosis",
      iv: "The proton slide"
    },
    correct: "iii",
    explanation: "Chemiosmosis is the diffusion of protons down an electrochemical gradient through ATP synthase to generate ATP."
  },
  {
    id: "Q065",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "Which cells produce antibodies?",
    options: {
      i: "Phagocytes",
      ii: "Red blood cells",
      iii: "B-lymphocytes",
      iv: "Anti-social cells"
    },
    correct: "iii",
    explanation: "Activated B-lymphocytes (plasma cells) synthesize and secrete specific antibodies."
  },
  {
    id: "Q066",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What effect do neonicotinoid pesticides have?",
    options: {
      i: "They kill plants",
      ii: "They enhance growth",
      iii: "They block synaptic transmission in insects",
      iv: "They make insects give up smoking"
    },
    correct: "iii",
    explanation: "Neonicotinoids bind to nicotinic acetylcholine receptors in insects, blocking synaptic transmission and causing paralysis."
  },
  {
    id: "Q067",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What is the greenhouse effect?",
    options: {
      i: "Plants growing better in glass houses",
      ii: "The cooling of the Earth",
      iii: "The trapping of long-wave radiation by gases in the atmosphere",
      iv: "Painting the sky green"
    },
    correct: "iii",
    explanation: "Greenhouse gases absorb and re-radiate long-wave infrared radiation, warming Earth's surface and lower atmosphere."
  },
  {
    id: "Q068",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What happens during the \"link reaction\"?",
    options: {
      i: "Glucose becomes pyruvate",
      ii: "ATP is made",
      iii: "Pyruvate is converted to Acetyl-CoA",
      iv: "A missing link is found"
    },
    correct: "iii",
    explanation: "In the link reaction, pyruvate is decarboxylated and combined with coenzyme A to form acetyl-CoA."
  },
  {
    id: "Q069",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "Which of the following is a density-dependent limiting factor for populations?",
    options: {
      i: "Earthquake",
      ii: "Flood",
      iii: "Disease/Competition",
      iv: "Bad weather on the weekend"
    },
    correct: "iii",
    explanation: "Disease and competition have stronger effects as population density increases, making them density-dependent factors."
  },
  {
    id: "Q070",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What is the role of the hormone auxin in plants?",
    options: {
      i: "To stop growth",
      ii: "To promote flowering",
      iii: "To control phototropism and growth in the shoot apex",
      iv: "To help plants listen to music"
    },
    correct: "iii",
    explanation: "Auxin promotes cell elongation and is central to phototropism and apical dominance."
  },
  {
    id: "Q071",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What is the source of energy for a food chain?",
    options: {
      i: "The decomposers",
      ii: "The consumers",
      iii: "The Sun (usually)",
      iv: "Coffee"
    },
    correct: "iii",
    explanation: "Most ecosystems are powered by sunlight captured by photosynthetic producers."
  },
  {
    id: "Q072",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What is the \"action spectrum\" of photosynthesis?",
    options: {
      i: "The colors plants look like",
      ii: "The speed of the reaction",
      iii: "A graph showing the rate of photosynthesis at different wavelengths",
      iv: "An action movie starring plants"
    },
    correct: "iii",
    explanation: "An action spectrum shows how effective different wavelengths of light are at driving photosynthesis."
  },
  {
    id: "Q073",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "What are antibiotics effective against?",
    options: {
      i: "Viruses",
      ii: "Human cells",
      iii: "Bacteria (Prokaryotes)",
      iv: "Bad attitudes"
    },
    correct: "iii",
    explanation: "Antibiotics target bacterial structures or processes and are ineffective against viruses."
  },
  {
    id: "Q074",
    topic: "Theme C: Interaction and Interdependence",
    level: "HL",
    question: "What is the role of the loop of Henle?",
    options: {
      i: "Sugar absorption",
      ii: "Protein digestion",
      iii: "Osmoregulation/Creating a hypertonic medulla",
      iv: "Doing loop-the-loops in the kidney"
    },
    correct: "iii",
    explanation: "The loop of Henle establishes a concentration gradient in the medulla, enabling water reabsorption."
  },
  {
    id: "Q075",
    topic: "Theme C: Interaction and Interdependence",
    level: "SL",
    question: "Which type of respiration produces the most ATP?",
    options: {
      i: "Anaerobic in yeast",
      ii: "Anaerobic in humans",
      iii: "Aerobic respiration",
      iv: "Heavy breathing while watching a horror movie"
    },
    correct: "iii",
    explanation: "Aerobic respiration yields far more ATP per glucose than anaerobic pathways."
  },

  // --------------------------------------------------------------------------
  // Theme D: Continuity and Change
  // --------------------------------------------------------------------------
  {
    id: "Q076",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "Which enzyme unzips the DNA double helix during replication?",
    options: {
      i: "DNA Polymerase",
      ii: "Ligase",
      iii: "Helicase",
      iv: "The Zipperase"
    },
    correct: "iii",
    explanation: "Helicase unwinds and separates the two strands of the DNA double helix."
  },
  {
    id: "Q077",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What is the result of uncontrolled cell division?",
    options: {
      i: "A bigger cell",
      ii: "Apoptosis",
      iii: "Tumors/Cancer",
      iv: "A cell party that got out of hand"
    },
    correct: "iii",
    explanation: "Loss of control of the cell cycle can lead to the formation of tumors and cancer."
  },
  {
    id: "Q078",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "During which phase of meiosis does crossing over occur?",
    options: {
      i: "Metaphase I",
      ii: "Anaphase II",
      iii: "Prophase I",
      iv: "The crossover episode"
    },
    correct: "iii",
    explanation: "Crossing over between homologous chromosomes occurs in prophase I of meiosis."
  },
  {
    id: "Q079",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What removes introns from pre-mRNA?",
    options: {
      i: "Translation",
      ii: "Replication",
      iii: "Splicing",
      iv: "A tiny pair of scissors"
    },
    correct: "iii",
    explanation: "Spliceosomes remove introns and join exons in pre-mRNA during RNA processing."
  },
  {
    id: "Q080",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "If a red flower and white flower produce a pink flower, what is this called?",
    options: {
      i: "Dominance",
      ii: "Sex-linkage",
      iii: "Incomplete dominance/Codominance principles",
      iv: "An indecisive flower"
    },
    correct: "iii",
    explanation: "A pink phenotype from red and white parents indicates incomplete dominance or co-dominant expression of alleles."
  },
  {
    id: "Q081",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What is a gene pool?",
    options: {
      i: "A swimming pool for jeans",
      ii: "The total number of individuals",
      iii: "All the genes and their alleles in an interbreeding population",
      iv: "A very expensive billiard game"
    },
    correct: "iii",
    explanation: "The gene pool consists of all alleles present in a population at a given time."
  },
  {
    id: "Q082",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "Which enzyme seals the gaps between DNA fragments (Okazaki fragments)?",
    options: {
      i: "Helicase",
      ii: "Primase",
      iii: "Ligase",
      iv: "Superglue-ase"
    },
    correct: "iii",
    explanation: "DNA ligase joins Okazaki fragments on the lagging strand by forming phosphodiester bonds."
  },
  {
    id: "Q083",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What is the function of tRNA?",
    options: {
      i: "To carry the genetic code",
      ii: "To make up the ribosome",
      iii: "To bring amino acids to the ribosome",
      iv: "To translate languages for the cell"
    },
    correct: "iii",
    explanation: "Transfer RNA (tRNA) carries specific amino acids to the ribosome, matching codons via its anticodon."
  },
  {
    id: "Q084",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What stops the cell cycle if there are errors?",
    options: {
      i: "Ribosomes",
      ii: "Mitochondria",
      iii: "Cyclins/Checkpoints",
      iv: "Traffic police"
    },
    correct: "iii",
    explanation: "Cyclins and checkpoint proteins monitor DNA integrity and can halt the cell cycle for repair."
  },
  {
    id: "Q085",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "Which gas is most responsible for the anthropogenic greenhouse effect?",
    options: {
      i: "Oxygen",
      ii: "Nitrogen",
      iii: "Carbon Dioxide",
      iv: "Burps"
    },
    correct: "iii",
    explanation: "Rising atmospheric CO₂ from human activities is the main driver of anthropogenic climate change."
  },
  {
    id: "Q086",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What determines the sequence of amino acids in a protein?",
    options: {
      i: "The ribosome",
      ii: "The tRNA",
      iii: "The sequence of bases in the mRNA/DNA",
      iv: "The chef's secret recipe"
    },
    correct: "iii",
    explanation: "The base sequence of DNA (and transcribed mRNA) encodes the order of amino acids in a polypeptide."
  },
  {
    id: "Q087",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What describes a \"homozygous recessive\" genotype?",
    options: {
      i: "Aa",
      ii: "AA",
      iii: "aa",
      iv: "A very shy genotype"
    },
    correct: "iii",
    explanation: "A homozygous recessive individual has two copies of the recessive allele (aa)."
  },
  {
    id: "Q088",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What is the role of nucleosomes in eukaryotes?",
    options: {
      i: "To synthesize lipids",
      ii: "To digest waste",
      iii: "To facilitate supercoiling of DNA",
      iv: "To play hide and seek with the DNA"
    },
    correct: "iii",
    explanation: "Nucleosomes package DNA into a more compact form, enabling supercoiling and regulation of gene expression."
  },
  {
    id: "Q089",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What is PCR (Polymerase Chain Reaction) used for?",
    options: {
      i: "To separate DNA fragments",
      ii: "To cut DNA",
      iii: "To amplify small amounts of DNA",
      iv: "To chain reaction videos on YouTube"
    },
    correct: "iii",
    explanation: "PCR is used to make many copies of a specific DNA sequence from a small starting sample."
  },
  {
    id: "Q090",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "In the lac operon (gene expression example), what binds to the operator?",
    options: {
      i: "The promoter",
      ii: "The gene",
      iii: "The repressor protein",
      iv: "The operator of the telephone"
    },
    correct: "iii",
    explanation: "In the absence of lactose, the lac repressor binds the operator and blocks transcription."
  },
  {
    id: "Q091",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "Which phase of mitosis involves chromosomes lining up at the equator?",
    options: {
      i: "Prophase",
      ii: "Anaphase",
      iii: "Metaphase",
      iv: "The equator-phase"
    },
    correct: "iii",
    explanation: "During metaphase, chromosomes align along the metaphase plate (cell equator)."
  },
  {
    id: "Q092",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What is the function of HCG in early pregnancy?",
    options: {
      i: "To stimulate milk production",
      ii: "To induce labor",
      iii: "To maintain the corpus luteum (secreting progesterone)",
      iv: "To choose the baby's name"
    },
    correct: "iii",
    explanation: "Human chorionic gonadotropin maintains the corpus luteum so it continues producing progesterone."
  },
  {
    id: "Q093",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What is the purpose of gel electrophoresis?",
    options: {
      i: "To copy DNA",
      ii: "To mute genes",
      iii: "To separate DNA fragments by size/charge",
      iv: "To electrocute jelly"
    },
    correct: "iii",
    explanation: "Gel electrophoresis separates DNA fragments based on length and charge when an electric field is applied."
  },
  {
    id: "Q094",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What is the difference between leading and lagging strands?",
    options: {
      i: "One is faster",
      ii: "One is DNA, one is RNA",
      iii: "The leading strand is continuous; the lagging strand is discontinuous",
      iv: "One is the leader, the other is a follower"
    },
    correct: "iii",
    explanation: "DNA polymerase synthesizes the leading strand continuously and the lagging strand in Okazaki fragments."
  },
  {
    id: "Q095",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "Which type of variation is usually polygenic?",
    options: {
      i: "Discrete variation (e.g., blood type)",
      ii: "Random variation",
      iii: "Continuous variation (e.g., height)",
      iv: "Variations in ice cream flavors"
    },
    correct: "iii",
    explanation: "Continuous variation, like height, typically results from the combined effect of many genes (polygenic)."
  },
  {
    id: "Q096",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What describes a \"linked gene\"?",
    options: {
      i: "Genes on different chromosomes",
      ii: "Genes that code for the same thing",
      iii: "Genes located on the same chromosome that are inherited together",
      iv: "Genes that are best friends holding hands"
    },
    correct: "iii",
    explanation: "Linked genes are close together on the same chromosome and tend to be inherited together."
  },
  {
    id: "Q097",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What is the ultimate source of genetic variation?",
    options: {
      i: "Meiosis",
      ii: "Sexual reproduction",
      iii: "Mutation",
      iv: "X-Men comics"
    },
    correct: "iii",
    explanation: "Mutations introduce new alleles and are the original source of genetic variation."
  },
  {
    id: "Q098",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "Which hormone regulates the metabolic rate?",
    options: {
      i: "Leptin",
      ii: "Melatonin",
      iii: "Thyroxin",
      iv: "Red Bull"
    },
    correct: "iii",
    explanation: "Thyroxine (thyroxin) from the thyroid gland helps regulate basal metabolic rate."
  },
  {
    id: "Q099",
    topic: "Theme D: Continuity and Change",
    level: "SL",
    question: "What describes \"survival of the fittest\"?",
    options: {
      i: "The strongest organism survives",
      ii: "The fastest organism survives",
      iii: "The organism best adapted to its environment survives and reproduces",
      iv: "The one with the gym membership survives"
    },
    correct: "iii",
    explanation: "In evolutionary terms, fitness refers to reproductive success based on adaptation to the environment."
  },
  {
    id: "Q100",
    topic: "Theme D: Continuity and Change",
    level: "HL",
    question: "What is the purpose of the cortical reaction in fertilization?",
    options: {
      i: "To attract sperm",
      ii: "To nourish the egg",
      iii: "To prevent polyspermy",
      iv: "To give the egg a hard shell like an M&M"
    },
    correct: "iii",
    explanation: "The cortical reaction modifies the egg membrane and zona pellucida to block entry of additional sperm."
  }
];
