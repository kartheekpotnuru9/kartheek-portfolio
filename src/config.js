// Portfolio content transcribed from Kartheek Potnuru's uploaded resume.
// Edit this file whenever your resume details change.
export const profile = {
  name: 'Kartheek Potnuru',
  initials: 'KP',
  role: 'Software Developer | Python Full Stack & AI/ML',
  location: 'Srikakulam, Andhra Pradesh, India',
  email: 'kartheekpotnuru9@gmail.com',
  phone: '+91 6304441348',
  github: 'https://github.com/kartheekpotnuru9',
  linkedin: 'https://linkedin.com/in/kartheek-potnuru',
  leetcode: 'https://leetcode.com/kartheekpotnuru9',
  summary:
    'Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning from GMR Institute of Technology. I build software and AI solutions, with hands-on experience in Python full-stack development, AWS cloud services, deep learning, NLP, and graph neural networks.',
  education: {
    degree: 'Bachelor of Technology — CSE (Artificial Intelligence & Machine Learning)',
    college: 'GMR Institute of Technology',
    location: 'Rajam, Andhra Pradesh',
    period: '2022 — 2026',
    graduation: '2026',
    cgpa: '8.27',
  },
  skills: [
    { group: 'Programming Languages', items: ['Python', 'Java', 'C', 'SQL'] },
    { group: 'Web Development', items: ['HTML', 'CSS'] },
    { group: 'Databases', items: ['MySQL', 'Neo4j'] },
    { group: 'Cloud & Tools', items: ['AWS', 'Git'] },
    { group: 'Frameworks & Libraries', items: ['PyTorch', 'TensorFlow/Keras', 'OpenCV', 'Pandas', 'NumPy', 'Scikit-learn'] },
    { group: 'AI & Machine Learning', items: ['Deep Learning', 'NLP', 'Generative AI', 'GNN', 'CNN'] },
    { group: 'Core CS', items: ['Data Structures & Algorithms', 'OOP', 'Problem Solving'] },
  ],
  projects: [
    {
      number: '01',
      title: 'Semantic Plagiarism Detection Using GNN',
      description:
        'Developed AURA, an AI-powered semantic plagiarism detection system to identify copied and paraphrased content. Combined SentenceTransformer embeddings with Graph Neural Networks for hybrid similarity scoring, achieving 88% detection accuracy on a research-paper graph of 2,541 papers.',
      stack: ['PyTorch', 'SentenceTransformers', 'NLP', 'GNN', 'Neo4j', 'Cosine Similarity', 'Latex Parsing'],
      github: 'https://github.com/kartheekpotnuru9/aura-plagiarism-detection',
      demo: '',
      note: 'Add the project repository or demo link when available.',
    },
    {
      number: '02',
      title: 'Sign Language Recognition Using CNN',
      description:
        'Developed a sign language to text and speech conversion system for hearing-impaired users. Implemented a CNN to classify sign-language gestures from images into text labels, achieving 91% classification accuracy and integrating text-to-speech functionality.',
      stack: ['Python', 'CNN', 'TensorFlow/Keras', 'OpenCV', 'NumPy', 'Google TTS'],
      github: 'https://github.com/kartheekpotnuru9/sign-language-to-text-and-speech',
      demo: '',
      note: 'Add the project repository or demo link when available.',
    },
  ],
  experience: [
    {
      role: 'AWS Intern',
      organization: 'HashTek Solutions',
      location: 'Visakhapatnam, Andhra Pradesh',
      period: 'June 2024 — July 2024',
      details:
        'Set up and configured AWS EC2, S3, IAM, VPN, and Load Balancers to create cloud environments. Used IAM for access control, VPN and Load Balancers for secure connections and traffic distribution, and applied IaaS, PaaS, and SaaS service models to design cost-efficient, scalable cloud architectures.',
    },
    {
      role: 'Python Full Stack Intern',
      organization: 'GMR Institute of Technology',
      location: 'Rajam, Andhra Pradesh',
      period: 'December 2025 — March 2026',
      details:
        'Engineered full-stack web applications using Python, SQL, HTML, CSS, and JavaScript. Performed database operations using SQL, applied data structures and algorithms to solve programming problems, and debugged code across front-end and back-end components.',
    },
  ],
  certificates: [
    'Python Essentials — Cisco Networking Academy (December 2024)',
    'Generative AI Engineer — Larsen and Toubro EduTech (June 2025)',
    'Python (Basic) — HackerRank (October 2026)',
    'SQL (Basic) — HackerRank (October 2026)',
  ],
  achievements: [
    'Solved 300+ algorithmic, data-structure, and logic problems on LeetCode.',
    'Developed AI models achieving up to 91% classification accuracy and 88% detection accuracy.',
    'Completed two technical internships in AWS and Full-Stack Development.',
  ],
}