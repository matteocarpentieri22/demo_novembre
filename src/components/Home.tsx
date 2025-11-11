import { FileText, MessageSquare, FolderOpen, ExternalLink, Info } from 'lucide-react';
import { Page } from '../App';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

function Home({ onNavigate }: HomeProps) {
  const menuItems = [
    {
      id: 'pdta-selection' as Page,
      icon: FileText,
      title: 'Selezione PDTA',
      description: 'Verifica dei requisiti ed esami preliminari per i PDTA',
      color: 'bg-blue-500',
    },
    {
      id: 'chatbot' as Page,
      icon: MessageSquare,
      title: 'Chatbot PDTA',
      description: 'Assistente AI per valutazione casi clinici e interpretazione PDTA',
      color: 'bg-green-500',
    },
    {
      id: 'documents' as Page,
      icon: FolderOpen,
      title: 'Documenti PDTA',
      description: 'Visualizzazione e download documenti per ciascun PDTA',
      color: 'bg-purple-500',
    },
    {
      id: 'links' as Page,
      icon: ExternalLink,
      title: 'Link Utili',
      description: 'Accesso rapido a servizi e risorse per la pratica medica',
      color: 'bg-orange-500',
    },
    {
      id: 'access-info' as Page,
      icon: Info,
      title: 'Informazioni Accesso IOV',
      description: 'Processo di accesso e contatti per l\'invio pazienti',
      color: 'bg-teal-500',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left group hover:-translate-y-1"
            >
              <div className={`${item.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
