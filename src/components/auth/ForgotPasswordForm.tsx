import { IconInput } from "../IconInput";
import { Button } from "../ui/button";
import { FormWrapper } from "./FormWrapper";

export const ForgotPasswordForm = () => {
  return (
    <FormWrapper
      subtitle="Passwort zurücksetzen"
      fields={() => (
        <div>
          <IconInput type="email" placeholder="Email" icon="mail" />
        </div>
      )}
      footer={() => <Button className="w-full">Passwort zurücksetzen</Button>}
    />
  );
};
