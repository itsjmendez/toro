import servicesDataJson from 'data/services.json';
import { ServicesData } from '@/types/service';
import { ServiceSlug } from 'types/service-slug';
import { Service } from '@/types/service';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ContainerEdgeCross from '@/components/ui/container-edge-cross';
import Cta from '@/components/cta';

const servicesData: ServicesData = servicesDataJson as ServicesData;

export default function ServiceSection({
  params,
}: {
  params: { slug: ServiceSlug };
}) {
  const service: Service | undefined = servicesData[params.slug];

  if (!service) {
    return <ErrorMessage />;
  }

  return (
    <div className="container">
      <div className="border-x">
        <div className="flex flex-col gap-6">
          <ContainerEdgeCross blc={true} brc={true}>
            <div className="relative flex flex-col gap-40">
              <span />
              <div className=" flex flex-col gap-8">
                <h2 className="px-6 font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl">
                  {service.title}
                </h2>
                <h3 className="px-6 text-xl">{service.intro}</h3>
              </div>
              <span />
            </div>
          </ContainerEdgeCross>
        </div>
      </div>
      <Cta
        header={service.cta?.header || 'Get in touch'}
        subheader="We are here to help you with your business needs"
        button={{
          label: 'Contact us',
          size: 'lg',
        }}
      />
    </div>
  );
}

// Error Component
const ErrorMessage = () => (
  <div className="container">
    <div className="h-[calc(100svh-10.1rem)] relative flex flex-col gap-40 border-x justify-center items-center">
      <span />
      <div className="px-6 flex flex-col gap-4">
        <h1 className="text-xl md:text-4xl ">
          Oops! We couldn&apos;t find the service you&apos;re looking for.
        </h1>
        <div className="flex flex-row gap-2">
          <Link href="/services" className="underline text-xl">
            Go to services page
          </Link>
          <ArrowRight size={24} />
        </div>
      </div>
      <span />
    </div>
  </div>
);
