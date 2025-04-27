import Link from 'next/link'
import { examples } from './index'

export default function ExamplesPage() {


  return (
    <div className="py-6 prose dark:prose-invert">
      <h1>示例项目</h1>
      <p className="text-xl text-slate-700 dark:text-slate-200">
        这里展示了一些示例项目，你可以点击查看详情
      </p>
      
      <div className="grid gap-6 mt-8">
        {examples.map((example) => (
          <div key={example.link} className="p-6 border rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="mt-0 mb-2">
              <Link href={example.link} className="no-underline hover:text-blue-500">
                {example.title}
              </Link>
            </h2>
            <p className="m-0 text-slate-600 dark:text-slate-300">
              {example.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
