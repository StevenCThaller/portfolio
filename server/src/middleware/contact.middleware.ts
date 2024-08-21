import { celebrate, Joi, Segments } from "celebrate";

export const validateContactMessage = celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(2).max(30).required().messages({
        "string.base": "Name must be a string.",
        "string.empty": "Name cannot be empty.",
        "string.min": "Name must be at least 2 characters.",
        "string.max": "Name cannot be longer than 30 characters.",
        "any.required": "Name is required.",
      }),
      email: Joi.string().required().email().messages({
        "string.base": "Email must be a string.",
        "string.empty": "Email cannot be left empty.",
        "string.email": "Invalid email address.",
        "any.required": "Email is required.",
      }),
      message: Joi.string().min(5).max(2500).required().messages({
        "string.base": "Message must be a string.",
        "string.empty": "Message cannot be left empty.",
        "string.min": "Message must be at least 5 characters.",
        "string.max": "Message cannot be more than 2500 characters.",
        "any.required": "Message is required.",
      }),
    }),
  },
  { abortEarly: false }
);
