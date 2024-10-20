import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/socialNetworkDB');

export default mongoose.connection;
