import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* 背景画像レイヤー */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/bg-texture.webp')] bg-cover bg-center opacity-60 mix-blend-color-dodge"
          style={{ 
            filter: 'brightness(0.85) contrast(1.4) saturate(1.3)',
            backdropFilter: 'blur(1px)',
          }}
        />
      </div>

      {/* グラデーションの背景 */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-black/80"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          transition: 'background-position 0.3s ease-out',
        }}
      />

      {/* アニメーションされる光の効果 */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_50%)]" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10">
        <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="flex justify-between items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <h1 className="text-2xl font-bold text-white">7th.house</h1>
                <p className="text-sm text-blue-300">AIと作り上げる未来</p>
              </motion.div>
              
              <div className="space-x-6">
                {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-blue-400 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </nav>
        
        <main className="pt-20">
          {children}
        </main>
      </div>
    </motion.div>
  )
}

export default Layout