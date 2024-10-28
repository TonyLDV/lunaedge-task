"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const defaultChadData: ChadDataType = {
  email: "",
  name: "",
  password: "",
  store: "",
  customerSupportEmail: "",
};

type ChadContextType = {
  chadData: ChadDataType;
  updateChadData: (data: Partial<ChadDataType>) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  actualStep: number;
  setActualStep: (step: number) => void;

  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

type ChadDataType = {
  email: string;
  name: string;
  password: string;

  store: string;
  customerSupportEmail: string;
};

export const ChadContext = createContext<ChadContextType | null>(null);

export const ChadProvider = ({ children }: { children: React.ReactNode }) => {
  const [actualStep, setActualStep] = useState(0);
  const [chadData, setChadData] = useState<ChadDataType>(defaultChadData);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateChadData = useCallback((data: Partial<ChadDataType>) => {
    setChadData((prev) => ({ ...prev, ...data }));
  }, []);

  const contextValue: ChadContextType = useMemo(
    () => ({
      chadData,
      updateChadData,

      isLoading,
      setIsLoading,

      actualStep,
      setActualStep,

      isLoggedIn,
      setIsLoggedIn,
    }),
    [chadData, updateChadData, isLoading, actualStep, isLoggedIn]
  );

  return (
    <ChadContext.Provider value={contextValue}>{children}</ChadContext.Provider>
  );
};

export function useChadContext() {
  const context = useContext(ChadContext);
  if (context === null) {
    throw new Error("Context must be used within a ContextProvider");
  }
  return context;
}
