import React, { useState, useEffect } from 'react';
import { GraduationCap, Building2, Briefcase, Palette, Mail, Sparkles } from 'lucide-react';

const SignatureWhoIsThisFor = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const targetAudience = [
        {
            icon: GraduationCap,
            title: "Students & Freshers",
            subtitle: "starting their career",
            description: "Make a strong first impression with a professional signature that sets you apart from the crowd",
            color: "from-blue-500 to-indigo-600",
            bgColor: "from-blue-50 to-indigo-50"
        },
        {
            icon: Building2,
            title: "Business Owners",
            subtitle: "who want to stand out",
            description: "Elevate your brand with a signature that reflects your business's professionalism and values",
            color: "from-green-500 to-emerald-600",
            bgColor: "from-green-50 to-emerald-50"
        },
        {
            icon: Briefcase,
            title: "Working Professionals",
            subtitle: "upgrading their image",
            description: "Transform your professional presence with a signature that commands respect and attention",
            color: "from-purple-500 to-violet-600",
            bgColor: "from-purple-50 to-violet-50"
        },
        {
            icon: Palette,
            title: "Creatives",
            subtitle: "who value aesthetics",
            description: "Express your artistic vision through a signature that's as unique and beautiful as your work",
            color: "from-pink-500 to-rose-600",
            bgColor: "from-pink-50 to-rose-50"
        },
        {
            icon: Mail,
            title: "Anyone tired of basic",
            subtitle: "or inconsistent signatures",
            description: "Upgrade from messy handwriting to a signature that represents the best version of yourself",
            color: "from-orange-500 to-amber-600",
            bgColor: "from-orange-50 to-amber-50"
        }
    ];

    return (
        <section className="py-4 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-6 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full px-6 py-3 mb-6">
                        <Sparkles className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-700 font-secondary">Perfect For</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-800 mb-4">
                        💼 Who Is This For?
                    </h2>
                    <p className="text-base text-gray-600 max-w-3xl mx-auto font-primary">
                        Professional signature design for everyone who wants to make their mark
                    </p>
                </div>

                {/* Target Audience Grid */}
                <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    {targetAudience.map((audience, index) => {
                        const Icon = audience.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative overflow-hidden bg-gradient-to-br ${audience.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2`}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                                    <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                                </div>

                                <div className="relative">
                                    {/* Icon and Title Row */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-display font-bold text-gray-800 mb-1">
                                                {audience.title}
                                            </h3>
                                            <p className="text-sm font-semibold text-gray-600 font-secondary">
                                                {audience.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 text-sm leading-relaxed font-primary">
                                        {audience.description}
                                    </p>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default SignatureWhoIsThisFor; 