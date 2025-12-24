import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section avec un léger dégradé professionnel */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl">
            <Image
              className="rounded-full border-4 border-slate-900 object-cover"
              src="/smilemtd.jpg" // Utilisation de ta photo "smile"
              alt="Moussa Thiam Diaw"
              width={160}
              height={160}
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Moussa Thiam <span className="text-blue-400">Diaw</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Expert en devenir du <span className="text-white font-semibold">Management Sportif International</span>. 
            Actuellement en Master 1 à l'Université de Lille.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition-all rounded-full font-semibold shadow-lg hover:shadow-blue-500/20">
              Découvrir mes projets
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all rounded-full font-semibold">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Section Points Forts avec des cartes épurées */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Vision Stratégique", 
              desc: "Parcours International Sport Administration à Lille.",
              icon: "M12 6.253v13m0-13C10.832 5.477...",
              color: "text-blue-600"
            },
            { 
              title: "Expertise Digitale", 
              desc: "Maîtrise des outils de gestion et du développement web.",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11...",
              color: "text-indigo-600"
            },
            { 
              title: "Réseau Global", 
              desc: "Orienté vers les fédérations et organisations majeures.",
              icon: "M3 8l7.89 4.26...",
              color: "text-slate-600"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className={`${item.color} mb-4`}>
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   {/* Garde tes chemins SVG originaux ici */}
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}