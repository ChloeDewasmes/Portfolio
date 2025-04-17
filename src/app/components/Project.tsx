import Image from "next/image";
import Profile from "../../../public/images/profile.png";
import Button from "./Button";
import { useLang } from "../LangContext";
import translations from "../translations";

export default function Project(props: any) {
  const { lang } = useLang();
  const text = translations[lang].page;

  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full mb-2 shadow shadow-dark-salmon rounded-xl p-4 group hover:bg-gradient-to-b from-[#ffffff] to-[#99433A]/100 border-2 border-[#FF6F61]/50">
        <Image
          className="rounded-xl h-full group-hover:opacity-20 hover:scale-105 ease-in duration-300 max-h-[200px] object-contain"
          src={Profile}
          alt="altText"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-2xl text-gray tracking-wider text-center">
            titre
          </h3>
          <p className="pb-4 pt-2 text-center tracking-widest">technoUsed</p>
        </div>
      </div>
      <p className="italic text-sm mb-6">{props.date}</p>
      <h4 className="mb-2">{props.name}</h4>
      <Button text={text.projects.goButton} />
    </div>
  );
}
