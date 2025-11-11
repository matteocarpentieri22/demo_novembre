import { LogOut, User } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

function Navbar({ currentPage, onNavigate, isLoggedIn, onLogout }: NavbarProps) {
  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'pdta-selection' as Page, label: 'Selezione PDTA' },
    { id: 'chatbot' as Page, label: 'Chatbot PDTA' },
    { id: 'documents' as Page, label: 'Documenti' },
    { id: 'links' as Page, label: 'Link Utili' },
    { id: 'access-info' as Page, label: 'Accesso IOV' },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors py-2 px-1 border-b-2 ${
                  currentPage === item.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {isLoggedIn && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-800">
                  Dr. Marco Rossi
                </span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
