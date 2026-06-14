// Example placeholder — the real Express API lives here.
import express from "express";
const app = express();
app.get("/", (req, res) => res.json({ message: "Task Manager API — example" }));
app.listen(5000, () => console.log("Example API on http://localhost:5000"));
