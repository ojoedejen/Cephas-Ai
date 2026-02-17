'use client';

import { BuilderKit } from '@/lib/types/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BuilderKitCardProps {
    kit: BuilderKit;
    onClick: () => void;
}

export function BuilderKitCard({ kit, onClick }: BuilderKitCardProps) {
    return (
        <Card
            className="group cursor-pointer hover-lift transition-all duration-300 border border-gray-200 hover:border-purple-400 hover:shadow-xl bg-white overflow-hidden"
            onClick={onClick}
        >
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                        {kit.name}
                    </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed text-gray-600">
                    {kit.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {kit.tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>

                {/* Features Preview */}
                <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        You'll Create:
                    </p>
                    <ul className="space-y-1.5">
                        {kit.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                                <span className="mr-2 text-purple-500">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                        {kit.features.length > 3 && (
                            <li className="text-sm text-purple-600 font-medium">
                                +{kit.features.length - 3} more
                            </li>
                        )}
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2">
                    <Button
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 group-hover:shadow-lg"
                        variant="default"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClick();
                        }}
                    >
                        {kit.hasForm ? 'Start Building' : 'View Details'}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    {kit.docsUrl && (
                        <Button
                            asChild
                            variant="outline"
                            className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <a href={kit.docsUrl} target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2"
                                >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Open Doc
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
