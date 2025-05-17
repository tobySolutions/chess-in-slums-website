"use client";

import { useEffect, useRef } from "react";

const Footer = () => {
  const navItems = [
    { name: "HOME", href: "#", id: "home" },
    { name: "BIOGRAPHY", href: "#", id: "biography" },
    { name: "WORKS", href: "#", id: "works" },
    { name: "CHESS IN SLUM", href: "#", id: "chess-in-slum" },
    { name: "PARTNERSHIP", href: "#", id: "partnership" },
    { name: "SOCIAL MEDIA", href: "#", id: "social-media" },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = 300;
    canvas.width = size;
    canvas.height = size;

    const text = ".THE ONLY TUNDE . ONAKOYA . GAMECHANGER.";
    const radius = size / 2 - 30;
    let angle = 0;

    const drawCircularText = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.font = "bold 17px Mabry Pro";
      ctx.fillStyle = "#0a0a0a";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate(angle);

      for (let i = 0; i < text.length; i++) {
        const charAngle = (i * 2 * Math.PI * 0.7) / text.length;
        ctx.save();
        ctx.rotate(charAngle);
        ctx.translate(0, -radius);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
      }

      ctx.restore();
      angle -= 0.003;
      requestAnimationFrame(drawCircularText);
    };

    drawCircularText();
  }, []);

  return (
    <main className="flex  flex-col items-center bg-white-bg w-full pt-4">
      <div className="w-full max-w-7xl flex flex-col items-center mb-10">
        <div className="flex items-center justify-center relative w-[300px] h-[300px]">
          <canvas
            ref={canvasRef}
            id="circularText"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
          ></canvas>

          <img
            src="/images/chess-piece2.png"
            alt="Chess piece logo"
            className="w-[120px]"
          />
        </div>

        <nav className="w-[70%] mt-6" aria-label="Main navigation">
          <ul
            id="mobile-menu"
            className={`flex flex-row flex-wrap justify-center items-center gap-8`}
          >
            {navItems.map((item, index) => (
              <>
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`relative text-[#333333] group capitalize text-sm font-medium`}
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-offblack transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>

                {index < navItems.length - 1 && (
                  <li className="text-[#d9d9d9] text-2xl">•</li>
                )}
              </>
            ))}
          </ul>
        </nav>
      </div>

      <div className="w-full">
        <div className="angled">
          <p className="text-center text-offblack tracking-wider uppercase text-base font-medium">
            Copyright @tundeonakoya . 2024
          </p>
        </div>

        <div className="w-full h-24 bg-[#000000] overflow-hidden">
          <img
            src="/images/footer-art.jpg"
            alt="Decorative pattern"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Footer;
