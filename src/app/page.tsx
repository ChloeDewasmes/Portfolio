import Header from "./header";
import Image from "next/image";
import Profile from "./public/images/profile.png";
import Contact from "./public/images/contact.png";
import Programming from "./public/images/programming.png";
import Button from "./components/Button";
import { Linkedin, Github } from "lucide-react";
import ScrollToTopButton from "./components/scrollToTopButton";

export default function Home() {
  return (
    <div className="bg-background-blue min-w-screen min-h-screen sm:px-[97px] sm:py-[47px] px-6 py-4 font-poppins">
      <div className="h-[100vh]">
        <Header />
        <div className="flex">
          <div>
            <div className="flex flex-col flex-wrap text-4xl w-60 text-light-grey mt-60">
              <text className=" text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Hello, I'm Chloe,
              </text>
              <text
                className="bg-gradient-to-br from-light-grey via-light-grey to-dark-grey bg-clip-text text-transparent mb-10 
             text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              >
                Web Developer
              </text>
              <text className=" text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                based in France.
              </text>
            </div>
            <div className="flex flex-col sm:flex-row items-center w-full">
              <a
                className="mb-6 mr-6 sm:mb-0"
                href="https://drive.google.com/file/d/1dPVVsRLzPHbnTCyWSt5hFijbl-e6YjaV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Resume" />
              </a>
              <div className="flex gap-6">
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
          </div>
          <Image
            className="absolute"
            src={Profile}
            alt="Computer illustrations by Storyset & Profile picture"
            style={{
              top: "15%", // 10% de la hauteur de l'écran
              right: "8%", // 15% de la largeur de l'écran
              width: "50%", // L'image occupe jusqu'à 50% de la largeur de l'écran
              maxWidth: "500px", // Taille maximale de 600px
              height: "auto", // Conserve le ratio d'aspect
            }}
          />
        </div>
      </div>
      <div className="h-[100vh]">
        <h1
          className="text-salmon-pink text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-poppins font-black mb-8"
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
          className="text-salmon-pink text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-poppins font-black mb-8"
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
          className="text-salmon-pink text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-poppins font-black mb-8"
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
          className="text-salmon-pink text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-black mb-8"
          id="contact"
        >
          contact.
        </h1>
        <div className="items-center">
          <Image
            src={Contact}
            alt="Business illustrations by Storyset"
            height={500}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover"
          />
          <div className="text-light-grey text-xs md:text-2xl">
            I am available to discuss any opportunities and projects. I’m eager
            to hear from you! chloe.dewasmes@itech.fr +33 6 18 40 76 93
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
