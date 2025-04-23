const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const BLOG_DIR = path.join(process.cwd(), 'data/blog')

function getLatestPost() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

  const posts = files.map((fileName) => {
    const filePath = path.join(BLOG_DIR, fileName)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)

    return {
      ...data,
      slug: fileName.replace(/\.mdx?$/, ''),
    }
  })

  return posts
    .filter((post) => post.draft !== true && post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0]
}

module.exports = getLatestPost
