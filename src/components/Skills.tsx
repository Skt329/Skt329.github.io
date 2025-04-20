
const Skills = () => {
  const skills = {
    Languages: ["Solidity", "Java", "Python", "C/C++", "Javascript"],
    Frameworks: ["Express.js", "Node.js"],
    "Platform/Cloud": ["Huggingface", "Google AI Studio"],
    "Scraping/Automation": ["Puppeteer", "Cheerio"],
    "Developer Tools": ["Git", "VS Code", "Hardhat", "Remix", "Ethereum"],
    Libraries: ["Web3.js", "Ether.js"],
    Database: ["MongoDB", "MySQL"],
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4 text-purple-600">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
