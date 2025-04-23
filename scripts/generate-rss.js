const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const siteMetadata = require('../data/siteMetadata')

const BLOG_DIR = path.join(process.cwd(), 'data/blog')
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'feed.xml')
const MAX_POSTS = 20

function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

  return files.map((fileName) => {
    const filePath = path.join(BLOG_DIR, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      ...data,
      slug: fileName.replace(/\.mdx?$/, ''),
    }
  }).filter(post => post.draft !== true && post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, MAX_POSTS)
}

function buildRssItem(post) {
  const link = `${siteMetadata.siteUrl}/blog/${post.slug}`
  const categories = (post.tags || []).map(tag => `<category>${tag}</category>`).join('')

  return `
    <item>
      <title>${post.title}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${post.summary || ''}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteMetadata.email} (${siteMetadata.author})</author>
      ${categories}
    </item>
  `
}

function generateRss() {
  const posts = getAllPosts()

  const itemsXml = posts.map(buildRssItem).join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${siteMetadata.title}</title>
    <link>${siteMetadata.siteUrl}/blog</link>
    <description>${siteMetadata.description}</description>
    <language>${siteMetadata.language || 'en-us'}</language>
    <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
    <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteMetadata.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`

  fs.writeFileSync(OUTPUT_PATH, rss)
  console.log('✅ RSS feed generated at', OUTPUT_PATH)
}

generateRss()
