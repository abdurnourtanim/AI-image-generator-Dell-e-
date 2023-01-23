import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("MongoDB connected success!");
    })
    .catch((err) => {
      console.log("MongoDB connected failed!");
      console.log(err);
    });
};

export default connectDB;
