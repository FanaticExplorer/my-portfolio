export type ProjectCategory = 'bots' | 'desktop' | 'web' | 'data' | 'other'

export interface Project {
  id: string
  category: ProjectCategory
  techs: string[]
  githubUrl?: string
  isFeatured: boolean
}

export const projects: Project[] = [
  {
    id: 'nti',
    category: 'web',
    techs: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'Vue'],
    githubUrl: 'https://github.com/FanaticExplorer/nti-backend',
    isFeatured: true,
  },
  {
    id: 'askd',
    category: 'desktop',
    techs: ['Go', 'Wails', 'WebView2', 'MCP', 'HTML/CSS/JS'],
    githubUrl: 'https://github.com/FanaticExplorer/askd',
    isFeatured: true,
  },
  {
    id: 'super-role-manager',
    category: 'bots',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru'],
    githubUrl: 'https://github.com/FanaticExplorer/SuperRoleManager',
    isFeatured: true,
  },
  {
    id: 'discord-webhook-mcp',
    category: 'bots',
    techs: ['Python', 'FastMCP', 'Discord API'],
    githubUrl: 'https://github.com/FanaticExplorer/discord-webhook-mcp',
    isFeatured: false,
  },
  {
    id: 'win-orchestra',
    category: 'desktop',
    techs: ['Go', 'Cobra', 'Win32 API'],
    githubUrl: 'https://github.com/FanaticExplorer/WinOrchestra',
    isFeatured: false,
  },
  {
    id: 'homelab',
    category: 'other',
    techs: ['Docker', 'Caddy', 'Tailscale', 'Linux', 'fail2ban'],
    isFeatured: false,
  },
  {
    id: 'curtains',
    category: 'desktop',
    techs: ['Go', 'BubbleTea', 'TUI', 'Windows'],
    githubUrl: 'https://github.com/FanaticExplorer/curtains',
    isFeatured: false,
  },
  {
    id: 'recording-converter',
    category: 'other',
    techs: ['Python', 'FFmpeg', 'OBS Studio'],
    githubUrl: 'https://github.com/FanaticExplorer/RecordingConverter',
    isFeatured: false,
  },
  {
    id: 'lifehack-hub',
    category: 'web',
    techs: ['Vue', 'Vuetify 3', 'Vite', 'Node.js'],
    githubUrl: 'https://github.com/FanaticExplorer/LifehackHub',
    isFeatured: false,
  },
  {
    id: 'portfolio',
    category: 'web',
    techs: ['React', 'TypeScript', 'Tailwind', 'GitHub Actions', 'Caddy'],
    githubUrl: 'https://github.com/FanaticExplorer/my-portfolio',
    isFeatured: false,
  },
  {
    id: 'uni-nfl-fantasy-dwh',
    category: 'data',
    techs: ['SQL', 'Snowflake'],
    githubUrl: 'https://github.com/FanaticExplorer/uni-nfl-fantasy-dwh',
    isFeatured: false,
  },
  {
    id: 'sayclip-legacy',
    category: 'desktop',
    techs: ['Python', 'JS', 'HTML', 'OpenAI API', 'Whisper', 'WebView'],
    githubUrl: 'https://github.com/FanaticExplorer/SayClip-legacy',
    isFeatured: false,
  },
  {
    id: 'genius-cleaner',
    category: 'web',
    techs: ['JavaScript', 'HTML'],
    githubUrl: 'https://github.com/FanaticExplorer/GeniusCleaner',
    isFeatured: false,
  },
  {
    id: 'pear-cleaner',
    category: 'web',
    techs: ['HTML', 'CSS', 'JavaScript', 'Youtube Music'],
    githubUrl: 'https://github.com/FanaticExplorer/PearCleaner',
    isFeatured: false,
  },
  {
    id: 'emojies-parser',
    category: 'bots',
    techs: ['Python', 'CLI'],
    githubUrl: 'https://github.com/FanaticExplorer/EmojiesParser',
    isFeatured: false,
  },
  {
    id: 'myinstantsapi-py',
    category: 'bots',
    techs: ['Python', 'FastAPI'],
    githubUrl: 'https://github.com/FanaticExplorer/MyinstantsAPI-py',
    isFeatured: false,
  },
  {
    id: 'window-manager',
    category: 'desktop',
    techs: ['Python', 'Windows'],
    githubUrl: 'https://github.com/FanaticExplorer/WindowManager',
    isFeatured: false,
  },
  {
    id: 'lrc-discord-sync',
    category: 'other',
    techs: ['Python', 'Discord', 'LRC'],
    githubUrl: 'https://github.com/FanaticExplorer/LRCDiscordSync',
    isFeatured: false,
  },
  {
    id: 'easymsgbox',
    category: 'other',
    techs: ['Python', 'PyPI'],
    githubUrl: 'https://github.com/FanaticExplorer/easymsgbox',
    isFeatured: false,
  },
]
