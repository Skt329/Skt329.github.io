import { School } from "lucide-react";
import { useEffect, useRef } from "react";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 120);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.education-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      university: "Babasaheb Bhimrao Ambedkar University",
      degree: "Master of Computer Application",
      location: "Lucknow(U.P.), India",
      period: "Aug. 2022 - May 2024",
    },
    {
      university: "Ram Manohar Lohia Awadh University",
      degree: "Bachelor of Science",
      location: "Ayodhya(U.P.), India",
      period: "Aug. 2018 - May 2021",
    },
  ];

  const backgrounds = [
    "from-purple-50/70 via-pink-50/80 to-blue-50/80",
    "from-blue-50/80 via-green-50/70 to-yellow-50/80",
  ];

  return (
    <section ref={sectionRef} className="py-10 px-4 bg-gradient-to-br from-pink-50/40 to-purple-50/60" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Education</h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={edu.university}
              className={`education-item fade-up bg-gradient-to-br ${backgrounds[idx % backgrounds.length]}
                glass-card p-6 rounded-2xl border-2 border-white/70 hover:shadow-2xl hover:scale-105 transition-all duration-400 animate-fade-in`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full shadow-md">
                  <School className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">{edu.university}</h3>
                  <p className="text-purple-600 font-medium">{edu.degree}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-sm text-gray-500 mt-2">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;