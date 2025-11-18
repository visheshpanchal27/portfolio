import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
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
        ? 'linear-gradient(to bottom right, #111827, #581c87, #000000)'
        : 'linear-gradient(to bottom right, #60a5fa, #a855f7, #ec4899)',
      fontFamily: 'Inter, sans-serif',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Floating Particles */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '4px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        animation: 'particleFloat 6s ease-in-out infinite 0s'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '80%',
        left: '20%',
        width: '4px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        animation: 'particleFloat 6s ease-in-out infinite 1s'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        width: '4px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        animation: 'particleFloat 6s ease-in-out infinite 2s'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '4px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        animation: 'particleFloat 6s ease-in-out infinite 3s'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '5%',
        width: '4px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '50%',
        animation: 'particleFloat 6s ease-in-out infinite 4s'
      }}></div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px'
      }}>
        {/* Premium Logo with Orbital Rings */}
        <div style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          animation: 'logoBreath 4s ease-in-out infinite'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            background: isDark 
              ? 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)'
              : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: '900',
            color: 'white',
            boxShadow: isDark 
              ? '0 30px 60px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 30px 60px rgba(79, 70, 229, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 0 0 2px rgba(255, 255, 255, 0.1)',
            position: 'relative',
            zIndex: 3,
            backdropFilter: 'blur(20px)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
          }}>VP</div>
          
          {/* Orbital Rings */}
          <div style={{
            position: 'absolute',
            width: '140px',
            height: '140px',
            top: '-10px',
            left: '-10px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderTop: isDark ? '2px solid #8b5cf6' : '2px solid #4f46e5',
            borderRadius: '50%',
            animation: 'orbit 6s linear infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '160px',
            height: '160px',
            top: '-20px',
            left: '-20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRight: isDark ? '2px solid #ec4899' : '2px solid #db2777',
            borderRadius: '50%',
            animation: 'orbit 8s linear infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            top: '-30px',
            left: '-30px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderBottom: isDark ? '2px solid #06b6d4' : '2px solid #0891b2',
            borderRadius: '50%',
            animation: 'orbit 10s linear infinite'
          }}></div>
        </div>
        
        {/* Premium Progress Bar */}
        <div style={{
          width: '280px',
          height: '6px',
          background: isDark 
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(255, 255, 255, 0.2)',
          borderRadius: '3px',
          overflow: 'hidden',
          position: 'relative',
          animation: 'fadeInUp 1s ease-out 0.5s both',
          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{
            height: '100%',
            background: isDark 
              ? 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)'
              : 'linear-gradient(90deg, #4f46e5, #7c3aed, #db2777, #0891b2)',
            backgroundSize: '200% 100%',
            borderRadius: '3px',
            animation: 'progressFlow 3s ease-in-out infinite',
            boxShadow: isDark 
              ? '0 0 20px rgba(139, 92, 246, 0.6)'
              : '0 0 25px rgba(79, 70, 229, 0.8), 0 2px 4px rgba(0, 0, 0, 0.2)'
          }}></div>
        </div>
        
        {/* Elegant Brand Text */}
        <div style={{
          textAlign: 'center',
          animation: 'fadeInUp 1s ease-out 0.8s both'
        }}>
          <div style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff)',
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
            color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}>Full Stack Developer</div>
        </div>
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
          0% { width: 0%; background-position: 0% 50%; }
          50% { width: 70%; background-position: 100% 50%; }
          100% { width: 100%; background-position: 200% 50%; }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;