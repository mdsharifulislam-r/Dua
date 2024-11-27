const express = require("express");
const router = require("./routes/catagories");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 4000;
app.use(cors());
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Server is Running",
  });
});
app.use("/api", router);
app.listen(port, () => {
  console.log(`server is runnig on ${port}`);
});
