import { BlockType } from "@custom-types/global";
import { cn } from "@utils/cn";

type BlockContainerProps = {
  children: React.ReactNode;
  blockType: BlockType;
  isSoldOut?: boolean;
  className?: React.ComponentProps<"div">["className"];
};

const BlockContainer = ({
  children,
  blockType,
  isSoldOut,
  className,
}: BlockContainerProps) => {
  return (
    <div
      className={cn(
        "absolute hover:scale-110 transition ease-in-out cursor-pointer w-[]",
        className
      )}
    >
      {children}
      <div
        className={cn(
          `absolute inset-0 flex items-center justify-center text-center font-bold`,
          {
            "text-red-800 text-md leading-none": isSoldOut,
            "text-slate-800 text-2xl": !isSoldOut,
          }
        )}
      >
        {isSoldOut ? "Sold Out" : blockType}
      </div>
    </div>
  );
};

export default BlockContainer;
