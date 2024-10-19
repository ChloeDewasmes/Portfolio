import Image from "next/image";
import Profile from "./public/images/profile.png";
import Contact from "./public/images/contact.png";
import Programming from "./public/images/programming.png";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="bg-background-blue h-full w-full px-[97px] py-[47px] font-poppins">
      <div className="h-[100vh]">
        <header className="flex items-center justify-between w-full">
          <text className="text-light-grey text-2xl font-semibold">
            Chloe Dewasmes
          </text>
          <div className="flex text-light-grey text-lg gap-6">
            <text className="hover:text-white hover:font-semibold hover:cursor-pointer">
              About
            </text>
            <text className="hover:text-white hover:font-semibold hover:cursor-pointer">
              Skills
            </text>
            <text className="hover:text-white hover:font-semibold hover:cursor-pointer">
              Projects
            </text>
            <text className="hover:text-white hover:font-semibold hover:cursor-pointer">
              Contact
            </text>
          </div>
        </header>
        <div className="flex">
          <div>
            <div className="flex flex-col flex-wrap text-4xl w-60 text-light-grey mt-60">
              <text className="font-medium">Hello, I'm Chloe,</text>
              <text className="bg-gradient-to-br from-light-grey via-light-grey to-dark-grey bg-clip-text text-transparent text-9xl font-black mb-10">
                Web Developer
              </text>
              <text className="font-medium">based in France.</text>
            </div>
            <div>
              <Button text="Resume" />
              <button>In</button>
              <button>Git</button>
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
        <h1 className="text-salmon-pink text-9xl font-extrabold mb-8">
          about.
        </h1>
        <div className="text-light-grey text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
      </div>
      <div className="h-[100vh]">
        <h1 className="text-salmon-pink text-9xl font-extrabold mb-8">
          skills.
        </h1>
        <div className="text-light-grey text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
      </div>
      <div className="h-[100vh]">
        <h1 className="text-salmon-pink text-9xl font-extrabold mb-8">
          projects.
        </h1>
        <div className="text-light-grey text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
      </div>
      <div className="h-[100vh] py-48">
        <h1 className="text-salmon-pink text-9xl font-extrabold mb-8">
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
      </div>
    </div>
  );
}
