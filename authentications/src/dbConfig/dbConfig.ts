import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb is Connected");
    });
    connection.on("error", (err: Error) => {
      console.log("MongoDb error", err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went Wrong ", error);
  }
};
