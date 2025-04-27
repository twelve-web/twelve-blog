import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
export default function Home() {
  const sortedPosts = allPosts.sort((a, b) => {
    const dateA = new Date(a.date); // 将日期字符串转为 Date 对象
    const dateB = new Date(b.date); // 将日期字符串转为 Date 对象
    return dateB.getTime() - dateA.getTime(); // 使用时间戳进行比较
  });
  
  return (
    <div className="prose dark:prose-invert">
      {sortedPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug} className="no-underline">
            <h2 className="mt-8 mb-0">{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
