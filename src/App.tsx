import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PDTASelection from './components/PDTASelection';
import ChatbotPDTA from './components/ChatbotPDTA';
import Documents from './components/Documents';
import UsefulLinks from './components/UsefulLinks';
import AccessInfo from './components/AccessInfo';

export type Page = 'home' | 'pdta-selection' | 'chatbot' | 'documents' | 'links' | 'access-info';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'pdta-selection':
        return <PDTASelection onBack={() => setCurrentPage('home')} />;
      case 'chatbot':
        return <ChatbotPDTA onBack={() => setCurrentPage('home')} />;
      case 'documents':
        return <Documents onBack={() => setCurrentPage('home')} />;
      case 'links':
        return <UsefulLinks onBack={() => setCurrentPage('home')} />;
      case 'access-info':
        return <AccessInfo onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
