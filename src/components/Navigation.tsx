import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="text-2xl font-black text-slate-900">
            MTD<span className="text-blue-600">.</span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            {/* Vérifie que ces dossiers existent dans src/app/ */}
            <Link href="/" className="text-slate-600 hover:text-blue-600">Accueil</Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600">À propos</Link>
            <Link href="/projects" className="text-slate-600 hover:text-blue-600">Projets</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}