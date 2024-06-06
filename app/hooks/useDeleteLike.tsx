import { database } from "@/libs/AppWriteClient"
import { ENV_STR } from "../env"

const useDeleteLike = async (id: string) => {
  try {
    await database.deleteDocument(
      ENV_STR.NEXT_PUBLIC_DATABASE_ID,
      ENV_STR.NEXT_PUBLIC_COLLECTION_ID_LIKE,
      id
    )
  } catch (error) {
    throw error
  }
}

export default useDeleteLike