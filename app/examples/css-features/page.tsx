"use client";

import { useState } from "react";

export default function CSSFeaturesPage() {
  const [aspectRatio, setAspectRatio] = useState("16/9");
  const [gap, setGap] = useState("1rem");
  const [underlineOffset, setUnderlineOffset] = useState("4px");
  const [lineClamp, setLineClamp] = useState("2");

  const codeBlockStyle = "bg-gray-800 dark:bg-black p-4 rounded text-gray-100 dark:text-gray-100";

  return (
    <div className="prose dark:prose-invert w-full">
      <h1>CSS 特性示例</h1>

      {/* aspect-ratio */}
      <section className="mb-12">
        <h2>aspect-ratio（宽高比）</h2>
        <p>控制元素的宽高比，常用于响应式图片和视频。</p>
        <div className="mb-4">
          <label className="block mb-2">
            调整宽高比：
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              className="ml-2 p-1 border rounded dark:bg-slate-800"
            >
              <option value="16/9">16:9</option>
              <option value="4/3">4:3</option>
              <option value="1/1">1:1</option>
              <option value="9/16">9:16</option>
            </select>
          </label>
          <div className="bg-blue-500 w-full" style={{ aspectRatio }} />
        </div>
        <pre className={codeBlockStyle}>
          {`div {
  aspect-ratio: ${aspectRatio};
}`}
        </pre>
      </section>

      {/* gap */}
      <section className="mb-12">
        <h2>gap（间距）</h2>
        <p>设置网格或弹性布局中元素之间的间距。</p>
        <div className="mb-4">
          <label className="block mb-2">
            调整间距：
            <input
              type="range"
              min="0"
              max="40"
              value={parseInt(gap)}
              onChange={(e) => setGap(`${e.target.value}px`)}
              className="ml-2"
            />
          </label>
          <div
            className="grid grid-cols-3 bg-gray-800 dark:bg-black p-4 rounded"
            style={{ gap }}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-blue-500 h-20 rounded flex items-center justify-center text-white"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`div {
  gap: ${gap};
}`}
        </pre>
      </section>

      {/* counter-reset 和 counter-increment */}
      <section className="mb-12">
        <h2>counter-reset 和 counter-increment（计数器）</h2>
        <p>创建自定义编号和计数。</p>
        <div className="mb-4">
          <style jsx>{`
            .counter-demo {
              counter-reset: section;
            }
            .counter-item::before {
              counter-increment: section;
              content: "Section " counter(section) ": ";
            }
          `}</style>
          <div className="counter-demo">
            <div className="counter-item">介绍</div>
            <div className="counter-item">特性</div>
            <div className="counter-item">总结</div>
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.counter-demo {
  counter-reset: section;
}
.counter-item::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}`}
        </pre>
      </section>

      {/* @supports */}
      <section className="mb-12">
        <h2>@supports（特性检测）</h2>
        <p>检测浏览器是否支持某个 CSS 特性。</p>
        <pre className={codeBlockStyle}>
          {`@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}`}
        </pre>
      </section>

      {/* currentColor */}
      <section className="mb-12">
        <h2>currentColor（当前颜色）</h2>
        <p>使用当前元素的文本颜色。</p>
        <div className="mb-4 text-blue-500">
          <div
            style={{
              border: "2px solid currentColor",
              padding: "1rem",
            }}
          >
            边框颜色继承自文本颜色
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.element {
  color: blue;
  border: 2px solid currentColor;
}`}
        </pre>
      </section>

      {/* scroll-behavior */}
      <section className="mb-12">
        <h2>scroll-behavior（滚动行为）</h2>
        <p>定义滚动行为是平滑还是即时。</p>
        <pre className={codeBlockStyle}>
          {`html {
  scroll-behavior: smooth;
}`}
        </pre>
      </section>

      {/* ::backdrop */}
      <section className="mb-12">
        <h2>::backdrop 伪元素</h2>
        <p>为对话框等全屏元素提供背景遮罩。</p>
        <pre className={codeBlockStyle}>
          {`dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}`}
        </pre>
      </section>


      {/* text-underline-offset */}
      <section className="mb-12">
        <h2>text-underline-offset（下划线偏移）</h2>
        <p>控制文本下划线的位置。</p>
        <div className="mb-4">
          <label className="block mb-2">
            调整下划线偏移：
            <input
              type="range"
              min="0"
              max="20"
              value={parseInt(underlineOffset)}
              onChange={(e) => setUnderlineOffset(`${e.target.value}px`)}
              className="ml-2"
            />
          </label>
          <a
            href="#"
            className="text-blue-500 underline"
            style={{ textUnderlineOffset: underlineOffset }}
            onClick={(e) => e.preventDefault()}
          >
            示例文本
          </a>
        </div>
        <pre className={codeBlockStyle}>
          {`a {
  text-underline-offset: ${underlineOffset};
}`}
        </pre>
      </section>

      {/* line-clamp */}
      <section className="mb-12">
        <h2>line-clamp（多行文本截断）</h2>
        <p>限制文本显示的行数。</p>
        <div className="mb-4">
          <label className="block mb-2">
            调整行数：
            <input
              type="range"
              min="1"
              max="5"
              value={parseInt(lineClamp)}
              onChange={(e) => setLineClamp(e.target.value)}
              className="ml-2"
            />
          </label>
          <div
            style={{
              display: "-webkit-box",
              WebkitLineClamp: lineClamp,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="bg-gray-800 dark:bg-black p-4 rounded text-gray-100"
          >
            这是一段很长的文本，用来演示 line-clamp 属性的效果。
            这是一段很长的文本，用来演示 line-clamp 属性的效果。
            这是一段很长的文本，用来演示 line-clamp 属性的效果。
            这是一段很长的文本，用来演示 line-clamp 属性的效果。
            这是一段很长的文本，用来演示 line-clamp 属性的效果。
          </div>
        </div>
        <pre className={codeBlockStyle}>
          {`.element {
  display: -webkit-box;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}
        </pre>
      </section>
    </div>
  );
}
