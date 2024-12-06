import { cn } from "@/lib/utils";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { useState } from "react";
import Icon from "./Icon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = React.ComponentProps<"input"> & {
  icon?: keyof typeof dynamicIconImports;
};

const IconInput = ({ type, className, icon, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(type !== "password");

  return (
    <div className="flex w-full items-center rounded-md border-2 border-gray-300 bg-white ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 group-focus-visible:ring-2">
      <Icon
        name={icon ?? "chevron-right"}
        className="ml-2 stroke-muted-foreground"
      />
      <Input
        type={showPassword ? (type === "password" ? "text" : type) : "password"}
        className={cn(
          "rounded-l-none border-0 pl-2 focus-visible:ring-0 focus-visible:ring-offset-0",
          className,
        )}
        {...props}
      />
      {type === "password" ? (
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Icon name={showPassword ? "eye-closed" : "eye"} />
        </Button>
      ) : null}
    </div>
  );
};
IconInput.displayName = "IconInput";

export { IconInput };
