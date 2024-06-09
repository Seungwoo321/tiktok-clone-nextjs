"use client"

import React, { useEffect } from "react"
import MainLayout from "./layouts/MainLayout"
import ClientOnly from "./components/ClientOnly"
import PostMain from "./components/PostMain"
import { usePostStore } from "./stores/post"

export default function Home() {
  const { allPosts, setAllPosts } = usePostStore()

  useEffect(() => {
    setAllPosts()
  }, [])
  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            {allPosts.map((post, index) => (
              <PostMain post={post} key={index} />
            ))}
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}
