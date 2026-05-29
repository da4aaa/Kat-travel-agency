import type {ReactNode} from 'react';

function BlobHighlight({children}: {children: ReactNode}) {
  return (
    <span
      style={{
        background: 'linear-gradient(100deg, #00D4FF -8.86%, #2EE0B4 104.42%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}
    >
      {children}
    </span>
  );
}

export function highlightAccent(text: string, accent: string): ReactNode {
  if (!accent) return text;
  const idx = text.toLowerCase().indexOf(accent.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <BlobHighlight>{text.slice(idx, idx + accent.length)}</BlobHighlight>
      {text.slice(idx + accent.length)}
    </>
  );
}
