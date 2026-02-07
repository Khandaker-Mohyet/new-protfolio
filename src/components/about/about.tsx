import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import photo from "../../../public/Mohyet.jpg";


const AboutSection = () => {
    return (
    <div id="about" className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg py-10 bg-background">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <section className="px-5 lg:px-8 xl:px-[8%] relative z-10">
        <div className="">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      About me
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-relaxed lg:text-start text-center">
                      I’m a passionate and results-driven Front-End Developer with a strong focus on building responsive, high-performance websites and web applications. I specialize in JavaScript, React.js, Node.js, HTML, and CSS, and I’m dedicated to delivering user-friendly, accessible, and visually appealing digital experiences. <br />
                      <br />
                      With a solid foundation in modern web technologies, I bring ideas to life through clean, efficient, and maintainable code. I believe great user experiences start with thoughtful design and end with seamless functionality—and that’s what I aim to deliver every time. <br />
                      <br />
                      As I grow in my career, I’ve expanded my knowledge to the Software Development level, actively working with Node.js to understand full-stack development and build more robust, scalable applications. <br />
                      <br />
                      Currently, I’m exploring and learning Redux, Next.js, Docker, and AWS to level up my development workflow, build production-ready applications, and gain experience in cloud deployment and DevOps tools. <br />
                    </p>
                  </div>
                </div>
              </div>
              <a href="#contact">
                <Button>
                  Contact <GoArrowUpRight />
                </Button>
              </a>
            </div>
            <div className="w-full lg:justify-end justify-center items-end flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-100 dark:bg-neutral-900 rounded-3xl border border-gray-200 dark:border-neutral-600 p-5 flex justify-center items-center">
                <Image
                  className="w-full h-full rounded-2xl object-cover"
                  src={photo}
                  alt="Web Development Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;