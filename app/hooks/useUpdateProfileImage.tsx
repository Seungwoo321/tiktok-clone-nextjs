import { database, Query } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"

const useUpdateProfileImage = async (id: string, image: string) => {
  try {
    await database.updateDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_PROFILE,
      id,
      {
        image
      }
    )
  } catch (error) {
    throw error
  }
}

export default useUpdateProfileImage