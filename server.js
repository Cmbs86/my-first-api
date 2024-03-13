import express from "express";
import cors from "cors";

console.log(process.env);
const app = express();

const PORT = process.env.PORT;
// const environment = process.argv[2]; // "prod(production)"
const environment = process.env.NODE_ENV;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/randomNumber", (req, res) => {
  res.json(Math.floor(Math.random() * 100).toString());
});

app.get("/weather", (req, res) => {
    
})

app.listen(PORT, () => {
  if (environment === "development") {
    console.log(`server is running on http://localhost:${PORT}`);
  } else {
    console.log("server running on production");
  }
});
