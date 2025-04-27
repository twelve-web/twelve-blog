import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">页面未找到</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        抱歉，您访问的页面不存在。
      </p>
      <Link 
        href="/" 
        className="text-blue-500 hover:text-blue-600 transition-colors"
        replace // 使用 replace 而不是 push，这样可以替换当前的路由历史
      >
        返回首页
      </Link>
    </div>
  )
} 