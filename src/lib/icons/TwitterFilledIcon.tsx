import React from 'react';

interface TwitterFilledIconProps {
  color?: string;
  backgroundColor?: string;
  size?: number;
  className?: string;
}

export const TwitterFilledIcon: React.FC<TwitterFilledIconProps> = ({
  size = 50,
  color = 'black',
  backgroundColor = 'white',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H40C45.5228 0 50 4.47715 50 10V40C50 45.5228 45.5228 50 40 50H10C4.47715 50 0 45.5228 0 40V10Z"
        fill={backgroundColor}
      />
      <path
        d="M37.6172 18.2304C37.6367 18.5039 37.6367 18.7774 37.6367 19.0508C37.6367 27.3906 31.2891 37 19.6875 37C16.1133 37 12.793 35.9648 10 34.168C10.5078 34.2266 10.9961 34.2461 11.5234 34.2461C14.4726 34.2461 17.1875 33.25 19.3555 31.5508C16.582 31.4922 14.2578 29.6758 13.457 27.1758C13.8477 27.2343 14.2383 27.2734 14.6485 27.2734C15.2148 27.2734 15.7813 27.1953 16.3086 27.0586C13.418 26.4726 11.2499 23.9336 11.2499 20.8672V20.7891C12.0898 21.2578 13.0664 21.5508 14.1015 21.5898C12.4023 20.457 11.289 18.5234 11.289 16.3359C11.289 15.164 11.6015 14.0898 12.1484 13.1523C15.2539 16.9804 19.9219 19.4804 25.1562 19.7539C25.0585 19.2851 24.9999 18.7969 24.9999 18.3086C24.9999 14.832 27.8124 12 31.3085 12C33.1249 12 34.7655 12.7617 35.9179 13.9922C37.3436 13.7188 38.7108 13.1914 39.9218 12.4688C39.453 13.9336 38.4569 15.1641 37.1484 15.9453C38.4179 15.8086 39.6484 15.457 40.7812 14.9688C39.9219 16.2187 38.8477 17.332 37.6172 18.2304Z"
        fill={color}
      />
    </svg>
  );
};