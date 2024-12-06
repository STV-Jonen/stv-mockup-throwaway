import Icon from "./Icon";

type Props = {
  message: string;
};

export const FormError = ({ message }: Props) => {
  return (
    <div className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-red-500/15 text-red-500">
      <Icon name="circle-x" />
      <p>{message}</p>
    </div>
  );
};
