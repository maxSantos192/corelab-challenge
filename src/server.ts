import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    timesTamp: new Date().toISOString(),
    message: "Notes API is running",
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
