'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box } from '@mui/material'

export default function RainbowAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [phase, setPhase] = useState<'enter' | 'spiral' | 'stars' | 'done'>('enter')

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('rainbowAnimationSeen')
    
    if (hasSeenAnimation) {
      setShowAnimation(false)
      return
    }

    // Phase 1: Arc-en-ciel traverse (2s)
    const phaseTimer = setTimeout(() => {
      setPhase('spiral')
      
      // Phase 2: Spirale (1.5s)
      setTimeout(() => {
        setPhase('stars')
        
        // Phase 3: Étoiles (1s)
        setTimeout(() => {
          setPhase('done')
          setShowAnimation(false)
          sessionStorage.setItem('rainbowAnimationSeen', 'true')
        }, 1000)
      }, 1500)
    }, 2000)

    return () => clearTimeout(phaseTimer)
  }, [])

  if (!showAnimation) return null

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Arc-en-ciel qui traverse */}
          {phase === 'enter' && (
            <motion.div
              initial={{ x: '-100%', y: 0, rotate: -45 }}
              animate={{ x: '50%', y: '50%', rotate: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                left: '50%',
                top: '50%',
                marginLeft: '-150px',
                marginTop: '-150px',
              }}
            >
              <svg width="300" height="300" viewBox="0 0 300 300">
                <defs>
                  <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 0.8 }} />
                    <stop offset="16.66%" style={{ stopColor: '#ff7f00', stopOpacity: 0.8 }} />
                    <stop offset="33.33%" style={{ stopColor: '#ffff00', stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: '#00ff00', stopOpacity: 0.8 }} />
                    <stop offset="66.66%" style={{ stopColor: '#0000ff', stopOpacity: 0.8 }} />
                    <stop offset="83.33%" style={{ stopColor: '#4b0082', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#9400d3', stopOpacity: 0.8 }} />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="120" fill="none" stroke="url(#rainbow)" strokeWidth="30" />
              </svg>
            </motion.div>
          )}

          {/* Spirale qui tourne */}
          {phase === 'spiral' && (
            <motion.div
              initial={{ scale: 1, rotate: 0 }}
              animate={{ scale: 0.5, rotate: 720 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                left: '50%',
                top: '50%',
                marginLeft: '-150px',
                marginTop: '-150px',
              }}
            >
              <svg width="300" height="300" viewBox="0 0 300 300">
                <defs>
                  <linearGradient id="rainbow-spiral" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 0.9 }} />
                    <stop offset="16.66%" style={{ stopColor: '#ff7f00', stopOpacity: 0.9 }} />
                    <stop offset="33.33%" style={{ stopColor: '#ffff00', stopOpacity: 0.9 }} />
                    <stop offset="50%" style={{ stopColor: '#00ff00', stopOpacity: 0.9 }} />
                    <stop offset="66.66%" style={{ stopColor: '#0000ff', stopOpacity: 0.9 }} />
                    <stop offset="83.33%" style={{ stopColor: '#4b0082', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#9400d3', stopOpacity: 0.9 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 150 150 Q 150 50 250 150 T 150 250 T 50 150 T 150 50"
                  fill="none"
                  stroke="url(#rainbow-spiral)"
                  strokeWidth="20"
                />
              </svg>
            </motion.div>
          )}

          {/* Étoiles qui éclatent */}
          {phase === 'stars' && (
            <>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12
                const distance = 200
                const x = Math.cos((angle * Math.PI) / 180) * distance
                const y = Math.sin((angle * Math.PI) / 180) * distance

                return (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{ x, y, scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '20px',
                      height: '20px',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path
                        d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
                        fill={`hsl(${(i * 30) % 360}, 100%, 60%)`}
                      />
                    </svg>
                  </motion.div>
                )
              })}
            </>
          )}
        </Box>
      )}
    </AnimatePresence>
  )
}
