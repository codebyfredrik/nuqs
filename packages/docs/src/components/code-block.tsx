import {
  CodeBlock as FumaDocsCodeBlock,
  Pre
} from 'fumadocs-ui/components/codeblock'
import type { CodeBlockProps } from './code-block-defs'
import { highlight } from './code-block-highlighter'

export async function CodeBlock({
  code,
  lang = 'tsx',
  compact = false,
  ...props
}: CodeBlockProps) {
  const demoCode = await highlight(code, lang)
  return (
    <FumaDocsCodeBlock
      // @ts-expect-error
      custom={compact ? 'compact' : undefined}
      {...props}
    >
      <Pre dangerouslySetInnerHTML={{ __html: demoCode }} />
    </FumaDocsCodeBlock>
  )
}
