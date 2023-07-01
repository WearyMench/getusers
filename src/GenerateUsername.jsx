const nombres = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "Elijah",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Evelyn",
  "Alexander",
  "Harper",
  "Michael",
  "Abigail",
  "Daniel",
  "Emily",
  "Matthew",
  "Elizabeth",
  "Joseph",
  "Mila",
  "Samuel",
  "Ella",
  "Sebastian",
  "Avery",
  "David",
  "Sofia",
  "Carter",
  "Camila",
  "Wyatt",
  "Aria",
  "Jayden",
  "Scarlett",
  "John",
  "Victoria",
  "Owen",
  "Grace",
  "Dylan",
  "Chloe",
  "Luke",
  "Penelope",
  "Gabriel",
  "Layla",
  "Anthony",
  "Riley",
  "Isaac",
  "Zoey",
  "Grayson",
  "Nora",
  "Jack",
  "Lily",
  "Julian",
  "Eleanor",
  "Levi",
  "Hannah",
  "Christopher",
  "Lillian",
  "Joshua",
  "Addison",
  "Andrew",
  "Aubrey",
  "Lincoln",
  "Stella",
  "Mateo",
  "Natalie",
  "Ryan",
  "Zoe",
  "Jaxon",
  "Leah",
  "Nathan",
  "Hazel",
  "Aaron",
  "Violet",
  "Isaiah",
  "Aurora",
  "Thomas",
  "Savannah",
  "Charles",
  "Audrey",
  "Caleb",
  "Brooklyn",
  "Josiah",
  "Bella",
  "Christian",
  "Claire",
  "Hunter",
  "Skylar",
  "Eli",
  "Lucy",
  "Jonathan",
  "Paisley",
  "Connor",
  "Everly",
  "Landon",
  "Anna",
  "Adrian",
  "Caroline",
  "Asher",
  "Nova",
  "Cameron",
  "Genesis",
  "Leo",
  "Emilia",
  "Theodore",
  "Kennedy",
  "Jeremiah",
  "Samantha",
  "Hudson",
  "Maya",
  "Robert",
  "Willow",
  "Easton",
  "Kinsley",
  "Nolan",
  "Naomi",
  "Nicholas",
  "Aaliyah",
  "Ezra",
  "Elena",
  "Colton",
  "Sarah",
  "Angel",
  "Ariana",
  "Brayden",
  "Allison",
  "Jordan",
  "Gabriella",
  "Dominic",
  "Alice",
  "Austin",
  "Madelyn",
  "Ian",
  "Cora",
  "Adam",
  "Ruby",
  "Elias",
  "Eva",
  "Jaxson",
  "Serena",
  "Greyson",
  "Autumn",
  "Jose",
  "Adeline",
  "Ezekiel",
  "Hailey",
  "Carson",
  "Ginebra",
];

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function GenerateUsernames() {
  const nombresAleatorios = [];

  while (nombresAleatorios.length < 12) {
    const indiceAleatorio = generarNumeroAleatorio(0, nombres.length - 1);
    const nombreAleatorio = nombres[indiceAleatorio];

    if (!nombresAleatorios.includes(nombreAleatorio)) {
      nombresAleatorios.push(nombreAleatorio);
    }
  }

  return nombresAleatorios;
}
