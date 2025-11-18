import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import RichiestaPrenotazione from './RichiestaPrenotazione';
import ElencoRichieste from './ElencoRichieste';
import Notifiche from './Notifiche';
import StoricoVisite from './StoricoVisite';
import { OncologoPage, Notifica } from './types';

// Mock data - in produzione verrà da un'API
const mockNotifiche: Notifica[] = [
  {
    id: '1',
    pazienteNome: 'Mario',
    pazienteCognome: 'Rossi',
    codiceFiscale: 'RSSMRA80A01H501U',
    dataVisita: '2024-01-25',
    ambulatorio: 'Cure Simultanee',
    messaggio: 'Il paziente ha completato la visita e l\'esito è disponibile',
    letta: false,
    dataNotifica: '2024-01-25T10:30:00',
    richiestaId: '1',
  },
  {
    id: '2',
    pazienteNome: 'Giovanna',
    pazienteCognome: 'Bianchi',
    codiceFiscale: 'BNCGNN75B15L219X',
    dataVisita: '2024-01-24',
    ambulatorio: 'Osteoncologia',
    messaggio: 'Il paziente ha completato la visita e l\'esito è disponibile',
    letta: false,
    dataNotifica: '2024-01-24T14:20:00',
    richiestaId: '2',
  },
];

function OncologoRadioterapista() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<OncologoPage>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [notifiche, setNotifiche] = useState<Notifica[]>(mockNotifiche);

  // Tutte le notifiche sono non lette per definizione
  const notificheNonLette = notifiche.length;

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/clinici-iov');
  };

  const handleEliminaNotifica = (id: string) => {
    setNotifiche(notifiche.filter(n => n.id !== id));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} notificheNonLette={notificheNonLette} />;
      case 'richiesta-prenotazione':
        return <RichiestaPrenotazione onBack={() => setCurrentPage('home')} />;
      case 'elenco-richieste':
        return <ElencoRichieste onBack={() => setCurrentPage('home')} />;
      case 'notifiche':
        return <Notifiche onBack={() => setCurrentPage('home')} notifiche={notifiche} onEliminaNotifica={handleEliminaNotifica} />;
      case 'storico-visite':
        return <StoricoVisite onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} notificheNonLette={notificheNonLette} />;
    }
  };

  return (
    <div className="min-h-screen bg-iov-gradient">
      <Header />
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout}
        notificheNonLette={notificheNonLette}
      />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default OncologoRadioterapista;

