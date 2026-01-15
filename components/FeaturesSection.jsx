import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Instant Hook Generation',
      description: 'Paste your raw text, and get three distinct, high-impact social media hooks generated in seconds. No more staring at a blank screen.',
    },
    {
      title: 'Save Valuable Time',
      description: 'Eliminate tedious editing and endless brainstorming. Transform long drafts into engaging posts effortlessly, freeing up your creative energy.',
    },
    {
      title: 'Boost Engagement & Reach',
      description: 'Craft captivating opening lines that grab attention, stop the scroll, and encourage clicks, helping your content stand out.',
    },
    {
        title: 'Simple & Intuitive Interface',
        description: 'Designed for clarity and ease of use. Focus on your message, not complex tools. Get professional results with minimal effort.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Social Hook Creator?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}