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
    githubUrl: 'https://gitlab.com/FanaticExplorer/nti-backend',
    isFeatured: true,
  },
  {
    id: 'askd',
    category: 'desktop',
    techs: ['Go', 'Wails', 'WebView2', 'MCP', 'HTML/CSS/JS'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/askd',
    isFeatured: true,
  },
  {
    id: 'super-role-manager',
    category: 'bots',
    techs: ['Python', 'Pycord', 'PyYAML', 'Loguru'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/SuperRoleManager',
    isFeatured: true,
  },
  {
    id: 'accessflow',
    category: 'bots',
    techs: ['Python', 'Pycord', 'SQLite', 'Pydantic', 'Docker'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/accessflow',
    isFeatured: false,
  },
  {
    id: 'discord-webhook-mcp',
    category: 'bots',
    techs: ['Python', 'FastMCP', 'Discord API'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/discord-webhook-mcp',
    isFeatured: false,
  },
  {
    id: 'keyaura-cli',
    category: 'desktop',
    techs: ['Go', 'Windows', 'RGB', 'CLI'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/keyaura-cli',
    isFeatured: false,
  },
  {
    id: 'win-orchestra',
    category: 'desktop',
    techs: ['Go', 'Cobra', 'Win32 API'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/WinOrchestra',
    isFeatured: false,
  },
  {
    id: 'homelab',
    category: 'other',
    techs: ['Docker', 'Caddy', 'Tailscale', 'Linux', 'fail2ban', 'OpenObserve', 'Portainer'],
    isFeatured: false,
  },
  {
    id: 'curtains',
    category: 'desktop',
    techs: ['Go', 'BubbleTea', 'TUI', 'Windows'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/curtains',
    isFeatured: false,
  },
  // {
  //   id: 'recording-converter',
  //   category: 'other',
  //   techs: ['Python', 'FFmpeg', 'OBS Studio'],
  //   isFeatured: false,
  // },
  {
    id: 'lifehack-hub',
    category: 'web',
    techs: ['Vue', 'Vuetify 3', 'Vite', 'Node.js'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/LifehackHub',
    isFeatured: false,
  },
  {
    id: 'portfolio',
    category: 'web',
    techs: ['React', 'TypeScript', 'Tailwind', 'GitHub Actions', 'Caddy'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/my-portfolio',
    isFeatured: false,
  },
  {
    id: 'uni-nfl-fantasy-dwh',
    category: 'data',
    techs: ['SQL', 'Snowflake'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/uni-nfl-fantasy-dwh',
    isFeatured: false,
  },
  {
    id: 'sayclip-legacy',
    category: 'desktop',
    techs: ['Python', 'JS', 'HTML', 'OpenAI API', 'Whisper', 'WebView'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/SayClip',
    isFeatured: false,
  },
  {
    id: 'genius-cleaner',
    category: 'web',
    techs: ['JavaScript', 'HTML'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/GeniusCleaner',
    isFeatured: false,
  },
  {
    id: 'pear-cleaner',
    category: 'web',
    techs: ['HTML', 'CSS', 'JavaScript', 'Youtube Music'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/PearCleaner',
    isFeatured: false,
  },
  {
    id: 'emojies-parser',
    category: 'bots',
    techs: ['Python', 'CLI'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/EmojiesParser',
    isFeatured: false,
  },
  {
    id: 'myinstantsapi-py',
    category: 'bots',
    techs: ['Python', 'FastAPI'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/MyinstantsAPI-py',
    isFeatured: false,
  },
  {
    id: 'window-manager',
    category: 'desktop',
    techs: ['Python', 'Windows'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/WindowManager',
    isFeatured: false,
  },
  {
    id: 'hyper-emotelab',
    category: 'desktop',
    techs: ['C#', 'Unity', 'ffmpeg', 'PowerShell', 'Windows'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/hyper-emotelab',
    isFeatured: false,
  },
  {
    id: 'sp-count-tray',
    category: 'desktop',
    techs: ['Go', 'systray', 'Windows', 'REST API'],
    githubUrl: 'https://gitlab.com/FanaticExplorer/sp-count-tray',
    isFeatured: false,
  },
]
