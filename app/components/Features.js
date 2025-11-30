"use client";

import { Zap, Target, TrendingUp } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: Target,
      title: "Precision Targeting",
      description:
        "Reach your ideal audience with advanced segmentation and behavioral targeting capabilities for maximum ROI.",
    },
    {
      id: 2,
      icon: Zap,
      title: "Real-Time Analytics",
      description:
        "Get instant insights into campaign performance with comprehensive dashboards and real-time reporting.",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Growth Optimization",
      description:
        "Continuously improve results with AI-powered recommendations and automated A/B testing.",
    },
  ];

  return (
    <section className="w-full bg-background from-background to-muted/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Our Features
          </p>

          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl inter">
            Powerful Tools for Digital Success
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-para">
            Everything you need to create, manage, and optimize your digital
            marketing campaigns in one unified platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-xl border p-8 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-lg bg-blue-100 p-3">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold inter">
                  {feature.title}
                </h3>

                <p className="text-para leading-relaxed">
                  {feature.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 transition-all group-hover:opacity-100">
                  <span>Learn more</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
