import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white py-20 md:py-28 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Social Hook Creator
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform messy text into concise, high-impact social media hooks for easier content creation.
        </p>
        <Link href="/mvp" passHref>
          <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
            Try the MVP Now
          </span>
        </Link>
      </div>
    </section>
  );
}