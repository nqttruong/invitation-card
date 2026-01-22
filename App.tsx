
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import Welcome from './components/Screens/Welcome';
import Home from './components/Screens/Home';
import Invitation from './components/Screens/Invitation';
import Schedule from './components/Screens/Schedule';
import { generateGreeting } from './services/geminiService';

const App: React.FC = () => {
  const [guestName, setGuestName] = useState<string>('');
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.WELCOME);
  const [personalizedWish, setPersonalizedWish] = useState<string>('');
  const [loadingGreeting, setLoadingGreeting] = useState<boolean>(false);

  const handleStart = async (name: string) => {
    setGuestName(name);
    setLoadingGreeting(true);
    setCurrentScreen(Screen.HOME);
    
    // Fetch personalized greeting from Gemini
    const wish = await generateGreeting(name);
    setPersonalizedWish(wish);
    setLoadingGreeting(false);
  };

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-lg transition-all duration-500 ease-in-out">
        {currentScreen === Screen.WELCOME && (
          <Welcome onStart={handleStart} />
        )}
        {currentScreen === Screen.HOME && (
          <Home 
            guestName={guestName} 
            loading={loadingGreeting}
            onNavigate={navigate} 
          />
        )}
        {currentScreen === Screen.INVITATION && (
          <Invitation 
            personalizedWish={personalizedWish}
            onNavigate={navigate} 
          />
        )}
        {currentScreen === Screen.SCHEDULE && (
          <Schedule 
            guestName={guestName}
            onNavigate={navigate} 
          />
        )}
      </div>
    </main>
  );
};

export default App;
