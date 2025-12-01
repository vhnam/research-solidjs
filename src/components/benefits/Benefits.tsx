const BENEFITS = [
  {
    title: "Easy from the start",
    description:
      "Plan in minutes. Choose your destination—we'll build your trip for you.",
    image: "/images/easy-from-the-start.png",
  },
  {
    title: "Designed for your travel style",
    description:
      "Travel your way. Foodie, explorer, easy going dreamer—JourneeMate adapts to what you love.",
    image: "/images/designed-for-your-travel-style.png",
  },
  {
    title: "Balanced, stress-free days",
    description:
      "Relax, you're covered. Thoughtful routes, gentle pacing, and time to enjoy. No overwhelm.",
    image: "/images/balanced-stress-free-days.png",
  },
  {
    title: "Always accessible",
    description:
      "Your trips, anytime. Save and revisit your itineraries wherever you like—travel at your pace.",
    image: "/images/always-accessible.png",
  },
];

const Benefits = () => {
  return (
    <div class="px-4 lg:px-8 py-8">
      <div class="mb-8">
        <h2 class="text-2xl font-bold font-heading text-primary">
          Key Benefits
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {BENEFITS.map((benefit) => (
          <div class="border border-gray-200 rounded-lg p-4">
            <img
              src={benefit.image}
              alt={benefit.title}
              class="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 class="text-lg font-bold font-heading">{benefit.title}</h3>
            <p class="text-sm text-gray-500">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
