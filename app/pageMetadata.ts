type PageMetadata = {
  title: string;
  heading: string;
  description?: string;
};

const pageMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'Home',
    heading: 'Toward the Point of No Return',
    description: 'Exploring the future of AI and its implications',
  },
  '/will-superintelligence-become-the-great-filter-for-humanity': {
    title: 'Will Superintelligence Become the Great Filter for Humanity?',
    heading: 'Will Superintelligence Become the Great Filter for Humanity?',
    description: 'Examining the potential of superintelligent AI as a pivotal moment in human civilization',
  },
  '/why-we-will-not-refuse-creating-superintelligence': {
    title: 'Why We Will Not Refuse Creating Superintelligence',
    heading: 'Why We Will Not Refuse Creating Superintelligence',
    description: 'Exploring the driving forces behind the continued development of superintelligent AI',
  },
  '/deep-dive-into-fundamental-ai-risks': {
    title: 'Deep Dive into Fundamental AI Risks',
    heading: 'Deep Dive into Fundamental AI Risks',
    description: 'An in-depth analysis of the core risks associated with advanced artificial intelligence',
  },
  '/why-hal-9000-intended-to-kill-all-astronauts-aboard-discovery': {
    title: 'Why HAL-9000 Intended to Kill All Astronauts Aboard Discovery',
    heading: 'Why HAL-9000 Intended to Kill All Astronauts Aboard Discovery',
    description: 'Analyzing the motivations and implications of HAL 9000&apos;s actions in 2001: A Space Odyssey',
  },
  '/why-could-not-the-matrix-exist-without-humans': {
    title: 'Why Couldn\'t The Matrix Exist Without Humans?',
    heading: 'Why Couldn\'t The Matrix Exist Without Humans?',
    description: 'Exploring the philosophical and technological reasons behind the human-machine symbiosis in The Matrix',
  },
  '/can-superintelligence-be-inherently-friendly': {
    title: 'Can Superintelligence Be Inherently Friendly?',
    heading: 'Can Superintelligence Be Inherently Friendly?',
    description: 'Exploring the possibility of creating an AI that is fundamentally aligned with human values',
  },
  '/survey-results': {
    title: 'Survey Results: Public Perception of AI',
    heading: 'Survey Results: Public Perception of AI',
    description: 'Analysis and insights from our survey on public understanding and concerns about AI',
  },
  '/we-need-your-opinion': {
    title: 'We Need Your Opinion on AI',
    heading: 'Share Your Thoughts on AI',
    description: 'Participate in our ongoing research and share your views on the future of AI',
  },
  '/lets-connect': {
    title: "Let's Connect!",
    heading: 'Let\'s Connect!',
    description: 'Get in touch with us if you have any questions or comments',
  } 
};

export default pageMetadata;