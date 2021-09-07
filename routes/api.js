const router = require("express").Router();
const Activity = require("../models/Activity");

router.get("/api/workouts", (req, res) => {
    Activity.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({  params, body }, res) => {
    Activity.findByIdAndUpdate(params.id, 
      { $push: {exercises: body}}, {new: true})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  })
  
  

  router.post("/api/workouts", ({ body }, res) => {
    Activity.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
 

  
module.exports = router;