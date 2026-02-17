'use client';

import { TechStack } from '@/lib/types/resources';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface TechStackCardProps {
    tool: TechStack;
    onClick: () => void;
}

const categoryColors: Record<string, string> = {
    'AI Vibe': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Frontend': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Backend': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Database': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'API': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Authentication': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    'ORM': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    'Solana': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
};

export function TechStackCard({ tool, onClick }: TechStackCardProps) {
    return (
        <Card
            className="group cursor-pointer hover-lift transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-white to-gray-50/30 dark:from-gray-900 dark:to-gray-950/20"
            onClick={onClick}
        >
            <CardHeader>
                <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {tool.name}
                    </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {tool.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Category Badges */}
                <div className="flex flex-wrap gap-2">
                    {tool.category.map((cat) => (
                        <Badge
                            key={cat}
                            variant="secondary"
                            className={`text-xs px-2 py-1 ${categoryColors[cat] || 'bg-gray-100 text-gray-700'}`}
                        >
                            {cat}
                        </Badge>
                    ))}
                </div>

                {/* CTA Button */}
                <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    variant="outline"
                >
                    Open Docs
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardContent>
        </Card>
    );
}
