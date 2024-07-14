import { ComponentProps, FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ISelectWithLabelProps extends ComponentProps<typeof Select> {
  label?: string;
  options: string[];
}

const SelectWithLabel: FC<ISelectWithLabelProps> = ({
  label,
  options,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {!!label && <label>{label}</label>}
      <Select {...props}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWithLabel;
