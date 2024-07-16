// context/MobileContext.js
import React, { createContext, useContext } from "react";

interface SettingsContextProps {
  isMobile: boolean;
}

const SettingsContext = createContext<SettingsContextProps>({ isMobile: false });

export const SettingsProvider = ({ isMobile, children }: { isMobile: boolean; children: React.ReactNode }) => <SettingsContext.Provider value={{ isMobile }}>{children}</SettingsContext.Provider>;

export const useMobile = () => useContext(SettingsContext);
