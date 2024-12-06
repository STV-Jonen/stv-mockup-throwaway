import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { LoginForm } from "./components/auth/LoginForm";
import { ResetPasswordForm } from "./components/auth/ResetPasswordForm";

export const App = () => {
  return (
    <div className="grid min-h-dvh grid-cols-3 items-start bg-gradient-to-bl from-primary to-primary/80 p-8">
      <LoginForm />
      <ForgotPasswordForm />
      <ResetPasswordForm />
    </div>
  );
};
