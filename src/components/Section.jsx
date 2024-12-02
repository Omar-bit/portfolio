import React from 'react';

function Section({ children }) {
  return (
    <div
      className={`flex flex-col    flex-1 md:w-[49%] md:flex-none lg:flex-1  gap-6 relative z-10  overflow-hidden`}
    >
      {children}
    </div>
  );
}

export default Section;
