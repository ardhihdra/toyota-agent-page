import { getSitemapUrls } from "@/data/api";

const HOST = 'https://toyota-agent-page.vercel.app'

export async function GET() {
  const postUrls = await getSitemapUrls()

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
  
  <channel>
    <title>Promo Toyota Garut</title>
    <link>${HOST}</link>
    <description>Promo Toyota Garut</description>
  </channel>
  
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
    ${postUrls
      .map(({ url, changefreq, priority }) => {
        return `
      <url>
          <loc>${`${HOST}${url}`}</loc>
          ${
            changefreq ?
            `<changefreq>${changefreq}</changefreq>`
            : ''
          }
          <priority>${priority}</priority>
      </url>
        `;
      })
      .join('')}
   </urlset>

  </rss>`)
}