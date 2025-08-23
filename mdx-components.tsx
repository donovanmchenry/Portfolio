import type { MDXComponents } from 'mdx/types'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-display mb-8 text-gradient">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-heading mb-6 mt-12">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-subheading mb-4 mt-8">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-body mb-6">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 pl-6">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-body">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground mb-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-2 py-1 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg bg-muted p-4">
        {children}
      </pre>
    ),
    img: ({ src, alt, ...props }) => (
      <div className="mb-8">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-lg w-full"
          {...props}
        />
        {alt && (
          <p className="text-small mt-2 text-center">{alt}</p>
        )}
      </div>
    ),
    // Custom components
    TechStack: ({ children }: { children: React.ReactNode }) => (
      <Card className="mb-6">
        <CardContent className="pt-6">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {children}
          </div>
        </CardContent>
      </Card>
    ),
    Tech: ({ children }: { children: React.ReactNode }) => (
      <Badge variant="secondary">{children}</Badge>
    ),
    ...components,
  }
}
