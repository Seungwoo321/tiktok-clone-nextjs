"use client";

import { useEffect, useState } from 'react'
import ClientOnly from './ClientOnly';
import { useGeneralStore } from '../stores/general';
import AuthOverlay from './AuthOverlay';
import EditProfileOverlay from './profile/EditProfileOverlay';
const AllOverlays = () => {
  const { isLoginOpen, isEditProfileOpen } = useGeneralStore()
  return (
    <>
      <ClientOnly>
        {isLoginOpen ? <AuthOverlay/> : null}
        {isEditProfileOpen ? <EditProfileOverlay/> : null}
      </ClientOnly>
    </>
  )
}

export default AllOverlays
