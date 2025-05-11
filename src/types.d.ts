declare module '*.tsx' {
  import React from 'react';
  const Component: React.FC;
  export default Component;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
} 