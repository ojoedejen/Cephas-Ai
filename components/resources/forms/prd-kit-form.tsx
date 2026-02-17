'use client';

import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Checkbox } from '../../ui/checkbox';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Card } from '../../ui/card';

export function PRDKitForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    const [formData, setFormData] = useState({
        projectName: '',
        platforms: [] as string[],
        coreProblem: '',
        proposedSolution: '',
        coreTechnology: '',
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

    const handlePlatformToggle = (platform: string) => {
        setFormData(prev => ({
            ...prev,
            platforms: prev.platforms.includes(platform)
                ? prev.platforms.filter(p => p !== platform)
                : [...prev.platforms, platform]
        }));
    };

    return (
        <div className="space-y-6">
            {/* Progress Indicator */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Step {currentStep} of {totalSteps}</span>
                    <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            {/* Step Content */}
            <Card className="p-6">
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Core Concept</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                This foundation will be used throughout your entire PRD
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="projectName">
                                Project Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="projectName"
                                placeholder="e.g., AgriConnect - Farmer-to-Market Platform"
                                value={formData.projectName}
                                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground">Project name is required</p>
                        </div>

                        <div className="space-y-3">
                            <Label>
                                Target Platform(s) <span className="text-red-500">*</span>
                            </Label>
                            {['Mobile App (iOS/Android)', 'Web App (Desktop/Mobile Web)', 'USSD', 'WhatsApp Bot', 'SMS-based Service'].map((platform) => (
                                <div key={platform} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={platform}
                                        checked={formData.platforms.includes(platform)}
                                        onCheckedChange={() => handlePlatformToggle(platform)}
                                    />
                                    <label
                                        htmlFor={platform}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {platform}
                                    </label>
                                </div>
                            ))}
                            <p className="text-xs text-muted-foreground">Select at least one platform</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coreProblem">
                                Core Problem <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                id="coreProblem"
                                placeholder="Describe the main problem your product solves..."
                                rows={4}
                                value={formData.coreProblem}
                                onChange={(e) => setFormData({ ...formData, coreProblem: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground">Core problem is required</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="proposedSolution">
                                Proposed Solution <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                id="proposedSolution"
                                placeholder="Describe how your product solves the problem..."
                                rows={4}
                                value={formData.proposedSolution}
                                onChange={(e) => setFormData({ ...formData, proposedSolution: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground">Proposed solution is required</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coreTechnology">
                                Core Technology <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="coreTechnology"
                                placeholder="e.g., React, Node.js, Python, Flutter, etc."
                                value={formData.coreTechnology}
                                onChange={(e) => setFormData({ ...formData, coreTechnology: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground">Core technology is required</p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>Note:</strong> Inputs are not persisted in this MVP
                            </p>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Target Users</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Define who will use your product and their characteristics
                            </p>
                        </div>
                        <p className="text-muted-foreground">
                            This section helps you identify your primary user personas, their pain points, and how your product serves them.
                        </p>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Features & User Stories</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                List the key features and user stories for your product
                            </p>
                        </div>
                        <p className="text-muted-foreground">
                            Define the core features and write user stories in the format: "As a [user type], I want to [action] so that [benefit]"
                        </p>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Scope Definition</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Define what's in scope and out of scope for your MVP
                            </p>
                        </div>
                        <p className="text-muted-foreground">
                            Clearly define the boundaries of your project. What features are essential for launch, and what can wait for future iterations?
                        </p>
                    </div>
                )}

                {currentStep === 5 && (
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Success Metrics</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Define how you'll measure the success of your product
                            </p>
                        </div>
                        <p className="text-muted-foreground">
                            Identify key performance indicators (KPIs) and metrics that will help you track the success and adoption of your product.
                        </p>

                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-6">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                                🎉 Ready to Generate Your PRD!
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                                Once you complete all sections, you'll receive AI-ready prompts for Cursor, Trae, v0, and Bolt to build your product step-by-step.
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
                >
                    {currentStep === totalSteps ? 'Complete' : 'Next'}
                    {currentStep < totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
