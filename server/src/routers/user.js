const express = require("express");
const User = require("../models/user");
const Violator=require("../models/violator")

const router = new express.Router();


router.post("/users/register", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/page",async(req,res)=>{
  try {
    const violator = await Violator.find({"email":req.body.email});
    res.status(200).send({violator});
  } catch (e) {
    console.log(e)
    res.status(400).send();
  }
})

router.post("/test", async (req, res) => {
  try {
    const violator = new Violator(req.body);
    await violator.save()
    res.status(200).send({ violator });
  } catch (e) {
    console.log(e)
    res.status(400).send();
  }
})

module.exports = router;
