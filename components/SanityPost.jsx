// 'use client'

// import { useEffect, useState } from "react"
import sanityClient, { urlForSanityImage } from "@/data/sanity"
import { PortableText } from '@portabletext/react'
import DateDisplay from "@/components/DateDisplay"

import Image from "next/image"
import { getSanityPostsData } from "@/data/api"

const ptComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-5xl my-5">{children}</h1>,
    h2: ({children}) => <h1 className="text-4xl my-4">{children}</h1>,
    h3: ({children}) => <h1 className="text-3xl my-3">{children}</h1>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },

  listItem: {
    bullet: ({children}) => <li className="list-disc ml-4">{children}</li>,
    number: ({children}) => <li className="list-decimal ml-4">{children}</li>,
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="flex justify-center items-center my-8">
          <Image
            alt={value.alt || ' '}
            loading="lazy"
            src={urlForSanityImage(value).width(320).height(240).fit('max').auto('format')}
            width={320}
            height={240}
          />
        </div>
      )
    },
    callToAction: ({value, isInline}) => (
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      )
    ),
    
  },

  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-blue-400">
          {children}
        </a>
      )
    },
    // strong: ({children, value}) => {
    //   return <span className="font-bold">{children}</span>
    // }
  },
}

export default async function SanityPost({ slug }) {
  const post = await getSanityPostsData(slug)

  return (
    <div className="container flex my-2 mx-auto md:py-16 md:px-24 gap-20">
      <div className="flex-auto w-80">
        <div className="mb-14 text-xl font-bold text-blue-400">Info Promo Toyota</div>
        <div className="text-5xl font-bold">{post.title}</div>
        {
          post.mainImage &&
          <div className="my-8"> 
            <Image priority={false} src={urlForSanityImage(post.mainImage).width(600).height(320).url()} width="600" height="320" alt="main"/>
          </div>  
        }
        <DateDisplay>{new Date(post.publishedAt).toLocaleString()}</DateDisplay>
        <div className="my-4 text-lg text-justify">
          <PortableText
            value={post.body}
            components={ptComponents}
          />
        </div>
      </div>
      <div className="flex-auto w-24">
        <div className="mb-4">
          {
            (post?.categories ? post.categories: []).map((ct, idx) => {
              return (
                <div key={idx} className="text-2xl font-bold uppercase">{ct.title}</div>
              )
            })
          }
          <div className="font-bold text-gray-500">
            {post?.cars ? post.cars.length: 0} Tipe
          </div>
        </div>
        <div className="bg-black text-gray-400 text-sm p-8">
          <ul>
            <li className="flex gap-20 space-x-10 mb-2 pb-2 border-b border-gray-700">
              <div className="w-52">Tipe</div>
              <div>Harga</div>
            </li>
            {
              (post?.cars ? post?.cars: []).map(cr => {
                return (
                  <li key={cr._id} className="flex gap-20 space-x-10 mb-2 pb-2 border-b border-gray-700">
                    <div className="w-52">{cr.name}</div>
                    <div>Rp. {new Intl.NumberFormat('id').format(cr.price || 0)}</div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}