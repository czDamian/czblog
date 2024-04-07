import mongoose from "mongoose";

export const connectDB = async () => {
  const conn = {};
  try {
    if (conn.isConn) return;
    const db = await mongoose.connect(process.env.MONGO);
    conn.isConn =db.conn[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
