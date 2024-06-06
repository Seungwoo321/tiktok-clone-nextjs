import { ID, database } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"

const useCreateLike = async (userId: string, postId: string) => {
  try {
    await database.createDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_LIKE,
      ID.unique(),
      {
        user_id: userId,
        post_id: postId
      }
    )
  } catch (error) {
    throw error
  }

}

export default useCreateLike