import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'
interface SearchPageProps {
  searchParams: { q?: string }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const searchQuery = searchParams.q?.toLowerCase() || ''
  
  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery)
  )

  return (
    <div className="space-y-6 mt-10">
      <h1 className="text-2xl font-bold">搜索结果: {searchQuery}</h1>
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
                <Link href={post.slug}>{post.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
} 