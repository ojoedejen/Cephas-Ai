'use client';

import { BuilderKit } from '@/lib/types/resources';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { CheckCircle2 } from 'lucide-react';
import { PRDKitForm } from './forms/prd-kit-form';
import { PitchMasterForm } from './forms/pitch-master-form';
import { BrandingKitForm } from './forms/branding-kit-form';
import { SocialMediaForm } from './forms/social-media-form';

interface BuilderKitModalProps {
    kit: BuilderKit | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function BuilderKitModal({ kit, open, onOpenChange }: BuilderKitModalProps) {
    if (!kit) return null;

    const renderContent = () => {
        // If the kit has a form, render the appropriate form component
        if (kit.hasForm && kit.formType) {
            switch (kit.formType) {
                case 'prd':
                    return <PRDKitForm />;
                case 'pitch-master':
                    return <PitchMasterForm />;
                case 'branding':
                    return <BrandingKitForm />;
                case 'social-media':
                    return <SocialMediaForm />;
                default:
                    return renderDefaultContent();
            }
        }

        return renderDefaultContent();
    };

    const renderDefaultContent = () => (
        <div className="space-y-6">
            {/* Description */}
            <div>
                <h3 className="font-semibold text-lg mb-2">About This Kit</h3>
                <p className="text-muted-foreground leading-relaxed">{kit.description}</p>
            </div>

            {/* Features */}
            <div>
                <h3 className="font-semibold text-lg mb-3">What You'll Create</h3>
                <ul className="space-y-2">
                    {kit.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Getting Started */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Getting Started</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    This kit provides comprehensive guidance and templates to help you build professional assets quickly.
                    Follow the step-by-step instructions and leverage AI tools to accelerate your workflow.
                </p>
                {kit.docsUrl && (
                    <a
                        href={kit.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
                    >
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
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Open Documentation
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <ScrollArea className="max-h-[90vh]">
                    <div className="p-6">
                        <DialogHeader className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {kit.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <DialogTitle className="text-2xl font-bold">{kit.name}</DialogTitle>
                            <DialogDescription className="text-base">
                                {kit.description}
                            </DialogDescription>
                        </DialogHeader>

                        {renderContent()}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
