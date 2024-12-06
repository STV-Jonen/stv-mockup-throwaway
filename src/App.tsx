import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { LoginForm } from "./components/auth/LoginForm";
import { ResetPasswordForm } from "./components/auth/ResetPasswordForm";

export const App = () => {
  return (
    <div className="grid min-h-dvh grid-cols-1 items-start gap-y-4 bg-gradient-to-bl from-primary to-primary/80 p-8 md:grid-cols-3">
      <LoginForm />
      <ForgotPasswordForm />
      <ResetPasswordForm />
    </div>
  );
};
