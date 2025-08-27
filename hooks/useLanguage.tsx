import { Language } from "@/types/Language";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect } from "react";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [language, setLanguageState] = React.useState<Language>(Language.ENGLISH);

    useEffect(() => {
        AsyncStorage.getItem("language").then((lang) => {
            if (lang && Object.values(Language).includes(lang as Language)) {
                setLanguage(lang as Language);
            }
        });
    }, []);

    const setLanguage = async (lang: Language) => {
        setLanguageState(lang);
        await AsyncStorage.setItem("language", lang);
    }

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}