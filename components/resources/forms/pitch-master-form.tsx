'use client';

import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { Card } from '../../ui/card';

export function PitchMasterForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;

    const [formData, setFormData] = useState({
        companyName: '',
        targetAudience: '',
        problem: '',
        solution: '',
        keyBenefit: '',
        secretSauce: '',
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
                    <span>Step {currentStep} of {totalSteps}: The Core Story</span>
                    <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                    <Sparkles className="h-6 w-6 text-purple-500" />
                    Pitch Master Kit for Gamma
                </h3>
                <p className="text-sm text-muted-foreground">
                    Part 1: The Core Story - This foundation will be used throughout your entire deck
                </p>
            </div>

            {/* Step Content */}
            <Card className="p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="companyName" className="text-base font-semibold">
                                Company / Product Name
                            </Label>
                            <Input
                                id="companyName"
                                placeholder="Enter your company or product name"
                                className="mt-2"
                                value={formData.companyName}
                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            />
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="targetAudience" className="text-base font-semibold">
                                Target Audience
                            </Label>
                            <Input
                                id="targetAudience"
                                placeholder="e.g., SMB owners, Gen Z creators, Enterprise CTOs"
                                className="mt-2"
                                value={formData.targetAudience}
                                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Who is this pitch for? Be specific about your audience.
                            </p>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="problem" className="text-base font-semibold">
                                The Problem
                            </Label>
                            <Textarea
                                id="problem"
                                placeholder="What problem are you solving? Make it relatable and urgent."
                                rows={5}
                                className="mt-2"
                                value={formData.problem}
                                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Paint a vivid picture of the pain point your audience faces.
                            </p>
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="solution" className="text-base font-semibold">
                                The Solution
                            </Label>
                            <Textarea
                                id="solution"
                                placeholder="How does your product solve this problem?"
                                rows={5}
                                className="mt-2"
                                value={formData.solution}
                                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Clearly explain your solution and how it addresses the problem.
                            </p>
                        </div>
                    </div>
                )}

                {currentStep === 5 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="keyBenefit" className="text-base font-semibold">
                                The Key Benefit
                            </Label>
                            <Textarea
                                id="keyBenefit"
                                placeholder="What's the main benefit users get from your solution?"
                                rows={4}
                                className="mt-2"
                                value={formData.keyBenefit}
                                onChange={(e) => setFormData({ ...formData, keyBenefit: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Focus on the transformation or outcome, not just features.
                            </p>
                        </div>
                    </div>
                )}

                {currentStep === 6 && (
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="secretSauce" className="text-base font-semibold">
                                Your "Secret Sauce"
                            </Label>
                            <Textarea
                                id="secretSauce"
                                placeholder="What makes you unique? Why can't competitors easily copy you?"
                                rows={5}
                                className="mt-2"
                                value={formData.secretSauce}
                                onChange={(e) => setFormData({ ...formData, secretSauce: e.target.value })}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                Your competitive advantage, proprietary technology, or unique insight.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-6">
                            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                                <Sparkles className="h-5 w-5" />
                                Ready to Generate Your Gamma Pitch Deck!
                            </h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                                Complete all sections to generate ready-to-use Gamma prompts, executive summary template, and demo script.
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
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                    {currentStep === totalSteps ? 'Generate Deck' : 'Next'}
                    {currentStep < totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
