import { Heart } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md border-b-4 border-blue-600">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Portale MMG - IOV
            </h1>
            <p className="text-sm text-gray-600">
              Istituto Oncologico Veneto - Area Medici di Medicina Generale
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
