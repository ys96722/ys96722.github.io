export interface IProjectInfo {
  name: string
  client: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
}

const projects: IProjectInfo[] = [
  {
    name: 'Real Estate Labs',
    client: 'Seamgen',
    description:
      'SaaS platform for property investors to analyze deals, track portfolios, and model cash flows. Built a responsive dashboard with complex data visualizations and a robust filtering system for property search.',
    tech: ['TypeScript', 'React', 'Redux', 'Styled-Components', 'Java (Spring)', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    name: 'Local Food Buzz',
    client: 'Seamgen',
    description:
      'Restaurant discovery platform with a personalized recommendation engine. Developed the front-end with server-side rendering via Next.js for SEO performance, and integrated map and location APIs for curated local dining experiences.',
    tech: ['TypeScript', 'Next.js', 'Redux', 'Styled-Components', 'Java (Spring)', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    name: 'Solara',
    client: 'Seamgen',
    description:
      'Insurance agent workflow tool featuring in-browser PDF editing, Twilio-powered click-to-call, and a policy management dashboard. Reduced manual processing time significantly by digitizing previously paper-based workflows.',
    tech: ['TypeScript', 'React', 'Redux', 'Sass', 'C# (.NET)', 'Material-UI', 'Azure', 'Twilio'],
  },
]

export default projects
