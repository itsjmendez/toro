import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { CtaProps } from '@/types/cta';

// TODO: Add functionality to the CTA component

const Cta = ({ header, subheader, btnText }: CtaProps) => {
  return (
    <div className="container">
      <div className="relative py-10 md:py-24 border-x hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
        <div className=" flex flex-col gap-4">
          <h3 className="text-4xl md:text-6xl uppercase text-center">
            {header}
          </h3>
          {subheader && <p className="text-xl text-center">{subheader}</p>}
          {btnText && (
            <Button
              variant="default"
              size="lg"
              className="border-none rounded-none"
            >
              {btnText} <ArrowRight className="ml-2 h-4 w-4 text-primary" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cta;
