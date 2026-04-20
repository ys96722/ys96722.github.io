export interface ISkillGroup {
  category: string
  skills: string[]
}

export interface ICertificate {
  name: string
  issuer: string
}

export const skillGroups: ISkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['TypeScript', 'React.js', 'Vue.js', 'Next.js', 'Redux', 'Styled-Components', 'Material-UI', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'Java (Spring)', 'SQL', 'C# (.NET)', 'REST APIs'],
  },
  {
    category: 'DevOps / Cloud',
    skills: ['AWS (ECS, Fargate, RDS, DynamoDB)', 'Docker', 'Azure', 'Jenkins', 'Bash'],
  },
  {
    category: 'Data & ML',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'R', 'Jupyter'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Storybook', 'Figma', 'JIRA', 'Bitbucket', 'Agile/Scrum'],
  },
]

export const certificates: ICertificate[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'Nanodegree in Data Analytics',
    issuer: 'Udacity',
  },
]
