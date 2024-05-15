import { ChevronDown } from 'lucide-react'
import { ComponentProps, ElementType } from 'react'

export interface NavItemProps extends ComponentProps<'a'> {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon, ...rest }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50  data-[active=active]:text-violet-700"
      {...rest}
    >
      <Icon className="h-5 w-5" />
      <span className="group-hover:text-violet-500">{title}</span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
