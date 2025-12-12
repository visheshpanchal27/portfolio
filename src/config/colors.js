// Black & White Theme System
// Light: White Background with Black Text | Dark: Black Background with White Text

export const advancedTheme = {
  // Light Mode - White & Black
  light: {
    // Core Colors
    primary: 'gray-900',
    primaryHover: 'black',
    primaryLight: 'gray-100',
    
    accent: 'gray-800',
    accentHover: 'gray-900',
    accentLight: 'gray-50',
    
    secondary: 'gray-700',
    secondaryHover: 'gray-800',
    
    // Backgrounds
    background: 'white',
    backgroundSecondary: 'gray-50',
    backgroundCard: 'white/80',
    backgroundOverlay: 'white/95',
    
    // Text Colors
    textPrimary: 'black',
    textSecondary: 'gray-800',
    textMuted: 'gray-600',
    textAccent: 'gray-900',
    
    // Borders & Dividers
    border: 'gray-300',
    borderLight: 'gray-200',
    borderAccent: 'gray-400',
    
    // Status Colors
    success: 'gray-700',
    warning: 'gray-600',
    error: 'gray-900',
    info: 'gray-800',
  },
  
  // Dark Mode - Black & White
  dark: {
    // Core Colors
    primary: 'white',
    primaryHover: 'gray-100',
    primaryLight: 'gray-800',
    
    accent: 'gray-200',
    accentHover: 'white',
    accentLight: 'gray-900',
    
    secondary: 'gray-300',
    secondaryHover: 'gray-200',
    
    // Backgrounds
    background: 'black',
    backgroundSecondary: 'gray-950',
    backgroundCard: 'gray-900/60',
    backgroundOverlay: 'gray-900/95',
    
    // Text Colors
    textPrimary: 'white',
    textSecondary: 'gray-200',
    textMuted: 'gray-400',
    textAccent: 'white',
    
    // Borders & Dividers
    border: 'gray-700',
    borderLight: 'gray-800',
    borderAccent: 'gray-600',
    
    // Status Colors
    success: 'gray-300',
    warning: 'gray-400',
    error: 'white',
    info: 'gray-200',
  }
};

// Component-Specific Color Schemes
export const componentThemes = {
  light: {
    // Navigation
    nav: {
      background: 'white/90',
      text: 'black',
      accent: 'gray-900',
      border: 'gray-300',
    },
    
    // Cards
    card: {
      background: 'white',
      border: 'gray-300',
      shadow: 'black/10',
      hover: 'gray-100',
    },
    
    // Buttons
    button: {
      primary: 'black',
      primaryHover: 'gray-900',
      secondary: 'gray-200',
      secondaryHover: 'gray-300',
      accent: 'gray-800',
      accentHover: 'gray-900',
    },
    
    // Forms
    form: {
      background: 'white',
      border: 'gray-400',
      focus: 'black',
      text: 'black',
    },
  },
  
  dark: {
    // Navigation
    nav: {
      background: 'black/90',
      text: 'white',
      accent: 'white',
      border: 'gray-700',
    },
    
    // Cards
    card: {
      background: 'gray-900/60',
      border: 'gray-700',
      shadow: 'black/20',
      hover: 'gray-800',
    },
    
    // Buttons
    button: {
      primary: 'white',
      primaryHover: 'gray-200',
      secondary: 'gray-700',
      secondaryHover: 'gray-600',
      accent: 'gray-300',
      accentHover: 'white',
    },
    
    // Forms
    form: {
      background: 'gray-900',
      border: 'gray-600',
      focus: 'white',
      text: 'white',
    },
  }
};

// Project-Specific Color Schemes
export const projectThemes = {
  light: {
    ecommerce: { primary: 'black', accent: 'gray-800' },
    ai: { primary: 'gray-900', accent: 'gray-700' },
    shopping: { primary: 'black', accent: 'gray-800' },
    banking: { primary: 'gray-900', accent: 'gray-700' },
  },
  dark: {
    ecommerce: { primary: 'white', accent: 'gray-200' },
    ai: { primary: 'gray-100', accent: 'gray-300' },
    shopping: { primary: 'white', accent: 'gray-200' },
    banking: { primary: 'gray-200', accent: 'gray-400' },
  }
};

// Advanced Theme Utilities
export const getThemeColor = (colorKey, isDark = false) => {
  const theme = isDark ? advancedTheme.dark : advancedTheme.light;
  return theme[colorKey] || colorKey;
};

export const getComponentTheme = (component, isDark = false) => {
  const theme = isDark ? componentThemes.dark : componentThemes.light;
  return theme[component] || theme.card;
};

export const getProjectTheme = (projectKey, isDark = false) => {
  const theme = isDark ? projectThemes.dark : projectThemes.light;
  return theme[projectKey] || theme.ecommerce;
};

// Theme Class Generators
export const themeClasses = {
  // Background Classes
  bg: {
    primary: (isDark) => `bg-${getThemeColor('primary', isDark)}`,
    secondary: (isDark) => `bg-${getThemeColor('backgroundSecondary', isDark)}`,
    card: (isDark) => `bg-${getThemeColor('backgroundCard', isDark)}`,
  },
  
  // Text Classes
  text: {
    primary: (isDark) => `text-${getThemeColor('textPrimary', isDark)}`,
    secondary: (isDark) => `text-${getThemeColor('textSecondary', isDark)}`,
    accent: (isDark) => `text-${getThemeColor('textAccent', isDark)}`,
  },
  
  // Border Classes
  border: {
    default: (isDark) => `border-${getThemeColor('border', isDark)}`,
    accent: (isDark) => `border-${getThemeColor('borderAccent', isDark)}`,
  },
};

// Legacy compatibility
export const colors = advancedTheme;
export const solidColors = componentThemes;
export const projectColors = projectThemes;