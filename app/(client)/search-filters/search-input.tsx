import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
interface Props {
    disabled?: boolean;
};

const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
    <div className="relative w-full">
    <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 size-4" />
      <Input
        type="text"
        placeholder="Search products"
        disabled={disabled}
        className="border pl-8 rounded"
      />
    </div>
    {/* TODO: Add Categories View All Button */}
    {/* TODO: Add Library Button */}
    </div>
  );
};

export default SearchInput;
