interface CtaProps {
  text: string;
}

const Cta = ({ text }: CtaProps) => {
  return (
    <div className="container">
      <div className="relative py-10 md:py-24 container border-x hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
        <h3 className="text-5xl md:text-8xl uppercase text-center">{text}</h3>
      </div>
    </div>
  );
};

export default Cta;
