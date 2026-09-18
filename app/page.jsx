import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { HOME } from "@/constants";
import { FileDownIcon } from "lucide-react";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{HOME.role}</span>

            <h1 className="h1 mb-6">
              {HOME.greeting} <br />{" "}
              <span className="text-accent">{HOME.name}</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">{HOME.description}</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={HOME.cvPath} download={HOME.cvFileName}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{HOME.cvLabel}</span>
                  <FileDownIcon className="text-xl" />
                </Button>
              </a>

              <div>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
