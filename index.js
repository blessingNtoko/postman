import express from "express";
const app = express();
const port = 4177;

app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.put("/user/jane", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/jane", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/jane", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});