const express = require("express");
const router = express.Router();
const Example = require("../models/example");

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("example");
});

// POST Route  -  Create one example  (Create - C)
router.post("/add", (req, res, next) => {
    Example.create({ name: "Felix", color: "Yellow" })
        .then((createdExampleFromDB) => {
            console.log({ createdExampleFromDB });
            const data = {
                info: createdExampleFromDB,
                multiple: createdExampleFromDB.length,
            };
            res.render("example", data);
        })
        .catch((err) => console.log(`Error creating example: ${err}`));
});

// GET Route  -  Find all examples  (Read - R)
router.get("/find", (req, res, next) => {
    Example.find()
        .then((examplesFromDB) => {
            console.log({ examplesFromDB });
            const data = {
                info: examplesFromDB,
                multiples: examplesFromDB.length,
            };
            res.render("example", data);
        })
        .catch((err) => console.log(`Error finding all examples: ${err}`));
});

// Post Route  -  Update info for example  (Update - U)
router.post("/update/:exampleId", (req, res, next) => {
    console.log({ body: req.body });
    Example.findByIdAndUpdate(req.params.exampleId, req.body, { new: true })
        .then((updatedExample) => {
            console.log({ updatedExample });
            const data = {
                info: updatedExample,
                multiples: updatedExample.length,
            };
            res.render("example", data);
        })
        .catch((err) => console.log(`Error updating example: ${err}`));
});

// Post Route  -  Delete info of example  (Delete - D)
router.post("/delete/:exampleId", (req, res, next) => {
    Example.findByIdAndDelete(req.params.exampleId)
        .then(() => {
            res.redirect("/examples/find");
        })
        .catch((err) => console.log(`Error trying to delete example: ${err}`));
});

module.exports = router;
