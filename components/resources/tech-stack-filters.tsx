'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { TechCategory } from '@/lib/types/resources';

interface TechStackFiltersProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    resultCount: number;
}

const categories: readonly string[] = [
    'All',
    'AI Vibe',
    'Frontend',
    'Backend',
    'Database',
    'API',
    'Authentication',
    'ORM',
    'Solana',
];

const categoryColors: Record<string, string> = {
    'All': 'hover:bg-gray-100 dark:hover:bg-gray-800 data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-gray-700',
    'AI Vibe': 'hover:bg-purple-100 dark:hover:bg-purple-900/30 data-[active=true]:bg-purple-200 dark:data-[active=true]:bg-purple-800/50 data-[active=true]:text-purple-700 dark:data-[active=true]:text-purple-300',
    'Frontend': 'hover:bg-blue-100 dark:hover:bg-blue-900/30 data-[active=true]:bg-blue-200 dark:data-[active=true]:bg-blue-800/50 data-[active=true]:text-blue-700 dark:data-[active=true]:text-blue-300',
    'Backend': 'hover:bg-green-100 dark:hover:bg-green-900/30 data-[active=true]:bg-green-200 dark:data-[active=true]:bg-green-800/50 data-[active=true]:text-green-700 dark:data-[active=true]:text-green-300',
    'Database': 'hover:bg-orange-100 dark:hover:bg-orange-900/30 data-[active=true]:bg-orange-200 dark:data-[active=true]:bg-orange-800/50 data-[active=true]:text-orange-700 dark:data-[active=true]:text-orange-300',
    'API': 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30 data-[active=true]:bg-yellow-200 dark:data-[active=true]:bg-yellow-800/50 data-[active=true]:text-yellow-700 dark:data-[active=true]:text-yellow-300',
    'Authentication': 'hover:bg-red-100 dark:hover:bg-red-900/30 data-[active=true]:bg-red-200 dark:data-[active=true]:bg-red-800/50 data-[active=true]:text-red-700 dark:data-[active=true]:text-red-300',
    'ORM': 'hover:bg-pink-100 dark:hover:bg-pink-900/30 data-[active=true]:bg-pink-200 dark:data-[active=true]:bg-pink-800/50 data-[active=true]:text-pink-700 dark:data-[active=true]:text-pink-300',
    'Solana': 'hover:bg-teal-100 dark:hover:bg-teal-900/30 data-[active=true]:bg-teal-200 dark:data-[active=true]:bg-teal-800/50 data-[active=true]:text-teal-700 dark:data-[active=true]:text-teal-300',
};

export function TechStackFilters({
    selectedCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    resultCount,
}: TechStackFiltersProps) {
    return (
        <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search tech stacks..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10 h-12 text-base"
                />
            </div>

            {/* Category Filters */}
            <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Filter by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant="outline"
                            size="sm"
                            data-active={selectedCategory === category}
                            onClick={() => onCategoryChange(category)}
                            className={`transition-all duration-200 ${categoryColors[category] || ''}`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
                {resultCount} tech stack{resultCount !== 1 ? 's' : ''} found
            </div>
        </div>
    );
}
