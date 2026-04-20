export interface ITimelineEntry {
  org: string
  role: string
  location: string
  startDate: string
  endDate: string
  badge: 'Work' | 'Internship' | 'Education'
  tech?: string[]
  bullets?: string[]
}

const experience: ITimelineEntry[] = [
  {
    org: 'Capital One',
    role: 'Senior Full-Stack Software Engineer',
    location: 'Chicago, IL',
    startDate: 'Feb 2024',
    endDate: 'Present',
    badge: 'Work',
    tech: ['React', 'Node.js', 'FastAPI', 'DynamoDB', 'Vue.js', 'TypeScript', 'AWS RDS', 'AWS ECS', 'AWS Fargate', 'AWS Neptune'],
    bullets: [
      'Built an AI-integrated content management system that streamlined editorial workflows for marketing teams across business lines.',
      'Architected and delivered a full-stack prototype for a new financial product, from REST API design to React UI, enabling leadership to greenlight the initiative.',
      'Containerized microservices using Docker and deployed to AWS Fargate (ECS), reducing infrastructure overhead and improving deployment consistency.',
      'Designed and maintained graph database models in AWS Neptune to power relationship-driven data features.',
      'Collaborated cross-functionally with product, design, and data teams in an Agile environment to deliver high-quality features on tight timelines.',
    ],
  },
  {
    org: 'Seamgen',
    role: 'Software Engineer',
    location: 'San Diego, CA',
    startDate: 'Aug 2019',
    endDate: 'Jun 2023',
    badge: 'Work',
    tech: ['React', 'TypeScript', 'Redux', 'Next.js', 'Storybook', 'Material-UI', 'Styled-Components'],
    bullets: [
      'Delivered end-to-end features across 5+ client-facing SaaS products spanning real estate, food tech, and insurance verticals.',
      'Established a shared component library in Storybook, improving design consistency and reducing redundant UI development across projects.',
      'Led frontend architecture decisions on two greenfield projects, defining folder structure, state management patterns, and coding conventions.',
      'Mentored junior developers and conducted code reviews, contributing to faster onboarding and higher code quality across the team.',
    ],
  },
  {
    org: 'Graybar',
    role: 'Full-Stack Developer Intern',
    location: 'Champaign, IL',
    startDate: 'May 2019',
    endDate: 'Aug 2019',
    badge: 'Internship',
    tech: ['React', 'Node.js', 'SQL'],
    bullets: [
      'Built internal tooling to streamline inventory management workflows for warehouse operations.',
      'Developed RESTful APIs and integrated them with a React front-end, improving operational efficiency.',
    ],
  },
  {
    org: 'EnterpriseWorks',
    role: 'Web Developer Intern',
    location: 'Champaign, IL',
    startDate: 'May 2018',
    endDate: 'May 2019',
    badge: 'Internship',
    tech: ['JavaScript', 'HTML', 'CSS', 'WordPress'],
    bullets: [
      'Designed and developed web pages for a startup incubator and its portfolio companies.',
      'Maintained and updated content management systems for multiple client sites.',
    ],
  },
  {
    org: 'Georgia Institute of Technology',
    role: 'M.S. Computer Science (OMSCS)',
    location: 'Atlanta, GA (Remote)',
    startDate: 'Incoming',
    endDate: '',
    badge: 'Education',
    bullets: [
      'Online Master of Science in Computer Science via the OMSCS program.',
    ],
  },
  {
    org: 'University of Illinois at Urbana-Champaign',
    role: 'B.S. Statistics, Minor in Computer Science, Certificate in Data Science',
    location: 'Champaign, IL',
    startDate: 'Aug 2015',
    endDate: 'May 2019',
    badge: 'Education',
    bullets: [
      'Graduated with a B.S. in Statistics with a minor in Computer Science and a Certificate in Data Science.',
    ],
  },
]

export default experience
