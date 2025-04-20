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
            }, idx * 200);
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

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.university}
              className="education-item fade-up glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
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
