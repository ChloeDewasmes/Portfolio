"use client";

const qualities = [
  "Pluridisciplinaire",
  "Adaptable",
  "Curieuse",
  "Enthousiaste",
  "Esprit d'équipe",
  "Impliquée",
  "Autonome",
  "Rigoureuse",
  "Persévérante",
];

export default function QualitiesMarquee() {
  return (
    <div className="overflow-hidden group">
      {[0, 1].map((line) => (
        <div
          key={line}
          className={`flex whitespace-nowrap gap-8 sm:gap-24 group-hover:[animation-play-state:paused] 
        ${line % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
        >
          {[...qualities, ...qualities].map((q, i) => (
            <span
              key={`${q}-${i}`}
              className="px-4 py-2 sm:px-12 sm:py-4 bg-salmon-pink text-white rounded-xl text-md font-bold shadow mb-4"
            >
              {q}
            </span>
          ))}
          {[...qualities].reverse().map((q, i) => (
            <span key={`${q}-${i}`} className="">
              {q}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
