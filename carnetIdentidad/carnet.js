const person = {
  name: "Marisela",
  job: "Developer",
  city: "Valencia",
  dateOfBirth: 1959,
};

const actualYear = 2026;

console.log(
  `Hola, me llamo ${person.name}, vivo en ${person.city} y trabajo como ${person.job}. Tengo ${actualYear - person.dateOfBirth} años.`,
);
