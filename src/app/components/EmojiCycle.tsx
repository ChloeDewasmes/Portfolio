import { useEffect, useState } from "react";

const EMOJIS = ["🐒", "🧎🏼‍♂️", "🚶‍♂️"];

export default function EmojiCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % EMOJIS.length);
    }, 1000); // change emoji every 1s
    return () => clearInterval(interval);
  }, []);

  return <span className="ml-2">{EMOJIS[index]}</span>;
}
