'use client';

import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { ChevronRight, ChevronLeft, Palette } from 'lucide-react';
import { Card } from '../../ui/card';

export function BrandingKitForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState({
        businessName: '',
        industry: '',
        targetAudience: '',
        keyDifferentiator: '',
        brandPersonality: '',
    });

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="space-y-6">
            {/* Progress Indicator */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Step {currentStep} of {totalSteps}: Core Identity</span>
                    <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                    <Palette className="h-6 w-6 text-blue-500" />
                    Complete Branding Kit
                </h3>
                <p className="text-sm text-muted-foreground">
                    Step 2 of 4: Your Core Brand Identity
                </p>
            </div>

            {/* Step Content */}
            <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-blue-950/20 dark:to-teal-950/20">
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="businessName" className="text-base font-semibold">
                                Business Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="businessName"
                                placeholder="e.g., Idea title or your business name"
                                className="mt-2"
                                value={formData.businessName}
                                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            />
                            <p className="text-xs text-red-500 mt-1">Business name is required.</p>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="industry" className="text-base font-semibold">
                                Industry <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="industry"
                                placeholder="e.g., Fintech, Healthtech"
                                className="mt-2"
                                value={formData.industry}
                                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            />
                            <p className="text-xs text-red-500 mt-1">Industry is required.</p>
                        </div>

                        <div>
                            <Label htmlFor="targetAudience" className="text-base font-semibold">
                                Target Audience <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="targetAudience"
                                placeholder="e.g., SMB owners, Gen Z creators"
                                className="mt-2"
                                value={formData.targetAudience}
                                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                            />
                            <p className="text-xs text-red-500 mt-1">Target audience is required.</p>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="keyDifferentiator" className="text-base font-semibold">
                                Key Differentiator <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="keyDifferentiator"
                                placeholder="e.g., Faster onboarding, higher accuracy"
                                className="mt-2"
                                value={formData.keyDifferentiator}
                                onChange={(e) => setFormData({ ...formData, keyDifferentiator: e.target.value })}
                            />
                            <p className="text-xs text-red-500 mt-1">Key differentiator is required.</p>
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="brandPersonality" className="text-base font-semibold">
                                Brand Personality (3–5 adjectives) <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="brandPersonality"
                                placeholder="e.g., friendly, credible, bold"
                                className="mt-2"
                                value={formData.brandPersonality}
                                onChange={(e) => setFormData({ ...formData, brandPersonality: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Use commas between adjectives, e.g., "modern, playful, trustworthy".
                            </p>
                            <p className="text-xs text-red-500 mt-1">Please provide at least 3 adjectives.</p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>Note:</strong> Inputs are not persisted in this MVP
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                                <Palette className="h-5 w-5" />
                                Ready to Build Your Brand!
                            </h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                Complete all sections to generate your brand strategy document, logo concepts, and brand voice guidelines.
                            </p>
                        </div>
                    </div>
                )}
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
                <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                </Button>
                <Button
                    onClick={handleNext}
                    disabled={currentStep === totalSteps}
                    className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                >
                    {currentStep === totalSteps ? 'Generate Brand Kit' : 'Next'}
                    {currentStep < totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
