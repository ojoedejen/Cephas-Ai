'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { BuilderKitsSection } from '@/components/resources/builder-kits-section';
import { TechStackSection } from '@/components/resources/tech-stack-section';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { ScrollProgressBar } from '../../components/ui/scroll-progress-bar';
import { Wrench, Code2 } from 'lucide-react';

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-[#AD4707] p-4 md:p-6 lg:p-8 animate-page-fade-in">
            {/* Scroll Progress Indicator */}
            <ScrollProgressBar />

            {/* Main Container with gradient background */}
            <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                    background:
                        "linear-gradient(135deg, #f5f0e8 0%, #e8ddd0 20%, #f0e8dc 40%, #e5d8f0 60%, #d4c8e8 80%, #c8bce0 100%)",
                }}
            >
                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Animated gradient blob */}
                <div
                    className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-morph pointer-events-none"
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-morph pointer-events-none"
                    style={{ animationDelay: "-4s" }}
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="px-4 md:px-8 lg:px-12 pt-6">
                        <Header />
                    </div>

                    {/* Page Header */}
                    <div className="px-4 md:px-8 lg:px-12 py-12">
                        <div className="max-w-4xl mx-auto text-center space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up">
                                Resources
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up stagger-1">
                                Explore the tools and builder kits used in Cephas AI bootcamps to build real-world solutions and accelerate your development workflow.
                            </p>
                        </div>
                    </div>

                    {/* Resources Content */}
                    <div className="px-4 md:px-8 lg:px-12 pb-12">
                        <div className="max-w-7xl mx-auto">
                            <Tabs defaultValue="builder-kits" className="w-full">
                                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-12">
                                    <TabsTrigger value="builder-kits" className="text-base">
                                        <Wrench className="mr-2 h-5 w-5" />
                                        Builder's Kits
                                    </TabsTrigger>
                                    <TabsTrigger value="tech-stack" className="text-base">
                                        <Code2 className="mr-2 h-5 w-5" />
                                        Tech Stack
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="builder-kits" className="mt-0">
                                    <div className="mb-6">
                                        <p className="text-center text-muted-foreground">
                                            Each kit provides step-by-step guidance and AI-powered tools to help you build professional assets quickly.
                                        </p>
                                    </div>
                                    <BuilderKitsSection />
                                </TabsContent>

                                <TabsContent value="tech-stack" className="mt-0">
                                    <div className="mb-6">
                                        <p className="text-center text-muted-foreground">
                                            Discover and explore technology tools, frameworks, and resources for building robust applications.
                                        </p>
                                    </div>
                                    <TechStackSection />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-4 md:px-8 lg:px-12 bg-card">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}
