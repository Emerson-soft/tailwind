'use client'

import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link,
  List,
  ListOrdered,
} from 'lucide-react'
import { Select } from './Form/Select/Index'
import { SelectItem } from './Form/Select/SelectItem'

export function TipTap() {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, StarterKit, Bold, Italic],
    content: `
        <p>This isn’t bold.</p>
        <p><strong>This is bold.</strong></p>
        <p><b>And this.</b></p>
        <p style="font-weight: bold">This as well.</p>
        <p style="font-weight: bolder">Oh, and this!</p>
        <p style="font-weight: 500">Cool, isn’t it!?</p>
        <p style="font-weight: 999">Up to font weight 999!!!</p>
      `,
  })

  if (!editor) {
    return null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Select placeholder="Select a timezone..." defaultValue="normal">
          <SelectItem value="normal" text="Normal Text" />
          <SelectItem value="md" text="Markdown" />
        </Select>

        <div className="flex items-center gap-1">
          <button
            data-active={editor.isActive('bold')}
            type="button"
            className="rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
          >
            <BoldIcon
              data-active={editor.isActive('bold')}
              onClick={() => editor.chain().focus().toggleBold().run()}
              className="h-4 w-4 text-zinc-500 data-[active='true']:text-white"
              strokeWidth={3}
            />
          </button>

          <button
            data-active={editor.isActive('italic')}
            type="button"
            className="rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
          >
            <ItalicIcon
              data-active={editor.isActive('italic')}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className="h-4 w-4 text-zinc-500 data-[active='true']:text-white"
              strokeWidth={3}
            />
          </button>

          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
            <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>

          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
            <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>

          <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
            <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>
        </div>
      </div>

      <EditorContent
        editor={editor}
        className="rounded-lg border border-zinc-300 p-4 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
      />
    </div>
  )
}
