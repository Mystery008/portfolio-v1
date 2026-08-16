export const profile = {
  name: 'Nidhi Tank',
  title: 'AI/ML Engineer | Software Engineer',
  location: 'Ahmedabad, Gujarat, India',
  email: 'ntank2024@gmail.com',
  github: 'https://github.com/Mystery008',
  linkedin: 'https://www.linkedin.com/in/nidhitank008/',
  headline: 'Computer Engineering graduate with hands-on experience in AI/ML and software engineering.',
  summary:
    'Computer Engineering graduate with experience in AI/ML, Python development, and MLOps through internships and personal projects. Currently working as a Software Engineer Trainee and interested in building practical machine learning applications and software solutions.',
}

export const proofPoints = [
  {
    label: 'Focus',
    value: 'AI/ML · Backend APIs · MLOps',
  },
  {
    label: 'Core Stack',
    value: 'Python, Scikit-Learn, FastAPI, Docker',
  },
  {
    label: 'Experience',
    value: 'Software Engineer Trainee at Impero IT Services',
  },
]

export const techPills = [
  'Python',
  'Scikit-Learn',
  'FastAPI',
  'Docker',
  'GitHub Actions',
  'Streamlit',
  'MLflow',
]

export const tickerItems = [
  'AI/ML ENGINEER',
  'MLOps',
  'GENERATIVE AI',
  'RAG & LANGCHAIN',
  'FASTAPI',
  'STREAMLIT',
  'DOCKER',
  'CI/CD',
  'POWER BI',
  'PYTHON',
  'MONGODB',
]

export const skillGroups = [
  {
    label: 'Programming Languages',
    tag: '01',
    summary: 'Python is my primary language. C and Java covered in academic coursework.',
    skills: ['Python', 'C', 'Java'],
  },
  {
    label: 'AI & Machine Learning',
    tag: '02',
    summary: 'Worked on classification, regression, and NLP tasks in personal projects. Explored Generative AI and RAG through a dedicated Udemy course.',
    skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'RAG', 'LangChain', 'Scikit-Learn', 'Model Evaluation'],
  },
  {
    label: 'MLOps & Infrastructure',
    tag: '03',
    summary: 'Used Git throughout my work. Applied Docker, GitHub Actions, and AWS S3 in my insurance prediction MLOps project.',
    skills: ['Git', 'GitHub Actions', 'AWS (S3)', 'Docker', 'CI/CD Pipelines'],
  },
  {
    label: 'APIs & Web Apps',
    tag: '04',
    summary: 'Built a FastAPI prediction endpoint for my MLOps project. Used Streamlit for interactive UIs and Supabase for backend auth in a college prototype.',
    skills: ['FastAPI', 'Streamlit', 'Supabase', 'REST APIs'],
  },
  {
    label: 'Data & Analytics',
    tag: '05',
    summary: 'Use Pandas and SQL regularly for data work. Built Power BI dashboards during my analytics internship at Infolabz.',
    skills: ['MongoDB', 'SQL', 'Pandas', 'Power BI', 'Matplotlib'],
  },
]

export const experience = [
  {
    role: 'Software Engineer Trainee',
    company: 'Impero IT Services Pvt. Ltd.',
    type: 'Full-time Employee',
    period: 'Jul 2026 – Present',
    location: 'Ahmedabad, Gujarat, India · On-site',
    points: [
      'Retained as a full-time Software Engineer Trainee after completing my 6-month internship at the same company.',
      'Contributing to development tasks, participating in team sprints, and applying what I built during the internship in a live environment.',
      'Working alongside senior engineers — learning from code reviews, design discussions, and day-to-day engineering decisions.',
    ],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'Impero IT Services Pvt. Ltd.',
    type: 'Internship',
    period: 'Jan 2026 – Jun 2026',
    location: 'Ahmedabad, Gujarat, India · On-site',
    points: [
      '6-month on-site internship working on ML features and backend development within a software engineering team.',
      'Used Python, FastAPI, and Docker to build model-serving endpoints. Set up a basic GitHub Actions CI pipeline for automated testing.',
      'Attended daily standups, worked through sprint backlogs, and had code reviewed by senior engineers — first experience with a structured engineering workflow.',
    ],
  },
  {
    role: 'Data Analytics & ML Intern',
    company: 'Infolabz IT Services PVT. LTD',
    type: 'Internship',
    period: 'July 2025 · 2 Weeks',
    location: 'Online',
    points: [
      '2-week online summer programme covering data analytics, Power BI, and applied machine learning.',
      'Retrieved and processed data from APIs using Python (Pandas, Matplotlib) and visualised trends in Power BI.',
      'Trained and evaluated simple regression and classification models on provided datasets as guided exercises.',
    ],
  },
]

export const projects = [
  {
    title: 'Vehicle Insurance Cross-Sell Prediction',
    featured: true,
    image: '/project-mlops.png',
    problem:
      'Predict which existing health insurance customers are likely to purchase vehicle insurance — a standard classification problem applied in insurance analytics.',
    build:
      'Built a structured ML pipeline in Python with data ingestion from MongoDB, preprocessing, model training (classification), experiment tracking via MLflow, and a FastAPI inference endpoint. Added GitHub Actions for CI and Docker for containerised deployment.',
    takeaway:
      'This project covers the full pipeline from raw data to a served model — a good way to learn how each stage connects in a real workflow.',
    description:
      'A classification project structured as an ML pipeline, with training, tracking, and a REST API endpoint for predictions.',
    pipeline: [
      'Ingest',
      'Validate',
      'Train',
      'Track',
      'Deploy',
      'Monitor',
      'Retrain',
    ],
    stack: [
      'Python',
      'Scikit-Learn',
      'MLflow',
      'DVC',
      'AWS S3',
      'Docker',
      'GitHub Actions',
      'FastAPI',
      'MongoDB',
    ],
    features: [
      'MongoDB data ingestion',
      'MLflow experiment tracking',
      'DVC data versioning',
      'FastAPI prediction endpoint',
      'Docker containerisation',
      'GitHub Actions CI pipeline',
    ],
    github: 'https://github.com/Mystery008/Project-01-MLOps.git',
  },
  {
    title: 'Movie Recommendation System',
    featured: false,
    image: '/project-recommend.png',
    problem:
      'Given a movie title, suggest similar titles from the dataset based on content features like genre, keywords, and cast.',
    build:
      'Used Python and Pandas to preprocess movie metadata from a public dataset. Applied Count Vectorization on text features and used Cosine Similarity to rank and return the top-N similar movies for any given input.',
    takeaway:
      'A practical introduction to content-based filtering, text vectorization, and similarity search — useful grounding for NLP and recommendation work.',
    description:
      'A content-based movie recommender that uses text feature extraction and similarity scoring to suggest related titles.',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'NumPy'],
    features: [
      'Metadata preprocessing',
      'Count Vectorization on text features',
      'Cosine similarity ranking',
      'Top-N recommendation output',
    ],
    github: 'https://github.com/Mystery008/Movie-Recommendation-Project.git',
  },
  {
    title: 'Class Notification & Timetable App',
    featured: false,
    image: '/project-notify.png',
    problem:
      'Students and faculty at our college had no simple way to communicate class cancellations or timetable changes in real time.',
    build:
      'Built a Streamlit app with Supabase as the backend database and auth layer. Added role-based views for students and faculty, real-time absence reporting, and a personalised timetable display. Developed as a prototype for internal use.',
    takeaway:
      'Good experience working with a hosted database, managing user roles, and building a functional multi-user app from scratch.',
    description:
      'A lightweight web app for managing class notifications and timetable updates, built as a college prototype using Streamlit and Supabase.',
    stack: ['Python', 'Streamlit', 'Supabase', 'SQL'],
    features: [
      'Role-based login (student / faculty)',
      'Real-time absence reporting',
      'Personalised timetable view',
      'Notification history',
    ],
    github: 'https://github.com/Mystery008/Class-Notification-App.git',
  },
]

export const certifications = [
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle Certified',
    year: 'July 2026',
  },
  {
    title: 'Certified AI Foundations Associate',
    issuer: 'Oracle Certified',
    year: 'Aug 2025',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: 'Sept 2025',
  },
  {
    title: 'Introduction to Cloud',
    issuer: 'IBM',
    year: 'Sept 2025',
  },
  {
    title: 'Machine Learning Terminology and Process',
    issuer: 'AWS Training & Certification',
    year: 'July 2025',
  },
  {
    title: 'Generative AI Course',
    issuer: 'Krish Naik (Udemy)',
    year: 'Mar 2026',
  },
  {
    title: 'Python and SQL for Data Science',
    issuer: 'Scaler',
    year: 'Aug 2025',
  },
  {
    title: 'Complete Data Science Bootcamp',
    issuer: '365datascience (Udemy)',
    year: 'July 2025',
  },
  {
    title: 'Learn Python - Pro',
    issuer: 'CodeChef',
    year: 'Aug 2023',
  },
  {
    title: 'Geoprocessing using Python',
    issuer: 'ISRO',
    year: 'July 2023',
  },
]

export const education = [
  {
    institution: 'L.D. College of Engineering (GTU)',
    degree: 'Bachelor of Engineering — Computer Engineering',
    period: '2021 – 2026',
    score: '9.00 CPI & 8.71 CGPA',
  },
  {
    institution: 'Ananya Vidyalaya (GSEB)',
    degree: 'HSC — Science Stream',
    period: '2020 – 2021',
    score: '90.15% · GUJCET: 98.44 PR',
  },
  {
    institution: 'Ananya Vidyalaya (GSEB)',
    degree: 'SSC',
    period: '2018 – 2019',
    score: '88.50%',
  },
]
