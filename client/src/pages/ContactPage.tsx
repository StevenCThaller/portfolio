import { useState } from "react";
import { handleSubmitContactMessage } from "../services/api.services";
import ErrorDialog from "../components/ErrorDialog/ErrorDialog";

const initialState = {
  name: "",
  email: "",
  message: "",
};

function ContactPage() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log(formData);
      await handleSubmitContactMessage(
        formData.name,
        formData.email,
        formData.message
      );
      resetState();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrors({ ...initialState, ...error });
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    resetState();
  };

  const resetState = () => {
    setFormData(initialState);
    setErrors(initialState);
  };

  const clearErrorMessage = (key: string) =>
    setErrors({ ...errors, [key]: "" });

  return (
    <main id="contact" className="container gap">
      <section className="container gap m-h-center col-8 col-sm-12">
        <h2>Contact Cody</h2>
        <p>
          Want to contract some work to Cody? Think Cody is a great fit for an
          open role? Do you just want to congratulate him for his awesome work?
        </p>
        <p>Fill out the form below and he'll get back to you ASAP!</p>
      </section>
      <form className="container gap col-8 col-sm-12" onSubmit={handleSubmit}>
        <div className="form-group stacked">
          <div className="row align-center">
            <label htmlFor="name">Name:</label>
            {errors.name && (
              <ErrorDialog
                error={errors.name}
                resetError={() => clearErrorMessage("name")}
              />
            )}
          </div>

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group stacked">
          <div className="row align-center">
            <label htmlFor="email">Email Address:</label>
            {errors.email && (
              <ErrorDialog
                error={errors.email}
                resetError={() => clearErrorMessage("email")}
              />
            )}
          </div>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group stacked">
          <div className="row align-center">
            <label htmlFor="message">Message:</label>
            {errors.message && (
              <ErrorDialog
                error={errors.message}
                resetError={() => clearErrorMessage("message")}
              />
            )}
          </div>

          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}

export default ContactPage;
