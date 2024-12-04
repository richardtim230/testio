// Show the popup when the page loads
window.onload = function () {
  const popup = document.getElementById('instructionPopup');
  popup.style.display = 'flex';

  // Close the popup when the "Got It!" button is clicked
  document.getElementById('closePopupBtn').onclick = function () {
    popup.style.display = 'none';
  };
};


// Ensure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const questionImage = document.getElementById("question-image");
  
  
        if (question.image) {

          const img = document.createElement("img");

          img.src = question.image;

          img.alt = "Question Image";

          img.onerror = () => console.error("Failed to load image:", question.image);

          questionElement.appendChild(img);

        }
  
  // Example button event listener
  const button = document.getElementById("my-button");
  if (button) {
    button.addEventListener("click", () => {
      console.log("Button clicked");
    });
  } else {
    console.warn("Button with id 'my-button' not found.");
  }
});


// Predefined access codes for each department

const accessCodes = {

  'Introductory Zoology 1': 'zoo123',
  'Animal Systematics': 'ZOO201', 


  biology: 'bio456',

  chemistry: 'chem789',
  botany: 'bot009', 

  physics: 'phys101',

};

// Questions for each department (randomize 10 questions per session)

const questions = {

chemistry: [
  
  { "question": "All measurements should provide the following information:",
    "options": [
      "The size or magnitude of the measurement",
      "Indication of origin and standard of comparison",
      "The indication of uncertainty and standard of comparison",
      "A and C above"
    ],
    "answer": "A and C above"
  },

  {
    "question": "A nucleus that spontaneously decomposes is said to be:",
    "options": ["a radionuclide", "radioactive", "reactive", "electropositive"],
    "answer": "radioactive"
  },
  {
    "question": "______, when it is produced by a nucleus at high speed, is more commonly called a beta particle.",
    "options": ["Electron", "Neutron", "Nucleon", "Proton"],
    "answer": "Electron"
  },
  {
    "question": "The net effect of the production of beta particle is to convert:",
    "options": ["electron to a γ-particle", "neutron to a proton", "proton to neutron", "β-particle to energy"],
    "answer": "neutron to a proton"
  },
  {
    "question": "When a nucleus undergoes alpha decay, the ________ of the nucleus decreases by four units.",
    "options": ["mass", "neutron", "proton", "electron"],
    "answer": "mass"
  },
  {
    "question": "Polonium-216 decays to Pb-212 by emission of an alpha particle. Which of the following is the nuclear equation for this radioactive decay?",
    "options": [
      "^{216}_{84}Po → ^{212}_{82}Pb + ^{4}_{2}He",
      "^{216}_{84}Po → ^{212}_{82}Pb + ^{0}_{-1}e",
      "^{216}_{84}Po + 2 → ^{212}_{82}Pb + 4",
      "^{216}_{84}Po + ^{2}_{-1}e → ^{212}_{82}Pb + ^{4}_{2}He"
    ],
    "answer": "^{216}_{84}Po → ^{212}_{82}Pb + ^{4}_{2}He"
  },
  {
    "question": "Sulfur trioxide is formed from the reaction of sulfur dioxide and oxygen: SO₂(g) + ½O₂(g) ⇌ SO₃(g). At 1000 K, an equilibrium mixture has partial pressures of 0.562 bar SO₂, 0.101 bar O₂, and 0.332 bar SO₃. What is the equilibrium constant Kₚ for the reaction at this temperature?",
    "options": ["5.85", "3.46", "1.86", "16.8"],
    "answer": "5.85"
  },
  {
    "question": "What is the pH of a 0.20 M solution of sodium benzoate, Na(C₆H₅COO)? The Kₐ of benzoic acid, C₆H₅COOH, is 6.5 × 10⁻⁵.",
    "options": ["5.26", "9.09", "8.74", "11.56"],
    "answer": "8.74"
  },
  {
    "question": "100.0 mL of 0.15 M aqueous HF (Kₐ = 6.8 × 10⁻⁴) is mixed with 125.0 mL 0.23 M NaF. What is the pH of the resulting solution?",
    "options": ["2.17", "3.45", "3.17", "3.35"],
    "answer": "3.35"
  },
  {
    "question": "The reaction: H₂(g) + I₂(g) ⇌ 2HI(g), Kₚ = 50.4 at 448 °C. If a 3.00 L flask initially contains 0.500 moles each of H₂ and I₂, how many moles of HI are present when the contents have reached equilibrium at 448 °C?",
    "options": ["0.0130 mol", "0.0780 mol", "0.0260 mol", "0.0146 mol"],
    "answer": "0.0780 mol"
  },
  {
    "question": "The dissociation of phosphorus pentachloride into chlorine and phosphorus trichloride is represented by the equilibrium: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Kₚ = 0.015. Which change will increase the number of moles of Cl₂(g) present in this system at equilibrium?",
    "options": ["Addition of a catalyst", "Increasing the volume of the container", "Increasing the pressure by injecting PCl₅(g)", "Decreasing the temperature"],
    "answer": "Decreasing the temperature"
  },
  {
    "question": "For which of the following reactions would the yield of products at equilibrium NOT increase with an increase in pressure?",
    "options": [
      "N₂(g) + O₂(g) ⇌ 2NO(g)",
      "Ti(s) + 2Cl₂(g) ⇌ TiCl₄(g)",
      "2C₂H₄(g) + 2H₂O(g) ⇌ 2C₂H₆O(g)",
      "4HCl(g) + O₂(g) ⇌ 2H₂O(l) + 2Cl₂(g)"
    ],
    "answer": "N₂(g) + O₂(g) ⇌ 2NO(g)"
  },
  {
    "question": "At 400 K, the reaction SO₃(g) ⇌ SO₂(g) + ½O₂(g) has Kₚ = 8.2 × 10⁻⁴. What is Kₚ at 400 K for the following reaction? 2SO₃(g) ⇌ 2SO₂(g) + O₂(g)",
    "options": ["1.6 × 10⁻³", "8.2 × 10⁻⁴", "6.7 × 10⁻⁷", "2.9 × 10⁻²"],
    "answer": "6.7 × 10⁻⁷"
  },
  {
    "question": "What is [H₃O⁺] in a solution formed by dissolving 1.00 g NH₄Cl (M = 53.5) in 30.0 mL of 3.00 M NH₃ (Kₐ = 1.8 × 10⁻⁵)?",
    "options": ["1.15 × 10⁻¹⁰ M", "5.53 × 10⁻¹⁰ M", "2.71 × 10⁻⁹ M", "1.44 × 10⁻¹² M"],
    "answer": "5.53 × 10⁻¹⁰ M"
  },
  {
    "question": "0.100 mol of HF (Kₐ = 6.6 × 10⁻⁴) is added to water to make 1.00 L of solution. Which statement is correct at equilibrium?",
    "options": ["[HF] > [F⁻]", "[HF] = [H₃O⁺]", "[H₃O⁺] = 0.100 M", "[H₃O⁺] = [HF]"],
    "answer": "[HF] > [F⁻]"
  },
  {
    "question": "A sample of SO₂Cl₂ is introduced into a movable piston with the pressure maintained at 1.00 atm. Which changes would decrease the number of moles of SO₂Cl₂(g) present in the piston at equilibrium?",
    "options": [
      "The temperature of the system is increased to 500 K",
      "A sample of Ar(g) is injected into the piston",
      "Neither I nor II",
      "Both I and II"
    ],
    "answer": "Both I and II"
  },
  {
    "question": "The wavelength of a certain infrared radiation is 0.000000085 m. Write the measurement in terms of an appropriate prefix.",
    "options": ["8.5 nm", "8.5 cm", "0.85 µm", "85 µm"],
    "answer": "8.5 nm"
  },
  {
    "question": "Which of the following is true about homogeneous mixtures?",
    "options": [
      "They are also known as solutions",
      "They contain distinct parts",
      "Cannot be used in chemical reactions",
      "Have distinct physical properties"
    ],
    "answer": "They are also known as solutions"
  }, 

{
  "question": "Which of the following is/are true about homogeneous mixtures?\n(i) They are also known as solutions.\n(ii) They have uniform properties throughout a given sample.\n(iii) They contain physically distinct parts with different properties.\n(iv) They cannot be used in chemical reactions.",
  "options": [
    "I, II & III",
    "II only",
    "III and IV only",
    "I & II only"
  ],
  "answer": "I & II only"
}, 
  {
    "question": "An experiment requires 43.7 g of propanol. Instead of using a balance, a student dispensed the liquid into a measuring cylinder. If the density of propan-2-ol is 0.785 g/cm³, what volume of propanol should be used?",
    "options": ["34.3 cm³", "55.67 cm³", "5.567 cm³", "1.80 cm³"],
    "answer": "55.67 cm³"
  },
  {
    "question": "What type of reaction does this equation represent: (CH₃)₃C-OH + Br⁻ → (CH₃)₃C-Br + OH⁻?",
    "options": [
      "Combination Reaction",
      "Decomposition Reaction",
      "Combustion Reaction",
      "Replacement Reaction"
    ],
    "answer": "Replacement Reaction"
  },
  {
    "question": "Which of the following statements is correct about determinate errors?",
    "options": [
      "Determinate errors are also known as random errors.",
      "Determinate errors are irregular and variable in magnitude and sign.",
      "Determinate errors are systematic errors.",
      "Determinate errors are due to fluctuation of temperatures."
    ],
    "answer": "Determinate errors are systematic errors."
  }, 


  {
    "question": "Round off this figure to 3 significant figures: 0.0082001.",
    "options": ["0.008", "820", "8.200 × 10³", "8.20 × 10⁻²"],
    "answer": "8.20 × 10⁻²"
  },
  {
    "question": "Perform the following operations and record the answer to the proper number of significant digits (figures): 0.6238 cm × 6.6 cm",
    "options": ["4.11708 cm²", "4.12 cm²", "4.1 cm²", "0.95 cm²"],
    "answer": "4.1 cm²"
  },
  {
    "question": "Simplify the expression and record the answer in the proper number of significant figures: (2.586 × 5.8) ÷ 4.186",
    "options": ["3.558", "3.5", "3.56", "3.6"],
    "answer": "3.6"
  },
  {
    "question": "An experiment requires 43.7 g of propan-2-ol. If its density is 0.785 g/mL, what volume of the alcohol should be used?",
    "options": ["34.3 mL", "557 mL", "55.7 mL", "55.669 mL"],
    "answer": "55.7 mL"
  },
  {
    "question": "The Atlantic Ocean contains 1.35 × 10⁹ km³ of water. What is the volume in litres? (Note: 1 litre = 1 dm³)",
    "options": [
      "1.35 × 10²⁷ L",
      "1.35 × 10²¹ L",
      "1.35 × 10¹⁸ L",
      "1.35 × 10³ L"
    ],
    "answer": "1.35 × 10²¹ L"
  },
  {
    "question": "In what ways can you minimize determinate errors?",
    "options": [
      "Proper calibration of apparatus.",
      "Running of a blank determination.",
      "Use of independent method.",
      "All the three above."
    ],
    "answer": "All the three above."
  },
  {
    "question": "What type of reaction does this equation represent? C₂H₄ + Cl₂ → C₂H₄Cl₂",
    "options": [
      "Combination Reaction",
      "Replacement Reaction",
      "Decomposition Reaction",
      "Combustion Reaction"
    ],
    "answer": "Combination Reaction"
  },
  {
    "question": "Nitrogen gas is the major component of air. A sample of nitrogen gas in a glass bulb weighs 243 mg. What is the mass in SI base units of mass?",
    "options": [
      "2.43 × 10⁻¹ g",
      "2.43 × 10⁻⁴ kg",
      "0.243 kg",
      "0.243 g"
    ],
    "answer": "2.43 × 10⁻⁴ kg"
  },
  {
    "question": "Which of the following statements is correct about determinate errors?",
    "options": [
      "Determinate errors are also known as random errors.",
      "Determinate errors are irregular and variable in magnitude and sign.",
      "They cannot in principle be corrected for.",
      "They are known as systematic errors."
    ],
    "answer": "They are known as systematic errors."
  },
  {     "question": "A beaker weighed 53.10 g. To the beaker were added 5.348 g of iron pellets and 56.1 g of hydrochloric acid. What was the total mass of the beaker and the mixture (before the reaction)? Express the answer to the correct number of significant figures.",
    "options": ["115 g", "114.5 g", "114 g", "109 g"],
    "answer": "114.5 g"
  },
  {
    "question": "The sets of quantum numbers that correctly define the 3p and 5s orbitals are:",
    "options": [
      "n = 3, l = 1, mₗ = ±1, 0 and n = 5, l = 0, mₗ = 0",
      "n = 3, l = 0, mₗ = 0 and n = 5, l = 1, mₗ = ±1, 0",
      "n = 3, l = 1, mₗ = ±2 and n = 5, l = 0, mₗ = 0",
      "n = 4, mₗ = 0"
    ],
    "answer": "n = 3, l = 1, mₗ = ±1, 0 and n = 5, l = 0, mₗ = 0"
  },
  {
    "question": "(I) 3→1, (II) 3→2, (III) 4→3, (IV) 4→2, and (V) 5→1 are transitions from n’ → n in the emission spectrum of atomic hydrogen. Which of the following sets correctly represent the series?",
    "options": [
      "I and III, Balmer, I and III, Lyman, III and V, Paschen.",
      "II and IV, Lyman, I and V, Balmer, III and V, Paschen.",
      "III and IV, Paschen, II and V, Balmer, II and IV, Lyman.",
      "I and V, Lyman, II and IV, Balmer, III only Paschen."
    ],
    "answer": "I and V, Lyman, II and IV, Balmer, III and V, Paschen"
  },
  {
    "question": "The ground state electronic configuration of group 16 elements (former group 6) is of the type [X] ns²np⁴ where X is a group 18 element (neon core). Which of the following correctly describes the outer electrons?",
    "options": [
      "npₓ², np²ₓ, np⁴, Hund’s rule and Pauli exclusion principle.",
      "np², np¹, np², Hund’s rule and Heisenberg’s uncertainty principle.",
      "np², np³, np⁴, Hund’s rule and Heisenberg’s uncertainty principle.",
      "np³, np², np¹, Hund’s rule and Pauli exclusion principle."
    ],
    "answer": "npₓ², npᵧ¹, npᶻ¹, Hund’s rule and Pauli exclusion principle."
  },
  {
    "question": "An element X is found to have an atomic mass of 37.45 amu. Element X has only two isotopes, ³⁷X and ³⁸X. The ³⁷X isotope has a fractional abundance of 0.7721 and an atomic mass of 37.24. What is the fractional abundance of ³⁸X isotope with isotopic mass of 38.10?",
    "options": ["0.2283", "0.3025", "0.1518", "0.3797"],
    "answer": "0.2279"
  }, 
  {
    "question": "Solve the following and record the answer in the correct number of significant figures: (2.568 x 5.8) ÷ 4.186",
    "options": ["3.57", "3.5", "3.6", "3.558"],
    "answer": "3.57"
  },
  {
    "question": "L = mr²ω. If m = 5.79 ± 0.03 kg, r = 15.19 ± 0.02 m, and ω = 21.609 ± 0.004 s⁻¹. Calculate L.",
    "options": [
      "2.8 x 10⁴ kgm²s⁻¹",
      "28868.80 kgm²s⁻¹",
      "2.89 x 10⁴ kgm²s⁻¹",
      "1900.51 kgm²s⁻¹"
    ],
    "answer": "2.89 x 10⁴ kgm²s⁻¹"
  },
  {
    "question": "Calculate the percentage relative maximum error in L above.",
    "options": ["5.81 %", "0.67 %", "5.48 x 10⁻³ %", "3.38 x 10⁻⁵ %"],
    "answer": "0.67 %"
  },
  {
    "question": "What type of reaction does this equation represent? CaCO₃ → CaO + CO₂",
    "options": [
      "Combination reaction",
      "Replacement reaction",
      "Decomposition reaction",
      "Combustion reaction"
    ],
    "answer": "Decomposition reaction"
  },
  {
    "question": "You performed an experiment in the lab and found that there are 36.3 inches in a meter. Using this experimental value, how many millimeters are there in 1.34 feet?",
    "options": [
      "4.43 x 10⁵ mm",
      "43.05 x 10² mm",
      "44.3 mm",
      "4.43 x 10² mm"
    ],
    "answer": "4.43 x 10² mm"
  },
  {
    "question": "Which of the following methods cannot be used to minimize determinate error?",
    "options": [
      "Calibration of apparatus",
      "Starting all over again",
      "Running of blank determination",
      "Using of internal standard"
    ],
    "answer": "Starting all over again"
  },
  {
    "question": "A sample of water was analyzed for chloride ion and the following results were obtained in μg/L: 5.013, 5.023, 5.017, 5.019, 5.010, 5.018, 5.021. Calculate the mean of the measurement.",
    "options": ["5.017", "5.019", "5.018", "5.02"],
    "answer": "5.018"
  },
  {
    "question": "Calculate the standard deviation in the measurement of chloride ion in question 8 above.",
    "options": ["0.0045", "0.005", "2.033", "0.004"],
    "answer": "0.0045"
  },
  {
    "question": "Which of the following statements is correct about determinate errors?",
    "options": [
      "Determinate errors are also known as random errors",
      "Determinate errors are irregular and variable in magnitude and sign",
      "They cannot in principle be corrected for",
      "They are known as systematic errors"
    ],
    "answer": "They are known as systematic errors"
  },
  {
    "question": "Which equation represents the second ionization energy of an element X?",
    "options": [
      "X(g) → X²⁺(g) + 2e⁻",
      "X⁺(g) → X²⁺(g) + e⁻",
      "X(g) + 2e⁻ → X²⁻(g)",
      "X⁻(g) + e⁻ → X²⁻(g)"
    ],
    "answer": "X⁺(g) → X²⁺(g) + e⁻"
  },
  {
    "question": "The Bohr theory of the atom was able to account for the following observed spectral lines of atomic hydrogen with exceptional precision except:",
    "options": [
      "I, II, and III",
      "II, IV and V",
      "I and IV",
      "II only"
    ],
    "answer": "II only"
  },
  {
    "question": "Given that Planck's constant (h) = 6.626 x 10⁻³⁴ J·s, mass of an electron (mₑ) = 9.109 x 10⁻³¹ kg, calculate the De Broglie wavelength of an electron traveling at the speed of light. Hints: speed of light (c) = 3 x 10⁸ m·s⁻¹",
    "options": [
      "4.85 x 10⁻¹² m",
      "2.43 x 10⁻¹² m",
      "2.42 x 10⁻¹² m",
      "9.85 x 10⁻²⁴ m"
    ],
    "answer": "2.43 x 10⁻¹² m"
  }
], 

  'Introductory Zoology 1': [

    { question: 'What is the largest land animal?', options: ['Elephant', 'Giraffe', 'Hippo'], answer: 'Elephant' },
    
    { question: 'Which germ layer is responsible for forming the notochord in triploblastic animals?', options: ['Ectoderm', 'Endoderm', 'Mesoderm', 'Coelom'], answer: 'Mesoderm' },
{ question: 'What distinguishes acoelomates from pseudocoelomates and eucoelomates?', options: ['Presence of blastocoel', 'Absence of coelom', 'True coelom lined by mesoderm', 'Body cavity partly filled by mesoderm'], answer: 'Absence of coelom' },
{ question: 'Which order of Eu-cestoda includes the longest known tapeworms?', options: ['Cyclophyllidea', 'Tetraphyllidea', 'Pseudophyllidea', 'Diphyllidea'], answer: 'Pseudophyllidea' },
{ question: 'What type of coelom is characteristic of protostomes?', options: ['Schizocoelom', 'Enterocoelom', 'Acoelom', 'Pseudocoelom'], answer: 'Schizocoelom' },
{ question: 'Which class of annelids is primarily ectoparasitic and lacks setae?', options: ['Polychaeta', 'Oligochaeta', 'Hirudinea', 'Archiannelida'], answer: 'Hirudinea' },
{ question: 'In mollusks, which structure is responsible for locomotion?', options: ['Radula', 'Mantle', 'Muscular foot', 'Osphradium'], answer: 'Muscular foot' },
{ question: 'Which subclass of gastropods includes pulmonates with highly vascularized lung-like anterior mantle cavities?', options: ['Pulmonata', 'Prosobranchia', 'Opisthobranchia', 'Cephalopoda'], answer: 'Pulmonata' },
{ question: 'What feature is unique to stylommatophoran gastropods?', options: ['Shell-less terrestrial forms', 'Eyes at the tips of retractile tentacles', 'Operculate spirally coiled shells', 'Single non-retractile tentacle pair'], answer: 'Eyes at the tips of retractile tentacles' },
{ question: 'Which phylum has animals that rely entirely on diffusion for respiration due to the absence of a respiratory system?', options: ['Platyhelminthes', 'Annelida', 'Mollusca', 'Cnidaria'], answer: 'Platyhelminthes' },
{ question: 'Which annelid subclass is characterized by blood-sucking behavior and the presence of anterior and posterior suckers?', options: ['Polychaeta', 'Hirudinea', 'Oligochaeta', 'Archiannelida'], answer: 'Hirudinea' },
{ question: 'What structure in earthworms helps them move by anchoring segments during muscular contraction?', options: ['Chaetae', 'Parapodia', 'Clitellum', 'Setae'], answer: 'Chaetae' },
{ question: 'Which protostome group exhibits segmentation and possesses a closed circulatory system?', options: ['Mollusks', 'Arthropods', 'Annelids', 'Flatworms'], answer: 'Annelids' },
{ question: 'What is the primary function of the radula in mollusks?', options: ['Locomotion', 'Respiration', 'Feeding', 'Reproduction'], answer: 'Feeding' },
{ question: 'Which subclass of cestoda lacks a scolex and digestive tract?', options: ['Cyclophyllidea', 'Cestodaria', 'Diphyllidea', 'Eu-cestoda'], answer: 'Cestodaria' },
{ question: 'Which feature distinguishes eucoelomates from pseudocoelomates?', options: ['Presence of body cavity', 'Body cavity lined entirely by mesoderm', 'Absence of blastocoel', 'Absence of mesoderm'], answer: 'Body cavity lined entirely by mesoderm' },
{ question: 'What respiratory adaptation is unique to pulmonates?', options: ['Gills', 'Tracheae', 'Lung-like mantle cavity', 'External diffusion'], answer: 'Lung-like mantle cavity' },
{ question: 'Which phylum includes species with strobilated body segmentation and intermediate hosts?', options: ['Annelida', 'Cnidaria', 'Platyhelminthes', 'Mollusca'], answer: 'Platyhelminthes' },
{ question: 'Which structure is used for excretion in annelids?', options: ['Nephridia', 'Malpighian tubules', 'Flame cells', 'Protonephridia'], answer: 'Nephridia' },
{ question: 'What is the name of the segmental rings on the bodies of annelids?', options: ['Annuli', 'Parapodia', 'Chaetae', 'Setae'], answer: 'Annuli' },
{ question: 'What distinguishes prosobranchs from opisthobranchs in gastropods?', options: ['Presence of coiled shells', 'Position of gills and mantle cavity', 'Number of tentacles', 'Lack of radula'], answer: 'Position of gills and mantle cavity' },
{ question: 'Which molluscan class is known for having a dorsoventrally elongated body and reduced shell?', options: ['Cephalopoda', 'Gastropoda', 'Monoplacophora', 'Bivalvia'], answer: 'Cephalopoda' },
{ question: 'Which phylum’s members exhibit indirect development involving trochophore and veliger larval stages?', options: ['Annelida', 'Platyhelminthes', 'Mollusca', 'Echinodermata'], answer: 'Mollusca' },
{ question: 'What is the primary locomotory organ in polychaetes?', options: ['Parapodia', 'Setae', 'Radula', 'Mantle'], answer: 'Parapodia' },
{ question: 'Which type of circulatory system is present in most mollusks?', options: ['Closed', 'Open', 'Mixed', 'Haemocoelic'], answer: 'Open' },
{ question: 'What is the function of the osphradium in mollusks?', options: ['Sensory detection', 'Feeding', 'Excretion', 'Circulation'], answer: 'Sensory detection' },
{ question: 'Which tapeworm subclass primarily parasitizes elasmobranchs?', options: ['Tetraphyllidea', 'Cyclophyllidea', 'Pseudophyllidea', 'Diphyllidea'], answer: 'Tetraphyllidea' },
{ question: 'Which subclass of Polychaeta consists of sedentary tube-dwelling forms?', options: ['Sedentaria', 'Errantia', 'Archannelida', 'Oligochaeta'], answer: 'Sedentaria' },
{ question: 'What is the reproductive strategy of most stylommatophoran gastropods?', options: ['External fertilization', 'Hermaphroditism', 'Parthenogenesis', 'Sequential hermaphroditism'], answer: 'Hermaphroditism' },
{ question: 'What is the characteristic feeding structure in most bivalves?', options: ['Radula', 'Cilia on gills', 'Tentacles', 'Chaetae'], answer: 'Cilia on gills' },
{ question: 'Which phylum includes species with a coelomic fluid acting as a hydrostatic skeleton?', options: ['Annelida', 'Platyhelminthes', 'Mollusca', 'Echinodermata'], answer: 'Annelida' },
{ question: 'What type of nervous system is found in annelids?', options: ['Diffuse nerve net', 'Pair of cerebral ganglia with ventral nerve cords', 'Single nerve cord', 'No nervous system'], answer: 'Pair of cerebral ganglia with ventral nerve cords' },
{ question: 'Which structure in cestodes is involved in attachment to the host?', options: ['Proglottids', 'Scolex', 'Bothria', 'Nephridia'], answer: 'Scolex' },
{ question: 'Which order of annelids includes earthworms?', options: ['Archiannelida', 'Polychaeta', 'Oligochaeta', 'Hirudinea'], answer: 'Oligochaeta' },
{ question: 'Which layer in annelid body walls contributes to hydrostatic locomotion?', options: ['Cuticle', 'Circular muscles', 'Longitudinal muscles', 'Epidermis'], answer: 'Circular muscles' },
{ question: 'What feature is common to all molluscan classes?', options: ['Radula', 'Mantle', 'Segmented body', 'Gills'], answer: 'Mantle' },
{ question: 'What is the primary distinguishing feature of deuterostomes?', options: ['Blastopore develops into the mouth', 'Radial cleavage and anus development first', 'Presence of coelom', 'Absence of mesoderm'], answer: 'Radial cleavage and anus development first' },
{ question: 'Which gastropod subclass includes medically important freshwater snails?', options: ['Basommatophora', 'Stylommatophora', 'Pulmonata', 'Prosobranchia'], answer: 'Basommatophora' },
{ question: 'Which annelid class lacks parapodia and has a clitellum?', options: ['Polychaeta', 'Hirudinea', 'Oligochaeta', 'Archiannelida'], answer: 'Oligochaeta' },
{ question: 'What structure in Polychaeta aids in respiration and movement?', options: ['Setae', 'Parapodia', 'Nephridia', 'Annuli'], answer: 'Parapodia' },
{ question: 'Which type of coelom formation is characteristic of deuterostomes?', options: ['Schizocoely', 'Enterocoely', 'Acoelom', 'Blastocoely'], answer: 'Enterocoely' },
{ question: 'Which annelid subclass includes forms with no distinct head or parapodia but a clitellum?', options: ['Oligochaeta', 'Polychaeta', 'Hirudinea', 'Archiannelida'], answer: 'Oligochaeta' },
{ question: 'Which phylum is characterized by a hydrostatic skeleton formed by coelomic fluid?', options: ['Cnidaria', 'Mollusca', 'Annelida', 'Platyhelminthes'], answer: 'Annelida' },
{ question: 'What is the defining characteristic of pseudocoelomates?', options: ['Mesodermal lining around the gut', 'Blastocoel acts as a body cavity', 'Complete mesoderm lining body cavity', 'Lack of coelom'], answer: 'Blastocoel acts as a body cavity' },
{ question: 'In mollusks, which organ secretes the calcareous shell?', options: ['Mantle', 'Radula', 'Visceral mass', 'Foot'], answer: 'Mantle' },
{ question: 'Which order of leeches is identified by the presence of a proboscis?', options: ['Rhynchobdellida', 'Gnathobdellida', 'Acanthobdellida', 'Pharyngobdellida'], answer: 'Rhynchobdellida' },
{ question: 'What is the primary excretory structure in Platyhelminthes?', options: ['Flame cells', 'Nephridia', 'Malpighian tubules', 'Protonephridia'], answer: 'Flame cells' },
{ question: 'What distinguishes eu-cestodes from other flatworms?', options: ['Segmented body', 'Presence of a scolex', 'Parasitic in annelids', 'Direct lifecycle'], answer: 'Presence of a scolex' },
{ question: 'Which class of Mollusca includes organisms with a single, cap-shaped shell?', options: ['Monoplacophora', 'Polyplacophora', 'Cephalopoda', 'Gastropoda'], answer: 'Monoplacophora' },
{ question: 'Which order of cestodes parasitizes sharks and skates?', options: ['Diphyllidea', 'Tetraphyllidea', 'Cyclophyllidea', 'Tetrarhynchidea'], answer: 'Tetrarhynchidea' },
{ question: 'What is a characteristic feature of the coelomic epithelium in eucoelomates?', options: ['Secretes coelomic fluid', 'Forms gills', 'Lines blastocoel', 'Develops into endoderm'], answer: 'Secretes coelomic fluid' },
{ question: 'Which gastropod subclass lacks an operculum and includes slugs?', options: ['Opisthobranchia', 'Prosobranchia', 'Pulmonata', 'Cephalopoda'], answer: 'Opisthobranchia' },
{ question: 'What type of segmentation is exhibited by annelids?', options: ['External only', 'Internal only', 'Both internal and external', 'None'], answer: 'Both internal and external' },
{ question: 'Which group of mollusks is exclusively worm-shaped and lacks a shell?', options: ['Aplacophora', 'Monoplacophora', 'Cephalopoda', 'Polyplacophora'], answer: 'Aplacophora' },
{ question: 'Which order of Polychaeta consists of free-moving forms?', options: ['Errantia', 'Sedentaria', 'Archiannelida', 'Oligochaeta'], answer: 'Errantia' },
{ question: 'What unique structure in annelids connects their segments?', options: ['Septa', 'Proglottids', 'Annuli', 'Parapodia'], answer: 'Septa' },
{ question: 'What distinguishes Amphilina foliacea from true tapeworms?', options: ['Absence of segmentation', 'Presence of hooks', 'Intermediate hosts', 'Scolex with suckers'], answer: 'Absence of segmentation' },
{ question: 'What is the function of nephridia in annelids?', options: ['Excretion', 'Respiration', 'Locomotion', 'Reproduction'], answer: 'Excretion' },
{ question: 'Which annelid class is characterized by hermaphroditism and blood-sucking habits?', options: ['Polychaeta', 'Oligochaeta', 'Hirudinea', 'Archiannelida'], answer: 'Hirudinea' },
{ question: 'Which molluscan class is known for dorsoventral elongation and tentacles?', options: ['Cephalopoda', 'Gastropoda', 'Monoplacophora', 'Polyplacophora'], answer: 'Cephalopoda' },
{ question: 'Which phylum exhibits metamerism and a closed circulatory system?', options: ['Cnidaria', 'Mollusca', 'Annelida', 'Platyhelminthes'], answer: 'Annelida' },
{ question: 'Which structure enables respiration in pulmonate gastropods?', options: ['Mantle cavity', 'Osphradium', 'Gills', 'Siphon'], answer: 'Mantle cavity' },
{ question: 'Which molluscan subclass includes forms with vascularized mantle lungs?', options: ['Pulmonata', 'Opisthobranchia', 'Prosobranchia', 'Cephalopoda'], answer: 'Pulmonata' },
{ question: 'Which annelid group exhibits setae for movement but lacks parapodia?', options: ['Polychaeta', 'Oligochaeta', 'Hirudinea', 'Archiannelida'], answer: 'Oligochaeta' },
{ question: 'Which subclass of pulmonates includes the giant African land snail?', options: ['Stylommatophora', 'Basommatophora', 'Archaeopulmonata', 'Systellomatophora'], answer: 'Stylommatophora' },
{ question: 'What is a unique feature of the pharynx in Platyhelminthes?', options: ['Single opening for ingestion and egestion', 'Highly branched', 'Contains scolex', 'Contains proglottids'], answer: 'Single opening for ingestion and egestion' },
{ question: 'What structural feature enables bivalves to burrow efficiently?', options: ['Muscular foot', 'Radula', 'Setae', 'Mantle cavity'], answer: 'Muscular foot' },
{ question: 'Which order of annelids is composed of highly modified parasites of fishes?', options: ['Rhynchobdellida', 'Gnathobdellida', 'Acanthobdellida', 'Pharyngobdellida'], answer: 'Acanthobdellida' },
{ question: 'What distinguishes schizocoelomates from enterocoelomates?', options: ['Mesoderm splits to form coelom', 'Coelom arises from endoderm', 'Lack of coelom', 'Blastocoel persists'], answer: 'Mesoderm splits to form coelom' },
{ question: 'What structure in leeches helps them attach to hosts?', options: ['Suckers', 'Setae', 'Chaetae', 'Parapodia'], answer: 'Suckers' },
{ question: 'Which phylum exhibits radial cleavage during embryonic development?', options: ['Mollusca', 'Platyhelminthes', 'Cnidaria', 'Echinodermata'], answer: 'Echinodermata' },
{ question: 'What is a distinguishing feature of the order Tetraphyllidea?', options: ['Four bothria', 'Two bothria', 'Scolex with hooks', 'No scolex'], answer: 'Four bothria' },
{ question: 'What is the role of mesenteries in eucoelomates?', options: ['Suspending organs', 'Secreting coelomic fluid', 'Protecting external surface', 'Facilitating digestion'], answer: 'Suspending organs' },
{ question: 'Which gastropod subclass includes medically significant intermediate snail hosts?', options: ['Basommatophora', 'Stylommatophora', 'Pulmonata', 'Opisthobranchia'], answer: 'Basommatophora' },
{ question: 'Which molluscan class includes chitons with eight dorsal plates?', options: ['Polyplacophora', 'Monoplacophora', 'Gastropoda', 'Cephalopoda'], answer: 'Polyplacophora' },
{ question: 'What structure in cephalopods allows them to expel water for propulsion?', options: ['Siphon', 'Radula', 'Foot', 'Mantle cavity'], answer: 'Siphon' },
{ question: 'Which annelid subclass lacks setae and relies on a hydrostatic skeleton for movement?', options: ['Hirudinea', 'Polychaeta', 'Archiannelida', 'Oligochaeta'], answer: 'Hirudinea' },
{ question: 'Which molluscan class exhibits torsion during development?', options: ['Gastropoda', 'Cephalopoda', 'Bivalvia', 'Monoplacophora'], answer: 'Gastropoda' },

    { question: 'What is the study of animals called?', options: ['Zoology', 'Botany', 'Ecology'], answer: 'Zoology' },

    { question: 'Which animal is known as the king of the jungle?', options: ['Tiger', 'Lion', 'Cheetah'], answer: 'Lion' },

    { question: 'What do herbivores eat?', options: ['Meat', 'Plants', 'Both'], answer: 'Plants' },
    
{ question: 'What is a defining characteristic of all chordates?', options: ['Notochord', 'Backbone', 'Exoskeleton'], answer: 'Notochord' },  
{ question: 'Which subphylum of Chordata includes humans?', options: ['Urochordata', 'Cephalochordata', 'Vertebrata'], answer: 'Vertebrata' },  
{ question: 'What structure in chordates eventually develops into the spinal cord in vertebrates?', options: ['Notochord', 'Pharyngeal slits', 'Dorsal hollow nerve cord'], answer: 'Dorsal hollow nerve cord' },  
{ question: 'In which stage do Urochordates exhibit all chordate characteristics?', options: ['Adult', 'Larva', 'Both'], answer: 'Larva' },  
{ question: 'Which chordate group is characterized by a lack of a true backbone?', options: ['Urochordata', 'Cephalochordata', 'Both'], answer: 'Both' },  
{ question: 'What are pharyngeal slits primarily used for in aquatic chordates?', options: ['Respiration', 'Feeding', 'Both'], answer: 'Both' },  
{ question: 'Which chordate is considered a filter feeder?', options: ['Lancelet', 'Frog', 'Shark'], answer: 'Lancelet' },  
  { "question": "Open type of circulatory system is found:", "options": ["Pila only", "Cockroach only", "Both (a) & (b)", "None of these"], "answer": "Both (a) & (b)" },
  { "question": "Shell in pila is made up of:", "options": ["Silica only", "CaCO3", "CaCO3 + chitin", "Silica + CaCO3"], "answer": "CaCO3" },
  { "question": "Pila is:", "options": ["Aquatic", "Terrestrial", "Amphibious", "Arborial"], "answer": "Amphibious" },
  { "question": "Water vascular system is present in:", "options": ["Nematodes", "Molluscs", "Echinoderms", "Arthropods"], "answer": "Echinoderms" },
  { "question": "Water vascular system of coelomic canals is found in:", "options": ["Sponges", "Metridium", "Star-Fish", "None of these"], "answer": "Star-Fish" },
  { "question": "There are no copulatory organs in:", "options": ["Star-fish", "Cockroach", "Ascaris", "Mosquito"], "answer": "Star-fish" },
  { "question": "Madreporite is present in:", "options": ["Star-fish", "Ascaris", "Hydra", "House-fly"], "answer": "Star-fish" },
  { "question": "Sea-cucumber belongs to:", "options": ["Annelida", "Arthropoda", "Mullusca", "None of these"], "answer": "None of these" },
  { "question": "Forcep-like pedicellariae are used in star-fish for:", "options": ["Locomotion", "Copulation", "Food capture and cleaning body", "Excretion of wastes by the animal"], "answer": "Food capture and cleaning body" },
  { "question": "Excretory organs are totally absent in:", "options": ["Molluscs", "Arthropods", "View Answer", "Nematodes"], "answer": "Nematodes" },
  { "question": "Which of these animals respires through papillae:", "options": ["Star-fish", "Hydra", "Prawn", "Cockroach"], "answer": "Star-fish" },
  { "question": "Tube feet in star-fish are used for:", "options": ["Locomotion", "Food capturing", "Both of these", "None of these"], "answer": "Both of these" },
  { "question": "Pest of pearl-oyster is:", "options": ["Star-fish", "Crab", "Fish", "None of these"], "answer": "Star-fish" },
  { "question": "Spines are found on the body surface of:", "options": ["Sycon", "Cockroach", "House fly", "Star fish"], "answer": "Star fish" },
  { "question": "Animals with spiny skin are called:", "options": ["Arthropoda", "Mollusca", "Helminthes", "Echinodermata"], "answer": "Echinodermata" },
  { "question": "Star fish belongs to phylum:", "options": ["Cnidaria", "Nematoda", "Mollusca", "Echinodermata"], "answer": "Echinodermata" },
  { "question": "Which of these groups has exclusively marine animals:", "options": ["Echinodermata", "Cnidaria", "Mollusca", "None of these"], "answer": "Echinodermata" },
  { "question": "Which of these groups has no parasitic forms:", "options": ["Protozoa", "Nematoda", "Echinodermata", "Arthropoda"], "answer": "Echinodermata" },
  { "question": "Adult echinoderms are:", "options": ["Radially symmetrical", "Bilaterally symmetrical", "Statically symmetrical", "None of these"], "answer": "Radially symmetrical" },
  { "question": "Larvae of echinoderms are:", "options": ["Radially symmetrical", "Bilaterally symmetrical", "Statically symmetrical", "Asymmetrical"], "answer": "Bilaterally symmetrical" },
  { "question": "Larvae of star fish are:", "options": ["Asymmetrical", "Bilaterally symmetrical", "Irregular", "None of these"], "answer": "Bilaterally symmetrical" },
  { "question": "In which of these the sexual reproduction takes place without copulation:", "options": ["Cockroach", "Ascaris", "Star Fish", "Earthworm"], "answer": "Star Fish" },
  { "question": "Fertilization is external and occurring in sea water in:", "options": ["Star fish", "Mosquito", "Earthworm", "None of these"], "answer": "Star fish" },
  { "question": "Endoskeleton of calcareous plates is found in:", "options": ["Star-fish", "House fly", "Pila", "Cockroach"], "answer": "Star-fish" },
  { "question": "Ring canal is found in the:", "options": ["Digestive system of star-fish", "Respiratory system of star-fish", "Water vascular system of star-fish", "None of these"], "answer": "Water vascular system of star-fish" },
  { "question": "Ring-canal is found in:", "options": ["Cockroach", "Sycon", "Star-fish", "Metridium"], "answer": "Star-fish" },
  { "question": "Leathery skin is found in:", "options": ["Star-fish", "Sea-cucumber", "Both (a) & (b)", "None of these"], "answer": "Both (a) & (b)" },
  { "question": "A tube foot in starfish is made up of:", "options": ["Sucker", "Ampulla", "Both (a) & (b)", "None of these"], "answer": "Both (a) & (b)" },
  { "question": "A stone canal is found in the star-fish is the part of its:", "options": ["Digestive system", "Ambulacral system", "Both (a) & (b)", "None of these"], "answer": "Ambulacral system" },
  { "question": "Madreporite in star-fish is the opening of:", "options": ["Digestive system", "Water vascular system", "Both (a) & (b)", "None of these"], "answer": "Water vascular system" },
  { "question": "Sea-lilies are found in the group:", "options": ["Molluscs", "Echinoderms", "Arthropods", "Annelids"], "answer": "Echinoderms" },
  { "question": "Feather-stars and snake-stars/brittle stars are members of:", "options": ["Echinodermata", "Arthropoda", "Mollusca", "None of these"], "answer": "Echinodermata" },
  { "question": "Soft body enclosed in a hard calcareous shell is found in:", "options": ["Annelids", "Porifera", "Mollusca", "Cnidaria"], "answer": "Mollusca" },
  { "question": "Largest invertebrate giant squid belongs to phylum:", "options": ["Echinodermata", "Annelida", "Mollusca", "Arthropoda"], "answer": "Mollusca" },
  { "question": "Body is unsegmented in:", "options": ["Earthworm", "Tapeworm", "View Answer", "House fly"], "answer": "Tapeworm" },
  { "question": "Muscular foot is found in:", "options": ["Leech", "Pila", "Hydra", "Mosquito"], "answer": "Pila" },
{ "question": "Mantle is found in which of these animals:", "options": ["Lamellibranch", "Metridium", "Leech", "House fly"], "answer": "Lamellibranch" },
{ "question": "A cavity outside body called mantle cavity is found in:", "options": ["Molluscs", "Echinoderms", "Arthropods", "Cnidarians"], "answer": "Molluscs" },
{ "question": "Radula is found in the buccal cavity of:", "options": ["House fly", "Pila", "Lamellibranch", "Leech"], "answer": "Pila" }, 
{ question: 'What is the primary function of the post-anal tail in chordates?', options: ['Locomotion', 'Respiration', 'Sensory'], answer: 'Locomotion' },  
{ question: 'What do the endostyle and thyroid gland have in common in chordates?', options: ['Both are respiratory structures', 'Both are related to metabolism', 'Both produce mucus'], answer: 'Both are related to metabolism' },  
{ question: 'Which of the following is *not* a class within Vertebrata?', options: ['Amphibia', 'Aves', 'Echinodermata'], answer: 'Echinodermata' },  
{ question: 'What structure distinguishes Vertebrata from other chordates?', options: ['Pharyngeal slits', 'Backbone', 'Dorsal hollow nerve cord'], answer: 'Backbone' },  
{ question: 'Cephalochordates are commonly known as what?', options: ['Sea squirts', 'Lancelets', 'Tunicates'], answer: 'Lancelets' },  
{ question: 'What is the function of the notochord in chordates?', options: ['Protection', 'Support', 'Circulation'], answer: 'Support' },  
{ question: 'Which chordate subphylum includes sessile adults?', options: ['Urochordata', 'Cephalochordata', 'Vertebrata'], answer: 'Urochordata' },  
{ question: 'What distinguishes tunicates from other chordates?', options: ['They have a notochord as adults', 'They have a tunic made of cellulose', 'They lack a post-anal tail'], answer: 'They have a tunic made of cellulose' },  
{ question: 'Which of the following is the closest living relative of vertebrates?', options: ['Lancelets', 'Tunicates', 'Echinoderms'], answer: 'Tunicates' },  
{ question: 'What evolutionary advantage does the dorsal hollow nerve cord provide?', options: ['Better support', 'Faster nerve signal transmission', 'Improved digestion'], answer: 'Faster nerve signal transmission' },  
{ question: 'Which vertebrate group was the first to evolve jaws?', options: ['Agnatha', 'Chondrichthyes', 'Osteichthyes'], answer: 'Chondrichthyes' },  
{ question: 'What is the key difference between Agnatha and Gnathostomata?', options: ['Presence of jaws', 'Vertebral column', 'Presence of gills'], answer: 'Presence of jaws' },  
{ question: 'Which structure is homologous to the notochord in adult vertebrates?', options: ['Spinal cord', 'Vertebral column', 'Pharyngeal slits'], answer: 'Vertebral column' },  
{ question: 'What is the significance of pharyngeal slits in terrestrial vertebrates?', options: ['Respiration', 'Jaw and ear development', 'Support'], answer: 'Jaw and ear development' },  
{ question: 'Which class of vertebrates is characterized by having feathers?', options: ['Reptilia', 'Aves', 'Mammalia'], answer: 'Aves' },  
{ question: 'What is the evolutionary role of the post-anal tail in chordates?', options: ['Swimming', 'Digestion', 'Sensory perception'], answer: 'Swimming' },  
{ question: 'Which chordates lack a backbone but retain a notochord throughout life?', options: ['Lancelets', 'Tunicates', 'Amphibians'], answer: 'Lancelets' },  
{ question: 'What is the role of the endostyle in primitive chordates?', options: ['Filter feeding', 'Nerve signal transmission', 'Excretion'], answer: 'Filter feeding' },  
{ question: 'Which of these features do all chordates share at some stage in their life cycle?', options: ['Dorsal hollow nerve cord', 'Backbone', 'Fins'], answer: 'Dorsal hollow nerve cord' },  
{ question: 'What differentiates Cephalochordata from Vertebrata?', options: ['Cephalochordata lack a cranium', 'Cephalochordata lack pharyngeal slits', 'Cephalochordata lack a dorsal nerve cord'], answer: 'Cephalochordata lack a cranium' },  
{ question: 'Which chordate retains all primitive chordate characteristics as an adult?', options: ['Lancelet', 'Tunicate', 'Hagfish'], answer: 'Lancelet' },  
{ question: 'What feature is reduced in adult tunicates?', options: ['Notochord', 'Pharyngeal slits', 'Endostyle'], answer: 'Notochord' },  
{ question: 'What distinguishes vertebrates from lancelets and tunicates?', options: ['Cranium and vertebral column', 'Pharyngeal slits and tail', 'Presence of notochord'], answer: 'Cranium and vertebral column' },  
{ question: 'Which vertebrate class contains animals with a cartilaginous skeleton?', options: ['Chondrichthyes', 'Osteichthyes', 'Mammalia'], answer: 'Chondrichthyes' },  
{ question: 'What is the evolutionary significance of the amniotic egg in vertebrates?', options: ['Protection of embryos on land', 'Increased oxygen exchange', 'Improved waste removal'], answer: 'Protection of embryos on land' },  
{ question: 'Which chordate group shows segmentation in its muscles and nerves?', options: ['Cephalochordata', 'Urochordata', 'Both'], answer: 'Cephalochordata' },  
{ question: 'What is the primary role of the pharyngeal pouches in vertebrate embryos?', options: ['Forming gills or other structures', 'Locomotion', 'Feeding'], answer: 'Forming gills or other structures' },  
{ question: 'Which vertebrates were the first to colonize land?', options: ['Reptiles', 'Amphibians', 'Mammals'], answer: 'Amphibians' },  
{ question: 'What is the key distinction between Osteichthyes and Chondrichthyes?', options: ['Type of skeleton', 'Presence of gills', 'Presence of notochord'], answer: 'Type of skeleton' },  
{ question: 'What is the adaptive significance of paired fins in fish?', options: ['Improved locomotion', 'Better oxygen intake', 'Reproduction'], answer: 'Improved locomotion' },  
{ question: 'Which structure supports filter feeding in Cephalochordata?', options: ['Endostyle', 'Gill slits', 'Notochord'], answer: 'Endostyle' },  
{ question: 'What chordate feature is retained in humans during early development but lost later?', options: ['Post-anal tail', 'Endostyle', 'Pharyngeal slits'], answer: 'Post-anal tail' },  
{ question: 'What key evolutionary feature do mammals have compared to reptiles?', options: ['Hair and mammary glands', 'Scales and feathers', 'Lack of amniotic egg'], answer: 'Hair and mammary glands' },  
{ question: 'What is the main function of the cloaca in primitive chordates?', options: ['Excretion and reproduction', 'Respiration', 'Digestion'], answer: 'Excretion and reproduction' },  
{ question: 'Which group of chordates lacks paired appendages?', options: ['Agnatha', 'Chondrichthyes', 'Reptilia'], answer: 'Agnatha' },  
{ question: 'What characteristic of Urochordata suggests an evolutionary connection to vertebrates?', options: ['Notochord in larvae', 'Cartilaginous skeleton', 'Segmented muscles'], answer: 'Notochord in larvae' },  

  { question: 'What is the simplest grade of animal organization?', options: ['Protoplasmic', 'Cellular', 'Tissue', 'Organ-system'], answer: 'Protoplasmic' },
  { question: 'Which organism is an example of cellular grade organization?', options: ['Volvox', 'Frog', 'Earthworm', 'Bird'], answer: 'Volvox' },
  { question: 'What is the name of the layer surrounding the oocyte in a secondary follicle?', options: ['Zona pellucida', 'Corona radiata', 'Graafian follicle', 'Blastoderm'], answer: 'Zona pellucida' },
  { question: 'During which phase of development does the blastula form?', options: ['Cleavage', 'Gastrulation', 'Fertilization', 'Organogenesis'], answer: 'Cleavage' },
  { question: 'What is the cavity formed during gastrulation called?', options: ['Archenteron', 'Blastocoel', 'Coelom', 'Blastopore'], answer: 'Archenteron' },
  { question: 'Which germ layer gives rise to the nervous system?', options: ['Ectoderm', 'Mesoderm', 'Endoderm', 'Blastoderm'], answer: 'Ectoderm' },
  { question: 'What is the outermost germ layer in a gastrula?', options: ['Ectoderm', 'Endoderm', 'Mesoderm', 'Blastoderm'], answer: 'Ectoderm' },
  { question: 'Which type of cleavage occurs in telolecithal eggs with a high yolk content?', options: ['Meroblastic', 'Holoblastic', 'Spiral', 'Radial'], answer: 'Meroblastic' },
  { question: 'What is the primary role of the yolk in eggs?', options: ['Nourishment', 'Protection', 'Respiration', 'Waste removal'], answer: 'Nourishment' },
  { question: 'What is the name of the hollow spherical body formed during cleavage?', options: ['Blastula', 'Gastrula', 'Zygote', 'Morula'], answer: 'Blastula' },
  { question: 'What structure is responsible for gas exchange in echinoderms?', options: ['Papulae', 'Tube feet', 'Spines', 'Madreporite'], answer: 'Papulae' },
  { question: 'Which echinoderm exhibits pentamerous symmetry as an adult?', options: ['Sea star', 'Jellyfish', 'Octopus', 'Coral'], answer: 'Sea star' },
  { question: 'What type of symmetry is found in echinoderm larvae?', options: ['Bilateral', 'Radial', 'Asymmetrical', 'Spherical'], answer: 'Bilateral' },
  { question: 'What is the role of the madreporite in echinoderms?', options: ['Water entry point', 'Nutrient storage', 'Reproductive function', 'Sensory input'], answer: 'Water entry point' },
  { question: 'Which echinoderm is known for expelling its internal organs as a defense?', options: ['Sea cucumber', 'Sea star', 'Sea urchin', 'Feather star'], answer: 'Sea cucumber' },
  { question: 'Which structure in animals is formed through invagination during gastrulation?', options: ['Germ layers', 'Blastocoel', 'Blastoderm', 'Zona pellucida'], answer: 'Germ layers' },
  { question: 'What is the name of the cell cluster formed after cleavage?', options: ['Blastomeres', 'Rudiments', 'Oocytes', 'Follicles'], answer: 'Blastomeres' },
  { question: 'Which animals have microlecithal eggs?', options: ['Mammals', 'Birds', 'Reptiles', 'Amphibians'], answer: 'Mammals' },
  { question: 'What is the structure produced during cleavage in telolecithal eggs?', options: ['Blastoderm', 'Blastocoel', 'Blastodisc', 'Zona pellucida'], answer: 'Blastodisc' },
  { question: 'Which germ layer gives rise to the alimentary canal?', options: ['Endoderm', 'Ectoderm', 'Mesoderm', 'Blastoderm'], answer: 'Endoderm' },
  { question: 'What type of reproduction is common in echinoderms?', options: ['Sexual with external fertilization', 'Asexual by budding', 'Parthenogenesis', 'Hermaphroditic reproduction'], answer: 'Sexual with external fertilization' },
  { question: 'What is the embryonic stage after the blastula?', options: ['Gastrula', 'Zygote', 'Morula', 'Blastoderm'], answer: 'Gastrula' },
  { question: 'Which cleavage type results in unequal blastomeres?', options: ['Holoblastic', 'Meroblastic', 'Radial', 'Spiral'], answer: 'Meroblastic' },
  { question: 'What is the cavity inside the blastula called?', options: ['Blastocoel', 'Coelom', 'Archenteron', 'Blastodisc'], answer: 'Blastocoel' },
  { question: 'What does the term "ontogeny" refer to?', options: ['Individual development', 'Evolution of species', 'Cell division', 'Tissue differentiation'], answer: 'Individual development' },
  { question: 'Which type of cleavage occurs in amphibian eggs?', options: ['Holoblastic', 'Meroblastic', 'Radial', 'Spiral'], answer: 'Holoblastic' },
  { question: 'Which echinoderm has a calcareous endoskeleton?', options: ['Sea urchin', 'Sea star', 'Feather star', 'Sea cucumber'], answer: 'Sea urchin' },
  { question: 'Which is an example of an organ-system level animal?', options: ['Human', 'Cnidarian', 'Sponge', 'Flatworm'], answer: 'Human' },
  { question: 'Which organ rudiment develops into the nervous system?', options: ['Ectodermal rudiment', 'Mesodermal rudiment', 'Endodermal rudiment', 'Blastodermal rudiment'], answer: 'Ectodermal rudiment' },
  { question: 'What is the blastopore in embryonic development?', options: ['Opening to archenteron', 'Cavity in blastula', 'Germinal layer', 'Yolk sac'], answer: 'Opening to archenteron' },
  { question: 'Which echinoderm class lacks arms?', options: ['Echinoidea', 'Asteroidea', 'Holothuroidea', 'Ophiuroidea'], answer: 'Echinoidea' },
  { question: 'What is a characteristic feature of the water vascular system?', options: ['Hydraulic motion', 'Blood circulation', 'Gas exchange', 'Excretion'], answer: 'Hydraulic motion' },
  { question: 'Which echinoderm is sessile as an adult?', options: ['Sea lily', 'Sea star', 'Sea cucumber', 'Sea urchin'], answer: 'Sea lily' },
  { question: 'What is the feeding habit of most sea cucumbers?', options: ['Detritivores', 'Herbivores', 'Carnivores', 'Omnivores'], answer: 'Detritivores' },
  { question: 'Which echinoderm has a central disc and radiating arms?', options: ['Sea star', 'Sea cucumber', 'Sea urchin', 'Sea lily'], answer: 'Sea star' },
  { question: 'What is the primary function of tube feet in echinoderms?', options: ['Locomotion', 'Feeding', 'Defense', 'Reproduction'], answer: 'Locomotion' },
  { question: 'Which class of Echinodermata includes brittle stars?', options: ['Ophiuroidea', 'Asteroidea', 'Echinoidea', 'Holothuroidea'], answer: 'Ophiuroidea' },
  { question: 'Which animal undergoes metamorphosis during development?', options: ['Frog', 'Sea star', 'Earthworm', 'Shark'], answer: 'Frog' },
  { question: 'What is a larval feature absent in adults of many species?', options: ['Special organs', 'Extra appendages', 'Segmented body', 'Chitinous shell'], answer: 'Special organs' },
  { question: 'What are the extensions of the coelom in echinoderms called?', options: ['Tube feet', 'Papulae', 'Spines', 'Pedicellariae'], answer: 'Tube feet' },
  { question: 'What is the function of pedicellariae in echinoderms?', options: ['Body cleaning', 'Locomotion', 'Gas exchange', 'Reproduction'], answer: 'Body cleaning' },
  { question: 'Which structure helps echinoderms maintain body shape?', options: ['Calcareous endoskeleton', 'Spines', 'Ampullae', 'Coelom'], answer: 'Calcareous endoskeleton' },
  { question: 'What type of eggs do reptiles typically have?', options: ['Telolecithal', 'Microlecithal', 'Mesolecithal', 'Isolecithal'], answer: 'Telolecithal' },
  { question: 'Which class of echinoderms includes feather stars?', options: ['Crinoidea', 'Asteroidea', 'Echinoidea', 'Holothuroidea'], answer: 'Crinoidea' },
  { question: 'What is the main characteristic of the germinal layer mesoderm?', options: ['Forms muscles and vascular systems', 'Gives rise to skin', 'Develops into digestive glands', 'Produces excretory systems'], answer: 'Forms muscles and vascular systems' },
  { question: 'What is the function of ampullae in echinoderms?', options: ['Control tube feet movement', 'Filter nutrients', 'Store water', 'Facilitate reproduction'], answer: 'Control tube feet movement' },
  { question: 'What type of vascular system do echinoderms possess?', options: ['Water vascular system', 'Blood vascular system', 'Lymphatic vascular system', 'Closed vascular system'], answer: 'Water vascular system' },

  { question: 'What is the primary composition of the spicules in sponges?', options: ['Calcium carbonate', 'Silica', 'Chitin', 'Both calcium carbonate and silica'], answer: 'Both calcium carbonate and silica' },
  { question: 'What is the function of choanocytes in sponges?', options: ['Filter feeding', 'Gas exchange', 'Reproduction', 'Protection'], answer: 'Filter feeding' },
  { question: 'Which phylum exhibits metamerism most clearly?', options: ['Annelida', 'Arthropoda', 'Mollusca', 'Echinodermata'], answer: 'Annelida' },
  { question: 'Which embryonic structure in vertebrates develops into the spinal cord?', options: ['Neural tube', 'Notochord', 'Blastocoel', 'Archenteron'], answer: 'Neural tube' },
  { question: 'What is the term for the specialized stinging cells in cnidarians?', options: ['Cnidocytes', 'Nematocysts', 'Colloblasts', 'Amoebocytes'], answer: 'Cnidocytes' },
  { question: 'What is the primary locomotory structure in ctenophores?', options: ['Ciliary combs', 'Pseudopodia', 'Tentacles', 'Hydraulic tube feet'], answer: 'Ciliary combs' },
  { question: 'Which feature is characteristic of all protostomes?', options: ['Blastopore develops into mouth', 'Radial cleavage', 'Deuterostome development', 'Triploblastic body plan'], answer: 'Blastopore develops into mouth' },
  { question: 'What is the name of the excretory structure in flatworms?', options: ['Protonephridia', 'Nephridia', 'Malpighian tubules', 'Green glands'], answer: 'Protonephridia' },
  { question: 'Which animal phylum lacks a circulatory system entirely?', options: ['Porifera', 'Cnidaria', 'Platyhelminthes', 'All of the above'], answer: 'All of the above' },
  { question: 'Which cells in cnidarians are responsible for their regenerative ability?', options: ['Interstitial cells', 'Epidermal cells', 'Nematocysts', 'Gastrodermal cells'], answer: 'Interstitial cells' },
  { question: 'What is the primary characteristic of schizocoelomates?', options: ['Coelom forms by splitting mesoderm', 'Coelom forms by folding endoderm', 'No true coelom', 'Pseudocoelom'], answer: 'Coelom forms by splitting mesoderm' },
  { question: 'What is the primary role of the collar cells in sponges?', options: ['Creating water current', 'Providing structural support', 'Transporting nutrients', 'Reproducing sexually'], answer: 'Creating water current' },
  { question: 'Which structure develops into the vertebrate jaw?', options: ['Pharyngeal arches', 'Notochord', 'Neural crest cells', 'Gill slits'], answer: 'Pharyngeal arches' },
  { question: 'What is the primary function of the notochord in chordates?', options: ['Structural support', 'Nutrient transport', 'Reproduction', 'Gas exchange'], answer: 'Structural support' },
  { question: 'What is the term for the larval stage of annelids?', options: ['Trochophore', 'Planula', 'Nauplius', 'Veliger'], answer: 'Trochophore' },
  { question: 'What is the primary difference between open and closed circulatory systems?', options: ['Presence of capillaries', 'Type of heart', 'Oxygenation process', 'Size of blood vessels'], answer: 'Presence of capillaries' },
  { question: 'Which phylum is characterized by pseudocoelomates?', options: ['Nematoda', 'Platyhelminthes', 'Echinodermata', 'Annelida'], answer: 'Nematoda' },
  { question: 'What is the term for the feeding structure in mollusks?', options: ['Radula', 'Proboscis', 'Mandibles', 'Maxillae'], answer: 'Radula' },
  { question: 'Which structure in arthropods is responsible for excretion?', options: ['Malpighian tubules', 'Nephridia', 'Green glands', 'Protonephridia'], answer: 'Malpighian tubules' },
  { question: 'What is the primary composition of the exoskeleton in arthropods?', options: ['Chitin', 'Keratin', 'Calcium carbonate', 'Silica'], answer: 'Chitin' },
  { question: 'Which group of animals exhibits ecdysis?', options: ['Arthropods', 'Annelids', 'Echinoderms', 'Cnidarians'], answer: 'Arthropods' },
  { question: 'Which organ in mollusks secretes the shell?', options: ['Mantle', 'Radula', 'Foot', 'Visceral mass'], answer: 'Mantle' },
  { question: 'What is the term for the larval stage of echinoderms?', options: ['Bipinnaria', 'Planula', 'Nauplius', 'Trochophore'], answer: 'Bipinnaria' },
  { question: 'What is the primary function of the madreporite in echinoderms?', options: ['Regulating water flow into the vascular system', 'Respiration', 'Locomotion', 'Excretion'], answer: 'Regulating water flow into the vascular system' },
  { question: 'What is the main characteristic of nematodes that differentiates them from annelids?', options: ['Non-segmented body', 'Closed circulatory system', 'Presence of chaetae', 'Radial symmetry'], answer: 'Non-segmented body' },
  { question: 'Which animal has a triploblastic body but no coelom?', options: ['Flatworm', 'Roundworm', 'Earthworm', 'Starfish'], answer: 'Flatworm' },
  { question: 'Which structure in insects is analogous to the kidney in vertebrates?', options: ['Malpighian tubules', 'Nephridia', 'Protonephridia', 'Spiracles'], answer: 'Malpighian tubules' },
  { question: 'Which cells in amphibians function as multipurpose immune cells?', options: ['Leukocytes', 'Melanocytes', 'Macrophages', 'Erythrocytes'], answer: 'Macrophages' },
  { question: 'Which phylum includes animals that exhibit torsion during development?', options: ['Mollusca', 'Arthropoda', 'Annelida', 'Chordata'], answer: 'Mollusca' }, 
    
  { question: 'What is the largest land animal?', options: ['Elephant', 'Giraffe', 'Hippo', 'Rhinoceros'], answer: 'Elephant' },
  { question: 'What is the study of animals called?', options: ['Zoology', 'Botany', 'Ecology', 'Anatomy'], answer: 'Zoology' },
  { question: 'Which animal is known as the king of the jungle?', options: ['Lion', 'Tiger', 'Cheetah', 'Panther'], answer: 'Lion' },
  { question: 'What do herbivores eat?', options: ['Meat', 'Plants', 'Insects', 'Fruits'], answer: 'Plants' },
  { question: 'Which bird cannot fly?', options: ['Ostrich', 'Penguin', 'Emu', 'All of the above'], answer: 'All of the above' },
  { question: 'What is the fastest land animal?', options: ['Cheetah', 'Leopard', 'Horse', 'Kangaroo'], answer: 'Cheetah' },
  { question: 'What is the largest mammal?', options: ['Blue Whale', 'Elephant', 'Shark', 'Hippopotamus'], answer: 'Blue Whale' },
  { question: 'What is the smallest bird?', options: ['Hummingbird', 'Sparrow', 'Robin', 'Finch'], answer: 'Hummingbird' },
  { question: 'What do carnivores eat?', options: ['Meat', 'Plants', 'Both', 'Fruits'], answer: 'Meat' },
  { question: 'What is the tallest animal?', options: ['Giraffe', 'Elephant', 'Camel', 'Horse'], answer: 'Giraffe' },
  { question: 'What is the lifespan of an elephant in the wild?', options: ['50-70 years', '20-30 years', '100-120 years', '30-40 years'], answer: '50-70 years' },
  { question: 'Which animal is known as the ship of the desert?', options: ['Camel', 'Donkey', 'Horse', 'Llama'], answer: 'Camel' },
  { question: 'Which is the largest reptile?', options: ['Saltwater Crocodile', 'Komodo Dragon', 'Anaconda', 'Monitor Lizard'], answer: 'Saltwater Crocodile' },
  { question: 'What is the main characteristic of amphibians?', options: ['Live on land and water', 'Have scales', 'Lay eggs in sand', 'Have fur'], answer: 'Live on land and water' },
  { question: 'Which is the largest species of shark?', options: ['Whale Shark', 'Great White Shark', 'Hammerhead Shark', 'Bull Shark'], answer: 'Whale Shark' },
  { question: 'What type of animal is a cobra?', options: ['Snake', 'Lizard', 'Crocodile', 'Frog'], answer: 'Snake' },
  { question: 'What is the study of insects called?', options: ['Entomology', 'Ichthyology', 'Mycology', 'Herpetology'], answer: 'Entomology' },
  { question: 'Which animal is known to have 3 hearts?', options: ['Octopus', 'Squid', 'Jellyfish', 'Starfish'], answer: 'Octopus' },
  { question: 'What is a group of lions called?', options: ['Pride', 'Herd', 'Flock', 'Pack'], answer: 'Pride' },
  { question: 'Which animal is considered the largest carnivore on land?', options: ['Polar Bear', 'Grizzly Bear', 'Lion', 'Cheetah'], answer: 'Polar Bear' },
  { question: 'Which animal is known for its incredible memory?', options: ['Elephant', 'Dolphin', 'Monkey', 'Parrot'], answer: 'Elephant' },
  { question: 'What is the collective name for a group of crows?', options: ['Murder', 'Flock', 'Swarm', 'Horde'], answer: 'Murder' },
  { question: 'Which bird is known for its colorful feathers?', options: ['Peacock', 'Parrot', 'Kingfisher', 'Flamingo'], answer: 'Peacock' },
  { question: 'What is the slowest moving mammal?', options: ['Sloth', 'Turtle', 'Snail', 'Koala'], answer: 'Sloth' },
  { question: 'Which animal is known to change its color?', options: ['Chameleon', 'Octopus', 'Cuttlefish', 'All of the above'], answer: 'All of the above' },
  { question: 'Which animal is known as the "man’s best friend"?', options: ['Dog', 'Cat', 'Horse', 'Rabbit'], answer: 'Dog' },
  { question: 'Which mammal lays eggs?', options: ['Platypus', 'Kangaroo', 'Echidna', 'Both Platypus and Echidna'], answer: 'Both Platypus and Echidna' },
  { question: 'What is the primary diet of pandas?', options: ['Bamboo', 'Grass', 'Insects', 'Fish'], answer: 'Bamboo' },
  { question: 'Which animal is the largest of the primates?', options: ['Gorilla', 'Chimpanzee', 'Orangutan', 'Baboon'], answer: 'Gorilla' },
  { question: 'Which fish is known to be the fastest swimmer?', options: ['Sailfish', 'Tuna', 'Marlin', 'Barracuda'], answer: 'Sailfish' },
  { question: 'What is the name of the only marsupial found in North America?', options: ['Opossum', 'Kangaroo', 'Koala', 'Wallaby'], answer: 'Opossum' },
  { question: 'What type of animal is a gecko?', options: ['Lizard', 'Snake', 'Frog', 'Bird'], answer: 'Lizard' },
  { question: 'Which animal has the most number of teeth?', options: ['Snail', 'Shark', 'Dolphin', 'Crocodile'], answer: 'Snail' },
  { question: 'What is the primary feature of mollusks?', options: ['Soft body', 'Hard exoskeleton', 'Segmented body', 'Cold-blooded'], answer: 'Soft body' },
  { question: 'Which animal has the longest lifespan?', options: ['Tortoise', 'Elephant', 'Whale', 'Parrot'], answer: 'Tortoise' },
  { question: 'What is the main diet of bats?', options: ['Insects', 'Fruits', 'Blood', 'All of the above'], answer: 'All of the above' },
  { question: 'Which bird is known for mimicking human speech?', options: ['Parrot', 'Crow', 'Magpie', 'Raven'], answer: 'Parrot' },
  { question: 'What is the fastest bird?', options: ['Peregrine Falcon', 'Eagle', 'Hawk', 'Ostrich'], answer: 'Peregrine Falcon' },
  { question: 'Which animal is famous for playing dead when threatened?', options: ['Opossum', 'Skunk', 'Armadillo', 'Hedgehog'], answer: 'Opossum' },
  { question: 'What is the largest type of deer?', options: ['Moose', 'Elk', 'Caribou', 'Reindeer'], answer: 'Moose' },

    { question: 'Which bird cannot fly?', options: ['Ostrich', 'Sparrow', 'Eagle'], answer: 'Ostrich' },

    { question: 'What is the fastest land animal?', options: ['Cheetah', 'Leopard', 'Horse'], answer: 'Cheetah' },

    { question: 'What is the largest mammal?', options: ['Blue Whale', 'Elephant', 'Shark'], answer: 'Blue Whale' },

    { question: 'What is the smallest bird?', options: ['Hummingbird', 'Sparrow', 'Parrot'], answer: 'Hummingbird' },
    { question: 'What do carnivores eat?', options: ['Meat', 'Plants', 'Both'], answer: 'Meat' },

    { question: 'What is the tallest animal?', options: ['Giraffe', 'Elephant', 'Camel'], answer: 'Giraffe' },

  ],

  // Add questions for biology, chemistry, and physics in the same structure

biology: [
  
  {
    "question": "Open type of circulatory system is found:",
    "options": ["Pila only", "Cockroach only", "Both (a) & (b)", "None of these"],
    "answer": "Both (a) & (b)"},
  {
    "question": "Shell in pila is made up of:",
    "options": ["Silica only", "CaCO3", "CaCO3 + chitin", "Silica + CaCO3"],
    "answer": "CaCO3",
    "image": "https://via.placeholder.com/150?text=Pila+Shell"
  },
  {
    "question": "Pila is:",
    "options": ["Aquatic", "Terrestrial", "Amphibious", "Arborial"],
    "answer": "Amphibious",
    "image": "https://via.placeholder.com/150?text=Pila"
  },
  {
    "question": "Water vascular system is present in:",
    "options": ["Nematodes", "Molluscs", "Echinoderms", "Arthropods"],
    "answer": "Echinoderms",
    "image": "https://via.placeholder.com/150?text=Water+Vascular+System"
  },
  {
    "question": "Water vascular system of coelomic canals is found in:",
    "options": ["Sponges", "Metridium", "Star-Fish", "None of these"],
    "answer": "Star-Fish",
    "image": "https://via.placeholder.com/150?text=Starfish+Vascular+System"
  },
  {
    "question": "There are no copulatory organs in:",
    "options": ["Star-fish", "Cockroach", "Ascaris", "Mosquito"],
    "answer": "Star-fish",
    "image": "https://via.placeholder.com/150?text=Starfish+Reproduction"
  },
  {
    "question": "Madreporite is present in:",
    "options": ["Star-fish", "Ascaris", "Hydra", "House-fly"],
    "answer": "Star-fish",
    "image": "https://via.placeholder.com/150?text=Madreporite"
  },
  {
    "question": "Sea-cucumber belongs to:",
    "options": ["Annelida", "Arthropoda", "Mullusca", "None of these"],
    "answer": "None of these",
    "image": "https://via.placeholder.com/150?text=Sea+Cucumber"
  },
  {
    "question": "Forcep-like pedicellariae are used in star-fish for:",
    "options": ["Locomotion", "Copulation", "Food capture and cleaning body", "Excretion of wastes by the animal"],
    "answer": "Food capture and cleaning body",
    "image": "https://via.placeholder.com/150?text=Starfish+Pedicellariae"
  },
  {
    "question": "Excretory organs are totally absent in:",
    "options": ["Molluscs", "Arthropods", "View Answer", "Nematodes"],
    "answer": "Nematodes",
    "image": "https://via.placeholder.com/150?text=Nematodes"
  },
  {
    "question": "Which of these animals respires through papillae:",
    "options": ["Star-fish", "Hydra", "Prawn", "Cockroach"],
    "answer": "Star-fish",
    "image": "https://via.placeholder.com/150?text=Respiration"
  },
  {
    "question": "Tube feet in star-fish are used for:",
    "options": ["Locomotion", "Food capturing", "Both of these", "None of these"],
    "answer": "Both of these",
    "image": "https://via.placeholder.com/150?text=Tube+Feet"
  },
  {
    "question": "Pest of pearl-oyster is:",
    "options": ["Star-fish", "Crab", "Fish", "None of these"],
    "answer": "Star-fish",
    "image": "https://via.placeholder.com/150?text=Pest"
  },
  {
    "question": "Spines are found on the body surface of:",
    "options": ["Sycon", "Cockroach", "House fly", "Star fish"],
    "answer": "Star fish",
    "image": "https://via.placeholder.com/150?text=Spiny+Surface"
  },
  {
    "question": "Animals with spiny skin are called:",
    "options": ["Arthropoda", "Mollusca", "Helminthes", "Echinodermata"],
    "answer": "Echinodermata",
    "image": "https://via.placeholder.com/150?text=Spiny+Skin"
  },
  {
    "question": "Star fish belongs to phylum:",
    "options": ["Cnidaria", "Nematoda", "Mollusca", "Echinodermata"],
    "answer": "Echinodermata",
    "image": "https://via.placeholder.com/150?text=Phylum+Starfish"
  },
  {
    "question": "Which of these groups has exclusively marine animals:",
    "options": ["Echinodermata", "Cnidaria", "Mollusca", "None of these"],
    "answer": "Echinodermata",
    "image": "https://via.placeholder.com/150?text=Marine+Animals"
  },
  {
    "question": "Which of these groups has no parasitic forms:",
    "options": ["Protozoa", "Nematoda", "Echinodermata", "Arthropoda"],
    "answer": "Echinodermata",
    "image": "https://via.placeholder.com/150?text=No+Parasites"
  },
  {
    "question": "Adult echinoderms are:",
    "options": ["Radially symmetrical", "Bilaterally symmetrical", "Statically symmetrical", "None of these"],
    "answer": "Radially symmetrical",
    "image": "https://via.placeholder.com/150?text=Adult+Echinoderms"
  },
  {
    "question": "Larvae of echinoderms are:",
    "options": ["Radially symmetrical", "Bilaterally symmetrical", "Statically symmetrical", "Asymmetrical"],
    "answer": "Bilaterally symmetrical",
    "image": "https://via.placeholder.com/150?text=Echinoderm+Larvae"
  },
  {
    "question": "Larvae of star fish are:",
    "options": ["Asymmetrical", "Bilaterally symmetrical", "Irregular", "None of these"],
    "answer": "Bilaterally symmetrical",
    "image": "https://via.placeholder.com/150?text=Starfish+Larvae"
  },
  {
    "question": "In which of these the sexual reproduction takes place without copulation:",
    "options": ["Cockroach", "Ascaris", "Star Fish", "Earthworm"],
    "answer": "Star Fish",
    "image": "https://via.placeholder.com/150?text=Reproduction"
  },
  {
    "question": "Fertilization is external and occurring in sea water in:",
    "options": ["Star fish", "Mosquito", "Earthworm", "None of these"],
    "answer": "Star fish",
    "image": "https://via.placeholder.com/150?text=Fertilization"
  }
], 

'Animal Systematics': [
  
  { 
    "question": "Systematics is broadly defined as the study of:", 
    "options": ["Taxonomic hierarchy", "Organic diversity", "Ecological adaptations", "Genetic mutations"], 
    "answer": "Organic diversity" 
  },
  { 
    "question": "Who defined systematics as 'the scientific study of kinds and diversity of organisms and of any and all relationships among them'?", 
    "options": ["Linnaeus", "Simpson", "Candolle", "Blackwell"], 
    "answer": "Simpson" 
  },
  { 
    "question": "The term 'taxonomy' was introduced by:", 
    "options": ["Blackwell", "A. P. de Candolle", "Linnaeus", "Simpson"], 
    "answer": "A. P. de Candolle" 
  },
  { 
    "question": "The Greek word 'taxis' in taxonomy means:", 
    "options": ["Law", "Arrangement", "Evolution", "Order"], 
    "answer": "Arrangement" 
  },
  { 
    "question": "Modern taxonomy aims to:", 
    "options": ["Avoid ecological studies", "Provide methods of identification and interpret evolutionary processes", "Focus only on fossils", "Classify organisms into arbitrary groups"], 
    "answer": "Provide methods of identification and interpret evolutionary processes" 
  },
  { 
    "question": "What is the primary purpose of classification in taxonomy?", 
    "options": ["Organizing organisms into distinct groups", "Studying vernacular names", "Analyzing molecular data exclusively", "Focusing on behavioral studies"], 
    "answer": "Organizing organisms into distinct groups" 
  },
  { 
    "question": "Which is a key product of biological classification?", 
    "options": ["Reconstruction of evolutionary pathways", "Identification of fossil structures", "Focus on species fixity", "Simplifying biodiversity through vernacular names"], 
    "answer": "Reconstruction of evolutionary pathways" 
  },
  { 
    "question": "Systematics contributes to biodiversity conservation by:", 
    "options": ["Documenting extant species only", "Focusing on taxonomic nomenclature", "Identifying and prioritizing unique and endangered species", "Studying ancient ecological systems"], 
    "answer": "Identifying and prioritizing unique and endangered species" 
  },
  { 
    "question": "Phylogenetic analysis is used to:", 
    "options": ["Study evolutionary pathways", "Analyze ecological niches", "Focus on taxonomic ranks only", "Identify vernacular names"], 
    "answer": "Study evolutionary pathways" 
  },
  { 
    "question": "Who first derived the term 'taxonomy' from its Greek roots?", 
    "options": ["Linnaeus", "A. P. de Candolle", "Simpson", "Blackwell"], 
    "answer": "A. P. de Candolle" 
  },
  { 
    "question": "The primary distinction between taxonomy and systematics is:", 
    "options": ["Taxonomy focuses on fossils; systematics focuses on living organisms", "Systematics deals with evolutionary relationships, taxonomy deals with practical classification", "Systematics avoids phylogenetic analysis", "Taxonomy includes geological studies"], 
    "answer": "Systematics deals with evolutionary relationships, taxonomy deals with practical classification" 
  },
  { 
    "question": "The Latin roots 'classis' and 'facere' in classification mean:", 
    "options": ["Law and order", "Class and make", "Species and formation", "Evolution and adaptation"], 
    "answer": "Class and make" 
  },
  { 
    "question": "Biological classification involves assigning organisms to:", 
    "options": ["Random groups", "Taxa indicating relationships", "Groups based on vernacular names", "Non-hierarchical clusters"], 
    "answer": "Taxa indicating relationships" 
  },
  { 
    "question": "Systematics provides independent evidence for:", 
    "options": ["Geological patterns", "Behavioral traits", "Modern ecological adaptations", "Molecular evolution exclusively"], 
    "answer": "Geological patterns" 
  },
  { 
    "question": "Systematics is foundational for:", 
    "options": ["Comparative biology", "Vernacular nomenclature", "Molecular taxonomy only", "Behavioral ecology exclusively"], 
    "answer": "Comparative biology" 
  },
  { 
    "question": "The study of phylogenetic patterns can help in:", 
    "options": ["Predicting traits in related taxa", "Analyzing vernacular differences", "Classifying organisms into distinct behavior groups", "Avoiding fossil records"], 
    "answer": "Predicting traits in related taxa" 
  },
  { 
    "question": "Modern taxonomy incorporates:", 
    "options": ["Species fixity concepts", "Evolutionary and molecular data", "Exclusively fossil-based studies", "Avoidance of numerical taxonomy"], 
    "answer": "Evolutionary and molecular data" 
  },
  { 
    "question": "What is a major contribution of phylogenetic analysis?", 
    "options": ["Elimination of extinct taxa", "Reconstruction of the history of life", "Introduction of vernacular systems", "Avoiding molecular comparisons"], 
    "answer": "Reconstruction of the history of life" 
  },
  { 
    "question": "Systematics organizes biodiversity for:", 
    "options": ["Public awareness only", "Researchers and conservation priorities", "Focus on vernacular nomenclature", "Eliminating fossil-based data"], 
    "answer": "Researchers and conservation priorities" 
  },
  { 
    "question": "Classification requires comparison of entities based on:", 
    "options": ["Genetic similarity alone", "Differences and similarities", "Behavioral traits only", "Fossil records exclusively"], 
    "answer": "Differences and similarities" 
  }, 

  { 
    "question": "Systematics provides hypotheses of:", 
    "options": ["Behavioral traits", "The history of life", "Geographical adaptations", "Molecular pathways"], 
    "answer": "The history of life" 
  },
  { 
    "question": "Who defined taxonomy as 'the day-to-day practice of dealing with kinds of organisms'?", 
    "options": ["Simpson", "Blackwell", "Candolle", "Linnaeus"], 
    "answer": "Blackwell" 
  },
  { 
    "question": "A taxonomist decides whether differences between organisms are due to:", 
    "options": ["Behavioral adaptations", "Environmental adaptation or common ancestry", "Genetic mutations exclusively", "Fossil evidence"], 
    "answer": "Environmental adaptation or common ancestry" 
  },
  { 
    "question": "Which of the following is not a key aim of taxonomy?", 
    "options": ["Detecting evolutionary processes", "Providing a convenient method of identification", "Focusing on vernacular names", "Expressing natural relationships of organisms"], 
    "answer": "Focusing on vernacular names" 
  },
  { 
    "question": "The practical aspect of taxonomy involves:", 
    "options": ["Theoretical classification rules", "Handling and identifying specimens", "Avoiding molecular studies", "Focusing on extinct organisms only"], 
    "answer": "Handling and identifying specimens" 
  },
  { 
    "question": "The results of biological classification provide insights into:", 
    "options": ["Behavioral patterns", "Species formation and evolutionary trends", "Random ecological adaptations", "Regional nomenclature"], 
    "answer": "Species formation and evolutionary trends" 
  },
  { 
    "question": "Systematics aids geologists by:", 
    "options": ["Reconstructing landmass changes", "Identifying behavior traits", "Analyzing fossilized DNA", "Mapping ecological regions"], 
    "answer": "Reconstructing landmass changes" 
  },
  { 
    "question": "What is a long-standing role of systematics?", 
    "options": ["Providing vernacular names", "Documenting and identifying new species", "Avoiding fossil data", "Focusing solely on molecular data"], 
    "answer": "Documenting and identifying new species" 
  },
  { 
    "question": "In taxonomy, 'nomen' from Greek means:", 
    "options": ["Order", "Law", "Name", "Arrange"], 
    "answer": "Name" 
  },
  { 
    "question": "Which term refers to the grouping of organisms to indicate relationships?", 
    "options": ["Taxonomy", "Classification", "Systematics", "Nomenclature"], 
    "answer": "Classification" 
  },
  { 
    "question": "Phylogenetic analysis combines data from:", 
    "options": ["DNA only", "Extant organisms and fossils", "Behavioral studies exclusively", "Ecological adaptations"], 
    "answer": "Extant organisms and fossils" 
  },
  { 
    "question": "Common ancestry results in organisms sharing:", 
    "options": ["Behavioral patterns", "Character states", "Fossil evidence", "Vernacular names"], 
    "answer": "Character states" 
  },
  { 
    "question": "Systematics supports biodiversity conservation by:", 
    "options": ["Ignoring evolutionary processes", "Prioritizing unique species for conservation", "Focusing only on fossils", "Analyzing behavioral traits"], 
    "answer": "Prioritizing unique species for conservation" 
  },
  { 
    "question": "Which is not a role of systematics?", 
    "options": ["Providing molecular pathways", "Hypothesizing life’s history", "Organizing biodiversity", "Mapping geological patterns"], 
    "answer": "Providing molecular pathways" 
  },
  { 
    "question": "Classification demands:", 
    "options": ["Ignoring similarities", "Detection of differences and similarities", "Focus on fossil analysis exclusively", "Avoiding ecological studies"], 
    "answer": "Detection of differences and similarities" 
  },
  { 
    "question": "Simpson defined taxonomy as:", 
    "options": ["The practice of arranging organisms", "The theoretical study of classification principles", "The study of fossils", "A synonym for systematics"], 
    "answer": "The theoretical study of classification principles" 
  },
  { 
    "question": "The term 'systematics' derives from:", 
    "options": ["Greek", "Latinized Greek", "Latin", "Modern English"], 
    "answer": "Latinized Greek" 
  },
  { 
    "question": "What distinguishes systematics from taxonomy?", 
    "options": ["Systematics focuses on classification techniques", "Systematics includes evolutionary relationships", "Systematics avoids nomenclature", "Systematics excludes fossils"], 
    "answer": "Systematics includes evolutionary relationships" 
  },
  { 
    "question": "Which is an essential step in classification?", 
    "options": ["Using vernacular names", "Arranging organisms into groups based on relationships", "Avoiding molecular comparisons", "Ignoring evolutionary data"], 
    "answer": "Arranging organisms into groups based on relationships" 
  },
  { 
    "question": "Modern systematics integrates data from:", 
    "options": ["Molecular, ecological, and fossil evidence", "Behavioral studies only", "Fossil records exclusively", "Regional species distribution"], 
    "answer": "Molecular, ecological, and fossil evidence" 
  }
], 
  

};

// Track score and current question

let currentScore = 0;

let currentQuestionIndex = 0;

let selectedQuestions = [];

// Open Login Modal

function openLoginModal(department) {

  document.getElementById('loginModal').classList.add('show');

  document.getElementById('loginForm').onsubmit = function (e) {

    e.preventDefault();

    const code = document.getElementById('accessCode').value;

    if (code === accessCodes[department]) {

      startExam(department);

    } else {

      alert('Invalid access code!');

    }

  };

}

// Close Login Modal

function closeLoginModal() {

  document.getElementById('loginModal').classList.remove('show');

}

// Start Exam

function startExam(department) {

  document.getElementById('loginModal').classList.remove('show');

  document.getElementById('homepage').style.display = 'none';

  document.getElementById('exam-questions').style.display = 'block';

  document.getElementById('exam-title').innerText = `Practice Questions: ${department.charAt(0).toUpperCase() + department.slice(1)}`;

  // Randomly select 10 questions

  selectedQuestions = questions[department].sort(() => 1.3 - Math.random()).slice(0, 40);

  currentScore = 0;

  currentQuestionIndex = 0;

  displayQuestion();

}

// Display Current Question

function displayQuestion() {

  const container = document.getElementById('questions-container');

  container.innerHTML = '';

  if (currentQuestionIndex < selectedQuestions.length) {

    const currentQuestion = selectedQuestions[currentQuestionIndex];

    const questionDiv = document.createElement('div');

    questionDiv.classList.add('question');

    questionDiv.innerHTML = `

      <h3>${currentQuestionIndex + 1}. ${currentQuestion.question}</h3>

      <ul class="options">

        ${currentQuestion.options

          .map(

            (option) =>

              `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`

          )

          .join('')}

      </ul>

    `;

    container.appendChild(questionDiv);

  } else {

    displaySummary();

  }

}

// Check Answer

function checkAnswer(selectedOption) {

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {

    currentScore++;

    alert('Correct!');

  } else {

    alert(`Wrong! The correct answer is ${currentQuestion.answer}.`);

  }

  currentQuestionIndex++;

  displayQuestion();

}

// Display Summary

function displaySummary() {

  const container = document.getElementById('questions-container');

  container.innerHTML = `

    <h3>Exam Summary</h3>

    <p>You scored ${currentScore} out of ${selectedQuestions.length}.</p>

    <p>${currentScore >= 30 ? 'Congratulations, you passed!' : 'Sorry, you failed. Try again!'}</p>

    <button class="button" onclick="goToHomepage()">Back to Homepage</button>

  `;

}

// Go Back to Homepage

function goToHomepage() {

  document.getElementById('exam-questions').style.display = 'none';

  document.getElementById('homepage').style.display = 'block';

}

if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker Registered'))
        .catch((error) => console.error('Service Worker Registration Failed:', error));
  }
