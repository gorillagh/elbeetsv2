import mongoose from "mongoose";
const { Schema, model, models } = mongoose;
const { ObjectId } = Schema;
// import uniqueValidator from "mongoose-unique-validator";

const userSchema = new Schema(
  {
    // User identification
    googleId: String, // If using Google OAuth for authentication
    email: {
      required: true,
      type: String,
      trim: true,
      index: true,
      unique: true, // Ensures unique emails
      // required: true, // Requires an email for user creation
      match: [/.+@.+\..+/, "Please fill a valid email address"], // Basic email format validation
      lowercase: true, // Converts email to lowercase
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    // User authentication
    password: {
      type: String,
      min: 6, // Minimum password length
      max: 64, // Maximum password length
    },

    // User profile information
    name: {
      type: String,
      trim: true,
    },
    address: String,
    picture: {
      type: String,
      default: "/avatar.png", // Default profile picture URL
    },

    phoneNumber: {
      countryCode: {
        type: String,
        // required: true,
        trim: true,
        validate: {
          validator: function (value) {
            // You can implement custom validation for country code here
            // Example: Check if it's a valid country code
            return /^[0-9]{1,5}$/.test(value);
          },
          message: "Invalid country code",
        },
      },
      number: {
        type: String,
        // required: true,
        trim: true,
        validate: {
          validator: function (value) {
            // You can implement custom validation for phone number here
            // Example: Check if it's a valid phone number
            return /^[0-9]{7,15}$/.test(value);
          },
          message: "Invalid phone number",
        },
      },
    },

    // User roles (if needed)
    roles: {
      type: [String],
      default: ["client"], // Default role for new users
      enum: ["client", "admin"], // Restrict roles to 'client' and 'admin'
    },
    passwordResetCode: {
      type: String,
      default: "",
    },
    passwordResetCodeExpiresAt: {
      type: Date,
      // Set the default value to 5 minutes from the current time
      default: () => new Date(Date.now() + 5 * 60 * 1000), // 5 minutes in milliseconds
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// userSchema.plugin(uniqueValidator, { message: "is already taken" });

export default models.User || model("User", userSchema);
