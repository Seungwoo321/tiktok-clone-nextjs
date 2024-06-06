import { ID, database } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"

const useCreateComment = async (userId: string, postId: string, comment: string) => {
  try {
    await database.createDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_COMMENT,
      ID.unique(),
      {
        user_id: userId,
        post_id: postId,
        text: comment,
        created_at: new Date().toISOString()
      }
    )
  } catch (error) {
    throw error
  }

}

export default useCreateComment