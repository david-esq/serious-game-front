import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

type GameContentProps = {
  level: {
    id: number
    title: string
    description: string
    imageUrl: string
  }
  input: string
  setInput: (value: string) => void
  onSubmit: (answer: string) => void
  message: string
}

export default function GameContent({ level, input, setInput, onSubmit, message }: GameContentProps) {
  return (
    <main className="flex-grow container mx-auto p-4">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-300">{level.title}</h2>
        <div className="mb-4 relative h-64 rounded-lg overflow-hidden">
          <Image
            src={level.imageUrl || "/placeholder.svg"}
            alt={level.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-lg mb-4 text-gray-300">{level.description}</p>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your answer"
            className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-500"
          />
          <Button onClick={() => onSubmit(input)} className="bg-blue-500 hover:bg-blue-600 text-white">
            Submit
          </Button>
        </div>
        {message && (
          <p
            className={`text-lg ${message.includes("Correct") || message.includes("Congratulations") ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  )
}

