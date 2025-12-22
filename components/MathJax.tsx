import React, { useEffect, useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  inline?: boolean;
}

const MathJaxText: React.FC<Props> = React.memo(({ text, className = '', inline = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mathJax = (window as any).MathJax;
    if (!mathJax) return;

    // Use requestAnimationFrame to ensure the element is in the DOM
    const rAF = requestAnimationFrame(() => {
      if (containerRef.current) {
        // Clear potential existing formatting if needed, though usually innerHTML reset handles it
        // We use promise-based typeset if available (MathJax v3)
        if (mathJax.typesetPromise) {
          mathJax.typesetPromise([containerRef.current])
            .catch((err: any) => {
              // Suppress errors that happen if component unmounts mid-typeset
              console.debug('MathJax error:', err);
            });
        } else if (mathJax.typeset) {
          mathJax.typeset([containerRef.current]);
        }
      }
    });

    return () => cancelAnimationFrame(rAF);
  }, [text]);

  const Component = inline ? 'span' : 'div';

  return (
    <Component 
      ref={containerRef} 
      className={`mathjax-container ${className}`}
      // Use dangerouslySetInnerHTML to set the raw LaTeX. 
      // Because we use React.memo, this won't be overwritten by React 
      // on parent re-renders unless 'text' prop changes.
      dangerouslySetInnerHTML={{ __html: text }} 
    />
  );
});

export default MathJaxText;