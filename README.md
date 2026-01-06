# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. Features cinematic animations, interactive UI components, and optimized performance.

## 🚀 Key Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript
- **Responsive Design**: Fully responsive layout for all device sizes
- **Cinematic Animations**: Framer Motion powered transitions and animations
- **Interactive UI Components**: Custom-built interactive elements
- **Dark Mode Support**: Automatic dark/light mode based on system preference
- **Performance Optimized**: Lazy loading, code splitting, and image optimization
- **SEO Ready**: Comprehensive metadata and structured data
- **World-Class Standards**: Enhanced UI/UX following industry best practices

## 🛠️ Technologies Used

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **UI Components**: React Icons, Lucide React
- **Graphics**: OGL (WebGL library)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with email form
│   ├── projects/          # Projects showcase page
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/          # Page sections (hero, stats, etc.)
│   ├── ui/                # Interactive UI components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── data/                  # Static data files
│   ├── experiences.js     # Work experience data
│   ├── projects.js        # Project showcase data
│   └── skills-data.js     # Skills and proficiency levels
└── hooks/                 # Custom React hooks
   └── useTheme.ts        # Theme management hook
```

## 🎨 UI Components

### Interactive Elements
- **Particles**: WebGL-powered particle systems with physics
- **Spotlight Cards**: Interactive cards with spotlight effect
- **Glitch Text**: Cinematic text glitch effects
- **Shiny Text**: Animated gradient text effects
- **Target Cursor**: Custom cursor with spinning animation
- **Faulty Terminal**: Retro terminal with glitch effects
- **Dot Grid**: Interactive dot grid background

### Sections
- **Hero**: Animated introduction with typing effect
- **Stats**: Animated counters with particle background
- **Experience**: Timeline of professional experience
- **Skills**: Skill proficiency visualization
- **Projects**: Project showcase with filtering
- **Contact**: Email form with validation

## ⚙️ Performance Optimizations

1. **Code Splitting**: Dynamic imports for all heavy components
2. **Lazy Loading**: Images and components loaded on demand
3. **Image Optimization**: Next.js Image component with WebP format
4. **Particle System**: Performance-controlled particle rendering
5. **Bundle Optimization**: Tree-shaking and minification

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your project into Vercel
3. Deploy with default settings

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add the following environment variables to `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 SEO Features

- Semantic HTML structure
- Comprehensive metadata for all pages
- OpenGraph and Twitter card support
- Structured data (JSON-LD)
- Canonical URLs
- Responsive design for mobile-first indexing
- Sitemap.xml and robots.txt for search engine crawling

## 🔄 Available Scripts

- `dev`: Runs the development server
- `build`: Builds the application for production
- `start`: Starts the production server
- `lint`: Runs ESLint for code quality checks

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🔧 Customization

### Updating Content
- Modify data in `src/data/` directory
- Update project information in `projects.js`
- Change experience timeline in `experiences.js`
- Adjust skills in `skills-data.js`

### Changing Colors
- Update Tailwind theme in `tailwind.config.js`
- Modify gradient colors in component files
- Adjust particle colors in respective components

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and use it in `PortfolioHome.tsx`
3. Apply dynamic imports for better performance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework and SEO
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React Icons](https://react-icons.github.io/react-icons/) for icon components
- [OGL](https://github.com/oframe/ogl) for lightweight WebGL rendering

---

*Built with ❤️ using modern web technologies*