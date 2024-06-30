import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { CtaProps } from '@/types/cta';

// TODO: Add functionality to the CTA component

const Cta = ({ header, subheader, button }: CtaProps) => {
  return (
    <div className="relative py-10 md:py-24 border-x bg-primary">
      <div className="container flex flex-col gap-4 justify-center items-center">
        <h3 className="text-2xl md:text-4xl uppercase text-center text-primary-foreground">
          {header}
        </h3>
        {subheader && (
          <p className="text-xl text-center text-primary-foreground">
            {subheader}
          </p>
        )}
        {button && (
          <Button
            variant={button.variant}
            size={button.size}
            className="rounded-none bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-2xl hover:border hover:border-primary-foreground"
          >
            {button.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cta;
