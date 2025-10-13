import React from "react";

const testimonials = [
  {
    description:
      "ScrollX-UI has completely transformed how I build interfaces. The animations are silky smooth, and the components are modular and responsive.",
    image:
      "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=600&auto=format&fit=crop",
    name: "Isabelle Carlos",
    handle: "@isabellecarlos",
  },
  {
    description:
      "I love how ScrollX-UI makes my projects look professional with minimal effort. The documentation is clear and the community is super helpful.",
    image:
      "https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=600&auto=format&fit=crop",
    name: "Lana Akash",
    handle: "@lanaakash",
  },
  {
    description:
      "The smooth scrolling animations and intuitive components in ScrollX-UI save me hours of development time!",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=600&auto=format&fit=crop",
    name: "Liam O’Connor",
    handle: "@liamoc",
  },
  {
    description:
      "Using ScrollX-UI feels like magic — it’s so easy to create beautiful, interactive UIs without writing complex code.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    name: "Isabella Mendes",
    handle: "@isamendes",
  },
  {
    description:
      "ScrollX-UI’s open-source nature means I can customize components exactly how I want them — plus, the performance is outstanding.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
    name: "Meera Patel",
    handle: "@meerapatel",
  },
  {
    description:
      "I recommend ScrollX-UI to everyone looking for a powerful, flexible UI library with stunning animation support.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    name: "Emily Chen",
    handle: "@emchen",
  },
];

export default function AutoScrollTestimonials() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* 👇 custom scroll animation & mask gradient */}
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollX {
          animation: scrollX 40s linear infinite;
        }
        .fade-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>

      <div className="relative overflow-hidden h-[290px] fade-mask">
        <div className="flex animate-scrollX gap-8 px-6 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-none w-80 bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-4 border-blue-100"
              />
              <p className="text-gray-600 text-sm italic mb-3 line-clamp-4">
                “{t.description}”
              </p>
              <h4 className="text-blue-800 font-semibold">{t.name}</h4>
              <span className="text-blue-500 text-sm">{t.handle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
