import React from 'react';
import Button from './components/base/button/Button';

export default function App(): JSX.Element {
  return (
    <React.StrictMode>
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <Button loading color="primary" buttonSize="lg">
          Hello
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 ml-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </React.StrictMode>
  );
}
