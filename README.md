# Portfolio Website

This is a personal portfolio website built with Next.js, React, and Tailwind CSS to showcase skills, experiences, projects, and more.

## Features

- Responsive design that works across all devices
- Modern and clean UI/UX
- Dynamic sections for about, experiences, projects, education, and volunteering
- **Enhanced Projects Section** with image cards and detailed project pages
- **Project Detail Pages** with comprehensive information, technologies, and links
- **Multiple Link Types** - GitHub, live demos, app stores, and desktop releases
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
│   ├── projects/[id]/ # Dynamic project detail pages
├── components/        # Reusable UI components
│   ├── education/     # Education section components
│   ├── experiences/   # Experience section components
│   ├── projects/      # Project section components
│   └── volunteering/  # Volunteering section components
├── public/            # Static assets
│   ├── logos/         # Logo images
│   ├── projects/      # Project images and assets
│   ├── resume/        # Downloadable resume files
│   └── translations/  # Language translation files
```

## Enhanced Projects Features

### Project Cards

- Display main project images
- Show project framework/technology
- Star rating display
- Responsive grid layout
- Hover effects and animations

### Project Detail Pages

- Comprehensive project descriptions
- Technology stack visualization
- Multiple action buttons:
  - GitHub repository links
  - Live demo links
  - Google Play Store links (for mobile apps)
  - App Store links (for mobile apps)
  - GitHub releases (for desktop apps)
- Project images with fallback placeholders

### Project Data Structure

Each project in the translations file supports:

```json
{
  "id": "unique-project-id",
  "name": "Project Name",
  "framework": "technology",
  "shortDescription": "Brief description for cards",
  "description": "Detailed project description",
  "mainImage": "/projects/image.jpg",
  "technologies": ["Tech1", "Tech2"],
  "githubUrl": "GitHub repository URL",
  "liveUrl": "Live demo URL",
  "playStoreUrl": "Google Play Store URL",
  "appStoreUrl": "Apple App Store URL",
  "githubReleasesUrl": "GitHub releases URL",
  "stars": "star count"
}
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
