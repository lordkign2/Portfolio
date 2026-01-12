import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const RocketIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    <path d="M19 13L20 15L22 14L20 18L19 16L17 18L16 15L18 14L19 13Z" />
    <path d="M5 13L6 15L8 14L6 18L5 16L3 18L2 15L4 14L5 13Z" />
  </svg>
);

export const ChartGrowthIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M3 3V19H21V21H3C2.45 21 2 20.55 2 20C2 19.45 2.45 19 3 19Z" />
    <path d="M21 15H17V17H21V15Z" />
    <path d="M15 11H11V17H13V13H15V11Z" />
    <path d="M9 7H5V17H7V9H9V7Z" />
  </svg>
);

export const TargetIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const TrophyIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20.38C20.8 4 21.12 4.42 21 4.84L19.27 11.36C19.2 11.63 19 11.84 18.74 11.91L16 12.71V17C16 17.55 15.55 18 15 18H9C8.45 18 8 17.55 8 17V12.71L5.26 11.91C5 11.84 4.8 11.63 4.73 11.36L3 4.84C2.88 4.42 3.2 4 3.62 4H7ZM9 3V4H15V3H9Z" />
    <path d="M12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14Z" />
  </svg>
);

export const StarIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
  </svg>
);

export const BriefcaseIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H8V10C8 10.55 8.45 11 9 11H15C15.55 11 16 10.55 16 10V8H20V19Z" />
  </svg>
);

export const PhoneIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
  </svg>
);

export const HandshakeIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M9 14L10.5 15.5L7.5 18.5L5.5 16.5L7 15L9 14Z" />
    <path d="M15 14L17 16L15.5 17.5L12.5 14.5L15 14Z" />
    <path d="M10.5 10.5L12 9L15 12L13.5 13.5L10.5 10.5Z" />
    <path d="M16.5 10.5L18 9L21 12L19.5 13.5L16.5 10.5Z" />
    <path d="M3 19L4.5 20.5L7.5 17.5L6 16L3 19Z" />
    <path d="M19.5 20.5L21 19L18 16L16.5 17.5L19.5 20.5Z" />
    <path d="M12 4C11.45 4 11 4.2 10.69 4.59L9.19 6.59C8.79 7 8.79 7.62 9.19 8.03L10.8 9.64L11.36 9.08C11.65 8.79 12.1 8.79 12.39 9.08L12.95 9.64L14.56 8.03C14.96 7.62 14.96 7 14.56 6.59L13.06 4.59C12.75 4.2 12.28 4 12 4Z" />
  </svg>
);

export const MoneyIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
    <path d="M17 9H18C18.55 9 19 8.55 19 8C19 7.45 18.55 7 18 7H17C16.45 7 16 7.45 16 8C16 8.55 16.45 9 17 9Z" />
  </svg>
);

export const ArrowRightIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M10 17L15 12L10 7V17Z" />
  </svg>
);

export const DiamondIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M12 2L17 12L12 22L7 12L12 2Z" />
  </svg>
);

export const CodeIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

export const CpuIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
  </svg>
);

export const SmartphoneIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
  </svg>
);

export const DatabaseIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-${size} h-${size} ${className}`}
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);