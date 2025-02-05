"use client"

import { useState } from "react"
import Header from "./components/header"
import GameContent from "./components/game-content"
import Footer from "./components/footer"

type Level = {
  id: number
  title: string
  description: string
  imageUrl: string
  answer: string
}

const levels: Level[] = [
  {
    id: 1,
    title: "The Ancient Scroll",
    description: "Decipher the text on this ancient scroll. What's the hidden word?",
    imageUrl:
      "https://sjc.microlink.io/c-T_jsxDrj1VU0aZnXfzQz3h_mTOXPzhdH4gWoygS9eV_9wgQtd-OoOxpKnZaFCw8sMfCA7A_koQF1hheYk2Yw.jpeg",
    answer: "wisdom",
  },
  {
    id: 2,
    title: "The Mystic Symbol",
    description: "Identify the symbol shown in the image. What does it represent?",
    imageUrl:
      "https://sjc.microlink.io/94YUqj5kOvWxa1QSDPTLJ5iSmwxey3pM-CofOBWidpF8PrJ6BO9_B6m4P5AgUhr7S07Nm77wxSdf77wok8on0Q.jpeg",
    answer: "infinity",
  },
  {
    id: 3,
    title: "The Starry Night",
    description: "Count the number of stars in this night sky. How many do you see?",
    imageUrl: "/placeholder.svg?height=300&width=400",
    answer: "7",
  },
  {
    id: 4,
    title: "The Final Riddle",
    description:
      "Solve this riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    imageUrl: "/placeholder.svg?height=300&width=400",
    answer: "echo",
  },
]

export default function Game() {
  const [currentLevel, setCurrentLevel] = useState<number>(1)
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1])
  const [input, setInput] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (answer: string) => {
    const level = levels.find((l) => l.id === currentLevel)
    if (level && answer.toLowerCase() === level.answer.toLowerCase()) {
      if (currentLevel < levels.length) {
        setCurrentLevel(currentLevel + 1)
        setUnlockedLevels([...unlockedLevels, currentLevel + 1])
        setMessage("Correct! Moving to the next level.")
      } else {
        setMessage("Congratulations! You have completed all levels!")
      }
    } else {
      setMessage("Incorrect answer. Try again!")
    }
    setInput("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col">
      <Header title="XRPL Quest" currentLevel={currentLevel} unlockedLevels={unlockedLevels} />
      <GameContent
        level={levels.find((l) => l.id === currentLevel)!}
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
        message={message}
      />
      <Footer />
    </div>
  )
}

