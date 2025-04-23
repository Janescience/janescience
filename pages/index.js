import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import Image from '@/components/Image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import getLatestPost from '@/lib/getLatestPost'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 9

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const latestPost = getLatestPost()

  return { props: { posts,latestPost } }
}

export default function Home({ posts,latestPost }) {
  const image =
  latestPost.featureImage || siteMetadata.image

  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={latestPost.title} />
        <meta property="og:description" content={latestPost.summary || siteMetadata.description} />
        <meta property="og:image" content={`${siteMetadata.siteUrl}${image}`} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/${latestPost.slug}`} />
        <meta property="og:site_name" content={siteMetadata.title} />
      </Head>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, featureImage } = frontMatter
            return (
              <div
                key={slug}
                className="h-full overflow-hidden rounded-xl "
                >
                <div className="space-y-5">
                  <div className="space-y-6">
                    <Link href={`/blog/${slug}`} aria-label={`Link to ${title}`}>
                      <Image
                        alt={title}
                        src={featureImage}
                        className="object-cover object-center md:h-36 lg:h-48 shadow-2xl"
                        width={544}
                        height={306}
                      />
                    </Link>
                    <h2 className="mb-2 text-2xl leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} aria-label={`Link to ${title}`}>
                        {title}
                      </Link>
                    </h2>
                    <div className="flex items-center justify-between">
                      <div>
                        {tags.map((tag) => (
                          <Tag key={tag} text={"#"+tag} />
                        ))}
                      </div>
                      
                      
                      <dd className="text-xs ml-1 font-thin text-gray-400 p-1 dark:text-gray-500 ">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </div>
                  </div>
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
            className="text-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
