import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://pragatikedia:Pragati0912@cluster0.dceu6lr.mongodb.net/food-del").then(()=>console.log("DB connected"));
}
