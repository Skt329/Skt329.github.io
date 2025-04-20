
import { School } from "lucide-react";

const Education = () => {
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
    <section className="py-16 px-4 bg-purple-50" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.university}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <School className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{edu.university}</h3>
                  <p className="text-purple-600">{edu.degree}</p>
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
