import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", (req, res) => {
  let students = [
    {
      id: 1,
      name: "Yasir",
      age: 22,
      city: "Ahmedabad",
    },
    {
      id: 2,
      name: "Rahul",
      age: 21,
      city: "Delhi",
    },
    {
      id: 3,
      name: "Aman",
      age: 23,
      city: "Mumbai",
    },
  ];

  res.json(students);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
