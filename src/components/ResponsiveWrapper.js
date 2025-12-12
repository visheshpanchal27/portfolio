import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';
import { 
  getViewportInfo, 
  getDeviceType, 
  getDeviceCapabilities,
  debounce,
  applyCSSCustomProperties
} from '../config/responsive';

// Create responsive context
const ResponsiveContext = createContext(null);

// Hook to use responsive context
export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsive must be used within ResponsiveWrapper');
  }
  return context;
};

const ResponsiveWrapper = ({ children }) => {
  const [viewport, setViewport] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        width: 1024,
        height: 768,
        deviceType: 'desktop',
        isMobile: false,
        isTablet: false,
        isLaptop: false,
        isDesktop: true,
        isUltrawide: false,
        orientation: 'landscape',
        aspectRatio: 1.33,
        pixelRatio: 1,
        touch: false,
        hover: true,
        pointer: 'fine',
        reducedMotion: false,
        highContrast: false,
        darkMode: false
      };
    }
    return getViewportInfo();
  });

  // Debounced viewport update function
  const updateViewport = useCallback(
    debounce(() => {
      const newViewport = getViewportInfo();
      setViewport(prevViewport => {
        // Only update if there are meaningful changes
        if (
          prevViewport.width !== newViewport.width ||
          prevViewport.height !== newViewport.height ||
          prevViewport.deviceType !== newViewport.deviceType ||
          prevViewport.orientation !== newViewport.orientation
        ) {
          return newViewport;
        }
        return prevViewport;
      });
    }, 150),
    []
  );

  useEffect(() => {
    // Apply CSS custom properties for fluid scaling
    applyCSSCustomProperties();

    // Initial viewport update
    updateViewport();

    // Event listeners
    const events = ['resize', 'orientationchange'];
    events.forEach(event => {
      window.addEventListener(event, updateViewport, { passive: true });
    });

    // Media query listeners for preference changes
    const mediaQueries = [
      { query: '(prefers-reduced-motion: reduce)', property: 'reducedMotion' },
      { query: '(prefers-contrast: high)', property: 'highContrast' },
      { query: '(prefers-color-scheme: dark)', property: 'darkMode' }
    ];

    const mediaListeners = mediaQueries.map(({ query, property }) => {
      const mq = window.matchMedia(query);
      const handler = (e) => {
        setViewport(prev => ({ ...prev, [property]: e.matches }));
      };
      mq.addEventListener('change', handler);
      return { mq, handler };
    });

    // Cleanup
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateViewport);
      });
      mediaListeners.forEach(({ mq, handler }) => {
        mq.removeEventListener('change', handler);
      });
    };
  }, [updateViewport]);

  // Update document classes and CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove existing classes
    const deviceClasses = ['mobile', 'tablet', 'laptop', 'desktop', 'ultrawide'];
    const orientationClasses = ['landscape', 'portrait'];
    const capabilityClasses = ['touch', 'no-touch', 'hover', 'no-hover', 'reduced-motion', 'high-contrast'];
    
    [...deviceClasses, ...orientationClasses, ...capabilityClasses].forEach(cls => {
      body.classList.remove(cls);
    });
    
    // Add current classes
    body.classList.add(viewport.deviceType);
    body.classList.add(viewport.orientation);
    
    if (viewport.touch) body.classList.add('touch');
    else body.classList.add('no-touch');
    
    if (viewport.hover) body.classList.add('hover');
    else body.classList.add('no-hover');
    
    if (viewport.reducedMotion) body.classList.add('reduced-motion');
    if (viewport.highContrast) body.classList.add('high-contrast');
    
    // Set CSS custom properties
    root.style.setProperty('--viewport-width', `${viewport.width}px`);
    root.style.setProperty('--viewport-height', `${viewport.height}px`);
    root.style.setProperty('--aspect-ratio', viewport.aspectRatio.toString());
    root.style.setProperty('--pixel-ratio', viewport.pixelRatio.toString());
    
    // Set device-specific properties
    root.style.setProperty('--is-mobile', viewport.isMobile ? '1' : '0');
    root.style.setProperty('--is-tablet', viewport.isTablet ? '1' : '0');
    root.style.setProperty('--is-desktop', viewport.isDesktop ? '1' : '0');
    
    return () => {
      [...deviceClasses, ...orientationClasses, ...capabilityClasses].forEach(cls => {
        body.classList.remove(cls);
      });
    };
  }, [viewport]);

  // Enhanced responsive utilities
  const responsiveUtils = {
    // Device type checks
    isMobile: viewport.isMobile,
    isTablet: viewport.isTablet,
    isLaptop: viewport.isLaptop,
    isDesktop: viewport.isDesktop,
    isUltrawide: viewport.isUltrawide,
    
    // Capabilities
    hasTouch: viewport.touch,
    hasHover: viewport.hover,
    hasFinePointer: viewport.pointer === 'fine',
    
    // Preferences
    prefersReducedMotion: viewport.reducedMotion,
    prefersHighContrast: viewport.highContrast,
    prefersDarkMode: viewport.darkMode,
    
    // Viewport info
    width: viewport.width,
    height: viewport.height,
    orientation: viewport.orientation,
    aspectRatio: viewport.aspectRatio,
    
    // Utility functions
    isLandscape: viewport.orientation === 'landscape',
    isPortrait: viewport.orientation === 'portrait',
    isSmallScreen: viewport.width < 768,
    isLargeScreen: viewport.width >= 1280,
    
    // Responsive classes generator
    getResponsiveClasses: (baseClasses = '') => {
      const classes = [baseClasses];
      
      if (viewport.isMobile) classes.push('mobile-styles');
      if (viewport.isTablet) classes.push('tablet-styles');
      if (viewport.isDesktop) classes.push('desktop-styles');
      if (viewport.touch) classes.push('touch-styles');
      if (viewport.reducedMotion) classes.push('reduced-motion-styles');
      
      return classes.filter(Boolean).join(' ');
    }
  };

  return (
    <ResponsiveContext.Provider value={responsiveUtils}>
      <div 
        className={`responsive-wrapper ${viewport.deviceType} ${viewport.orientation} ${
          viewport.touch ? 'touch-device' : 'no-touch'
        } ${viewport.reducedMotion ? 'reduced-motion' : ''}`}
        data-device-type={viewport.deviceType}
        data-orientation={viewport.orientation}
        data-viewport-width={viewport.width}
        data-viewport-height={viewport.height}
        data-aspect-ratio={viewport.aspectRatio.toFixed(2)}
        data-pixel-ratio={viewport.pixelRatio}
        style={{
          '--current-width': `${viewport.width}px`,
          '--current-height': `${viewport.height}px`,
          '--current-aspect-ratio': viewport.aspectRatio,
        }}
      >
        {children}
      </div>
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveWrapper;