import React, { useEffect, useRef } from "react";
import "../style/cursor.css"; // custom css

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMove);

    const animate = () => {
      // Smooth lerp (0.1 = smoothness factor, kam rakho to aur smooth hoga)
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
}
