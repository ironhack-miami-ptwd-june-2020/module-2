const mongoose = require("mongoose");

// mongoose
//     .connect("mongodb://localhost/exampleApp", {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//     })
//     .then((blah) => {
//         console.log(
//             `Connected to Mongo! Database name: "${blah.connections[0].name}"`
//         );

//         const Cat = mongoose.model("Cat", {
//             name: String,
//             color: String,
//             age: Number,
//             kittens: [Object],
//             favFood: String,
//         });

//         // const kitty = new Cat({
//         //     name: "Felix",
//         //     color: "Yellow",
//         //     favFood: "Unknown",
//         // });

//         Cat.find()
//             .then((catsFromDb) => {
//                 console.log({ catsFromDb });
//                 mongoose.disconnect();
//             })
//             .catch((err) =>
//                 console.log(`error searching for all cats: ${err}`)
//             );

//         // kitty
//         //     .save()
//         //     .then((newCat) => {
//         //         console.log(`A new cat is created: ${newCat}!`);
//         //         mongoose.disconnect();
//         //     })
//         //     .catch((err) =>
//         //         console.log(`Error while creating a new cat: ${err}`)
//         //     );
//     })
//     .catch((err) => console.error("Error connecting to mongo", err));

const Cat = mongoose.model("Cat", {
    name: String,
    color: String,
    age: Number,
    kittens: [Object],
    favFood: String,
});

mongoose
    .connect("mongodb://localhost/exampleApp", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
        Cat.collection.drop();

        addTenCats();

        /* We have to wait for our cats to save before displaying them
        Remember, it's async */
        setTimeout(showCats, 1500);

        setTimeout(() => {
            mongoose.disconnect();
        }, 5000);
    })
    .catch((err) => console.error("Error connecting to mongo", err));

function addNewCat(catObj) {
    const kitty = new Cat(catObj);

    kitty
        .save()
        .then((newCat) => console.log(`A new cat is created: ${newCat}!`))
        .catch((err) => console.log(`Error while creating a new cat: ${err}`));
}

function showCats() {
    console.log("All the CATS!");
    Cat.find()
        .then((catsFromDB) => {
            // catsFromDB is an array of Cat instances
            catsFromDB.forEach((oneCat) =>
                console.log(` --> cat: ${oneCat.name}`)
            );
        })
        .catch((err) =>
            console.log(`Error occurred during getting cats from DB: ${err}`)
        );
}

const catNames = [
    "Tiger",
    "Tony",
    "Bob",
    "Klauss",
    "Chocolate",
    "Keiffer",
    "Tom",
    "Frenchy",
];
const colorArray = [
    "Orange",
    "Yellow",
    "White",
    "Black",
    "Brown",
    "Tiger Stripes",
];

function addTenCats() {
    for (let i = 0; i < 10; i++) {
        addNewCat({
            name: catNames[Math.floor(Math.random() * catNames.length)],
            color: colorArray[Math.floor(Math.random() * colorArray.length)],
            age: Math.floor(Math.random() * 12),
            favFood: "unknown",
        });
    }
}
