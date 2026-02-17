import { BuilderKit } from '../types/resources';

export const builderKits: BuilderKit[] = [
    {
        id: 'design-system-kit',
        name: 'Design System Kit',
        description: 'Create a professional design system and visual identity.',
        tags: ['ai-tools', 'design', 'design-system'],
        features: [
            'Color palette and typography system',
            'Component library',
            'Icon set and illustrations',
            'Design tokens and guidelines'
        ],
        hasForm: false,
        docsUrl: 'https://www.designsystems.com/getting-started/',
    },
    {
        id: 'prd-kit',
        name: 'PRD Kit',
        description: 'Create a comprehensive Product Requirements Document with user personas, features, and phased implementation plans. Get AI-ready prompts for Cursor, Trae, v0, and Bolt to build your product step-by-step.',
        tags: ['prd', 'requirements', 'ai-implementation'],
        features: [
            'User personas and stories',
            'Feature requirements',
            'Phase-by-phase AI prompts',
            'Technical specifications',
            'Success metrics'
        ],
        hasForm: true,
        formType: 'prd',
        docsUrl: 'https://www.productplan.com/glossary/product-requirements-document/',
    },
    {
        id: 'pitch-master-kit',
        name: 'Pitch Master Kit',
        description: 'Create compelling pitch presentations optimized for Gamma AI presentation software.',
        tags: ['pitch', 'gamma', 'presentation'],
        features: [
            'Gamma-ready pitch deck prompts',
            'Executive summary template',
            'Demo script and Q&A guide',
            'Investor-focused storytelling'
        ],
        hasForm: true,
        formType: 'pitch-master',
        docsUrl: 'https://gamma.app/docs',
    },
    {
        id: 'complete-branding-kit',
        name: 'Complete Branding Kit',
        description: 'Create a comprehensive brand identity from strategy to visual assets. Guides you through market research, brand positioning, and visual identity creation using AI tools.',
        tags: ['branding', 'design', 'strategy'],
        features: [
            'Brand strategy document',
            'Logo and visual assets',
            'Brand voice guidelines',
            'Market positioning',
            'Brand personality framework'
        ],
        hasForm: true,
        formType: 'branding',
        docsUrl: 'https://www.canva.com/learn/branding-kit/',
    },
    {
        id: 'tech-stack-checklist',
        name: 'Tech Stack Checklist',
        description: 'Technical decisions and actions guide for building robust, low-bandwidth applications with AI and Blockchain considerations.',
        tags: ['development', 'ai', 'blockchain', 'launch'],
        features: [
            'Foundation & Planning phase',
            'Development & Integration',
            'Launch & Maintenance phase',
            'AI integration guidelines',
            'Blockchain considerations',
            'Performance optimization',
            'Security best practices',
            'Deployment strategies',
            'Monitoring and analytics',
            'Scalability planning',
            'Testing frameworks',
            'Documentation standards',
            'Team collaboration tools',
            'Version control setup',
            'CI/CD pipeline',
            'Low-bandwidth optimization'
        ],
        hasForm: false,
        docsUrl: 'https://stackshare.io/stacks',
    },
    {
        id: 'social-media-generator',
        name: 'Social Media Content Generator',
        description: 'Fill out the fields below to generate a tailored social media content calendar.',
        tags: ['social-media', 'content', 'marketing', 'calendar'],
        features: [
            'Project identity setup',
            'Content strategy planning',
            'Platform & duration selection',
            'Content calendar generation',
            'Post templates',
            'Hashtag recommendations'
        ],
        hasForm: true,
        formType: 'social-media',
        docsUrl: 'https://buffer.com/library/social-media-content-calendar/',
    },
    {
        id: 'research-validation-kit',
        name: 'Research & Validation Kit 🔬',
        description: 'Guide you through testing your idea against the real world to ensure you are building something people actually want and need.',
        tags: ['research', 'validation', 'market-analysis', 'sierra-leone'],
        features: [
            'Idea & assumptions testing',
            'Market size validation',
            'Competitor analysis',
            'User interview frameworks'
        ],
        hasForm: false,
        docsUrl: 'https://www.strategyzer.com/library/the-business-model-canvas',
    },
];
