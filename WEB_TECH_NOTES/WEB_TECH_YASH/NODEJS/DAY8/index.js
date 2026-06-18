const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

// app initlize
const app = express();
const PORT = 8000;

// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/ajayyash")
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("Error connecting mongoDb", err));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mannual middleware
app.use((req, res, next) => {
  fs.appendFile(
    "./log.txt",
    `\n${Date.now()} : ${req.url} : ${req.method}\n`,
    (err) => {
      next();
    },
  );
});

// Model (User Schema)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// model
const User = mongoose.model("users", userSchema);

// save the user for this i am creating the APIs
// postman -> JSON -> middleware -> JS object -> req.body
app.post("/api/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.json({ sucess: true, message: "user created", data: newUser });
  } catch (error) {
    res.json({ sucess: false, message: "Error creating the user" });
  }
});

// get the all users
app.get("/api/users", async (req, res) => {
  try {
    const user1 = await User.find();
    res.json({
      sucess: true,
      message: "user fetched sucessfully",
      data: user1,
    });
  } catch (error) {
    res.json({ sucess: false, message: "user getting error" });
  }
});

// get the data based on the id.
app.get("/api/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const user2 = await User.findById(id);
    res.json({
      sucess: true,
      message: "user fetched sucessfully",
      data: user2,
    });
  } catch (error) {
    res.json({
      sucess: false,
      message: "user fetching error",
      message: error.message,
    });
  }
});

// update the data
app.patch("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      sucess: true,
      message: "Data updated using the patch method",
      data: updatedUser,
    });
  } catch (error) {
    res.json({ sucess: false, message: "user updating error", error: error });
  }
});

// update the data
app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true },
    );

    res.json({
      success: true,
      message: "User replaced successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error",
      error,
    });
  }
});

// Delete
app.delete("/api/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    res.json({
      success: true,
      message: "User Deleting Error",
    });
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
