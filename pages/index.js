import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, featureImage } = frontMatter
            return (
              <div key={slug} className="h-full overflow-hidden rounded-md  bg-gray-800">
                <div className="space-y-5">
                  <div className="space-y-6">
                    <Link href={`/blog/${slug}`} aria-label={`Link to ${title}`}>
                      <Image
                        alt={title}
                        src={featureImage}
                        className="object-cover object-center md:h-36 lg:h-48"
                        width={544}
                        height={306}
                      />
                    </Link>
                    <h2 className="mb-3 px-4 text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} aria-label={`Link to ${title}`}>
                        {title}
                      </Link>
                    </h2>
                    <div className="flex items-center  justify-between px-4 pb-4">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                      <dd className="text-xs text-gray-500 dark:text-gray-300">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </div>
                  </div>
                  {/* <div className="inset-x-0 bottom-0 px-4 pb-4 text-base font-medium leading-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Link to ${title}`}
                    >
                      Read more &rarr;
                    </Link>
                  </div> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
