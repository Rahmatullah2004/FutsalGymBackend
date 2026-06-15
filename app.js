const express = require("express");
require("dotenv").config();
const pool = require("./utilities/database-connection");
const userRouter = require("./router/user-router");
const gymRouter = require("./router/gym-router");
const fielRouter = require("./router/field-ruoter");
const bookingsRouter = require("./router/bookings-router");
const paymentsRoute = require("./router/payments-router");
const TrainingSessionRouter = require("./router/trainingSession-router");
const trainingEnrollmentRouter = require("./router/trainingEnrollment-router");
const trainingPlayerRouter = require("./router/trainingPlayer-router");
const expenseCategoryRouter = require("./router/expenseCategory-router");
const expenseRouter = require("./router/expense-router");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home");
});
app.get("/games", async (req, res) => {
  const [response] = await pool.query("select * from courses");
  console.log(response);
});
app.use("/api/users", userRouter); //finished
app.use("/api/gym", gymRouter); //finished
app.use("/api/field", fielRouter); //finished
app.use("/api/bookings", bookingsRouter); //finished
app.use("/api/payments", paymentsRoute); //finished
app.use("/api/trainingsession", TrainingSessionRouter); //finished
app.use("/api/trainingenrollment", trainingEnrollmentRouter); //finished
app.use("/api/trainingplayer", trainingPlayerRouter); //working  I have question that should I make api for deleting
app.use("/api/expensecategory", expenseCategoryRouter); //finished
app.use("/api/expense", expenseRouter); //working

const port = process.env.API_PORT;
app.listen(port, () => {
  console.log(`it is listening to port ${port}`);
});
