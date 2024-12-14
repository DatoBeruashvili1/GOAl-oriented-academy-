const friendsAges = new Map();


friendsAges.set("kazaxistana", 25);
friendsAges.set("kamaza", 30);
friendsAges.set("shurika", 28);

for (const [name, age] of friendsAges) {
    console.log(`${name} is ${age} years old.`);
}


const colors = new Set();


colors.add("blue");
colors.add("green");
colors.add("yellow");
colors.add("red");
colors.add("purple");


if (colors.has("red")) {
    console.log("The color 'red' is in the set.");
} else {
    console.log("The color 'red' is not in the set.");
}