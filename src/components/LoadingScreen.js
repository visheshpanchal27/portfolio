import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isDark, setIsDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(saved ? saved === 'dark' : systemDark);

    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15;
        return prev + increment >= 100 ? 100 : prev + increment;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const particles = [
    { top: '15%', left: '8%', size: 6, delay: 0 },
    { top: '25%', left: '85%', size: 4, delay: 0.3 },
    { top: '40%', left: '15%', size: 5, delay: 0.7 },
    { top: '55%', left: '75%', size: 3, delay: 1.1 },
    { top: '70%', left: '25%', size: 4, delay: 1.5 },
    { top: '85%', left: '90%', size: 5, delay: 1.9 },
    { top: '30%', left: '50%', size: 3, delay: 2.3 },
    { top: '60%', left: '60%', size: 4, delay: 2.7 }
  ];

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
        ? 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
      backgroundImage: isDark
        ? 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)'
        : 'radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)',
      fontFamily: 'Inter, sans-serif',
      zIndex: 9999,
      overflow: 'hidden'
    }}>      
      {/* Particles */}
      {particles.map((particle, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          background: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
          borderRadius: '50%',
          top: particle.top,
          left: particle.left,
          filter: 'blur(1px)',
          animation: `particleFloat 4s ease-in-out infinite ${particle.delay}s`
        }}></div>
      ))}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px'
      }}>
        {/* Logo Container */}
        <div style={{
          position: 'relative',
          width: '160px',
          height: '160px',
          marginBottom: '40px'
        }}>          
          {/* Glow Ring */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            top: '-20px',
            left: '-20px',
            borderRadius: '50%',
            opacity: 0.3,
            boxShadow: isDark ? '0 0 60px 20px rgba(255, 255, 255, 0.15)' : '0 0 60px 20px rgba(0, 0, 0, 0.1)',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
          
          {/* Orbital Ring 3 */}
          <div style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            top: '-30px',
            left: '-30px',
            border: '1px solid transparent',
            borderBottom: isDark ? '1px solid #ffffff' : '1px solid #000000',
            borderRadius: '50%',
            opacity: 0.5,
            animation: 'orbit 5s linear infinite'
          }}></div>
          
          {/* Orbital Ring 2 */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            top: '-20px',
            left: '-20px',
            border: '2px solid transparent',
            borderRight: isDark ? '2px solid #e0e0e0' : '2px solid #1a1a1a',
            borderRadius: '50%',
            filter: 'drop-shadow(0 0 8px currentColor)',
            animation: 'orbit 4s linear infinite reverse'
          }}></div>
          
          {/* Orbital Ring 1 */}
          <div style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            top: '-10px',
            left: '-10px',
            border: '2px solid transparent',
            borderTop: isDark ? '2px solid #ffffff' : '2px solid #000000',
            borderRadius: '50%',
            filter: 'drop-shadow(0 0 10px currentColor)',
            animation: 'orbit 3s linear infinite'
          }}></div>
          
          {/* Main Logo */}
          <div style={{
            width: '100%',
            height: '100%',
            background: isDark 
              ? 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #e8e8e8 100%)'
              : 'linear-gradient(135deg, #000000 0%, #2a2a2a 50%, #000000 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            fontWeight: '900',
            color: isDark ? '#000000' : '#ffffff',
            boxShadow: isDark 
              ? '0 30px 60px rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.1)'
              : '0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
            animation: 'logoBreath 3s ease-in-out infinite',
            textShadow: isDark ? '0 1px 2px rgba(255, 255, 255, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: '-50%',
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
              animation: 'shine 3s ease-in-out infinite'
            }}></div>
            <span style={{ position: 'relative', zIndex: 1 }}>VP</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div style={{
          width: '350px',
          height: '8px',
          background: isDark 
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(0, 0, 0, 0.08)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '30px',
          boxShadow: isDark 
            ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
            : 'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05)',
          position: 'relative'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: isDark 
              ? 'linear-gradient(90deg, #ffffff, #f5f5f5, #e8e8e8, #ffffff)'
              : 'linear-gradient(90deg, #000000, #2a2a2a, #1a1a1a, #000000)',
            backgroundSize: '200% 100%',
            borderRadius: '10px',
            animation: 'progressFlow 2s ease-in-out infinite',
            boxShadow: isDark 
              ? '0 0 30px rgba(255, 255, 255, 0.5), 0 4px 8px rgba(255, 255, 255, 0.2)'
              : '0 0 30px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            transition: 'width 0.3s ease'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '10px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              animation: 'progressShine 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
        
        {/* Percentage */}
        <div style={{
          fontSize: '0.9rem',
          fontWeight: '600',
          marginTop: '8px',
          color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
        }}>{Math.floor(progress)}%</div>
        
        {/* Brand Text */}
        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '2.8rem',
            fontWeight: '800',
            color: isDark ? 'transparent' : '#000000',
            background: isDark ? 'linear-gradient(45deg, #ffffff, #f5f5f5, #e0e0e0, #ffffff)' : 'none',
            backgroundSize: isDark ? '300% 300%' : 'auto',
            WebkitBackgroundClip: isDark ? 'text' : 'initial',
            WebkitTextFillColor: isDark ? 'transparent' : 'initial',
            backgroundClip: isDark ? 'text' : 'initial',
            marginBottom: '16px',
            letterSpacing: '3px',
            textShadow: isDark ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)',
            filter: isDark ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' : 'none',
            animation: isDark ? 'textShimmer 3s ease-in-out infinite' : 'none'
          }}>VISHESH PANCHAL</div>
          <div style={{
            fontSize: '1.1rem',
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
            fontWeight: '500',
            letterSpacing: '4px',
            textTransform: 'uppercase'
          }}>Full Stack Developer</div>
        </div>
      </div>
      
      <style>{`
        @keyframes logoBreath {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.08) rotate(3deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        @keyframes progressShine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px) scale(1.3); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
