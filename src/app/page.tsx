import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Modern Web Base 🚀
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Hızlı Başlangıç</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Next.js, TypeScript ve TailwindCSS ile modern web geliştirmeye başlayın.
            </p>
            <Link 
              href="/docs"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Dokümantasyon
            </Link>
          </div>
          
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Next.js 14</li>
              <li>TypeScript</li>
              <li>TailwindCSS</li>
              <li>ESLint</li>
              <li>Dark Mode</li>
            </ul>
          </div>
        </div>

        <blockquote className="p-6 border-l-4 border-primary bg-gray-50 dark:bg-gray-800">
          <p className="text-lg italic">{"LIFE IS SHORT BE QUICK."}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">- Modern Web Base</p>
        </blockquote>
      </div>
    </main>
  )
}