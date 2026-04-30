'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'bn' | 'en';

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('bn');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
