'use clinet';

import React, { useEffect, useState } from 'react'

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClinet, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true)}, [])

  return (
    <>
      {isClinet
        ? <div>
            {children}
          </div>
        : null}
    </>
  )
}

export default ClientOnly
