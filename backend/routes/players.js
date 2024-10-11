const express = require("express");
const router = express.Router();
const Player = require("../models/playerModel");
const mongoose = require("mongoose");

// GET all players
router.get("/", async (req, res) => {
  const players = await Player.find();
  res.status(200).json(players);
});

// GET a single player
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  const player = await Player.findById(id);
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  res.status(200).json(player);
});

// POST a new player
router.post("/", async (req, res) => {
  const { name, number, position } = req.body;

  // Validate that all required fields are present
  if (!name || !number || !position) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a new player document using the Player model
    const player = new Player({
      name,
      number,
      position
    });

    // Save the player to the database
    await player.save();

    // Return the created player data as a response
    res.status(201).json(player);
  } catch (error) {
    // Handle potential errors
    res.status(500).json({ error: "Could not create player." });
  }
});


// PATCH a single player's information
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  const player = await Player.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  res.status(200).json(player);
});

// DELETE a single player
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  const player = await Player.findOneAndDelete({ _id: id });
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }
  res.status(200).json(player);
});

module.exports = router;