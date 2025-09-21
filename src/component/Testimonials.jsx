import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    comment:
      "Palash is a fantastic developer with a deep understanding of the MERN stack. Always delivers high-quality work on time.",
    linkedin: "https://linkedin.com/in/alicejohnson",
  },
  {
    name: "David Smith",
    comment:
      "Great communication and problem-solving skills. Working with Palash made our project a success.",
    linkedin: "https://linkedin.com/in/davidsmith",
  },
  {
    name: "Riya Kapoor",
    comment:
      "Very professional and creative. The UI/UX improvements Palash brought to our app were amazing!",
    linkedin: "https://linkedin.com/in/riyakapoor",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-16 border-t border-cyan-500 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/20 backdrop-blur-sm text-white rounded-lg p-6 shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
            >
              <p className="text-sm mb-4 italic">"{t.comment}"</p>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{t.name}</h4>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-sm hover:underline"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
