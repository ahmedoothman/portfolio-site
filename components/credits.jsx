import React from 'react';

const Credits = (props) => {
  return (
    <div data-section id='credits' className='group mt-32'>
      <div className='text-surface-600'>
        <div className='flex flex-row justify-between'>
          <a
            href='/imprint'
            rel='noopener noreferrer'
            className='scroll-auto transition-all hover:text-on-background'
          >
            Imprint
          </a>
          <a
            href='/privacy'
            rel='noopener noreferrer'
            className='scroll-auto transition-all hover:text-on-background'
          >
            Privacy Statement
          </a>
          <span>{props.data.name} | 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Credits;
