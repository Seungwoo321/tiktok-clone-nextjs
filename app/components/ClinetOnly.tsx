'use clinet';

import React, { useEffect, useState } from 'react'

const ClinetOnly = ({ children }: { children: React.ReactNode }) => {
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

export default ClinetOnly
