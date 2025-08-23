interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  image?: string
  jobTitle: string
  worksFor: {
    '@type': string
    name: string
  }
  alumniOf: {
    '@type': string
    name: string
  }
  sameAs: string[]
  email: string
  description: string
}

interface WebsiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  author: {
    '@type': string
    name: string
  }
  inLanguage: string
}

interface ProjectSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  author: {
    '@type': string
    name: string
  }
  programmingLanguage: string[]
  dateCreated: string
}

export function PersonJsonLd() {
  const personSchema: PersonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Donovan McHenry',
    url: 'https://dzmchenry.com',
    jobTitle: 'Software Engineering Intern',
    worksFor: {
      '@type': 'Organization',
      name: 'Obsidian Security'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'New Jersey Institute of Technology'
    },
    sameAs: [
      'https://github.com/donovanmchenry',
      'https://linkedin.com/in/donovanmchenry'
    ],
    email: 'dzm3@njit.edu',
    description: 'Computer Science student at NJIT and Software Engineering Intern at Obsidian Security. Passionate about building clean, performant web applications and mentoring fellow developers.'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

export function WebsiteJsonLd() {
  const websiteSchema: WebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Donovan McHenry Portfolio',
    url: 'https://dzmchenry.com',
    description: 'Portfolio website of Donovan McHenry, showcasing projects, experience, and technical skills in software engineering.',
    author: {
      '@type': 'Person',
      name: 'Donovan McHenry'
    },
    inLanguage: 'en-US'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}

export function ProjectJsonLd({ 
  name, 
  description, 
  slug, 
  technologies, 
  dateCreated 
}: {
  name: string
  description: string
  slug: string
  technologies: string[]
  dateCreated: string
}) {
  const projectSchema: ProjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `https://dzmchenry.com/work/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Donovan McHenry'
    },
    programmingLanguage: technologies,
    dateCreated
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
    />
  )
}
