'use client';

import { TechStack } from '@/lib/types/resources';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

interface TechStackModalProps {
    tool: TechStack | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
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

export function TechStackModal({ tool, open, onOpenChange }: TechStackModalProps) {
    if (!tool) return null;

    const handleOpenDocs = () => {
        window.open(tool.docsUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] p-0">
                <ScrollArea className="max-h-[90vh]">
                    <div className="p-6">
                        <DialogHeader className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {tool.category.map((cat) => (
                                    <Badge
                                        key={cat}
                                        variant="secondary"
                                        className={categoryColors[cat] || 'bg-gray-100 text-gray-700'}
                                    >
                                        {cat}
                                    </Badge>
                                ))}
                            </div>
                            <DialogTitle className="text-2xl font-bold">{tool.name}</DialogTitle>
                            <DialogDescription className="text-base">
                                {tool.description}
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                            {/* Documentation Link */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg border">
                                <div className="flex items-start gap-4">
                                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-2">Official Documentation</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Access comprehensive guides, API references, and tutorials to get started with {tool.name}.
                                        </p>
                                        <Button
                                            onClick={handleOpenDocs}
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                                        >
                                            Open Documentation
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Categories Info */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Categories</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tool.category.map((cat) => (
                                        <div
                                            key={cat}
                                            className={`px-4 py-2 rounded-lg font-medium ${categoryColors[cat] || 'bg-gray-100 text-gray-700'}`}
                                        >
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Use Cases */}
                            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2">When to Use</h3>
                                <p className="text-sm text-muted-foreground">
                                    {tool.category.includes('AI Vibe') &&
                                        "Perfect for rapid prototyping and AI-powered development workflows. Ideal for turning ideas into working applications quickly."}
                                    {tool.category.includes('Frontend') && !tool.category.includes('AI Vibe') &&
                                        "Essential for building modern, responsive user interfaces. Great for creating interactive web applications."}
                                    {tool.category.includes('Backend') && !tool.category.includes('Frontend') &&
                                        "Core technology for building robust server-side applications and APIs."}
                                    {tool.category.includes('Database') &&
                                        "Reliable solution for data storage and management. Ideal for applications requiring persistent data."}
                                    {tool.category.includes('Authentication') &&
                                        "Secure authentication and authorization solution for protecting your application and user data."}
                                    {tool.category.includes('Solana') &&
                                        "Essential for building decentralized applications on the Solana blockchain."}
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
