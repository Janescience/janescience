import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListNoteLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('note')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Note({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Notes - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Notes"
        subTitle="เป็นการจดบันทึกปัญหาต่างๆ เกี่ยวกับ Programming ที่ผมเจอและได้แก้ไขแล้ว จะเป็นบทความสั้นๆ"
      />
    </>
  )
}
