import Image from 'next/image';
import Link from 'next/link';

function ProjectItem(props) {
  return (
    <Link
      href={`/projects/${props.id}`}
      className='group flex flex-col transition-all bg-surface-200 hover:scale-105 brightness-75 hover:brightness-100 hover:z-10 overflow-hidden rounded-lg'
    >
      {' '}
      <div className='relative w-full h-48 overflow-hidden bg-surface-400'>
        {props.mainImage ? (
          <Image
            src={props.mainImage}
            alt={props.name}
            fill
            className='object-cover transition-transform group-hover:scale-110'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center text-surface-600'>
            <svg
              className='w-16 h-16'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1'
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
        )}
      </div>
      <div className='p-5'>
        <div className='text-surface-600 mb-4 flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            </svg>
            <span className='ml-1 text-xs'>{props.stars}</span>
          </div>
          <div className='text-xs font-medium tracking-widest uppercase'>
            {props.framework}
          </div>
        </div>
        <h1 className='mb-4 text-xl subpixel-antialiased'>{props.name}</h1>
        <div className='text-surface-600 text-xs line-clamp-3'>
          {props.shortDescription}
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
