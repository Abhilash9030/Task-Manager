require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());
app.use(cors());

// const mongoUrl = process.env.MONGODB_URL;
mongoose.connect("mongodb+srv://yarramabhilash:i1c2bwesSwI3Skfq@cluster0.h1fiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
