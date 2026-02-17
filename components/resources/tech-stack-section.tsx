'use client';

import { useState, useMemo } from 'react';
import { techStackTools } from '@/lib/data/tech-stack-data';
import { TechStack } from '@/lib/types/resources';
import { TechStackCard } from './tech-stack-card';
import { TechStackModal } from './tech-stack-modal';
import { TechStackFilters } from './tech-stack-filters';

export function TechStackSection() {
    const [selectedTool, setSelectedTool] = useState<TechStack | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const handleToolClick = (tool: TechStack) => {
        setSelectedTool(tool);
        setIsModalOpen(true);
    };

    // Filter tools based on category and search query
    const filteredTools = useMemo(() => {
        return techStackTools.filter((tool) => {
            const matchesCategory = selectedCategory === 'All' || tool.category.includes(selectedCategory as any);
            const matchesSearch = searchQuery === '' ||
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="space-y-8">
            <TechStackFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                resultCount={filteredTools.length}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                    <TechStackCard
                        key={tool.id}
                        tool={tool}
                        onClick={() => handleToolClick(tool)}
                    />
                ))}
            </div>

            {filteredTools.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                        No tech stacks found matching your criteria.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                        Try adjusting your filters or search query.
                    </p>
                </div>
            )}

            <TechStackModal
                tool={selectedTool}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </div>
    );
}
