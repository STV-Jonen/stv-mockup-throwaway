import { IconInput } from "../IconInput";
import { Button } from "../ui/button";
import { FormWrapper } from "./FormWrapper";

type Props = {
  status?: {
    type: "error" | "success";
    message: string;
    action?: () => React.ReactNode;
  };
};

export const ForgotPasswordForm = ({ status }: Props) => {
  return (
    <FormWrapper
      subtitle="Passwort zurücksetzen"
      fields={() => (
        <div>
          <IconInput type="email" placeholder="Email" icon="mail" />
        </div>
      )}
      status={status}
      footer={() => <Button className="w-full">Passwort zurücksetzen</Button>}
    />
  );
};
