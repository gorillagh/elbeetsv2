import mongoose from "mongoose";
const { Schema, model, models } = mongoose;
const { ObjectId } = Schema;
import uniqueValidator from "mongoose-unique-validator";

const fileSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    transcriptionText: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "cancelled"],
      default: "pending",
    },

    verbatim: {
      type: Boolean,
      default: false, // Default to clean transcription
    },
    timestamps: {
      type: Boolean,
      default: false, // Default to no timestamps
    },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    serviceType: {
      type: String,
      enum: ["transcription", "translation", "captioning"],
      required: true,
    },
    sourceLanguage: {
      type: String,
      required: true,
    },
    targetLanguage: {
      type: String,
      required: function () {
        return this.serviceType !== "transcription";
      },
    },
    files: [fileSchema],
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "cancelled"],
      default: "pending",
    },
    turnaroundTime: {
      type: String,
      enum: ["24 hours", "48 hours", "72 hours", "1 week"],
      required: true,
    },
    additionalNotes: {
      type: String,
      default: "",
    },
    completedAt: {
      type: Date,
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "refunded"],
      default: "unpaid",
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

orderSchema.plugin(uniqueValidator, { message: "is already taken" });

export default models.Order || model("Order", orderSchema);
