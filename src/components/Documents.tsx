import { useState } from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { pdtaData } from '../data/pdtaData';

interface DocumentsProps {
  onBack: () => void;
}

const documentTypes = [
  { id: 'access', name: 'Criteri di accesso' },
  { id: 'summary', name: 'Scheda sintetica' },
  { id: 'request', name: 'Modulo richiesta' },
];

function Documents({ onBack }: DocumentsProps) {
  const [selectedPDTA, setSelectedPDTA] = useState<string | null>(null);

  const handleDownload = (pdtaName: string, docType: string) => {
    alert(`Demo: Download documento "${docType}" per PDTA ${pdtaName}`);
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Documenti PDTA</h2>
        <p className="text-gray-600 mb-2">
          Visualizzazione e download documenti per ciascun PDTA
        </p>
        <p className="text-sm text-orange-600 mb-8 italic">
          Demo - I documenti saranno disponibili dopo l'integrazione con il sistema documentale IOV
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {pdtaData.map((pdta) => (
            <button
              key={pdta.id}
              onClick={() => setSelectedPDTA(pdta.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedPDTA === pdta.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 bg-white'
              }`}
            >
              <h3 className="font-semibold text-gray-800">{pdta.name}</h3>
            </button>
          ))}
        </div>

        {selectedPDTA && (
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-600" />
              Documenti disponibili - PDTA {pdtaData.find(p => p.id === selectedPDTA)?.name}
            </h3>
            <div className="space-y-3">
              {documentTypes.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-lg p-4 flex items-center justify-between border border-purple-200"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-800">{doc.name}</span>
                  </div>
                  <button
                    onClick={() =>
                      handleDownload(
                        pdtaData.find(p => p.id === selectedPDTA)?.name || '',
                        doc.name
                      )
                    }
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Scarica
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedPDTA && (
          <div className="text-center py-12 text-gray-500">
            Seleziona un PDTA per visualizzare i documenti disponibili
          </div>
        )}
      </div>
    </div>
  );
}

export default Documents;
