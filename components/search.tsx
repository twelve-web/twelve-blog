export function Search() {
  return (
    <form action="/search" method="GET" className="relative w-full max-w-xs">
      <input
        name="q"
        type="text" 
        placeholder="搜索文章..."
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950"
      />
    </form>
  )
}