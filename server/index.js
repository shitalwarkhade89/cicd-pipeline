
import express from 'express';
const app = express();
app.use(express.json());

app.get("/user", async (req, res) => {
    res.send(`<h1>Yes, I Am Ok</h1>`);
});

app.get("/dev", async (req, res) => {
    res.send(`<h1>I Am Full-Stack Developer</h1>`);
});

app.get("/", async (req, res) => {
    res.send(`<h1>Hey i am successfull complited CI CD EC2</h1>`);
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});