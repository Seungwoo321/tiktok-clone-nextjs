"use client"

import React from "react"
import MainLayout from "./layouts/MainLayout"
import ClinetOnly from "./components/ClinetOnly"
import PostMain from "./components/PostMain"

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClinetOnly>
            <PostMain post={{
              id: '123',
              user_id: '456',
              video_url: '/167569-837244635_small.mp4',
              text: 'this is some text',
              created_at: 'date here',
              profile: {
                user_id: '456',
                name: 'User 1',
                image: 'https://placehold.co/100'
              }
            }}/>
          </ClinetOnly>
        </div>
      </MainLayout>
    </>
  )
}
