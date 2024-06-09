"use client";

import { useEffect, useState } from 'react'

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isclient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isclient
        ? <div>
            {children}
          </div>
        : null}
    </>
  )
}

export default ClientOnly
