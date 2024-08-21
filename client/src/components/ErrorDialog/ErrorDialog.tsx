import "./ErrorDialog.css";

type ErrorDialogProps = {
  error: string;
  resetError: () => void;
};

function ErrorDialog({ error, resetError }: ErrorDialogProps) {
  return (
    <div className="error-dialog">
      <span className="error-text">{error}</span>{" "}
      <span className="close-button" onClick={resetError}>
        &#x274c;
      </span>
    </div>
  );
}

export default ErrorDialog;
