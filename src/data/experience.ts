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
    tech: ['React', 'Vue.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'AWS RDS', 'DynamoDB', 'Neptune', 'AWS ECS', 'AWS Fargate'],
    bullets: [
      'Designed and built a full-stack platform prototype using React, Node.js, FastAPI (Python), and DynamoDB to propose a company-wide CMS with governance; adopted as the foundation for Capital One\'s enterprise content platform.',
      'Led data architecture design for an AI-integrated enterprise CMS from requirements through MVP to production, driving alignment across engineering, product, and business stakeholders organization-wide.',
      'Drove technical alignment by leading design reviews, shaping implementation strategy with product leadership, and facilitating weekly engineering syncs to guide team execution.',
      'Managed two micro-containers from development in Vue.js and Node.js to deployment in AWS Fargate clusters.',
      'Used tools such as Vue.js, React, TypeScript, Node.js, Python, AWS RDS, DynamoDB, Neptune, AWS ECS, AWS Fargate.',
    ],
  },
  {
    org: 'Seamgen',
    role: 'Software Engineer',
    location: 'San Diego, CA',
    startDate: 'Aug 2019',
    endDate: 'Jul 2023',
    badge: 'Work',
    tech: ['React', 'TypeScript', 'Redux', 'Next.js', 'Storybook', 'Material-UI', 'Styled-Components', 'Bitbucket', 'JIRA'],
    bullets: [
      'Architected and delivered six full-stack applications across finance, healthcare, real estate, and retail sectors.',
      'Managed frontend applications by overseeing engineering efforts and designing a technology plan in an agile environment.',
      'Developed responsive, mobile-first web applications with SEO, cross-browser compatibility, accessibility, and specificity.',
      'Used tools such as React, TypeScript, Redux, Next.js, Storybook, Material-UI, Styled-Components, Bitbucket, and JIRA.',
    ],
  },
  {
    org: 'Graybar',
    role: 'Full-Stack Developer Intern',
    location: 'Champaign, IL',
    startDate: 'May 2019',
    endDate: 'Aug 2019',
    badge: 'Internship',
    tech: ['React', 'Redux', 'Node.js', 'Python'],
    bullets: [
      'Created Reddit-like discussion forum to facilitate innovation within the company using React, Redux, and Node.js.',
      'Developed client-side stack for an interactive data visualization application using React, Redux, Node.js, and Python.',
      'Refactored legacy mobile applications into React Native, Node.js, and MongoDB stack to improve design and performance.',
    ],
  },
  {
    org: 'EnterpriseWorks',
    role: 'Web Developer Intern',
    location: 'Champaign, IL',
    startDate: 'May 2018',
    endDate: 'May 2019',
    badge: 'Internship',
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS3'],
    bullets: [
      'Developed ten websites for startups using WordPress, PHP, JavaScript, and CSS3 and produced tutorial videos for clients.',
      'Coordinated two web development workshops to create a more cohesive workflow between designers and developers.',
      'Reduced hours spent per website by approximately 20 hours by devising a new SOP for developers and graphic designers.',
      'Led biweekly web development study group on JavaScript, CSS3, and HTML5 to provide a basic development knowledge.',
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
    role: 'B.S. Statistics',
    location: 'Champaign, IL',
    startDate: 'Aug 2015',
    endDate: 'May 2019',
    badge: 'Education',
    bullets: [
      'Graduated with a B.S. in Statistics.',
    ],
  },
]

export default experience
