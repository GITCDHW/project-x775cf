import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="bg-blue-600 py-16 md:py-24 text-white text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Elevate Your Content?
        </h2>
        <p className="text-lg sm:text-xl mb-10 opacity-90 leading-relaxed">
          Join content creators who are saving time and boosting engagement with powerful social media hooks. Experience the future of content creation.
        </p>
        <Link href="/mvp" passHref>
          <span className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 cursor-pointer">
            Get Started for Free
          </span>
        </Link>
      </div>
    </section>
  );
}