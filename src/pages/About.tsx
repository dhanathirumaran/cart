import React from "react";
import Navbar from "../components/Navbar";
import { Users, Heart, Globe } from "lucide-react";

// Define a type for the feature card data
interface FeatureCardProps {
  Icon: React.ComponentType<any>; // Type for Lucide React icons
  title: string;
  description: string;
}

/**
 * About Page Component
 *
 * This component renders the About Us page, providing information about the company's mission, team, and story.
 */
const About: React.FC = () => {
  // Data for the feature cards
  const featureCards: FeatureCardProps[] = [
    {
      Icon: Users,
      title: "Our Team",
      description:
        "A dedicated group of experts committed to curating the best products for your needs.",
    },
    {
      Icon: Heart,
      title: "Our Mission",
      description:
        "To help you create spaces that inspire, comfort, and bring joy to your daily life.",
    },
    {
      Icon: Globe,
      title: "Our Impact",
      description:
        "Committed to sustainability and supporting ethical manufacturing practices worldwide.",
    },
  ];

  // Reusable component for each feature card
  const FeatureCard: React.FC<FeatureCardProps> = ({
    Icon,
    title,
    description,
  }) => (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* Description of the company. */}
            We're passionate about bringing you the finest selection of home and
            office products, making your space both beautiful and functional.
          </p>
        </div>

        {/* Key Features/Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Render each feature card */}
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Container for the story section. */}
          <div className="md:flex">
            {/* Responsive flex layout. */}
            <div className="md:flex-shrink-0">
              {/* Ensure image doesn't shrink. */}
              <img
                // Image of the office space.
                className="h-full w-full object-cover md:w-48"
                // Image styling.
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800"
                // Sample image URL.
                alt="Office space"
                // Alt text for accessibility.
              />
            </div>
            <div className="p-8">
              {/* Padding for the text content. */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in 2020, we started with a simple mission: to make
                beautiful, functional products accessible to everyone. Today, we
                work with artisans and manufacturers worldwide to bring you
                carefully curated collections that enhance your living and
                working spaces.
              </p>
              <p className="text-gray-600">
                We believe in quality, sustainability, and exceptional customer
                service. Every product in our store is selected with care,
                ensuring it meets our high standards for both form and function.
              </p>
            </div>
          </div>
        </div>
      </div> {/* End of main content container. */}
    </div>
  );
};

export default About;
