import { useEffect, useState } from 'react'

export default (src) => {
  const [srcLoaded, setSrcLoaded] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSrcLoaded(src)
  }, [src])

  return srcLoaded
}
