const countryCapitals = new Map();

countryCapitals.set("Georgia", "Tbilisi");
countryCapitals.set("France", "Paris");
countryCapitals.set("Spain", "Madrid");

for (const [country, capital] of countryCapitals) {
  console.log(`Country: ${country}, Capital: ${capital}`);
}


const cities = new Map();

cities.set("Georgia", "Tbilisi");
cities.set("France", "Paris");
cities.set("Spain", "Madrid");

if (cities.has("Tbilisi")) {
  console.log("The key 'Tbilisi' exists in the Map.");
} else {
  console.log("The key 'Tbilisi' does not exist in the Map.");
}


const studentScores = new Map();

studentScores.set("John", 85);
studentScores.set("Jane", 92);
studentScores.set("Peter", 78);

const johnScore = studentScores.get("John");
console.log(`John's score is: ${johnScore}`);


const countries = new Map();

countries.set("Georgia", "Tbilisi");
countries.set("France", "Paris");
countries.set("Spain", "Madrid");

for (const country of countries.keys()) {
  console.log(country);
}

const cityInfo = new Map();

cityInfo.set("City", "London");
cityInfo.set("Population", 8900000);

cityInfo.delete("City");

console.log(cityInfo);

const fruits = new Map();

fruits.set("Apple", 10);
fruits.set("Banana", 5);
fruits.set("Orange", 8)