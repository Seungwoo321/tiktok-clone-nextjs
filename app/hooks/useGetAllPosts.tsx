import { Query, database } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"
import useGetProfileByUserId from "./useGetProfileByUserId"

const useGetAllPosts = async () => {
  try {
    const response = await database.listDocuments(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_POST,
      [
        Query.orderDesc("$id")
      ]
    )
    const documents = response.documents

    const objPromises = documents.map(async doc => {
      const profile = await useGetProfileByUserId(doc?.user_id)

      return {
        id: doc?.$id,
        user_id: doc?.user_id,
        video_url: doc?.video_url,
        text: doc?.text,
        created_at: doc?.created_at,
        profile: {
          user_id: profile?.user_id,
          name: profile?.name,
          image: profile?.image
        }
      }
    })

    const result = Promise.all(objPromises)
    return result
  } catch (error) {
    throw error
  }

}

export default useGetAllPosts