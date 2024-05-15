import React from "react"
import { PostMainLikesComType } from "../types"

const PostMainLikes = ({ post }: PostMainLikesComType) => {
  return (
    <>
      <div id={`PostMainLikes-${post?.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2"></div>
      </div>
    </>
  )
}

export default PostMainLikes