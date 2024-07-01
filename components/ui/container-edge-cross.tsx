import { Cross } from './cross';

interface ContainerEdgeCrossProps {
  trc?: boolean; // top right cross
  tlc?: boolean; // top left cross
  brc?: boolean; // bottom right cross
  blc?: boolean; // bottom left cross
  children?: React.ReactNode;
}

const ContainerEdgeCross = ({
  trc,
  tlc,
  brc,
  blc,
  children,
}: ContainerEdgeCrossProps) => {
  return (
    <div className="relative border-y">
      {trc && (
        <Cross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      )}
      {tlc && (
        <Cross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      )}
      {brc && (
        <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      )}
      {blc && (
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
  );
};

export default ContainerEdgeCross;
