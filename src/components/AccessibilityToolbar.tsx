
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Accessibility, 
  Eye, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Palette,
  Type,
  MousePointer,
  Keyboard,
  Focus,
  Pause,
  Play,
  Settings,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [lineHeight, setLineHeight] = useState(150);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [wordSpacing, setWordSpacing] = useState(0);
  const [colorFilter, setColorFilter] = useState('none');
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cursorSize, setCursorSize] = useState('normal');
  const [readingGuide, setReadingGuide] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [tooltips, setTooltips] = useState(false);
  const [magnifier, setMagnifier] = useState(false);
  const [activeTab, setActiveTab] = useState('vision');

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Typography settings
    root.style.fontSize = `${fontSize}%`;
    body.style.lineHeight = `${lineHeight / 100}`;
    body.style.letterSpacing = `${letterSpacing}px`;
    body.style.wordSpacing = `${wordSpacing}px`;
    
    // Color and vision settings
    const filters = {
      none: 'none',
      protanopia: 'sepia(100%) hue-rotate(130deg) saturate(250%)',
      deuteranopia: 'sepia(100%) hue-rotate(90deg) saturate(200%)',
      tritanopia: 'sepia(100%) hue-rotate(200deg) saturate(150%)',
      monochrome: 'grayscale(100%)',
      'blue-light': 'sepia(30%) saturate(200%) hue-rotate(180deg)',
      'high-saturation': 'saturate(200%)',
      'low-saturation': 'saturate(50%)'
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

    // Dark mode
    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
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

    // Enhanced focus indicator
    if (focusIndicator) {
      root.classList.add('enhanced-focus');
    } else {
      root.classList.remove('enhanced-focus');
    }

    // Pause animations
    if (pauseAnimations) {
      root.classList.add('pause-animations');
    } else {
      root.classList.remove('pause-animations');
    }

    // Keyboard navigation enhancement
    if (keyboardNavigation) {
      root.classList.add('keyboard-nav');
    } else {
      root.classList.remove('keyboard-nav');
    }

    // Dyslexia-friendly font
    if (dyslexiaFont) {
      root.classList.add('dyslexia-font');
    } else {
      root.classList.remove('dyslexia-font');
    }

    // Tooltips
    if (tooltips) {
      root.classList.add('enhanced-tooltips');
    } else {
      root.classList.remove('enhanced-tooltips');
    }

    // Text magnifier
    if (magnifier) {
      root.classList.add('text-magnifier');
    } else {
      root.classList.remove('text-magnifier');
    }
  }, [fontSize, lineHeight, letterSpacing, wordSpacing, colorFilter, highContrast, darkMode, screenReaderMode, cursorSize, readingGuide, focusIndicator, pauseAnimations, keyboardNavigation, dyslexiaFont, tooltips, magnifier]);

  const resetSettings = () => {
    setFontSize(100);
    setLineHeight(150);
    setLetterSpacing(0);
    setWordSpacing(0);
    setColorFilter('none');
    setHighContrast(false);
    setDarkMode(false);
    setScreenReaderMode(false);
    setCursorSize('normal');
    setReadingGuide(false);
    setFocusIndicator(false);
    setPauseAnimations(false);
    setKeyboardNavigation(false);
    setDyslexiaFont(false);
    setTooltips(false);
    setMagnifier(false);
    setSoundEnabled(true);
  };

  const playClickSound = () => {
    if (soundEnabled) {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEcBzuR3ezGdCQIDH/F6+2WQQsUYrHv7qhVFAxAn9/yw2EcBjuU1/THeiQIDH/E6+2WQQoTYrHu76hVFAxFm9/zwmEcBjyS3+zGdSQIDHvH6+2XQAoUYrHr66hVFAxCn+Dxw2EcBz2Q3+zGdSMIDHvF6+2WQQoUYLDu7ahVFQ1An9/zw2EcBjuU3+vGdCUIDXzF7O2WQAkUY7Dt7KhVFQxEn+Dww2EcBz2S1+vHdSUIDXzE7O2WQAkUY7Dt7KhVFQxEn+Dww2EcBz2R2evGdSUIDXzE7e2UQAkUY7Ts6qhVFQxEn+Dww2EcBz2S2OrGdSUIDXzE7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQxEn+Dww2EcBz2S2+jGdSUIDX3E7+2UQAkUYrPv6ahVFQ==');
      audio.play().catch(() => {}); // Ignore errors if audio can't play
    }
  };

  const handleButtonClick = (action: () => void) => {
    playClickSound();
    action();
  };

  return (
    <>
      {/* Enhanced Accessibility Styles */}
      <style>{`
        .high-contrast {
          filter: contrast(200%) brightness(150%);
        }
        .high-contrast * {
          border-color: #ffffff !important;
        }
        .dark-mode {
          filter: invert(1) hue-rotate(180deg);
        }
        .dark-mode img, .dark-mode video {
          filter: invert(1) hue-rotate(180deg);
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
        .reading-guide *:hover::after {
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
        .enhanced-focus *:focus {
          outline: 4px solid #7FFF00 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 8px rgba(127, 255, 0, 0.3) !important;
        }
        .pause-animations * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        .keyboard-nav *:focus {
          box-shadow: 0 0 0 3px #7FFF00, inset 0 0 0 1px #7FFF00 !important;
        }
        .dyslexia-font * {
          font-family: 'OpenDyslexic', 'Comic Sans MS', cursive !important;
        }
        .enhanced-tooltips [title]:hover::after {
          content: attr(title);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fff;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          z-index: 10000;
        }
        .text-magnifier *:hover {
          transform: scale(1.2);
          z-index: 1000;
          position: relative;
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>

      {/* Floating Accessibility Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => handleButtonClick(() => setIsOpen(!isOpen))}
          className="rounded-full w-14 h-14 bg-brand-lime hover:bg-brand-lime/90 text-brand-navy shadow-lg"
          aria-label={isOpen ? "Close accessibility options" : "Open accessibility options"}
        >
          <Accessibility className="h-6 w-6" />
        </Button>
      </div>

      {/* Enhanced Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-96 max-h-[80vh] overflow-y-auto">
          <Card className="bg-brand-navy border-brand-silver/20 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Accessibility Options</h3>
                <Button
                  onClick={() => handleButtonClick(resetSettings)}
                  variant="outline"
                  size="sm"
                  className="text-brand-silver border-brand-silver/20"
                  aria-label="Reset all accessibility settings"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList className="grid w-full grid-cols-4 bg-brand-navy-light">
                  <TabsTrigger value="vision" className="text-xs">Vision</TabsTrigger>
                  <TabsTrigger value="text" className="text-xs">Text</TabsTrigger>
                  <TabsTrigger value="motion" className="text-xs">Motion</TabsTrigger>
                  <TabsTrigger value="input" className="text-xs">Input</TabsTrigger>
                </TabsList>

                {/* Vision Tab */}
                <TabsContent value="vision" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-brand-silver mb-2 block">
                      <Palette className="h-4 w-4 inline mr-2" />
                      Color Vision Support
                    </label>
                    <select
                      value={colorFilter}
                      onChange={(e) => handleButtonClick(() => setColorFilter(e.target.value))}
                      className="w-full bg-brand-navy-light border border-brand-silver/20 rounded px-3 py-2 text-brand-silver"
                      aria-label="Select color vision filter"
                    >
                      <option value="none">Normal Vision</option>
                      <option value="protanopia">Protanopia (Red-blind)</option>
                      <option value="deuteranopia">Deuteranopia (Green-blind)</option>
                      <option value="tritanopia">Tritanopia (Blue-blind)</option>
                      <option value="monochrome">Monochrome</option>
                      <option value="blue-light">Blue Light Filter</option>
                      <option value="high-saturation">High Saturation</option>
                      <option value="low-saturation">Low Saturation</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">High Contrast</label>
                    <Switch
                      checked={highContrast}
                      onCheckedChange={(checked) => handleButtonClick(() => setHighContrast(checked))}
                      aria-label="Toggle high contrast mode"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Dark Mode</label>
                    <Switch
                      checked={darkMode}
                      onCheckedChange={(checked) => handleButtonClick(() => setDarkMode(checked))}
                      aria-label="Toggle dark mode"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Reading Guide</label>
                    <Switch
                      checked={readingGuide}
                      onCheckedChange={(checked) => handleButtonClick(() => setReadingGuide(checked))}
                      aria-label="Toggle reading guide"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Text Magnifier</label>
                    <Switch
                      checked={magnifier}
                      onCheckedChange={(checked) => handleButtonClick(() => setMagnifier(checked))}
                      aria-label="Toggle text magnifier on hover"
                    />
                  </div>
                </TabsContent>

                {/* Text Tab */}
                <TabsContent value="text" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-brand-silver mb-2 block">
                      Text Size: {fontSize}%
                    </label>
                    <Slider
                      value={[fontSize]}
                      onValueChange={([value]) => handleButtonClick(() => setFontSize(value))}
                      min={50}
                      max={200}
                      step={10}
                      className="w-full"
                      aria-label="Adjust text size"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-brand-silver mb-2 block">
                      Line Height: {lineHeight}%
                    </label>
                    <Slider
                      value={[lineHeight]}
                      onValueChange={([value]) => handleButtonClick(() => setLineHeight(value))}
                      min={100}
                      max={300}
                      step={10}
                      className="w-full"
                      aria-label="Adjust line height"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-brand-silver mb-2 block">
                      Letter Spacing: {letterSpacing}px
                    </label>
                    <Slider
                      value={[letterSpacing]}
                      onValueChange={([value]) => handleButtonClick(() => setLetterSpacing(value))}
                      min={-2}
                      max={10}
                      step={0.5}
                      className="w-full"
                      aria-label="Adjust letter spacing"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-brand-silver mb-2 block">
                      Word Spacing: {wordSpacing}px
                    </label>
                    <Slider
                      value={[wordSpacing]}
                      onValueChange={([value]) => handleButtonClick(() => setWordSpacing(value))}
                      min={0}
                      max={20}
                      step={1}
                      className="w-full"
                      aria-label="Adjust word spacing"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Dyslexia-Friendly Font</label>
                    <Switch
                      checked={dyslexiaFont}
                      onCheckedChange={(checked) => handleButtonClick(() => setDyslexiaFont(checked))}
                      aria-label="Toggle dyslexia-friendly font"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Screen Reader Mode</label>
                    <Switch
                      checked={screenReaderMode}
                      onCheckedChange={(checked) => handleButtonClick(() => setScreenReaderMode(checked))}
                      aria-label="Toggle screen reader optimizations"
                    />
                  </div>
                </TabsContent>

                {/* Motion Tab */}
                <TabsContent value="motion" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Pause Animations</label>
                    <Switch
                      checked={pauseAnimations}
                      onCheckedChange={(checked) => handleButtonClick(() => setPauseAnimations(checked))}
                      aria-label="Pause all animations and transitions"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Enhanced Tooltips</label>
                    <Switch
                      checked={tooltips}
                      onCheckedChange={(checked) => handleButtonClick(() => setTooltips(checked))}
                      aria-label="Show enhanced tooltips"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver flex items-center">
                      {soundEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
                      Sound Feedback
                    </label>
                    <Switch
                      checked={soundEnabled}
                      onCheckedChange={(checked) => handleButtonClick(() => setSoundEnabled(checked))}
                      aria-label="Toggle sound feedback"
                    />
                  </div>
                </TabsContent>

                {/* Input Tab */}
                <TabsContent value="input" className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-brand-silver mb-2 block">
                      <MousePointer className="h-4 w-4 inline mr-2" />
                      Cursor Size
                    </label>
                    <select
                      value={cursorSize}
                      onChange={(e) => handleButtonClick(() => setCursorSize(e.target.value))}
                      className="w-full bg-brand-navy-light border border-brand-silver/20 rounded px-3 py-2 text-brand-silver"
                      aria-label="Select cursor size"
                    >
                      <option value="normal">Normal</option>
                      <option value="large">Large</option>
                      <option value="extra">Extra Large</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Enhanced Focus Indicator</label>
                    <Switch
                      checked={focusIndicator}
                      onCheckedChange={(checked) => handleButtonClick(() => setFocusIndicator(checked))}
                      aria-label="Enhanced focus indicators for better visibility"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-brand-silver">Keyboard Navigation</label>
                    <Switch
                      checked={keyboardNavigation}
                      onCheckedChange={(checked) => handleButtonClick(() => setKeyboardNavigation(checked))}
                      aria-label="Enhanced keyboard navigation"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-4 border-t border-brand-silver/20">
                <p className="text-xs text-brand-silver/70 text-center">
                  Settings are saved for your session. Use Tab key to navigate options.
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
