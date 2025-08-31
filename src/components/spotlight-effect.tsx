
'use client';

import { useTheme } from 'next-themes';
import { useMousePosition } from '@/hooks/use-mouse-position';
import { CSSProperties } from 'react';

export function SpotlightEffect() {
  const { theme } = useTheme();
  const { x, y } = useMousePosition();

  if (theme !== 'hide-and-seek') {
    return null;
  }

  return (
    <div 
      className="spotlight"
      style={{
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
      } as CSSProperties}
    ></div>
  );
}
