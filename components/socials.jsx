'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Socials = (props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };
  return (
    <div className='flex flex-col space-y-8'>
      <div className='flex flex-row flex-wrap gap-4'>
        <a
          href={`mailto:${props.data.email}`}
          className='transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-6 rounded flex flex-row justify-center items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>
          <span className='pl-2'>Email</span>
        </a>

        {props.data.resume && (
          <a
            href={props.data.resume}
            target='_blank'
            rel='noopener noreferrer'
            className='transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-6 rounded flex flex-row justify-center items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-5 h-5'
            >
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
              <polyline points='14 2 14 8 20 8'></polyline>
              <line x1='16' y1='13' x2='8' y2='13'></line>
              <line x1='16' y1='17' x2='8' y2='17'></line>
              <polyline points='10 9 9 9 8 9'></polyline>
            </svg>
            <span className='pl-2'>Resume</span>
          </a>
        )}
      </div>

      <div className='flex flex-row mt-6 flex-wrap gap-x-6 gap-y-2'>
        {' '}
        <a
          href={props.data.github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-row items-center hover:text-primary-300 transition-colors'
        >
          <Image
            src='/logos/github-mark-white.png'
            alt='GitHub Logo'
            width={20}
            height={20}
            className='object-contain object-top mr-2'
          />
          <div>GitHub</div>
        </a>
        <a
          href={props.data.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-row items-center hover:text-primary-300 transition-colors'
        >
          <Image
            src='/logos/linkedin-mark-white.png'
            alt='LinkedIn Logo'
            width={20}
            height={20}
            className='object-contain object-top mr-2'
          />
          <div>LinkedIn</div>
        </a>
        {props.data.behance && (
          <a
            href={props.data.behance}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row items-center hover:text-primary-300 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='white'
              className='mr-2'
            >
              <path d='M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-12.785 0h4.059v-8h-4.059v8zm4.85-14.648c0-.364-.284-.648-.648-.648h-3.553c-.363 0-.648.284-.648.648v.351c0 .363.285.648.648.648h3.553c.363 0 .648-.285.648-.648v-.351zm5.281 7.648c-.705-.705-1.624-1.257-2.756-1.257-2.421 0-3.607 1.81-3.607 3.472 0 1.783 1.074 3.472 3.216 3.472.936 0 1.87-.27 2.288-.648h.036v.157c0 1.112-1.328 1.112-1.328.037h-2.111c.628 1.541 1.781 1.937 2.439 1.937 1.391 0 3.217-.85 3.217-3.051v-4.458h-1.784c.164.324.328.603.328.946 0 .372-.128.739-.344 1.042-.97-.17-.218-.331-.346-.513' />
            </svg>
            <div>Behance</div>
          </a>
        )}{' '}
      </div>

      {props.data.whatsapp && (
        <div className='bg-surface-800 mt-2 rounded-lg flex flex-col md:flex-row md:items-center gap-4 max-w-md'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='#25D366'
              className='mr-3'
            >
              <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
            </svg>
            <div>
              <h3 className='font-medium text-on-background'>WhatsApp</h3>
              <p className='text-on-background text-sm'>
                {props.data.whatsapp}
              </p>
            </div>
          </div>

          <div className='flex gap-2 ml-auto'>
            <button
              onClick={() => handleCopy(props.data.whatsapp)}
              className='transition-all bg-surface-700 hover:bg-surface-600 text-on-background py-2 px-3 rounded flex items-center text-xs'
              title='Copy number'
            >
              {copied ? (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-1'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mr-1'
                  >
                    <rect
                      x='9'
                      y='9'
                      width='13'
                      height='13'
                      rx='2'
                      ry='2'
                    ></rect>
                    <path d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'></path>
                  </svg>
                  Copy
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${props.data.whatsapp.replace(
                /[^0-9]/g,
                ''
              )}`}
              target='_blank'
              rel='noopener noreferrer'
              className='transition-all bg-[#25D366] hover:bg-opacity-80 text-white py-2 px-3 rounded flex items-center text-xs'
            >
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='mr-1'
              >
                <path d='M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.116-.177.242-.076.458.101.216.449.916 1.192 1.429 1.024.701 1.458.766 1.663.703.173-.043.375-.115.574-.34.144-.173.346-.346.375-.533.029-.188-.. 029-.27-.057-.101-.413-.494-.784-1.1-.892-.088-.058-.173-.087-.259-.087-.433.086-.664-.064-1.124-.261-1.077-.461-1.801-1.209-1.852-1.267-.051-.057-.404-.433-.404-.84 0-.408.234-.776.35-.893.117-.116.259-.174.366-.174h.179c.144.005.33-.037.496.138.188.195.577.689.577.689.058.072.072.144.129.174-.014 0 .072 0 .101-.029.029-.03.059-.044.088-.073l.029-.029c.058-.058.086-.086.172-.029.087.058.352.174.466.232.144.072.245.144.31.217.116.116.116.35.029.533'></path>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Socials;
