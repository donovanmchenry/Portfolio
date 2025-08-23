# Donovan McHenry Portfolio

A minimalist, modern, dark-themed portfolio built with Next.js, showcasing my work as a software engineer and computer science student.

## ✨ Features

- **Dark-first design** with deep canvas background and subtle accent colors
- **Responsive layout** that works seamlessly across all devices
- **Fast performance** with optimized images and minimal JavaScript
- **Accessibility-focused** with proper semantic markup and keyboard navigation
- **SEO optimized** with structured data and meta tags
- **MDX-powered case studies** for detailed project documentation
- **Command palette** (⌘K) for quick navigation
- **Smooth animations** with Framer Motion

## 🛠 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Content:** MDX for case studies
- **Package Manager:** pnpm
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/donovanmchenry/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── work/              # Project case studies (MDX)
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, footer, theme provider
│   ├── sections/          # Page sections and components
│   ├── ui/                # shadcn/ui components
│   └── seo/               # SEO components
└── lib/                   # Utilities
```

## 🎨 Design System

### Colors
- **Background:** Deep canvas (~#0B0F1A)
- **Cards:** Soft elevation with subtle borders
- **Accent:** Restrained blue for highlights
- **Text:** High contrast with proper hierarchy

### Typography
- **Display:** Geist Sans for headings
- **Body:** Geist Sans for readable text
- **Code:** Geist Mono for technical content

### Animation
- **Micro-interactions:** 150-250ms transitions
- **Reduced motion:** Respects user preferences
- **Performance:** Hardware-accelerated transforms

## 📝 Content Management

### Adding Projects

1. Create a new directory in `src/app/work/[project-slug]/`
2. Add a `page.mdx` file with your case study content
3. Update the project list in `src/components/sections/project-grid.tsx`
4. Add the project to the sitemap in `src/app/sitemap.ts`

### MDX Components

Custom components available in MDX files:
- `<TechStack>` - Container for technology badges
- `<Tech>` - Individual technology badge
- Standard markdown with styled components

## 🔧 Customization

### Theme Colors
Update CSS custom properties in `src/app/globals.css`:
```css
.dark {
  --background: oklch(0.08 0.02 264);
  --accent: oklch(0.65 0.2 280);
  /* ... */
}
```

### Content
Update personal information in:
- `src/app/layout.tsx` - Site metadata
- `src/components/seo/json-ld.tsx` - Structured data
- Individual page components - Personal details

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Cumulative Layout Shift:** < 0.1
- **Bundle Size:** Optimized with tree-shaking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs or issues
- Suggest improvements
- Use as inspiration for your own portfolio

## 📧 Contact

- **Email:** dzm3@njit.edu
- **GitHub:** [@donovanmchenry](https://github.com/donovanmchenry)
- **LinkedIn:** [donovanmchenry](https://linkedin.com/in/donovanmchenry)

---

Built with ❤️ by Donovan McHenry