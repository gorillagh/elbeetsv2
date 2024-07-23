import mongoose from "mongoose";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
import dbConnect from "@/dbConnects";
import Order from "@/app/models/Order";
import User from "@/app/models/User"; // Assuming you have a Customer model

export async function fetchCardData() {
  noStore();
  try {
    await dbConnect();

    // Queries to get data from MongoDB
    const orderCountPromise = Order.countDocuments();
    const customerCountPromise = User.countDocuments();

    const orderStatusPromise = Order.aggregate([
      {
        $group: {
          _id: null,
          completed: {
            $sum: {
              $cond: [{ $eq: ["$status", "completed"] }, "$amount", 0],
            },
          },
          pending: {
            $sum: {
              $cond: [{ $eq: ["$status", "pending"] }, "$amount", 0],
            },
          },
        },
      },
    ]);

    const data = await Promise.all([
        orderCountPromise,
      customerCountPromise,
        orderStatusPromise,
    ]);
    console.log("data====>", data);
    const numberOfOrders = Number(data[0] ?? 0);
    const numberOfCustomers = Number(data[1] ?? 0);
    const totalCompletedOrders = formatCurrency(data[2][0]?.completed ?? 0);
    const totalPendingOrders = formatCurrency(data[2][0]?.pending ?? 0);

    return {
      numberOfCustomers,
      numberOfOrders,
      totalCompletedOrders,
      totalPendingOrders,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}
