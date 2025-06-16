import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }) {
  const file = await fs.readFile(
    process.cwd() + '/public/translations/en.json',
    'utf-8'
  );
  const data = JSON.parse(file);

  const project = data.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className='flex min-h-screen font-mono text-sm flex-col p-6 lg:p-24'>
      <div className='flex flex-col max-w-4xl mx-auto'>
        {/* Navigation */}{' '}
        <Link
          href='/'
          className='mr-4 transition-all flex flex-row mb-8 hover:text-primary-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-5 h-5 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
          <span>Back to Portfolio</span>
        </Link>
        {/* Project Header */}
        <div className='mb-8'>
          <div className='flex flex-wrap items-center gap-4 mb-4'>
            <div className='flex flex-row items-center text-surface-600'>
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
              <span className='ml-1 text-sm'>{project.stars}</span>
            </div>
            <div className='text-sm font-medium tracking-widest uppercase text-primary-500'>
              {project.framework}
            </div>
          </div>
          <h1 className='text-4xl lg:text-5xl font-bold mb-4'>
            {project.name}
          </h1>
          <p className='text-surface-600 text-lg'>{project.shortDescription}</p>
        </div>{' '}
        {/* Project Image */}
        <div className='relative w-full h-64 lg:h-96 mb-8 rounded-lg overflow-hidden bg-surface-400'>
          {project.mainImage ? (
            <Image
              src={project.mainImage}
              alt={project.name}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
            />
          ) : (
            <div className='w-full h-full flex items-center justify-center text-surface-600'>
              <svg
                className='w-24 h-24'
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
        {/* Project Details */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Description */}
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold mb-4'>About This Project</h2>
            <p className='text-surface-600 leading-relaxed mb-6'>
              {project.description}
            </p>            {/* Technologies */}
            <h3 className='text-xl font-bold mb-4'>Technologies Used</h3>
            <div className='flex flex-wrap gap-2 mb-6'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='bg-surface-400 py-2 px-4 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Test Credentials */}
            {project.testUrl && (project.user || project.password) && (
              <div className='bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6'>
                <h3 className='text-lg font-bold mb-2 text-orange-800'>Test Credentials</h3>
                <div className='text-orange-700 text-sm space-y-1'>
                  {project.user && (
                    <div>
                      <span className='font-medium'>Username:</span> 
                      <code className='ml-2 bg-orange-100 px-2 py-1 rounded'>{project.user}</code>
                    </div>
                  )}
                  {project.password && (
                    <div>
                      <span className='font-medium'>Password:</span> 
                      <code className='ml-2 bg-orange-100 px-2 py-1 rounded'>{project.password}</code>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className='lg:col-span-1'>
            <h3 className='text-xl font-bold mb-4'>Links</h3>
            <div className='flex flex-col gap-3'>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-surface-800 hover:bg-surface-700 text-on-background py-3 px-4 rounded flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                  View on GitHub
                </a>
              )}              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-primary-500 hover:bg-primary-400 text-white py-3 px-4 rounded flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                  Live Demo
                </a>
              )}

              {project.testUrl && (
                <a
                  href={project.testUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-orange-500 hover:bg-orange-400 text-white py-3 px-4 rounded flex items-center'
                  title={project.user && project.password ? `Test credentials: ${project.user} / ${project.password}` : 'Test version'}
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  Test Demo
                </a>
              )}
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' />
                  </svg>
                  Google Play
                </a>
              )}
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
                  </svg>
                  App Store
                </a>
              )}{' '}
              {project.githubReleasesUrl && (
                <a
                  href={project.githubReleasesUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-purple-600 hover:bg-purple-500 text-white py-3 px-4 rounded flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  Download Release
                </a>
              )}
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white py-3 px-4 rounded flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M0 7.5v9c0 .8.7 1.5 1.5 1.5H6c.8 0 1.5-.7 1.5-1.5v-9C7.5 6.7 6.8 6 6 6H1.5C.7 6 0 6.7 0 7.5zM8.5 6v12c0 .8.7 1.5 1.5 1.5h4.5c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5H10c-.8 0-1.5.7-1.5 1.5zM17 7.5v9c0 .8.7 1.5 1.5 1.5H22c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-3.5c-.8 0-1.5.7-1.5 1.5z' />
                  </svg>
                  View on Behance
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + '/public/translations/en.json',
    'utf-8'
  );
  const data = JSON.parse(file);

  return data.projects.map((project) => ({
    id: project.id,
  }));
}
