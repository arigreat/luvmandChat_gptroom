const apiOptions  = [
    {
    value:null,
    label:'默认'
  },
    {
    value: 'https://api.deepseek.com/v1',
    label: 'DeepSeek',
    children: [
      { value: 'deepseek-chat', label: 'DeepSeek Chat' },
      { value: 'deepseek-reasoner', label: 'DeepSeek Reasoner' },
      { value: 'deepseek-coder', label: 'DeepSeek Coder' }
    ]
  },
    {
    value: 'https://api.openai.com/v1',
    label: 'Open AI',
    children: [
      { value: 'gpt-4o', label: 'GPT-4o' },
      { value: 'gpt-4-turbo', label: 'GPT-4 Turbo' },
      { value: 'gpt-4', label: 'GPT-4' },
      { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
      { value: 'gpt-3.5-turbo-16k', label: 'GPT-3.5 Turbo (16K上下文)' },
      { value: 'text-embedding-ada-002', label: 'Embedding Ada v2' },
      { value: 'dall-e-3', label: 'DALL·E 3 (图像生成)' }
    ]
  },
    {
    value: 'https://ark.cn - beijing.volces.com/api/v3/',
    label: '豆包',
    children: [
      { value: 'doubao-seed-1.6', label: 'doubao-seed-1.6' },
      { value: 'doubao-seed-1.6-flash', label: 'doubao-seed-1.6-flash' },
      { value: 'doubao-seed-1.6-thinking', label: 'doubao-seed-1.6-thinking' }
    ]
  },

  {
    value: 'https://api.anthropic.com/v1',
    label: 'Claude',
    children: [
      { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus' },
      { value: 'claude-3-sonnet-20240229', label: 'Claude 3 Sonnet' },
      { value: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku' }
    ]
  },
  {
    value: 'https://generativelanguage.googleapis.com/v1',
    label: 'Gemini',
    children: [
      { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro' },
      { value: 'gemini-1.0-pro', label: 'Gemini 1.0 Pro' },
      { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash' }
    ]
  },
  {
    value: 'https://api.moonshot.cn/v1',
    label: 'Moonshot AI',
    children: [
      { value: 'moonshot-v1-8k', label: 'Moonshot v1 (8K)' },
      { value: 'moonshot-v1-32k', label: 'Moonshot v1 (32K)' },
      { value: 'moonshot-v1-128k', label: 'Moonshot v1 (128K)' }
    ]
  },
  {
    value: 'https://open.bigmodel.cn/api/paas/v4',
    label: '智谱AI',
    children: [
      { value: 'glm-4', label: 'ChatGLM4 (最新版)' },
      { value: 'glm-3-turbo', label: 'ChatGLM3 Turbo' }
    ]
  },
]

export default apiOptions;