import { Cross } from './cross';

interface ContainerEdgeCrossProps {
  tr?: boolean; // top right cross
  tl?: boolean; // top left cross
  br?: boolean; // bottom right cross
  bl?: boolean; // bottom left cross
  children?: React.ReactNode;
}

const ContainerEdgeCross = ({
  tr,
  tl,
  br,
  bl,
  children,
}: ContainerEdgeCrossProps) => {
  return (
    <div className="container">
      <div className="relative flex flex-col gap-8 border-x">
        {tr && (
          <Cross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        )}
        {tl && (
          <Cross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        )}
        {br && (
          <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        )}
        {bl && (
          <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        )}
        {children ? (
          children
        ) : (
          <>
            <span />
            <span />
          </>
        )}
      </div>
    </div>
  );
};

export default ContainerEdgeCross;
