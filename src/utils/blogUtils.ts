import type { BlogPost } from '../types/blog';

// Simulated blog posts data
const MOCK_POSTS: BlogPost[] = [
  {
    title: 'Understanding Zero Trust Security',
    slug: 'understanding-zero-trust-security',
    excerpt: 'Learn about the principles of Zero Trust and how it can enhance your organization\'s security posture.',
    content: `
      <h2>What is Zero Trust Security?</h2>
      <p>Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Never trust, always verify</li>
        <li>Assume breach</li>
        <li>Verify explicitly</li>
      </ul>

      <h3>Implementation Steps</h3>
      <ol>
        <li>Identify your protect surface</li>
        <li>Map the transaction flows</li>
        <li>Architect a Zero Trust network</li>
        <li>Create the Zero Trust policy</li>
        <li>Monitor and maintain</li>
      </ol>

      <p>By implementing Zero Trust, organizations can significantly improve their security posture and better protect against modern cyber threats.</p>
    `,
    author: 'John Smith',
    date: new Date('2024-03-01'),
    tags: ['Zero Trust', 'Security Architecture', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Cloud Security Best Practices',
    slug: 'cloud-security-best-practices',
    excerpt: 'Essential security measures for protecting your cloud infrastructure and applications.',
    content: `
      <h2>Securing Your Cloud Infrastructure</h2>
      <p>As organizations continue to migrate to the cloud, implementing robust security measures becomes increasingly critical.</p>

      <h3>Essential Security Measures</h3>
      <ul>
        <li>Enable Multi-Factor Authentication (MFA)</li>
        <li>Implement least privilege access</li>
        <li>Regular security assessments</li>
        <li>Encrypt data at rest and in transit</li>
      </ul>

      <h3>Monitoring and Compliance</h3>
      <p>Continuous monitoring and compliance are crucial aspects of cloud security:</p>
      <ul>
        <li>Set up automated security monitoring</li>
        <li>Implement logging and auditing</li>
        <li>Regular compliance checks</li>
        <li>Incident response planning</li>
      </ul>

      <h3>Best Practices for Different Cloud Models</h3>
      <h4>IaaS Security</h4>
      <p>Focus on infrastructure security, including network security and access controls.</p>

      <h4>PaaS Security</h4>
      <p>Ensure application security and proper configuration of platform services.</p>

      <h4>SaaS Security</h4>
      <p>Manage user access and data security within third-party applications.</p>
    `,
    author: 'Sarah Johnson',
    date: new Date('2024-02-28'),
    tags: ['Cloud Security', 'AWS', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    title: 'The Rise of AI in Cybersecurity',
    slug: 'ai-in-cybersecurity',
    excerpt: 'How artificial intelligence is transforming the landscape of cybersecurity.',
    content: `
      <h2>AI's Impact on Cybersecurity</h2>
      <p>Artificial Intelligence is revolutionizing how organizations detect, prevent, and respond to cyber threats.</p>

      <h3>Key Applications of AI in Security</h3>
      <ul>
        <li>Threat Detection and Response</li>
        <li>Behavioral Analysis</li>
        <li>Automated Security Operations</li>
        <li>Predictive Analytics</li>
      </ul>

      <h3>Benefits of AI-Powered Security</h3>
      <ol>
        <li>Faster threat detection and response</li>
        <li>Reduced false positives</li>
        <li>Improved accuracy in threat identification</li>
        <li>Enhanced automation of security tasks</li>
      </ol>

      <h3>Challenges and Considerations</h3>
      <p>While AI offers significant advantages, organizations must consider:</p>
      <ul>
        <li>Data quality and training requirements</li>
        <li>Integration with existing security tools</li>
        <li>Skills and expertise needed</li>
        <li>Ethical considerations</li>
      </ul>

      <h3>Future Trends</h3>
      <p>The future of AI in cybersecurity looks promising with emerging trends such as:</p>
      <ul>
        <li>Advanced threat hunting</li>
        <li>Autonomous security systems</li>
        <li>AI-powered encryption</li>
        <li>Intelligent authentication methods</li>
      </ul>
    `,
    author: 'Michael Chen',
    date: new Date('2024-02-25'),
    tags: ['AI', 'Machine Learning', 'Threat Detection'],
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Ransomware Prevention Strategies',
    slug: 'ransomware-prevention-strategies',
    excerpt: 'Comprehensive guide to protecting your organization from ransomware attacks.',
    content: `
      <h2>Protecting Against Ransomware</h2>
      <p>Ransomware attacks continue to evolve and pose significant threats to organizations of all sizes.</p>

      <h3>Prevention Strategies</h3>
      <ul>
        <li>Regular backup and recovery testing</li>
        <li>Employee security awareness training</li>
        <li>Email filtering and web protection</li>
        <li>System patching and updates</li>
      </ul>

      <h3>Incident Response Plan</h3>
      <p>Having a well-defined incident response plan is crucial:</p>
      <ol>
        <li>Immediate containment steps</li>
        <li>Communication protocols</li>
        <li>Recovery procedures</li>
        <li>Post-incident analysis</li>
      </ol>

      <h3>Technical Controls</h3>
      <ul>
        <li>Network segmentation</li>
        <li>Access control</li>
        <li>Endpoint protection</li>
        <li>Monitoring and alerting</li>
      </ul>
    `,
    author: 'Alex Thompson',
    date: new Date('2024-02-20'),
    tags: ['Ransomware', 'Incident Response', 'Security Training'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80'
  }
];

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return MOCK_POSTS;
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const post = MOCK_POSTS.find(p => p.slug === slug);
  return post || null;
};

export const searchPosts = (posts: BlogPost[], query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterPostsByTag = (posts: BlogPost[], tag: string | null): BlogPost[] => {
  if (!tag) return posts;
  return posts.filter(post => post.tags.includes(tag));
};