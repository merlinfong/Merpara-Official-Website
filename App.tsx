import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { LandingPage } from './components/LandingPage';
import { FashionPage } from './components/FashionPage';
import { MarketingPage } from './components/MarketingPage';
import { Footer } from './components/Footer';
import { PageView, SectionID } from './types';

function App() {
  const [activePage, setActivePage] = useState<PageView>(PageView.HOME);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  const scrollToSection = (id: SectionID) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-merpara-dark bg-[#ffffff] min-h-screen selection:bg-merpara-coral selection:text-white">
      <NavBar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        scrollToSection={scrollToSection} 
      />
      
      <main className="flex flex-col w-full overflow-hidden min-h-screen">
        {activePage === PageView.HOME && (
          <LandingPage setPage={setActivePage} scrollToSection={scrollToSection} />
        )}
        
        {activePage === PageView.FASHION && (
          <FashionPage scrollToSection={scrollToSection} />
        )}

        {activePage === PageView.MARKETING && (
          <MarketingPage scrollToSection={scrollToSection} />
        )}
      </main>

      <Footer activePage={activePage} />
    </div>
  );
}

export default App;