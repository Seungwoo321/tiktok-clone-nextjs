import { database, Query } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"

const useUpdateProfile = async (id: string, name: string, bio: string) => {
  try {
    await database.updateDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
      id,
      {
        name,
        bio
      }
    )
  } catch (error) {
    throw error
  }
}

export default useUpdateProfile