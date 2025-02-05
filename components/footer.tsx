import Link from "next/link"
import { ExternalLink, Trophy } from "lucide-react"

export default function Footer() {
  const resources = [
    {
      title: "Documentation",
      url: "https://xrpl.org",
      description: "Official XRPL documentation",
      isExternal: true,
    },
    {
      title: "Explorer",
      url: "https://xrplwin.com/",
      description: "XRPL network explorer",
      isExternal: true,
    },
    {
      title: "Metrics",
      url: "https://xrpscan.com/metrics",
      description: "Network metrics and statistics",
      isExternal: true,
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      description: "See who's leading the quest",
      isExternal: false,
      icon: Trophy,
    },
  ]

  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-300">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.url}
                target={resource.isExternal ? "_blank" : undefined}
                rel={resource.isExternal ? "noopener noreferrer" : undefined}
                className="group block p-4 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-blue-200">{resource.title}</h3>
                  {resource.isExternal ? (
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                  ) : resource.icon ? (
                    <resource.icon className="w-4 h-4 text-yellow-400" />
                  ) : null}
                </div>
                <p className="text-sm text-gray-400">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

