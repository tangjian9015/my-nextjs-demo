// app/about/page.tsx
export default function About() {
  return (
    <div className="about-card">
      <h1>关于这个项目</h1>
      <p>这是一个使用 Next.js 构建的演示项目，展示了以下核心功能：</p>
      
      <h2>✨ 主要特性</h2>
      <ul>
        <li><strong>App Router</strong> - 使用 Next.js 14 的最新路由系统</li>
        <li><strong>API Routes</strong> - 内置的 API 路由功能，处理 GET 和 POST 请求</li>
        <li><strong>客户端组件</strong> - 使用 &apos;use client&apos; 指令实现交互功能</li>
        <li><strong>服务器组件</strong> - 默认使用服务器组件提升性能</li>
        <li><strong>TypeScript</strong> - 完整的类型支持</li>
        <li><strong>CSS 模块化</strong> - 全局样式与组件样式分离</li>
      </ul>

      <h2>📁 项目结构</h2>
      <pre className="code-block">
        {`my-nextjs-demo/
├── app/
│   ├── about/
│   │   └── page.tsx      # 关于页面
│   ├── api/
│   │   └── messages/
│   │       └── route.ts  # 留言板 API
│   ├── components/
│   │   └── MessageBoard.tsx  # 留言板组件
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首页
├── public/               # 静态资源
├── package.json
├── tsconfig.json
└── next.config.js`}
      </pre>

      <h2>🚀 技术栈</h2>
      <ul>
        <li>Next.js 14.2.5</li>
        <li>React 18.3.1</li>
        <li>TypeScript 5.5.4</li>
        <li>Node.js 18+ 环境</li>
      </ul>

      <h2>📝 功能说明</h2>
      <ul>
        <li><strong>留言板</strong> - 用户可以发布留言，所有留言会实时显示</li>
        <li><strong>API 接口</strong> - GET /api/messages 获取所有留言，POST /api/messages 添加新留言</li>
        <li><strong>响应式设计</strong> - 适配不同屏幕尺寸</li>
        <li><strong>错误处理</strong> - 完善的加载状态和错误提示</li>
      </ul>

      <h2>🔧 运行命令</h2>
      <pre className="code-block">
        {`# 安装依赖
npm install

# 开发模式运行
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start`}
      </pre>
    </div>
  )
}