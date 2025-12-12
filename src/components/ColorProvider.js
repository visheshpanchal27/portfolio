import React, { createContext, useContext } from 'react';

const ColorContext = createContext();

export const lightTheme = {
  primary: 'black',
  primaryLight: 'gray-800',
  primaryDark: 'black',
  accent: 'gray-900',
  accentLight: 'gray-700',
  accentDark: 'black',
  background: 'white',
  backgroundSecondary: 'gray-50',
  backgroundTertiary: 'gray-100',
  textPrimary: 'black',
  textSecondary: 'gray-700',
  textMuted: 'gray-500',
  border: 'gray-300',
  borderLight: 'gray-200',
  gradientPrimary: 'from-black to-gray-800',
  gradientAccent: 'from-gray-900 to-black',
  gradientBackground: 'from-white via-gray-50 to-gray-100',
};

export const darkTheme = {
  primary: 'white',
  primaryLight: 'gray-200',
  primaryDark: 'white',
  accent: 'gray-200',
  accentLight: 'gray-300',
  accentDark: 'white',
  background: 'black',
  backgroundSecondary: 'gray-950',
  backgroundTertiary: 'gray-900',
  textPrimary: 'white',
  textSecondary: 'gray-300',
  textMuted: 'gray-400',
  border: 'gray-700',
  borderLight: 'gray-800',
  gradientPrimary: 'from-white to-gray-300',
  gradientAccent: 'from-gray-200 to-white',
  gradientBackground: 'from-black via-gray-950 to-gray-900',
};

export const ColorProvider = ({ children, darkMode }) => (
  <ColorContext.Provider value={{ theme: darkMode ? darkTheme : lightTheme, darkMode }}>
    {children}
  </ColorContext.Provider>
);

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error('useColors must be used within ColorProvider');
  return context;
};

export const getButtonClasses = (variant = 'primary', darkMode = false) => {
  const theme = darkMode ? darkTheme : lightTheme;
  const variants = {
    primary: `bg-${theme.primary} dark:bg-${darkTheme.primary} text-white dark:text-black hover:opacity-90`,
    secondary: `border-2 border-${theme.border} text-${theme.textPrimary} hover:bg-${theme.backgroundSecondary}`,
    accent: `bg-${theme.accent} text-white dark:text-black hover:opacity-90`,
  };
  return `${variants[variant]} transition-all duration-300 rounded-lg px-6 py-3 font-semibold shadow-lg hover:shadow-xl`;
};

export const getCardClasses = (darkMode = false) => {
  const theme = darkMode ? darkTheme : lightTheme;
  return `bg-${theme.background} border border-${theme.border} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`;
};

export const getTextClasses = (variant = 'primary', darkMode = false) => {
  const theme = darkMode ? darkTheme : lightTheme;
  const variants = {
    primary: `text-${theme.textPrimary}`,
    secondary: `text-${theme.textSecondary}`,
    muted: `text-${theme.textMuted}`,
    accent: `text-${theme.accent}`,
  };
  return variants[variant];
};