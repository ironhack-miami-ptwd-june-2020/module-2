const express = require("express");
const router = express();

router.get("/ironhacker", (req, res, next) => {
    studentsArray = [
        "Nick",
        "Tom",
        "Alex",
        "Drew",
        "Mikayla",
        "Ale",
        "Arianna",
        "Drei",
        "Kev",
        { name: "Marcos", position: { schoolPosition: "Teacher" } },
        { name: "Stefan", position: { schoolPosition: "TA" } },
    ];

    const data = {
        name: "Ironhackers",
        numberOfStudents: studentsArray.length,
        theImage: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
        moreThanOneStudent: true,
        studentsArray,
    };

    // any data passed to a view page has to be an object
    res.render("index", data);
});

router.get("/blah", (req, res, next) => {
    const studentsArray = [
        "Nick",
        "Tom",
        "Alex",
        "Drew",
        "Mikayla",
        "Ale",
        "Arianna",
        "Drei",
        "Kev",
        { name: "Marcos", position: { schoolPosition: "Teacher" } },
        { name: "Stefan", position: { schoolPosition: "TA" } },
    ];

    const data = {
        name: "Blahs",
        numberOfStudents: studentsArray.length,
        theImage: "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif",
        moreThanOneStudent: true,
        studentsArray,
    };

    // any data passed to a view page has to be an object
    res.render("index", data);
});

module.exports = router;
