import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedText = () => {
  const [word, setWord] = useState('individuals')

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  const setNext = () => {
    if (word === 'individuals') {
      sleep(2500).then(() => setWord('small businesses'))
    }
    if (word === 'small businesses') {
      sleep(2500).then(() => setWord('you'))
    }
    if (word === 'you') {
      sleep(2500).then(() => setWord('individuals'))
    }
  }

  useEffect(() => {
    setNext()
  }, [word])

  return (
    <div className=" mx-auto pt-1 text-center ">
      <AnimatePresence>
        <motion.div>
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            className="mx-auto flex justify-center text-center"
          >
            {word}
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedText
