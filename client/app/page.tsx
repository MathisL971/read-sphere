import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-cyan-700">
          Welcome, {session!.user!.name}!
        </h1>
        <p className="text-lg text-gray-600">
          Discover new books, share your favorite quotes, and engage with other
          readers. Get started by exploring the features below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Upload Quotes Section */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">
            Upload a Quote
          </h3>
          <p className="text-center text-gray-500 mb-4">
            Share your favorite quotes with the community and store them for
            easy access.
          </p>
          <Link
            href="/upload-quote"
            className="w-full py-3 text-center bg-cyan-600 text-white text-sm font-semibold rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Upload Quote
          </Link>
        </div>

        {/* Explore Books Section */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">
            Explore Books
          </h3>
          <p className="text-center text-gray-500 mb-4">
            Discover books that align with your interests and get personalized
            recommendations.
          </p>
          <Link
            href="/explore-books"
            className="w-full py-3 bg-cyan-600 text-center text-white text-sm font-semibold rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Explore Books
          </Link>
        </div>

        {/* Shared Quotes Section */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">
            View Shared Quotes
          </h3>
          <p className="text-center text-gray-500 mb-4">
            Check out quotes shared by other readers and get inspired by their
            insights.
          </p>
          <Link
            href="/shared-quotes"
            className="w-full py-3 bg-cyan-600 text-center text-white text-sm font-semibold rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            View Quotes
          </Link>
        </div>

        {/* Quiz Section */}
        <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-cyan-700 mb-4">
            Book Quizzes
          </h3>
          <p className="text-center text-gray-500 mb-4">
            Test your knowledge about your favorite books and quotes with fun
            quizzes.
          </p>
          <Link
            href="/quizzes"
            className="w-full py-3 bg-cyan-600 text-center text-white text-sm font-semibold rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
