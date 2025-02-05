import Link from "next/link"

type HeaderProps = {
  title: string
  currentLevel: number
  unlockedLevels: number[]
}

export default function Header({ title, currentLevel, unlockedLevels }: HeaderProps) {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {title}
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {[1, 2, 3, 4].map((level) => (
              <li key={level}>
                <Link
                  href={`#level-${level}`}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    unlockedLevels.includes(level)
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-700 opacity-50 cursor-not-allowed"
                  }`}
                  onClick={(e) => {
                    if (!unlockedLevels.includes(level)) {
                      e.preventDefault()
                    }
                  }}
                >
                  Level {level}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container mx-auto mt-2">
        <p className="text-sm text-gray-300">Current Level: {currentLevel}</p>
      </div>
    </header>
  )
}

