# Portfolio Website

This is a personal portfolio website built with Next.js, React, and Tailwind CSS to showcase skills, experiences, projects, and more.

## Features

- Responsive design that works across all devices
- Modern and clean UI/UX
- Dynamic sections for about, experiences, projects, education, and volunteering
- Multi-language support
- Downloadable resume
- Social media integration
- Imprint and privacy policy pages

## Technologies Used

- **Framework**: Next.js (App Router)
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
├── app/               # Next.js app router pages
├── components/        # Reusable UI components
│   ├── education/     # Education section components
│   ├── experiences/   # Experience section components
│   ├── projects/      # Project section components
│   └── volunteering/  # Volunteering section components
├── public/            # Static assets
│   ├── logos/         # Logo images
│   ├── resume/        # Downloadable resume files
│   └── translations/  # Language translation files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-web-app.git

# Navigate to the project directory
cd portfolio-site

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To personalize this portfolio:

1. Update your profile image in `/public/logos/profile.jpeg`
2. Replace resume PDF in `/public/resume/`
3. Edit component content in each section file:
   - `components/about.jsx` - Update your bio and personal information
   - `components/experiences/experiences.jsx` - Add your work history
   - `components/projects/projects.jsx` - Showcase your projects
   - `components/education/education.jsx` - List your educational background
   - `components/volunteering/volunteering.jsx` - Add volunteer experience

## Internationalization

Translations are stored in `/public/translations/` as JSON files. To add a new language:

1. Create a new JSON file (e.g., `fr.json`)
2. Copy the structure of the existing `en.json` file and translate the values
3. Update the language selector in the navigation component

## Deployment

This project is configured for easy deployment on Vercel:

```bash
# Login to Vercel
vercel login

# Deploy
vercel
```

## License

This project is licensed under the terms of the license included in the repository.

---

Created by Ahmed Othman © 2025
