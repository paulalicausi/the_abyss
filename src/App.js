import './App.css';
import { useState, useEffect } from 'react';
import Step from './components/Step';

function App() {
  const [paso, setPaso] = useState(1);
  const [lang, setLang] = useState('es'); 

  useEffect(() => {
    const url = window.location.href;
    const match = url.match(/[?&]lang=([^&]+)/);
    const langFromUrl = match ? match[1] : null;

    if (langFromUrl) {
      setLang(langFromUrl);
    }
  }, []);

  const nextStep = () => {
    setPaso((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setPaso((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <>
      <Step step={paso} lang={lang} next={nextStep} prev={prevStep} />    
    </>
  );
}

export default App;
