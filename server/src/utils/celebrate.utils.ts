import { CelebrateError } from "celebrate";

export const generateValidationErrors = (error: CelebrateError) => {
  const errorBody: any = error.details.get("body");
  const validationErrors: any = {};
  errorBody.details.forEach((keyError: any) => {
    validationErrors[keyError.context.key] = keyError.message;
  });
  return validationErrors;
};
