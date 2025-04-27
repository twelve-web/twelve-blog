'use client'

import { useState } from 'react'

export default function CSSFeatures1Page() {
  const [lineClamp, setLineClamp] = useState('2')
  const [columnCount, setColumnCount] = useState('3')
  const [strokeWidth, setStrokeWidth] = useState('1')
  
  const codeBlockStyle = "bg-gray-800 dark:bg-black p-4 rounded text-gray-100 dark:text-gray-100"

  return (
    <div className="prose dark:prose-invert w-full">
      <h1>CSS 特性示例（一）</h1>

      {/* -webkit-text-stroke */}
      <section className="mb-12">
        <h2>-webkit-text-stroke（文字描边）</h2>
        <p>为文字添加描边效果。</p>
        <div className="mb-4">
          <label className="block mb-2">
            调整描边宽度：
            <input
              type="range"
              min="1"
              max="4"
              value={parseInt(strokeWidth)}
              onChange={(e) => setStrokeWidth(e.target.value)}
              className="ml-2"
            />
          </label>
          <div 
            className="text-4xl font-bold"
            style={{ 
              WebkitTextStroke: `${strokeWidth}px #3b82f6`,
              color: 'transparent'
            }}
          >
            描边文字效果
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.outlined-text {
  -webkit-text-stroke: ${strokeWidth}px #3b82f6;
  color: transparent;
}`}
        </pre>
      </section>


      {/* position: sticky */}
      <section className="mb-12">
        <h2>position: sticky（粘性定位）</h2>
        <p>元素在滚动时保持固定位置。</p>
        <div className="mb-4 h-40 overflow-auto border rounded">
          <div className="p-4">
            <div className="sticky top-0 bg-blue-500 text-white p-2 mb-2">
              我是粘性标题
            </div>
            {Array(10).fill(null).map((_, i) => (
              <p key={i} className="mb-4">这是第 {i + 1} 段文本内容</p>
            ))}
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.sticky-header {
  position: sticky;
  top: 0;
}`}
        </pre>
      </section>

      {/* place-items */}
      <section className="mb-12">
        <h2>place-items（对齐方式）</h2>
        <p>同时设置 align-items 和 justify-items。</p>
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div className="bg-gray-800 h-32 grid place-items-center rounded">
            <div className="bg-blue-500 w-16 h-16 rounded flex items-center justify-center text-white">
              居中
            </div>
          </div>
          <div className="bg-gray-800 h-32 grid place-items-start rounded">
            <div className="bg-blue-500 w-16 h-16 rounded flex items-center justify-center text-white">
              起始
            </div>
          </div>
          <div className="bg-gray-800 h-32 grid place-items-end rounded">
            <div className="bg-blue-500 w-16 h-16 rounded flex items-center justify-center text-white">
              末端
            </div>
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.center {
  place-items: center;
}
.start {
  place-items: start;
}
.end {
  place-items: end;
}`}
        </pre>
      </section>

      {/* @media (hover: hover) 和 (pointer: fine) */}
      <section className="mb-12">
        <h2>@media (hover: hover) 和 (pointer: fine)</h2>
        <p>检测设备是否支持悬停和精确指针（如鼠标）。</p>
        <div className="mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            悬停在我上面
          </button>
        </div>
        <pre className={codeBlockStyle}>
          {`@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: #2563eb;
  }
}

/* 触摸设备使用 active 状态 */
@media (hover: none) or (pointer: coarse) {
  .button:active {
    background-color: #2563eb;
  }
}`}
        </pre>
      </section>

      {/* column-count */}
      <section className="mb-12">
        <h2>column-count（分栏布局）</h2>
        <p>将内容分成多列显示。</p>
        <div className="mb-4">
          <label className="block mb-2">
            调整列数：
            <input
              type="range"
              min="1"
              max="4"
              value={parseInt(columnCount)}
              onChange={(e) => setColumnCount(e.target.value)}
              className="ml-2"
            />
          </label>
          <div
            style={{
              columnCount: parseInt(columnCount),
              columnGap: '2rem',
            }}
            className="p-4 bg-gray-800 rounded text-gray-100"
          >
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
            这是一段长文本，用来演示分栏布局效果。
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.columns {
  column-count: ${columnCount};
  column-gap: 2rem;
}`}
        </pre>
      </section>

      {/* :empty 选择器 */}
      <section className="mb-12">
        <h2>:empty 选择器</h2>
        <p>选择没有子元素的元素。</p>
        <div className="mb-4 space-y-2">
          <div className="border-2 border-dashed p-4">有内容的div</div>
          <div className="border-2 border-dashed p-4"></div>
          <style jsx>{`
            div:empty {
              background: #f0f0f0;
              border-color: #ff4444;
              min-height: 50px;
            }
          `}</style>
        </div>
        <pre className={codeBlockStyle}>
          {`div:empty {
  background: #f0f0f0;
  border-color: #ff4444;
  min-height: 50px;
}`}
        </pre>
      </section>

      {/* :invalid 伪类 */}
      <section className="mb-12">
        <h2>:invalid 伪类</h2>
        <p>选择验证失败的表单元素。</p>
        <div className="mb-4">
          <input
            type="email"
            placeholder="请输入邮箱地址"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500 invalid:ring-red-500"
          />
        </div>
        <pre className={codeBlockStyle}>
          {`input:invalid {
  border-color: #ef4444;
  ring-color: #ef4444;
}`}
        </pre>
      </section>
    </div>
  )
} 