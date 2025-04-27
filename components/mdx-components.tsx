import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx-content prose dark:prose-invert w-full max-w-full">
      <Component components={components} />
    </div>
  )
}
