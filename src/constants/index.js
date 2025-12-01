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
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    title: 'Data Scientist',
    icon: backend,
  },
  {
    title: 'Data Engineer',
    icon: prototyping,
  },
  {
    title: 'LLM Expert',
    icon: ux,
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
    title: 'Senior Data Scientist',
    company_name: 'TikTok',
    icon: tiktok,
    iconBg: '#333333',
    date: 'Feb 2024 - Present',
    points: [
      'Designed and deployed a community detection algorithm to cluster over 150M+ users, IP addresses, and government-issued IDs, improving financial crime investigation coverage by 65% and reducing investigation time by 30%.',
      'Built a custom graph traversal algorithm to surface high-risk sub-networks among suspicious entities, accelerating triage for flagged accounts and contributing to a 45% increase in detection of coordinated fraud patterns.',
      'Developed and productionized anomaly detection models using Isolation Forest, assigning dynamic risk scores to 500M+ users, transactions/month in the TikTok Live network.',
      'Deployed LLM models and vector embeddings using ByteCloud containers on NVIDIA A100 GPUs, exposing them as low-latency API endpoints.',
      'Built a Retrieval-Augmented Generation (RAG) LLM chatbot to generate automated investigative reports from scored and traversed high-risk networks.',
    ],
  },
  {
    title: 'Data Scientist/Engineer',
    company_name: 'ADP Inc.',
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
    company_name: 'ADP Inc.',
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
    company_name: 'Infosys Ltd.',
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
    name: 'Twitter Bot Detection',
    description:
      'Designed a classification model to predict and detect twitter bots using network analysis. Incorporated NetworkX and Graph2Vec libraries to analyze network graph feature embeddings, achieving 95% detection accuracy on test datasets.',
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
    image: komikult,
    repo: 'https://github.com/vishwashankartj',
    demo: 'https://vishwashankartj.github.io/',
  },
  {
    id: 'project-2',
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
    image: leaderboard, // Placeholder
    repo: 'https://github.com/vishwashankartj',
    demo: 'https://vishwashankartj.github.io/',
  },
  {
    id: 'project-3',
    name: 'Adversarial Attacks on DNN',
    description:
      'Implemented a black-box attack on target model and created a substitute model to learn the target model\'s weights. Achieved a test accuracy of 82% on adversarial data.',
    tags: [
      {
        name: 'pytorch',
        color: 'blue-text-gradient',
      },
      {
        name: 'security',
        color: 'green-text-gradient',
      },
      {
        name: 'ai',
        color: 'pink-text-gradient',
      },
    ],
    image: math, // Placeholder
    repo: 'https://github.com/vishwashankartj',
    demo: 'https://vishwashankartj.github.io/',
  },
  {
    id: 'project-4',
    name: 'Sleep Stage Prediction',
    description:
      'Designed a model to predict sleep levels using EEG, EOG and EMG medical data. Developed a LSTM time-series deep learning model achieving 85% accuracy.',
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
    image: movie, // Placeholder
    repo: 'https://github.com/vishwashankartj',
    demo: 'https://vishwashankartj.github.io/',
  },
];

export { services, technologies, experiences, projects };
