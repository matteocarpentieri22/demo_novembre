import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CaseManagerSoniaSabrina() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-iov-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/clinici-iov')}
            className="mb-6 flex items-center gap-2 text-iov-dark-blue hover:text-iov-dark-blue-hover transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Torna alla selezione</span>
          </button>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-iov-dark-blue mb-4">
              Area Case Manager Sonia-Sabrina
            </h1>
            <p className="text-lg text-iov-gray-text">
              Questa sezione sarà disponibile a breve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseManagerSoniaSabrina;

