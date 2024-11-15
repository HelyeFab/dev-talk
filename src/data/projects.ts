import { PROJECT_SLUGS } from '@/constants/project-slugs'
import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Code Assistant',
    subtitle: 'AI-powered coding companion',
    description: `
      A VS Code extension that uses AI to help developers write better code, find bugs, and learn best practices.
      The assistant provides real-time suggestions, code explanations, and automated refactoring options.
    `,
    content: `
      # AI Code Assistant

      An intelligent coding companion that helps developers write better code faster.
      
      ## Features
      
      - Real-time code suggestions
      - Automated bug detection
      - Code quality improvements
      - Best practices recommendations
      
      ## Technology
      
      Built using TypeScript and Python, leveraging state-of-the-art language models
      for intelligent code analysis and generation.
    `,
    image: '/images/projects/project_1.webp',
    technologies: ['TypeScript', 'Python', 'VS Code API', 'OpenAI'],
    slug: PROJECT_SLUGS.AI_CODE_ASSISTANT,
    githubUrl: 'https://github.com/EmmanuelFabian',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=EmmanuelFabian.ai-code-assistant',
    featured: true
  },
  {
    id: '2',
    title: 'Neural Network Visualizer',
    subtitle: 'Interactive deep learning visualization',
    description: `
      An interactive web application for visualizing and understanding neural network architectures and training processes.
      Features real-time 3D visualization of network layers and data flow.
    `,
    content: `
      # Neural Network Visualizer

      An interactive tool for understanding deep learning architectures.
      
      ## Features
      
      - 3D network visualization
      - Real-time training visualization
      - Interactive layer inspection
      - Custom architecture builder
      
      ## Technology
      
      Built with React and Three.js for smooth 3D rendering and interactive visualizations.
    `,
    image: '/images/projects/project_2.webp',
    technologies: ['React', 'Three.js', 'TensorFlow.js', 'WebGL'],
    slug: PROJECT_SLUGS.NEURAL_NETWORK_VIZ,
    githubUrl: 'https://github.com/EmmanuelFabian/neural-network-visualizer',
    liveUrl: 'https://neural-network-visualizer.emmanuelfabian.com',
    featured: true
  },
  {
    id: '3',
    title: 'Smart Home Energy Monitor',
    subtitle: 'AI-powered energy optimization',
    description: `
      An IoT system that monitors and optimizes home energy usage using machine learning predictions.
      Provides real-time insights and automated energy-saving recommendations.
    `,
    content: `
      # Smart Home Energy Monitor

      Intelligent energy monitoring and optimization system.
      
      ## Features
      
      - Real-time energy monitoring
      - ML-based usage predictions
      - Automated optimization
      - Mobile app control
      
      ## Technology
      
      Built using Python and TensorFlow for intelligent energy analysis and prediction.
    `,
    image: '/images/projects/project_3.webp',
    technologies: ['Python', 'TensorFlow', 'IoT', 'React Native'],
    slug: PROJECT_SLUGS.SMART_ENERGY,
    githubUrl: 'https://github.com/EmmanuelFabian/smart-home-energy-monitor',
    liveUrl: 'https://energy-monitor.emmanuelfabian.com',
    featured: true
  }
]