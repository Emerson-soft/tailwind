import * as Input from '@/components/Input'
import { Separator } from '@/components/Separator'
import { Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'

export function Details() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1  py-5">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="settings"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </div>
      <Separator />
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Emerson" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Mendonça" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>

          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="emerson_10_s@hotmail.com"
            />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="photoFile"
            className="text-sm font-medium text-zinc-700"
          >
            your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile
            </span>
          </label>

          <FileInput.Root className="flex items-start  gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <Input.Root>
            <Input.Control id="role" type="text" defaultValue="CTO" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>

          <Input.Root>
            <Input.Control id="role" type="text" defaultValue="CTO" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>

          <Input.Root>
            <Input.Control id="role" type="text" defaultValue="CTO" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short indroduction.
            </span>
          </label>

          <div></div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="projects"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}
