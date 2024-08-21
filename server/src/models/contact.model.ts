import { Schema, model } from "mongoose";
import { EMAIL_REGEX } from "../config/constants.config";

const contactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      match: EMAIL_REGEX,
      minLength: 5,
      maxLength: 50,
    },
    message: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 2500,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);

export default Contact;
