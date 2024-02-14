'use client'

import React from 'react'

interface ClientOnlyProps {
    children: React.ReactNode
}

export default function ClientOnly({ children }: ClientOnlyProps) {

    const [hasMounted, setHasMounted] = React.useState<boolean>(false)

    React.useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) {
        return null
    }

    return (
        <>{children}</>
    )
}
