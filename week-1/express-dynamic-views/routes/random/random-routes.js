const express = require("express");
const router = express();

router.get("/random-page", (req, res, next) => {
    // when you render a file you do not have to use the / before the name of the file or folder

    // res.render("/random/random-view"); // incorrect render format

    // use layout: false in an object in order to cancel the layout page in the view page that you will render
    const data = {
        layout: false,
    };

    // you can pass data as an object or just pass an object to the view page => {layout: false}
    res.render("random/random-view", data); // correct render format

    // when using res.redirect you will have to use the same method as in an <a href="/endpoint"></a> tag
    // res.redirect('/endpoint');

    // res.json is used when creating an api or an api style route that will send data to the person/location that calls on this route
    // res.json(data);
});

module.exports = router;
