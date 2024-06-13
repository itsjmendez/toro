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
        <div className="container my-20">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Add growth to your business
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            As your marketing growth partner, we use data, digital marketing,
            creative and messaging to attract, engage, convert and retain
            customers.
          </p>
        </div>
        <Separator />
      </div>
      <div>
        <div className="container my-20">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Our recent projects
          </h1>
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 [&:not(:first-child)]:mt-6">
            {projects.map((project) => (
              <div key={project.title}>
                <Card className="w-full">
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
      </div>
    </main>
  );
}
