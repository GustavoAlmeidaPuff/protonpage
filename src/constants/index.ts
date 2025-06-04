export const COLORS = {
  // Cores principais
  primary: {
    main: '#0066CC',
    light: '#3399FF',
    dark: '#004C99',
    contrast: '#FFFFFF'
  },
  secondary: {
    main: '#4D4D4D',
    light: '#666666',
    dark: '#333333',
    contrast: '#FFFFFF'
  },
  accent: {
    main: '#FF6B6B',
    light: '#FF9999',
    dark: '#CC5555',
    contrast: '#FFFFFF'
  },
  
  // Cores de background
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    dark: '#1A1A1A',
    darker: '#0D0D0D'
  },
  
  // Cores de texto
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#FFFFFF',
    muted: '#999999'
  },
  
  // Cores de estado
  state: {
    success: '#28A745',
    error: '#DC3545',
    warning: '#FFC107',
    info: '#17A2B8'
  },

  gradient: {
    primary: 'linear-gradient(to right, #0066CC, #3399FF)',
    secondary: 'linear-gradient(to right, #4D4D4D, #666666)',
    accent: 'linear-gradient(to right, #FF6B6B, #FF9999)'
  }
};

export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

export const TYPOGRAPHY = {
  fontFamily: {
    primary: '"Inter", sans-serif',
    secondary: '"Roboto", sans-serif',
    mono: '"Fira Code", monospace'
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  }
};

export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  glow: '0 0 15px rgba(0, 195, 255, 0.3)',
  none: 'none'
};

export const TRANSITIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  },
  timing: {
    ease: 'ease',
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  }
};

export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px'
};

export const Z_INDEX = {
  negative: -1,
  zero: 0,
  low: 10,
  medium: 20,
  high: 30,
  highest: 50,
  modal: 100,
  tooltip: 200
}; 