import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import "../style/socialValues.css";

const stats = [
  { value: 15000, label: "Students" },
  { value: 13000, label: "Successful Placements" },
  { value: 44, label: "Years of Experience" },
];

const SocialValues = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="social-values-section" ref={sectionRef}>
      <h2 className="section-title text-blue-500">Our Social Values</h2>

      <div className="values-grid">
        {stats.map((stat, index) => (
          <div key={index} className="value-box">
            <h3 className="value-number">
              {startCount ? (
                <CountUp end={stat.value} duration={3} separator="," />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="value-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialValues;
