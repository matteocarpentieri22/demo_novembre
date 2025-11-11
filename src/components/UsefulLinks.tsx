import { ArrowLeft, ExternalLink, Calendar, FileText, Pill, Phone, AlertCircle, GraduationCap } from 'lucide-react';

interface UsefulLinksProps {
  onBack: () => void;
}

interface Link {
  title: string;
  category: string;
  description: string;
  url: string;
  icon: typeof Calendar;
  isExternal: boolean;
}

const links: Link[] = [
  {
    title: 'CUP - Centro Unico di Prenotazione',
    category: 'Prenotazioni',
    description: 'Prenotazioni, referti e disdette del Servizio Sanitario Nazionale',
    url: 'https://www.ioveneto.it/prenotazioni-referti-e-disdette/servizio-sanitario-nazionale/',
    icon: Calendar,
    isExternal: true,
  },
  {
    title: 'Linee Guida Regionali',
    category: 'Documentazione',
    description: 'Linee guida regionali per i percorsi diagnostico-terapeutici',
    url: '#',
    icon: FileText,
    isExternal: false,
  },
  {
    title: 'Registro Farmaci',
    category: 'Risorse Cliniche',
    description: 'Accesso al registro dei farmaci e terapie disponibili',
    url: '#',
    icon: Pill,
    isExternal: false,
  },
  {
    title: 'Contatti Specialistici',
    category: 'Contatti',
    description: 'Elenco dei contatti utili dei reparti specialistici',
    url: '#',
    icon: Phone,
    isExternal: false,
  },
  {
    title: 'Gestione Emergenze',
    category: 'Urgenze',
    description: 'Procedure e contatti per la gestione delle emergenze sanitarie',
    url: '#',
    icon: AlertCircle,
    isExternal: false,
  },
  {
    title: 'Area Formazione',
    category: 'Formazione',
    description: 'Corsi e aggiornamenti professionali per medici di medicina generale',
    url: '#',
    icon: GraduationCap,
    isExternal: false,
  },
];

function UsefulLinks({ onBack }: UsefulLinksProps) {
  const handleLinkClick = (link: Link) => {
    if (link.isExternal && link.url !== '#') {
      window.open(link.url, '_blank');
    } else {
      alert('Demo: Link non disponibile nella versione demo');
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
      >
        <ArrowLeft className="w-5 h-5" />
        Torna alla Home
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Link Utili</h2>
        <p className="text-gray-600 mb-8">
          Accesso rapido a servizi e risorse per la pratica medica
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                onClick={() => handleLinkClick(link)}
                className="bg-white border-2 border-gray-200 hover:border-orange-400 rounded-lg p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-500 transition-colors">
                    <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {link.title}
                      </h3>
                      {link.isExternal && (
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded mb-2">
                      {link.category}
                    </span>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 italic">
            Nota: contenuti mock a solo scopo dimostrativo. I link reali saranno configurati nell'ambiente di produzione.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UsefulLinks;
