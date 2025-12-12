import React, { useState, useEffect } from 'react';

const FullLoadingPage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(saved ? saved === 'dark' : systemDark);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: isDark 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
        : 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%)',
      fontFamily: 'Inter, sans-serif',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      
      {/* Animated Background Particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: '4px',
          height: '4px',
          background: isDark ? 'rgba(20, 184, 166, 0.6)' : 'rgba(59, 130, 246, 0.4)',
          borderRadius: '50%',
          top: `${20 + i * 15}%`,
          left: `${10 + i * 12}%`,
          animation: `particleFloat 4s ease-in-out infinite ${i * 0.5}s`
        }}></div>
      ))}

      {/* Main Logo Container */}
      <div style={{
        position: 'relative',
        width: '140px',
        height: '140px',
        marginBottom: '40px'
      }}>
        {/* Orbital Rings */}
        <div style={{
          position: 'absolute',
          width: '160px',
          height: '160px',
          top: '-10px',
          left: '-10px',
          border: '2px solid transparent',
          borderTop: isDark ? '2px solid #14b8a6' : '2px solid #3b82f6',
          borderRadius: '50%',
          animation: 'orbit 3s linear infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          top: '-20px',
          left: '-20px',
          border: '1px solid transparent',
          borderRight: isDark ? '2px solid #06b6d4' : '2px solid #6366f1',
          borderRadius: '50%',
          animation: 'orbit 4s linear infinite reverse'
        }}></div>

        {/* Main Logo */}
        <div style={{
          width: '100%',
          height: '100%',
          background: isDark 
            ? 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 50%, #d946ef 100%)'
            : 'linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #6366f1 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '42px',
          fontWeight: '900',
          color: 'white',
          boxShadow: isDark 
            ? '0 25px 50px rgba(20, 184, 166, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            : '0 25px 50px rgba(59, 130, 246, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          animation: 'logoBreath 3s ease-in-out infinite',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
        }}>VP</div>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '300px',
        height: '6px',
        background: isDark 
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: '30px',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{
          height: '100%',
          background: isDark 
            ? 'linear-gradient(90deg, #14b8a6, #06b6d4, #d946ef, #14b8a6)'
            : 'linear-gradient(90deg, #1e293b, #3b82f6, #6366f1, #1e293b)',
          backgroundSize: '200% 100%',
          borderRadius: '3px',
          animation: 'progressFlow 2s ease-in-out infinite',
          boxShadow: isDark 
            ? '0 0 20px rgba(20, 184, 166, 0.6)'
            : '0 0 20px rgba(59, 130, 246, 0.4)'
        }}></div>
      </div>

      {/* Brand Text */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          background: isDark 
            ? 'linear-gradient(45deg, #14b8a6, #06b6d4, #d946ef)'
            : 'linear-gradient(45deg, #1e293b, #3b82f6, #6366f1)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '12px',
          letterSpacing: '2px',
          animation: 'textShimmer 3s ease-in-out infinite'
        }}>VISHESH PANCHAL</div>
        
        <div style={{
          fontSize: '1rem',
          color: isDark ? 'rgba(148, 163, 184, 0.8)' : 'rgba(71, 85, 105, 0.8)',
          fontWeight: '400',
          letterSpacing: '3px',
          textTransform: 'uppercase'
        }}>Full Stack Developer</div>
      </div>

      {/* Loading Text */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        fontSize: '14px',
        color: isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(71, 85, 105, 0.6)',
        letterSpacing: '2px',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        LOADING EXPERIENCE...
      </div>

      <style>{`
        @keyframes logoBreath {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes progressFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.2); opacity: 0.8; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FullLoadingPage;