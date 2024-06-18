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
import { projects } from '@/content/projects';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div>
        <div className="container my-20 flex flex-col gap-4">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
            The full cycle strategy team you need
          </h2>
          <h3 className="text-xl">
            We use data, digital marketing, creative and messaging to attract,
            engage, convert and retain customers.
          </h3>
        </div>
      </div>
      <Separator />
      {/* Recent Projects Section */}
      <div>
        <div className="container my-20 flex flex-col gap-4">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
            Our recent projects
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.title}>
                <Card className="w-full md:min-h-80 justify-between flex flex-col">
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
        <Separator />
        {/* Services Section */}
        <div className="container my-20 flex flex-col gap-4">
          <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
            What part of your business needs growth?
          </h2>
          <h3>Explore our marketing services</h3>
        </div>
      </div>
    </main>
  );
}
