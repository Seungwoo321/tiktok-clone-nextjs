import { ENV_STR } from "../env"

const useCreateBucketUrl = (fileId: string) => {

  const url = ENV_STR.NEXT_PUBLIC_APPWRITE_URL
  const id = ENV_STR.NEXT_PUBLIC_BUCKET_ID
  const endpoint = ENV_STR.NEXT_PUBLIC_ENDPOINT

  if (!url || !id || !endpoint || !fileId) return ''

  return `${url}/storage/buckets/${id}/files/${fileId}/view?project=${endpoint}`
}

export default useCreateBucketUrl