import React from 'react';

function Article({ title, icon, footerTitle, children, classNames }) {
  return (
    <div
      className={`glass bg-mainWopacity px-2 py-5 rounded-lg  hover:border-2 hover:border-primary  ${classNames}`}
    >
      <header className='flex justify-between items-center w-full '>
        <h2 className='text-xl  tracking-[2px]'>{title}</h2>
        <div>{icon}</div>
      </header>
      {children}
      <footer>{footerTitle}</footer>
    </div>
  );
}

export default Article;
