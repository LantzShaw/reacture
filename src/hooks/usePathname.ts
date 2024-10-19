import { useState } from 'react'

export function usePathname() {
    const [path, setPath] = useState('pathname')

    return [path, setPath]
}
