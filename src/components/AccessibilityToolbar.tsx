
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accessibility, 
  Eye, 
  Volume2, 
  VolumeX, 
  Minus, 
  Plus, 
  RotateCcw,
  Palette,
  Sun,
  Moon,
  Type,
  MousePointer
} from 'lucide-react';

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [colorFilter, setColorFilter] = useState('none');
  const [highContrast, setHighContrast] = useState(false);
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cursorSize, setCursorSize] = useState('normal');
  const [readingGuide, setReadingGuide] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${fontSize}%`;
    
    // Color filters for colorblind users
    const filters = {
      none: 'none',
      protanopia: 'sepia(100%) hue-rotate(130deg) saturate(250%)',
      deuteranopia: 'sepia(100%) hue-rotate(90deg) saturate(200%)',
      tritanopia: 'sepia(100%) hue-rotate(200deg) saturate(150%)',
      monochrome: 'grayscale(100%)',
      'blue-light': 'sepia(30%) saturate(200%) hue-rotate(180deg)'
    };
    
    if (colorFilter !== 'none') {
      root.style.filter = filters[colorFilter as keyof typeof filters];
    } else {
      root.style.filter = 'none';
    }
    
    // High contrast mode
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Cursor size
    const cursorStyles = {
      normal: 'auto',
      large: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M2 2l28 12-12 2-4 14z\' fill=\'white\' stroke=\'black\' stroke-width=\'2\'/%3E%3C/svg%3E"), auto',
      extra: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\' viewBox=\'0 0 48 48\'%3E%3Cpath d=\'M3 3l42 18-18 3-6 21z\' fill=\'white\' stroke=\'black\' stroke-width=\'3\'/%3E%3C/svg%3E"), auto'
    };
    root.style.cursor = cursorStyles[cursorSize as keyof typeof cursorStyles];
    
    // Screen reader optimizations
    if (screenReaderMode) {
      root.classList.add('screen-reader-mode');
    } else {
      root.classList.remove('screen-reader-mode');
    }
    
    // Reading guide
    if (readingGuide) {
      root.classList.add('reading-guide');
    } else {
      root.classList.remove('reading-guide');
    }
  }, [fontSize, colorFilter, highContrast, screenReaderMode, cursorSize, readingGuide]);

  const resetSettings = () => {
    setFontSize(100);
    setColorFilter('none');
    setHighContrast(false);
    setScreenReaderMode(false);
    setCursorSize('normal');
    setReadingGuide(false);
    setSoundEnabled(true);
  };

  const playClickSound = () => {
    if (soundEnabled) {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBzuR3ezGdCQIDH/F6+2WQQsUYrHv7qhVFAxAn9/yw2EcBjuU1/THeiQIDH/E6+2WQQoTYrHu76hVFAxFm9/zwmEcBjyS3+zGdSQIDHvH6+2XQAoUYrHr66hVFAxCn+Dxw2EcBz2Q3+zGdSMIDHvF6+2WQQoUYLDu7ahVFQ1An9/zw2EcBjuU3+vGdCUIDXzF7O2WQAkUY7Dt7KhVFQxEn+Dww2EcBz2S1+vHdSUIDXzE7O2WQAkUY7Dt7KhVFQxEn+Dww2EcBz2R2evGdSUIDXzE7e2UQAkUY7Ts6qhVFQxEn+Dww2EcBz2S2OrGdSUIDXzE7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQ==');
      audio.play().catch(() => {}); // Ignore errors if audio can't play
    }
  };

  const handleButtonClick = (action: () => void) => {
    playClickSound();
    action();
  };

  return (
    <>
      {/* Accessibility Styles */}
      <style>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        .high-contrast .bg-brand-navy {
          background-color: #000000 !important;
        }
        .high-contrast .text-brand-silver {
          color: #ffffff !important;
        }
        .high-contrast .text-brand-lime {
          color: #ffff00 !important;
        }
        .screen-reader-mode {
          line-height: 1.8 !important;
          letter-spacing: 0.1em !important;
        }
        .screen-reader-mode * {
          font-family: Arial, sans-serif !important;
        }
        .reading-guide {
          position: relative;
        }
        .reading-guide:hover::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent 40%, rgba(255,255,0,0.3) 40%, rgba(255,255,0,0.3) 60%, transparent 60%);
          pointer-events: none;
          z-index: 9999;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Floating Accessibility Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => handleButtonClick(() => setIsOpen(!isOpen))}
          className="rounded-full w-12 h-12 bg-brand-lime hover:bg-brand-lime/90 text-brand-navy shadow-lg"
          aria-label="Open accessibility options"
        >
          <Accessibility className="h-6 w-6" />
        </Button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80">
          <Card className="bg-brand-navy border-brand-silver/20 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Accessibility Options</h3>
                <Button
                  onClick={() => handleButtonClick(resetSettings)}
                  variant="outline"
                  size="sm"
                  className="text-brand-silver border-brand-silver/20"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              <div className="space-y-4">
                {/* Font Size */}
                <div>
                  <label className="text-sm font-medium text-brand-silver mb-2 block">
                    Text Size: {fontSize}%
                  </label>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleButtonClick(() => setFontSize(Math.max(80, fontSize - 10)))}
                      variant="outline"
                      size="sm"
                      className="text-brand-silver border-brand-silver/20"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleButtonClick(() => setFontSize(Math.min(150, fontSize + 10)))}
                      variant="outline"
                      size="sm"
                      className="text-brand-silver border-brand-silver/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Color Filters for Colorblind Users */}
                <div>
                  <label className="text-sm font-medium text-brand-silver mb-2 block">
                    <Palette className="h-4 w-4 inline mr-2" />
                    Color Vision Support
                  </label>
                  <select
                    value={colorFilter}
                    onChange={(e) => handleButtonClick(() => setColorFilter(e.target.value))}
                    className="w-full bg-brand-navy-light border border-brand-silver/20 rounded px-3 py-2 text-brand-silver"
                  >
                    <option value="none">Normal Vision</option>
                    <option value="protanopia">Protanopia (Red-blind)</option>
                    <option value="deuteranopia">Deuteranopia (Green-blind)</option>
                    <option value="tritanopia">Tritanopia (Blue-blind)</option>
                    <option value="monochrome">Monochrome</option>
                    <option value="blue-light">Blue Light Filter</option>
                  </select>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-brand-silver flex items-center">
                    <Sun className="h-4 w-4 mr-2" />
                    High Contrast
                  </label>
                  <Button
                    onClick={() => handleButtonClick(() => setHighContrast(!highContrast))}
                    variant={highContrast ? "default" : "outline"}
                    size="sm"
                    className={highContrast ? "bg-brand-lime text-brand-navy" : "text-brand-silver border-brand-silver/20"}
                  >
                    {highContrast ? "On" : "Off"}
                  </Button>
                </div>

                {/* Screen Reader Mode */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-brand-silver flex items-center">
                    <Type className="h-4 w-4 mr-2" />
                    Screen Reader Mode
                  </label>
                  <Button
                    onClick={() => handleButtonClick(() => setScreenReaderMode(!screenReaderMode))}
                    variant={screenReaderMode ? "default" : "outline"}
                    size="sm"
                    className={screenReaderMode ? "bg-brand-lime text-brand-navy" : "text-brand-silver border-brand-silver/20"}
                  >
                    {screenReaderMode ? "On" : "Off"}
                  </Button>
                </div>

                {/* Cursor Size */}
                <div>
                  <label className="text-sm font-medium text-brand-silver mb-2 block">
                    <MousePointer className="h-4 w-4 inline mr-2" />
                    Cursor Size
                  </label>
                  <select
                    value={cursorSize}
                    onChange={(e) => handleButtonClick(() => setCursorSize(e.target.value))}
                    className="w-full bg-brand-navy-light border border-brand-silver/20 rounded px-3 py-2 text-brand-silver"
                  >
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                    <option value="extra">Extra Large</option>
                  </select>
                </div>

                {/* Reading Guide */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-brand-silver flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Reading Guide
                  </label>
                  <Button
                    onClick={() => handleButtonClick(() => setReadingGuide(!readingGuide))}
                    variant={readingGuide ? "default" : "outline"}
                    size="sm"
                    className={readingGuide ? "bg-brand-lime text-brand-navy" : "text-brand-silver border-brand-silver/20"}
                  >
                    {readingGuide ? "On" : "Off"}
                  </Button>
                </div>

                {/* Sound Feedback */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-brand-silver flex items-center">
                    {soundEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
                    Sound Feedback
                  </label>
                  <Button
                    onClick={() => handleButtonClick(() => setSoundEnabled(!soundEnabled))}
                    variant={soundEnabled ? "default" : "outline"}
                    size="sm"
                    className={soundEnabled ? "bg-brand-lime text-brand-navy" : "text-brand-silver border-brand-silver/20"}
                  >
                    {soundEnabled ? "On" : "Off"}
                  </Button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-brand-silver/20">
                <p className="text-xs text-brand-silver/70 text-center">
                  These settings are saved for your session
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AccessibilityToolbar;
