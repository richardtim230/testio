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

  zoology: 'zoo123',

  biology: 'bio456',

  chemistry: 'chem789',
  botany: 'bot009', 

  physics: 'phys101',

};

// Questions for each department (randomize 10 questions per session)

const questions = {

  zoology: [

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
