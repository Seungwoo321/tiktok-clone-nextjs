import { database, ID } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"

const useCreateProfile = async (userId: string, name: string, image: string, bio: string) => {
  try {
    await database.createDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
      ID.unique(),
      {
        user_id: userId,
        name,
        image,
        bio
      }
    )

  } catch (error) {
    throw error
  }
}

export default useCreateProfile