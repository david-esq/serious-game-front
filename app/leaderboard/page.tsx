import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LeaderboardPage() {
  // This would typically fetch from your database
  const topPlayers = [
    { name: "Player1", completionTime: "2:30", score: 1000 },
    { name: "Player2", completionTime: "2:45", score: 950 },
    { name: "Player3", completionTime: "3:00", score: 900 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Quest Leaderboard
          </h1>
          <Link href="/">
            <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white border-none">
              Back to Game
            </Button>
          </Link>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700 bg-opacity-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {topPlayers.map((player, index) => (
                <tr key={player.name} className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-300">#{index + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{player.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{player.completionTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{player.score}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

