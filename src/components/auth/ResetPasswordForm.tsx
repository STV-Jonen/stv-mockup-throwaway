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

export const ResetPasswordForm = ({ status }: Props) => {
  return (
    <FormWrapper
      subtitle="Neues Passwort definieren"
      fields={() => (
        <div className="flex w-full flex-col items-center gap-4">
          <IconInput type="password" placeholder="Passwort" icon="key-round" />
          <IconInput
            type="password"
            placeholder="Passwort bestätigen"
            icon="key-round"
          />
        </div>
      )}
      status={status}
      footer={() => <Button className="w-full">Neues Passwort setzen</Button>}
    />
  );
};
