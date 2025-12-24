import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">À propos de moi</h1>
          <p className="mt-4 text-xl text-gray-600">Découvrez mon parcours et mes aspirations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              className="rounded-lg shadow-lg object-cover"
              src="/mtdimage.jpg" // Assurez-vous que l'image est dans le dossier public/
              alt="Étudiant en management du sport"
              width={500}
              height={600} // Ajusté pour le format portrait de votre photo
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mon Parcours Académique</h2>
              <p className="text-gray-600 leading-relaxed">
                Actuellement étudiant en Master 1 Management du Sport avec un parcours en International Sport Administration
                à l'Université de Lille, France. Mon cursus me prépare aux défis du management sportif international,
                combinant théorie et pratique pour développer des compétences essentielles dans ce domaine dynamique.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mes Intérêts</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Gestion d'événements sportifs internationaux</li>
                <li>• Marketing et sponsoring sportif</li>
                <li>• Administration et gouvernance sportive</li>
                <li>• Développement durable dans le sport</li>
                <li>• Innovation technologique dans le secteur sportif</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mes Compétences Clés</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    🎯 Management & Business
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Gestion de projet</li>
                    <li>• Marketing stratégique</li>
                    <li>• Analyse de données et reporting</li>
                    <li>• Administration et gestion de bases de données</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    💻 Digital & Web
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• HTML, CSS, JavaScript, React</li>
                    <li>• Git & GitHub</li>
                    <li>• Responsive Web Design</li>
                    <li>• Méthodes Agile</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    📊 Outils Professionnels
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Microsoft Office (Excel, PowerPoint, Word)</li>
                    <li>• Power BI</li>
                    <li>• SAGE100</li>
                    <li>• Zoom, Microsoft Teams</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    🤝 Compétences Humaines
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Communication multicanale</li>
                    <li>• Leadership et travail en équipe</li>
                    <li>• Adaptabilité et autonomie</li>
                    <li>• Travail à distance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mes Objectifs Professionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Court terme</h3>
              <p className="text-gray-600">Finaliser mon Master et acquérir une première expérience professionnelle</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moyen terme</h3>
              <p className="text-gray-600">Travailler dans une fédération sportive internationale ou une organisation majeure</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Long terme</h3>
              <p className="text-gray-600">Devenir un leader dans le management sportif international</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}