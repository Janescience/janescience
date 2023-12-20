import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="p-1">
      <a href="https://webring.wonderful.software#janescience.com" title="วงแหวนเว็บ" >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <img
            alt="วงแหวนเว็บ"
            width="20"
            height="20"
            src="https://webring.wonderful.software/webring.white.svg"
          />
          ) : (
            <img
              alt="วงแหวนเว็บ"
              width="20"
              height="20"
              src="https://webring.wonderful.software/webring.black.svg"
            />
          )}
    </a>
    </div>
    
  )
}

export default ThemeSwitch
