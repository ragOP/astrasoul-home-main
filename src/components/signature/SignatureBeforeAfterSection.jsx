import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SignatureImageSlider from './SignatureImageSlider';

const SignatureBeforeAfterSection = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Sample before/after images - you can replace these with actual signature transformation images
    const transformationImages = [
        {
            src: "/src/components/signature/assets/sign-image-1.png",
            alt: "Signature Transformation 1",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/src/components/signature/assets/sign-image-2.png",
            alt: "Signature Transformation 2",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/src/components/signature/assets/sign-image-3.png",
            alt: "Signature Transformation 3",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        }
    ];

    const transformationPoints = [
        {
            before: "Basic",
            after: "Bold",
            description: "From simple scribbles to confident, professional signatures"
        },
        {
            before: "Cluttered",
            after: "Clean",
            description: "Transform messy handwriting into elegant, readable signatures"
        },
        {
            before: "Forgettable",
            after: "Flawless",
            description: "Make your signature memorable and distinctive"
        }
    ];

    return (
        <section className="px-4 py- bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
                        ✍ Before vs After – See the Difference
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Witness the incredible transformation from basic signatures to professional,
                        memorable designs that reflect your personality and brand.
                    </p>
                </div>

                {/* Image Slider */}
                <div className={`mb-12 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <SignatureImageSlider images={transformationImages} />
                </div>

                {/* Transformation Points Grid */}
                <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    {transformationPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-center space-y-4">
                                {/* Before/After Labels */}
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-semibold">
                                        {point.before}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400" />
                                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                                        {point.after}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {point.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SignatureBeforeAfterSection; 