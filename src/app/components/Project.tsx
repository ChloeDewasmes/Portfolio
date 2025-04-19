import Image from "next/image";
import Button from "./Button";
import { useLang } from "../LangContext";
import translations from "../translations";

export default function Project(props: any) {
  const { lang } = useLang();
  const text = translations[lang].page;
  console.log(props.name);

  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full mb-2 shadow shadow-dark-grey rounded-xl group hover:bg-gradient-to-b from-[#000000] to-[#99433A]/100 border border-dark-grey/50">
        <Image
          className="rounded-xl w-[25vw] max-w-[350px] group-hover:opacity-20 ease-in duration-100 max-h-[300px] object-contain"
          src={props.src}
          alt="Project overview"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-lg font-bold text-gray tracking-wider text-center mb-4">
            {props.desc}
          </h3>
          <p className="text-sm pb-4 pt-2 text-center tracking-widest">
            {props.stack}
          </p>
        </div>
      </div>
      <p className="italic text-sm mb-6">{props.date}</p>
      <h4 className="mb-2">{props.name}</h4>
      <Button text={text.projects.goButton} />
    </div>
  );
}
