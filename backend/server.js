require("dotenv").config();

console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dns = require("dns");
const app = express();

app.use(cors());
app.use(express.json());

dns.setServers(["1.1.1.1", "8.8.8.8"]);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/tasks", require("./routes/taskRoutes"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});