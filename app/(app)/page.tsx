import { HeroSection } from '@/components/hero';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants/projects';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { services } from '@/constants/services';
import Cta from '@/components/cta';
import { Cross } from '@/components/ui/cross';

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <Separator />
      {/* Spacer */}
      <div className="container">
        <div className="relative flex flex-col gap-8 border-x">
          <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <span />
          <span />
        </div>
      </div>
      <Separator />
      <div className="container">
        <div className="relative flex flex-col gap-40 border-x">
          <span />
          <div className=" flex flex-col gap-8">
            <h2 className="px-[2rem] font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Bring a cohesive consumer experience
            </h2>
            <h3 className="px-[2rem] text-xl">
              Attract, engage, convert and retain customers with ease. We bring
              our experts to activate your brand with more touchpoints, creating
              a seamless integration into your brand’s mix.
            </h3>
          </div>
          <span />
        </div>
      </div>
      <Separator />
      {/* Spacer */}
      <div className="container">
        <div className="relative flex flex-col gap-8 border-x">
          <Cross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <span />
          <span />
        </div>
      </div>
      {/* Recent Projects Section */}
      <Separator />
      <div className="container">
        <div className="relative flex flex-col gap-8 border-x">
          <span />
          <h2 className="px-[2rem] font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl">
            Our recent projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title}>
                <Card className="w-full md:min-h-80 justify-between flex flex-col rounded-none border-0 border-t md:hover:bg-muted">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      {project.tasks?.map((task) => (
                        <li key={task}>
                          <Badge variant="outline">{task}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="w-full text-end">
                    <Link
                      href={'/'}
                      className={`px-0 ${buttonVariants({
                        variant: 'link',
                        size: 'sm',
                      })}`}
                    >
                      Learn More
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Spacer */}
      <Separator />
      <div className="container">
        <div className="relative flex flex-col gap-8 border-x">
          <Cross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <span />
          <span />
        </div>
      </div>
      <Separator />
      {/* Services Section */}
      <div className="container">
        <div className="relative flex flex-col gap-8 border-x">
          <span />
          <h2 className="px-[2rem] font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl">
            What part of your business needs growth?
          </h2>
          <h3 className="px-[2rem] text-xl">Explore our solutions</h3>
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
      <Separator />
      {/* Spacer */}
      <div className="container">
        <div className="relative flex flex-col gap-8 border-x">
          <Cross className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Cross className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          <span />
          <span />
        </div>
      </div>
      <Separator />
      <Cta header="Get Started Today" />
    </>
  );
}
