import Icon from "./Icon";

type Props = {
  message: string;
};

export const FormSuccess = ({ message }: Props) => {
  return (
    <div className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-emerald-500/15 text-emerald-500">
      <Icon name="circle-check" />
      <p>{message}</p>
    </div>
  );
};
