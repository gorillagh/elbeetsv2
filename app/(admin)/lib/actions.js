import dbConnect from "@/dbConnects";
import Order from "@/app/models/Order";
import { auth } from "@/auth";
import { sampleOrder } from "../../lib/placeholder-data";

export const seedOrder = async () => {
  const { user } = await auth();

  try {
    await dbConnect();

    let orderDetails = { ...sampleOrder, user: user._id };

    const newOrder = await new Order(orderDetails);
    await newOrder.save();
    console.log("new order --->", newOrder);
    return newOrder;
  } catch (error) {
    console.log("Could not seed orders", error);
    throw new Error("Order seeding failed");
  }
};
