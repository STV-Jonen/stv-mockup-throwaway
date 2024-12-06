import { IconInput } from "../IconInput";
import { Button, buttonVariants } from "../ui/button";
import { FormWrapper } from "./FormWrapper";

export const LoginForm = () => {
  return (
    <FormWrapper
      subtitle="Login"
      fields={() => (
        <div className="flex w-full flex-col items-center gap-4">
          <IconInput type="email" placeholder="Email" icon="mail" />
          <IconInput type="password" placeholder="Passwort" icon="key-round" />
          <p
            className={buttonVariants({
              variant: "link",
              size: "sm",
              className:
                "h-auto cursor-pointer p-0 text-black underline transition-colors hover:text-primary",
            })}
          >
            Passwort vergessen?
          </p>
        </div>
      )}
      footer={() => <Button className="w-full">Login</Button>}
    />
  );
};
