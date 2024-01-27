import mongoose from "mongoose";

type METHOD_TYPE = "GET" | "POST" | "PUT";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://nitishkr1024:orca-backend-node@orca-database-cluster.dr6oksn.mongodb.net/",
      {
        dbName: "orca",
      }
    );
    console.log("--- DB connected with url :: ", connection.host);
  } catch (error) {
    console.log("Failed to connect to database :: ", error);
  }
};

function workOnDb(model: any, method: METHOD_TYPE) {
  if (method === "GET") {
    model.save();
  }
}
