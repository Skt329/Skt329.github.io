
import { BookOpenText } from "lucide-react";

const mediumArticles = [
  {
    title: "Understanding Blockchain in Simple Terms",
    url: "https://medium.com/@yourmediumprofile/understanding-blockchain-in-simple-terms-xxxxxx",
    date: "March 2024",
    desc: "An introduction to blockchain for non-technical readers.",
  },
  {
    title: "AI for Developers: Getting Started",
    url: "https://medium.com/@yourmediumprofile/ai-for-developers-getting-started-xxxxxx",
    date: "February 2024",
    desc: "A simple guide for programmers to dive into AI.",
  },
];

const gradients = [
  "from-pink-200 via-yellow-100 to-emerald-100",
  "from-blue-200 via-indigo-100 to-pink-200",
];

export default function Articles() {
  return (
    <section id="articles" className="py-8 px-3 sm:px-4 bg-gradient-to-br from-yellow-50/40 to-emerald-50/60 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center gradient-text">
          <span className="flex items-center justify-center gap-3">
            <BookOpenText className="w-8 h-8 text-green-600" />
            Medium Articles
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {mediumArticles.map((article, idx) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                block rounded-2xl bg-gradient-to-br ${gradients[idx % gradients.length]} 
                border-2 border-white/70 p-5 hover:scale-105 transition-transform duration-300
                shadow-md hover:shadow-xl animate-fade-in
                hover:ring-2 hover:ring-pink-200
              `}
            >
              <h3 className="text-xl font-semibold mb-1 text-emerald-900 flex items-center gap-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{article.desc}</p>
              <span className="text-xs text-gray-400">{article.date}</span>
            </a>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://medium.com/@yourmediumprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black text-white px-5 py-2 mt-2 font-medium shadow hover:bg-gray-800 transition-colors duration-200 hover:scale-105"
          >
            Visit my Medium
          </a>
        </div>
      </div>
    </section>
  );
}
