const express = require("express");
const router = express.Router();

let Project = require("../models/project.model");

router.get("/", (req, res) => {
  console.log("get get get");
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(400).json("Error: ", err));
});

router.post("/", (req, res) => {
  console.log("post post post...");

  const {
    title,
    LangTag,
    deployedUrl,
    githubUrl,
    summary,
    description,
    image,
    bulletPoint,
  } = req.body;

  const newProject = new Project({
    title,
    LangTag,
    deployedUrl,
    githubUrl,
    summary,
    description,
    image,
    bulletPoint,
  });

  newProject
    .save()
    .then((project) => {
      console.log(project);
    })
    .catch((err) => res.status(400).json(err));

  // res.redirect("/");
});

router.get("/:id", (req, res) => {
  const pickedProjectId = req.params.id;
  console.log("get id get id get id:", pickedProjectId);
  Project.findById(pickedProjectId)
    .then((project) => {
      console.log("/picked project: ", project);
      res.json({ project: project });
    })
    .catch((err) => console.log("err: ", err));
});

module.exports = router;
