import { useState, useEffect } from 'react';
import './App.css';
import FlipCard from './components/userLogin/userLogin';
import ServicesCard from './components/services/service';
import ProfileCard from './components/userProfile/userProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(token);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title"> VRV Security Service</h1>
      </header>

      <main className="main-content">
        <div className="panel">
          {isAuthenticated ? (
            <ProfileCard setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <FlipCard setIsAuthenticated={setIsAuthenticated} />
          )}
        </div>
        
        <section className="services-section">
          <ServicesCard />
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 VRV Security Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
