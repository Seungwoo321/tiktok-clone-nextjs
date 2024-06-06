import { database, storage } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"
import useGetLikesByPostId from "./useGetLikesByPostId"
import useDeleteLike from "./useDeleteLike"
import useGetCommentsByPostId from "./useGetCommentsByPostId"
import useDeleteComment from "./useDeleteComment"

const useDeletePostById = async (postId: string, currentImage: string) => {
  try {
    const likes = await useGetLikesByPostId(postId)
    likes.forEach(async like => { await useDeleteLike(like?.id) })

    const comments = await useGetCommentsByPostId(postId)
    comments.forEach(async comment => { await useDeleteComment(comment?.id) })
    
    await database.deleteDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_POST,
      postId
    )

    await storage.deleteFile(
      ENV_STR.NEXT_PUBLIC_BUCKET_ID,
      currentImage
    )

  } catch (error) {
    throw error
  }
}

export default useDeletePostById
