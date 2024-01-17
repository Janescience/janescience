import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="dark:hover:text-lime-600 font-semibold mr-2  py-1 text-sm  dark:text-lime-400  text-red-400 no-underline hover:text-lime-600 ">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
