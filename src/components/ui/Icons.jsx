// Custom SVG icon set extracted from the N7 Figma design
// Each icon is rendered inline so colors/sizes follow currentColor & className.

export const N7Logo = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 56 28"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="0"
      y="22"
      fontFamily="var(--font-geist-sans), sans-serif"
      fontSize="24"
      fontWeight="700"
      fill="currentColor"
      letterSpacing="-0.02em"
    >
      N7
    </text>
  </svg>
);

// Core Banking CB7 — circular swirl
export const IconCoreBanking = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M16 4c4 3 6 7 6 12s-2 9-6 12c-4-3-6-7-6-12s2-9 6-12Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path d="M2 16h28" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

// Digital Banking N7 — butterfly / X shape
export const IconDigitalBanking = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 6c4 2 7 5 10 10 3-5 6-8 10-10-2 4-5 7-10 10 5 3 8 6 10 10-4-2-7-5-10-10-3 5-6 8-10 10 2-4 5-7 10-10C13 13 10 10 6 6Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

// Open Banking — small X / diamond
export const IconOpenBanking = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 6L8 14l8 8 8-8-8-8Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M12 10l8 8M20 10l-8 8"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

// Loan Origination — starburst
export const IconLoanOrigination = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 4v8M16 20v8M4 16h8M20 16h8M7 7l5.5 5.5M19.5 19.5L25 25M7 25l5.5-5.5M19.5 12.5L25 7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Loan Management — denser starburst
export const IconLoanManagement = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 3v6M16 23v6M3 16h6M23 16h6M6.5 6.5l4 4M21.5 21.5l4 4M6.5 25.5l4-4M21.5 10.5l4-4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

// Featured X-shape used on insights / case study cards
export const FeatureX = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 14c8 4 14 10 18 18 4-8 10-14 18-18-4 8-10 14-18 18 8 4 14 10 18 18-8-4-14-10-18-18-4 8-10 14-18 18 4-8 10-14 18-18C24 24 18 18 14 14Z"
      fill="currentColor"
    />
  </svg>
);

// Sparkle / asterisk used in the marquee
export const Sparkle = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

// Generic check used in "What you will get" bullets
export const CheckCircle = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 20 20"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="9" fill="#2D7FF9" />
    <path
      d="M6 10l2.5 2.5L14 7.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
