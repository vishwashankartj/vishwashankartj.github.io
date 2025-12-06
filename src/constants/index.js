import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  hive,
  mongodb,
  elasticsearch,
  mysql,
  redis,
  neo4j,
  databricks,
  snowflake,
  tableau,
  aws,
  langchain,
  llamaindex,
  fastapi,
  angular,
  dataleap,
  bytecloud,
  langgraph,
  openwebui,
  investigatorAI,
  genAIChat,
  twitterBot,
  sleepStage,
  imageCaption,
  tiktok,
  adp,
  infosys,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Science and AI',
    icon: backend,
    description: "Specializing in high-performance model deployment, LLM applications, and advanced machine learning algorithms. Experience with graph analytics, NLP, and deep learning.",
  },
  {
    title: 'Data Engineering',
    icon: prototyping,
    description: "Designing and developing complex ETL workflows, data pipelines, and scalable storage solutions. Expertise in Databricks, AWS, and optimizing data processing efficiency.",
  },
];

const technologies = {
  databases: [
    { name: 'Hive', icon: hive },
    { name: 'PostgreSQL', icon: postgresql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'ElasticSearch', icon: elasticsearch },
    { name: 'MySQL', icon: mysql },
    { name: 'Redis', icon: redis },
    { name: 'Neo4j', icon: neo4j },
    { name: 'GraphQL', icon: graphql },
  ],
  dataServices: [
    { name: 'Databricks', icon: databricks },
    { name: 'Dataleap', icon: dataleap },
    { name: 'Snowflake', icon: snowflake },
    { name: 'Tableau', icon: tableau },
  ],
  cloud: [
    { name: 'AWS', icon: aws },
    { name: 'ByteCloud', icon: bytecloud },
  ],
  llm: [
    { name: 'LangGraph', icon: langgraph },
    { name: 'LangChain', icon: langchain },
    { name: 'LlamaIndex', icon: llamaindex },
    { name: 'OpenWebUI', icon: openwebui },
  ],
  development: [
    { name: 'FastAPI', icon: fastapi },
    { name: 'Node.js', icon: nodejs },
    { name: 'Angular', icon: angular },
    { name: 'Docker', icon: docker },
    { name: 'Git', icon: git },
  ],
};

const experiences = [
  {
    title: 'Senior Data Scientist / Developer',
    company_name: 'TikTok',
    icon: tiktok,
    iconBg: '#333333',
    date: 'Feb 2024 - Present',
    points: [
      'Architected and deployed an AI Agent based on a Retrieval-Augmented Generation (RAG) LLM framework for an AML virtual assistant that reduced report generation time by 90% and enabled near real-time queries for risk triage.',
      'Architected the development and deployment of a graph-based financial crime detection system using custom algorithms like Community Detection and Graph Traversal for risk scoring and entity resolution across 150M+ entities.',
      'Conducted A/B testing, drift analysis, and parameter tuning on financial crime models, establishing robust decision boundaries and managing risk coverage across 500M+ monthly transactions.',
      'Successfully tuned the production anomaly detection system (using Isolation Forest) for the TikTok Live network, leading to a significant 20% reduction in false positives while maintaining detection accuracy.',
      'Deployed LLM models and vector embeddings via ByteCloud containers on NVIDIA H100 GPUs, developing low-latency Internal API endpoints 5K QPM to maintain security compliance by avoiding external model hosting.',
      'Automated the discovery and classification of sensitive PII data across 2M+ internal databases by leveraging ML-based entity recognition and fine-tuned LLM classification models using predefined Data Taxonomy tags, reducing manual efforts by 80%.',
    ],
  },
  {
    title: 'Data Scientist / Engineer',
    company_name: 'ADP Inc',
    icon: adp,
    iconBg: '#333333',
    date: 'July 2021 - Feb 2024',
    points: [
      'Designed and developed complex ETL workflows, data pipelines using Databricks, AWS State Machines, and Glue to streamline data processing from diverse sources into a centralized data lake.',
      'Automated ETL orchestration with AWS Step Functions, S3 Aurora tables, DynamoDB. Optimizing performance, efficiency by 70%.',
      'Built real-time text classification models using AWS SageMaker for earnings, deductions, and other use cases.',
      'Enhanced storage efficiency with data partitioning strategies in S3 and Aurora, and implemented automated data quality checks in PySpark-Databricks.',
    ],
  },
  {
    title: 'Data Science Intern',
    company_name: 'ADP Inc',
    icon: adp,
    iconBg: '#333333',
    date: 'June 2020 - Aug 2020',
    points: [
      'Optimized the caching strategy of a data retrieval system by using NLP techniques on unstructured network queries.',
      'Performed advanced analytics using Python to obtain network and user features.',
      'Designed prototypes and obtained additional features using Graph Clustering and Community Detection methods.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'Infosys Ltd',
    icon: infosys,
    iconBg: '#333333',
    date: 'Dec 2018 - May 2019',
    points: [
      'Developed a web application for the security department to handle employee complaints, integrating OracleDB, Spring, REST APIs, and Angular 4.',
      'Delivered the project within 80% of the proposed duration using agile methodology, significantly enhancing complaint resolution efficiency.',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Investigator AI Agent',
    description:
      'Built an intelligent multi-agent system using LangGraph that automates fraud investigation workflows. The system uses 4 specialized agents for triage, risk scoring, narrative generation, and policy-based recommendations, achieving dynamic risk assessment across 150M+ entities.',
    tags: [
      {
        name: 'langgraph',
        color: 'blue-text-gradient',
      },
      {
        name: 'llm',
        color: 'green-text-gradient',
      },
      {
        name: 'rag',
        color: 'pink-text-gradient',
      },
    ],
    image: investigatorAI,
    repo: 'https://github.com/vishwashankartj/LangGraph-Risk-Case-Investigator-AIAgent',
    demo: 'https://github.com/vishwashankartj/LangGraph-Risk-Case-Investigator-AIAgent',
  },
  {
    id: 'project-2',
    name: 'Gen AI Chat Suite',
    description:
      'Developed a self-hosted LLM chat application with Open WebUI frontend, Ollama engine, and custom FastAPI backend for RAG and agent capabilities. Containerized architecture with MongoDB for data persistence and seamless local LLM deployment.',
    tags: [
      {
        name: 'fastapi',
        color: 'blue-text-gradient',
      },
      {
        name: 'ollama',
        color: 'green-text-gradient',
      },
      {
        name: 'docker',
        color: 'pink-text-gradient',
      },
    ],
    image: genAIChat,
    repo: 'https://github.com/vishwashankartj/Ollama-Fastapi-AIChat-Suite',
    demo: 'https://github.com/vishwashankartj/Ollama-Fastapi-AIChat-Suite',
  },
  {
    id: 'project-3',
    name: 'Twitter Bot Detection',
    description:
      'Built a sophisticated bot detection system that analyzes Twitter network graphs using custom Graph2Vec embeddings with Weisfeiler-Lehman kernels. Ensemble ML model combining Random Forest, SVM, and Neural Networks achieves 100% precision or 77% recall depending on use case.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'graph-analytics',
        color: 'green-text-gradient',
      },
      {
        name: 'networkx',
        color: 'pink-text-gradient',
      },
    ],
    image: twitterBot,
    repo: 'https://github.com/vishwashankartj/Twitter-Bot-Detection',
    demo: 'https://github.com/vishwashankartj/Twitter-Bot-Detection',
  },
  {
    id: 'project-4',
    name: 'Sleep Stage Prediction',
    description:
      'Implemented a CNN-LSTM deep learning model to predict sleep stages (Wake, N1, N2, N3, REM) from single-channel EEG data. Model processes 30-second EEG epochs at 100Hz, using convolutional layers for feature extraction and LSTM for temporal dynamics, with FastAPI service deployment.',
    tags: [
      {
        name: 'lstm',
        color: 'blue-text-gradient',
      },
      {
        name: 'healthcare',
        color: 'green-text-gradient',
      },
      {
        name: 'time-series',
        color: 'pink-text-gradient',
      },
    ],
    image: sleepStage,
    repo: 'https://github.com/vishwashankartj/Sleep-Stage-Prediction',
    demo: 'https://github.com/vishwashankartj/Sleep-Stage-Prediction',
  },
  {
    id: 'project-5',
    name: 'Ranking Image Captions',
    description:
      'Implemented an end-to-end Python framework using TensorFlow and NLTK to rank captions by image relevance. Trained CNN and Word2Vec models to extract image and semantic features, resulting in a 92% increase in image relevance ranking.',
    tags: [
      {
        name: 'tensorflow',
        color: 'blue-text-gradient',
      },
      {
        name: 'deep-learning',
        color: 'green-text-gradient',
      },
      {
        name: 'nlp',
        color: 'pink-text-gradient',
      },
    ],
    image: imageCaption,
    repo: 'https://github.com/vishwashankartj',
    demo: 'https://vishwashankartj.github.io/',
  },
];

export { services, technologies, experiences, projects };
