import React from 'react';

interface TrezorLogoProps {
  className?: string;
}

const TrezorLogo: React.FC<TrezorLogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C14.76 5 17 7.24 17 10V11H7V10C7 7.24 9.24 5 12 5ZM17 14.47V19H7V14.47C7 13.73 7.73 13 8.47 13H15.53C16.27 13 17 13.73 17 14.47Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default TrezorLogo;