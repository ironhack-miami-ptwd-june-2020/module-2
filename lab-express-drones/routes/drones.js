const express = require("express");
const drone = require("../models/Drone.model");

// require the Drone model here

const router = express.Router();

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  drone
    .find({})
    .then((drones) => {
      res.render("drones/list.hbs", { drones });
    })
    .catch((err) => console.log(err));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

// router.post("/drones/create", (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
//   console.log(req.body);
//   drone
//     .create(req.body)
//     .then((createdDrone) => {
//       res.redirect("/drones");
//     })
//     .catch((err) => {
//       res.redirect("/drones/create");
//     });
// });

// Same as the route above but using async/await
router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    await drone.create(req.body);
    res.redirect("/drones");
  } catch (err) {
    res.redirect("/drones/create");
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log(req.params, req.query);
  drone.findById(req.params.id).then((droneToEdit) => {
    res.render("drones/update-form.hbs", droneToEdit);
  });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  console.log("63", req.body, req.params);
  drone
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedDrone) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      res.redirect(`/drones/${req.params.id}/edit`);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  drone.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("back");
  });
});

module.exports = router;
