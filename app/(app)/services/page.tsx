import { services } from '@/constants/services';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <div className="container">
      <div className="relative flex flex-col gap-8 border-x">
        <span />
        <h2 className="px-6 font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl">
          What part of your business needs growth?
        </h2>
        <h3 className="px-6 text-xl">Explore our solutions</h3>
        <div>
          {services.map((service) => (
            <Link
              href={service.href ? service.href : '/'}
              className="border-t grid grid-rows-1 md:grid-cols-8 items-start p-[2rem] gap-4 md:hover:bg-muted"
              key={service.title}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {service.icon && <service.icon />}
              </div>
              <h3 className="text-2xl md:text-2xl font-bold col-span-2">
                {service.title}
              </h3>
              <h4 className="col-span-2"> {service.catchyLabel}</h4>
              <p className="text-muted-foreground row-span-1 md:col-span-3">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
