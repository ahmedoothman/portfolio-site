import React from 'react';
import Navigation from './navigation';
import Socials from './socials';
import Image from 'next/image';

const Header = (props) => {
  return (
    <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto'>
      <div className=''>
        {props.data.profileImage && (
          <div className='mb-6'>
            <Image
              src={props.data.profileImage}
              alt='Profile'
              width={120}
              height={120}
              className='rounded-full'
              priority
            />
          </div>
        )}
        <h1 className='text-5xl subpixel-antialiased tracking-wide'>
          {props.data.name}
        </h1>
        <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>
          {props.data.headline}
        </h2>
      </div>
      <Navigation></Navigation>
      <Socials data={props.data.socials}></Socials>
    </div>
  );
};

export default Header;
