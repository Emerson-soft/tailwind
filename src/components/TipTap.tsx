'use client'

import Bold from '@tiptap/extension-bold'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import Link from '@tiptap/extension-link'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link as LinkIcon,
  List,
  ListOrdered,
} from 'lucide-react'
import { Select } from './Form/Select/Index'
import { SelectItem } from './Form/Select/SelectItem'
import { useCallback } from 'react'

export function TipTap() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Bold,
      Italic,
      ListItem,
      OrderedList,
      BulletList,
      Link,
    ],
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

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url, target: '_blank' })
      .run()
  }, [editor])

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
            className="cursor-pointer rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
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
            className="cursor-pointer rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
          >
            <ItalicIcon
              data-active={editor.isActive('italic')}
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className="h-4 w-4 text-zinc-500 data-[active='true']:text-white"
              strokeWidth={3}
            />
          </button>

          <button
            data-active={editor.isActive('link')}
            type="button"
            className="cursor-pointer rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
          >
            <LinkIcon
              data-active={editor.isActive('link')}
              onClick={setLink}
              className="h-4 w-4 text-zinc-500 data-[active='true']:text-white"
              strokeWidth={3}
            />
          </button>

          <button
            data-active={editor.isActive('bulletList')}
            type="button"
            className="cursor-pointer rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
          >
            <List
              data-active={editor.isActive('bulletList')}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className="h-4 w-4 text-zinc-500 data-[active='true']:text-white"
              strokeWidth={3}
            />
          </button>

          <button
            data-active={editor.isActive('orderedList')}
            type="button"
            className="cursor-pointer rounded-md p-2 hover:bg-zinc-50 data-[active='true']:bg-violet-900"
          >
            <ListOrdered
              data-active={editor.isActive('orderedList')}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className="h-4 w-4 text-zinc-500 data-[active='true']:text-white"
              strokeWidth={3}
            />
          </button>
        </div>
      </div>

      <EditorContent
        editor={editor}
        className="prose rounded-lg border border-zinc-300 p-4 focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
      />
    </div>
  )
}
