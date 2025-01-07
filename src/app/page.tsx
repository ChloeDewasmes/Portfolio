import Image from "next/image";
import Profile from "./public/images/profile.png";
import Contact from "./public/images/contact.png";
import Programming from "./public/images/programming.png";
import Button from "./components/Button";
import { Linkedin, Github } from "lucide-react";
import ScrollToTopButton from "./components/scrollToTopButton";

export default function Home() {
  return (
    <div className="bg-background-blue h-full w-full px-[97px] py-[47px] font-poppins">
      <div className="h-[100vh]">
        <header className="flex items-center justify-between w-full">
          <text className="text-light-grey text-2xl font-semibold mr-12">
            Chloe Dewasmes
          </text>
          <div className="flex text-light-grey text-lg gap-6">
            <a
              href="#about"
              className="hover:text-white hover:font-semibold hover:cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-white hover:font-semibold hover:cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-white hover:font-semibold hover:cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-white hover:font-semibold hover:cursor-pointer"
            >
              Contact
            </a>
          </div>
        </header>
        <div className="flex">
          <div>
            <div className="flex flex-col flex-wrap text-4xl w-60 text-light-grey mt-60">
              <text className="font-medium">Hello, I'm Chloe,</text>
              <text className="bg-gradient-to-br from-light-grey via-light-grey to-dark-grey bg-clip-text text-transparent text-9xl mb-10">
                Web Developer
              </text>
              <text className="font-medium">based in France.</text>
            </div>
            <div className="flex flex-row gap-6 items-center">
              <a
                className="mr-1"
                href="https://drive.google.com/file/d/1dPVVsRLzPHbnTCyWSt5hFijbl-e6YjaV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Resume" />
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://www.linkedin.com/in/chloe-dewasmes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-wrapper relative group">
                  {/* Default icon */}
                  <Linkedin
                    className="icon text-light-grey"
                    size={48}
                    style={{ strokeWidth: 0.5 }} // Base stroke width
                  />

                  {/* Thicker icon for hover effect */}
                  <Linkedin
                    className="icon text-light-grey absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" // Hidden by default
                    size={48}
                    style={{ strokeWidth: 1.5 }} // Increased stroke width
                  />
                </div>
              </a>
              <a
                className="hover:cursor-pointer"
                href="https://github.com/ChloeDewasmes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-wrapper relative group">
                  {/* Default icon */}
                  <Github
                    className="icon text-light-grey"
                    size={48}
                    style={{ strokeWidth: 0.5 }} // Base stroke width
                  />

                  {/* Thicker icon for hover effect */}
                  <Github
                    className="icon text-light-grey absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" // Hidden by default
                    size={48}
                    style={{ strokeWidth: 1.5 }} // Increased stroke width
                  />
                </div>
              </a>
            </div>
          </div>
          <Image
            className="absolute right-64 top-36"
            src={Profile}
            alt="Computer illustrations by Storyset & Profile picture"
            height={600}
          />
        </div>
      </div>
      <div className="h-[100vh]">
        <h1
          className="text-salmon-pink text-9xl font-poppins font-black mb-8"
          id="about"
        >
          about.
        </h1>
        <div className="space-y-10 text-light-grey text-2xl/10">
          <p>
            💻 As a Fullstack Developer, I combine my problem-solving and
            technical logic skills with my passion for design and user
            experience. For me, web and mobile development is a constantly
            evolving field, offering both creative and technical challenges that
            I enjoy tackling every day.
          </p>
          <p>
            🎓 Trained as a formulation chemistry engineer, I began my career in
            R&D, where I quickly had the opportunity to engage with coding to
            meet the needs of a specific project. This first encounter was a
            revelation and inspired me to shift towards development.
          </p>
          <p>
            🔍 Open to new opportunities, I am looking for innovative projects
            where I can contribute my versatility and interest in technology.
          </p>
        </div>
      </div>
      <div className="h-[100vh]">
        <h1
          className="text-salmon-pink text-9xl font-extrabold mb-8"
          id="skills"
        >
          skills.
        </h1>
        <div className="text-light-grey text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
      </div>
      <div className="h-[100vh]">
        <h1
          className="text-salmon-pink text-9xl font-extrabold mb-8"
          id="projects"
        >
          projects.
        </h1>
        <div className="text-light-grey text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
      </div>
      <div className="h-[100vh] py-48">
        <h1
          className="text-salmon-pink text-9xl font-extrabold mb-8"
          id="contact"
        >
          contact.
        </h1>
        <div className="flex flex-row items-center">
          <Image
            src={Contact}
            alt="Business illustrations by Storyset"
            height={500}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover"
          />
          <div className="flex flex-col text-light-grey text-3xl h-64 justify-between ml-20 mr-24">
            <div>
              <span className="block mb-3">
                I am available to discuss any opportunities and projects.
              </span>
              <span className="block">I’m eager to hear from you!</span>
            </div>
            <div className="flex flex-col">
              <text className="mb-3">chloe.dewasmes@itech.fr</text>
              <text>+33 6 18 40 76 93</text>
            </div>
          </div>
        </div>
        <div>
          <a
            className="flex justify-end items-end bottom-0"
            href="https://lucide.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Icons by Lucide
          </a>
          <a
            className="flex justify-end items-end bottom-0"
            href="https://storyset.com/computer"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Illustrations by Storyset
          </a>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
