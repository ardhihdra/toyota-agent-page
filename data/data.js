import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import banner2 from 'public/images/banner1.png'
import banner1 from 'public/images/banner2.png'
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'data/posts');

export async function getDetailPost(postId) {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id: postId,
      contentHtml,
      ...matterResult.data,
    };
  } catch(error) {
    return null
  }
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  const sortByYear = {}

  allPostsData.sort((a, b) => {
    if (new Date(a.publishedAt) < new Date(b.publishedAt)) {
      return 1;
    } else {
      return -1;
    }
  });

  function getYear(dateStr) {
    return dateStr.publishedAt.slice(0,4)
  }

  allPostsData.map(apd => {
    const year = getYear(apd)
    if (!sortByYear[year]) sortByYear[year] = []
    sortByYear[year].push(apd)
  })

  return sortByYear
}

const fetchDetailPost = async (id) => {
  const articles = await fetchPosts()
  return articles.filter((a) => a.id === Number(id))[0] || {}
  // return dummyData.filter(a => a.id === Number(id))[0] || {}
}

const fetchPosts = async () => {
  // const res = await request({
  //   url: '/articles',
  //   method: 'GET',
  //   params: { populate: '*' }
  // }).catch((err) => console.error(err))
  // const datas = res?.data
  // const articles = datas.map((dt) => {
  //   const attr = dt.attributes
  //   const img = attr.image?.data
  //   return {
  //     id: dt.id,
  //     title: attr.title,
  //     image: img?.attributes?.url,
  //     caption: attr.caption,
  //     date: attr.created_at,
  //     location: attr.location,
  //     content: attr.content
  //   }
  // })
  // return articles
  return []
}

const fetchImages = async () => {
  const dummy = [
    {
      id: '1',
      title: '',
      img: banner1,
      caption: 'caption',
      date: new Date(),
      location: 'location'
    },
    {
      id: '2',
      title: '',
      img: banner2,
      caption: 'caption',
      date: new Date(),
      location: 'location'
    }
  ]
  const images = []

  // const resources = await getAllImagesResource()
  // for (const resource of resources) {
  //   images.push({
  //     id: resource,
  //     title: resource,
  //     caption: '',
  //     location: '',
  //     img: resource
  //   })
  // }

  return images
  // const res = await request({
  //   url: '/pictures',
  //   method: 'GET',
  //   params: { populate: '*' }
  // }).catch((err) => console.error(err))
  // const datas = res.data
  // const imagesPost: Picture[] = datas.map((dt: STRAPI_DATA) => {
  //   const attr = dt.attributes
  //   const img = attr.image?.data
  //   return {
  //     id: dt.id,
  //     title: '',
  //     img: img?.attributes?.url,
  //     caption: attr.caption,
  //     date: attr.created_at,
  //     location: attr.location
  //   }
  // })
  // return imagesPost
}

const fetchDetailImage = async (idx) => {
  const pictures = await fetchImages()
  return pictures[idx] || {}
}

export { fetchPosts, fetchDetailPost, fetchImages, fetchDetailImage }
