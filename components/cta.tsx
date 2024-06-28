import { Cross } from './ui/cross';

interface CtaProps {
  text: string;
}

const Cta = ({ text }: CtaProps) => {
  return (
    <div className="container">
      <div className="relative py-10 md:py-40 container border-x hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
        <h3 className="text-5xl md:text-8xl uppercase text-center">{text}</h3>
        <Cross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Cross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      </div>
    </div>
  );
};

export default Cta;
