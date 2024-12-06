import React from "react";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";

type Props = {
  subtitle: string;
  fields?: () => React.ReactNode;
  status?: {
    type: "error" | "success";
    message: string;
    action?: () => React.ReactNode;
  };
  footer?: () => React.ReactNode;
};

export const FormWrapper = ({ subtitle, fields, status, footer }: Props) => {
  return (
    <div className="w-[95%] space-y-9 rounded-md bg-gray-100 p-9">
      <div className="flex flex-col items-center gap-4">
        <img src="/stv_logo.png" alt="stv logo" className="w-[72.5px]" />
        <h1 className="text-4xl font-medium">STV Jonen</h1>
        <div className="text-center text-2xl">{subtitle}</div>
      </div>
      {status && status.type === "success" ? (
        !status.action ? (
          <FormSuccess message={status.message} />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <FormSuccess message={status.message} />
            {status.action()}
          </div>
        )
      ) : (
        <>
          {fields ? <>{fields()}</> : null}
          {status && status.type === "error" ? (
            <FormError message={status.message} />
          ) : null}
          {footer ? <>{footer()}</> : null}
        </>
      )}
    </div>
  );
};
