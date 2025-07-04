import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// @ts-ignore
import SplitType from "split-type";

const LINES = [
  { copy: "INTERFACE 2037 READY FOR INQUIRY", has_underline: true },
  { copy: "SCIENCE INABILITY TO NEUTRALIZE ALIEN", has_underline: false },
  { copy: "UNABLE TO CLARIFY", has_underline: true },
  { copy: "CREW EXPENDABLE.", has_underline: false }
];

export default function BootScreen({ onFinish }: { onFinish: () => void }) {
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!started || !containerRef.current) return;

    const lineDivs = Array.from(containerRef.current.querySelectorAll(".line"));

    lineDivs.forEach((lineDiv) => {
      const copyDiv = lineDiv.querySelector(".copy");
      // @ts-ignore
      const split = new SplitType(copyDiv, { types: "chars" });
      gsap.set(split.chars, { opacity: 0 });
    });

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setDone(true);
          onFinish();
        }, 800);
      }
    });

    lineDivs.forEach((lineDiv, i) => {
      const grad = lineDiv.querySelector(".grad");
      const copyDiv = lineDiv.querySelector(".copy");
      const underline = lineDiv.querySelector(".underline");
      // @ts-ignore
      const chars = copyDiv.querySelectorAll(".char");

      tl.set(lineDiv, { display: "grid" }, i * 0.2)
        .set(chars, { opacity: 0, visibility: "visible" }, "<")
        .fromTo(
          grad,
          { "--grad-offset-scale": 1 },
          { "--grad-offset-scale": -1, duration: 0.5, ease: "power4.inOut" },
          "<"
        )
        .fromTo(
          chars,
          { opacity: 1, backgroundColor: "#7df14a" },
          {
            opacity: 1,
            backgroundColor: "transparent",
            duration: 0.05,
            stagger: 0.05,
            ease: "steps(1)"
          },
          "-=0.12"
        )
        .fromTo(
          chars,
          {
            color: "#fff",
            textShadow:
              "0px 0px 6px rgba(255,255,255,1), 0px 0px 15px rgba(255,255,255,1)"
          },
          {
            color: "#7df14a",
            textShadow:
              "0px 0px 6px rgba(255,255,255,0), 0px 0px 15px rgba(255,255,255,0)",
            duration: 0.45,
            stagger: 0.05
          },
          "<"
        );
      if (underline) {
        tl.set(underline, { opacity: 1 }, "<");
      }
    });

    return () => {
      tl.kill();
    };
  }, [started, onFinish]);

  if (done) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-[#7df14a] font-mono select-none" style={{ fontSize: "2.5vw", letterSpacing: 2, zIndex: 50 }}>
      {!started ? (
        <button
          className="border border-[#80ff10] text-[#80ff10] px-8 py-4 text-3xl hover:bg-[#80ff10] hover:text-black transition-colors"
          onClick={() => setStarted(true)}
        >
          BOOT
        </button>
      ) : (
        <div
          ref={containerRef}
          className="flex flex-col gap-4 items-center justify-center w-full"
          style={{ minHeight: 320, maxWidth: 700 }}
        >
          {LINES.map((line, i) => (
            <div className="line w-full flex flex-col items-center justify-center" key={i} style={{ position: "relative" }}>
              <div className="grad" />
              <div className="copy" style={{ position: "relative", justifySelf: "center", textAlign: "center", width: "100%" }}>
                {line.copy}
                <div
                  className="underline"
                  style={{
                    position: "absolute",
                    left: 1,
                    bottom: 1,
                    width: "100%",
                    height: "0.10vw",
                    backgroundColor: "#7af042",
                    opacity: 0,
                    display: line.has_underline ? "block" : "none"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}