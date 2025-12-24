import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">À propos de moi</h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Passionné par l'intersection entre le sport de haut niveau et la gestion stratégique internationale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-2xl -z-10 transform rotate-2"></div>
            <Image
              className="rounded-xl shadow-2xl object-cover grayscale hover:grayscale-0 transition duration-700 w-full"
              src="/sourire match isa.jpg"
              alt="Moussa Thiam Diaw"
              width={600}
              height={800}
              priority
            />
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 inline-block"></span> Mon Parcours
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Étudiant en Master 1 Management du Sport à l'Université de Lille, je me spécialise dans l'administration 
                sportive internationale. Mon objectif est d'apporter une vision analytique et innovante aux organisations 
                sportives pour relever les défis de demain.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Management", items: ["Gestion de projet", "Marketing sportif", "Reporting", "SAGE100"], icon: "🎯" },
                { title: "Digital", items: ["Next.js / React", "Tailwind CSS", "Git & GitHub", "Power BI"], icon: "💻" },
                { title: "Langues", items: ["Français (Natif)", "Anglais (Pro)", "Espagnol (Base)"], icon: "🌍" },
                { title: "Soft Skills", items: ["Leadership", "Adaptabilité", "Travail d'équipe"], icon: "🤝" }
              ].map((skill, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-3">{skill.icon} {skill.title}</h3>
                  <ul className="text-slate-500 text-sm space-y-1">
                    {skill.items.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Objectifs style "Timeline" */}
        <div className="mt-24 bg-slate-900 rounded-3xl p-10 md:p-16 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Vision Professionnelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2"></div>
            {[
              { label: "Court terme", text: "Expertise opérationnelle via un stage significatif.", color: "bg-blue-500" },
              { label: "Moyen terme", text: "Management au sein d'une fédération internationale.", color: "bg-indigo-500" },
              { label: "Long terme", text: "Direction stratégique d'une entité sportive globale.", color: "bg-purple-500" }
            ].map((goal, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className={`w-4 h-4 ${goal.color} rounded-full mx-auto mb-4 ring-8 ring-white/5`}></div>
                <h3 className="font-bold text-xl mb-2">{goal.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}