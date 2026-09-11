import React from 'react';

interface BsfLogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

/**
 * Authentic BSF Brand Logo matching user uploaded official image.png
 * Features the signature golden-yellow open book pages symbol.
 */
export const BsfLogo: React.FC<BsfLogoProps> = ({
  className = 'h-9 w-auto',
  showText = true,
  light = false
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox={showText ? "0 0 380 44" : "0 0 44 44"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Bible Study Fellowship"
      >
        {/* Exact Official BSF Open Bible Symbol in Warm Golden Yellow (#F59E0B) matching user image.png */}
        <g transform="translate(1, 2) scale(0.40)">
          {/* Left Page Wing */}
          <path
            d="M10 14.5 L42 28.5 L42 39.5 L24 31 L24 67.5 L44 76.8 L44 88.5 L10 75.5 Z"
            fill="#F59E0B"
          />
          {/* Right Page Wing & Sweeping Spine */}
          <path
            d="M44 97 L44 50 C44 31 58 17 88 14.5 L88 75.5 L64 75.5 L64 64.5 L76 64.5 L76 27 C58 29.5 55 42 55 58 L55 97 Z"
            fill="#F59E0B"
          />
        </g>

        {/* Wordmark */}
        {showText && (
          <g transform="translate(42, 0)">
            <text
              x="0"
              y="28"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              fontSize="24"
              fontWeight="800"
              fill={light ? '#FFFFFF' : '#1B2A41'}
              letterSpacing="-0.03em"
            >
              Bible Study Fellowship
            </text>
            <circle
              cx="326"
              cy="23"
              r="3.5"
              fill="none"
              stroke={light ? '#FFFFFF' : '#1B2A41'}
              strokeWidth="0.8"
            />
            <text
              x="326"
              y="25.2"
              fontFamily="system-ui, sans-serif"
              fontSize="4.5"
              fontWeight="bold"
              textAnchor="middle"
              fill={light ? '#FFFFFF' : '#1B2A41'}
            >
              R
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
