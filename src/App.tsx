import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { LoginForm } from "./components/auth/LoginForm";
import { ResetPasswordForm } from "./components/auth/ResetPasswordForm";
import { buttonVariants } from "./components/ui/button";

export const App = () => {
  return (
    <div className="grid min-h-dvh grid-cols-1 items-start gap-y-4 bg-gradient-to-bl from-primary to-primary/80 p-8 md:grid-cols-3">
      <LoginForm />
      <ForgotPasswordForm />
      <ForgotPasswordForm
        status={{
          type: "success",
          message: "Email gesendet!",
        }}
      />
      <ForgotPasswordForm
        status={{
          type: "error",
          message: "Fehler!",
        }}
      />
      <ResetPasswordForm />
      <ResetPasswordForm
        status={{
          type: "success",
          message: "Passwort geändert!",
          action: () => (
            <p
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className:
                  "h-auto cursor-pointer p-0 text-black underline transition-colors hover:text-primary",
              })}
            >
              Zurück zum Login
            </p>
          ),
        }}
      />
      <ResetPasswordForm
        status={{
          type: "error",
          message: "Fehler!",
        }}
      />
    </div>
  );
};
