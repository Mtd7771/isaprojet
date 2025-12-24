import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "🖥️ Web Content Writer",
    company: "Massada Communication Agency – Dakar",
    period: "Août – Octobre 2024",
    description: "Conception de supports visuels promotionnels et rédaction d'articles spécialisés.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Digital Marketing", "Content Creation", "Project Management"],
    details: "Conception de supports visuels pour Afritalex et FAMAfrica, production de vidéos promotionnelles."
  },
  {
    id: 2,
    title: "🏢 Assistant Gestion de Formation",
    company: "TotalEnergies – Sénégal",
    period: "Juillet – Août 2023",
    description: "Suivi des inscriptions sécurité et gestion des bases de données employés.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Data Analysis", "Safety Coordination", "Database Admin"],
    details: "Coordination complète des programmes de formation sécurité et mise à jour des bases SAGE."
  },
  {
    id: 3,
    title: "🏆 Leadership & Sport",
    company: "Dakar Sacré-Cœur / AS Douanes",
    period: "Engagement Continu",
    description: "Football et Athlétisme de haut niveau, membre du gouvernement étudiant.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Leadership", "Teamwork", "Discipline"],
    details: "Pratique compétitive renforçant l'esprit d'équipe et la gestion de la performance."
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mes Expériences</h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Un parcours alliant rigueur administrative, créativité digitale et leadership sportif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors"></div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {project.period}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-4">{project.company}</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-50 text-slate-500 text-[10px] font-bold px-2 py-1 rounded border border-slate-100 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center justify-center w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors group-hover:shadow-lg group-hover:shadow-blue-200"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Compétences Métier */}
        <div className="mt-32">
          <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center italic">Expertises Clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Gestion de Projet", icon: "📋" },
              { label: "Analyse de Données", icon: "📊" },
              { label: "Communication", icon: "💬" },
              { label: "Management Sportif", icon: "🏟️" }
            ].map((skill, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center hover:border-blue-500 transition-colors cursor-default">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <span className="text-slate-900 font-bold text-sm">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}