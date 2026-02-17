'use client';

import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { ChevronRight, ChevronLeft, Calendar } from 'lucide-react';
import { Card } from '../../ui/card';

export function SocialMediaForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const [formData, setFormData] = useState({
        projectName: '',
        projectDescription: '',
        targetAudience: '',
        contentGoals: '',
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
                    <span>Step {currentStep} of {totalSteps}</span>
                    <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                    <Calendar className="h-6 w-6 text-orange-500" />
                    Social Media Content Generator
                </h3>
                <p className="text-sm text-muted-foreground">
                    Fill out the fields below to generate a tailored social media content calendar
                </p>
            </div>

            {/* Step Content */}
            <Card className="p-6 bg-gradient-to-br from-orange-50/50 to-pink-50/50 dark:from-orange-950/20 dark:to-pink-950/20">
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Project Identity Setup</h4>

                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="projectName" className="text-base font-semibold">
                                        Project Name <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="projectName"
                                        placeholder="e.g., EcoFriendly Fashion Brand"
                                        className="mt-2"
                                        value={formData.projectName}
                                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="projectDescription" className="text-base font-semibold">
                                        Project Description <span className="text-red-500">*</span>
                                    </Label>
                                    <Textarea
                                        id="projectDescription"
                                        placeholder="Briefly describe your project, product, or service..."
                                        rows={4}
                                        className="mt-2"
                                        value={formData.projectDescription}
                                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Content Strategy Planning</h4>

                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="targetAudience" className="text-base font-semibold">
                                        Target Audience <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="targetAudience"
                                        placeholder="e.g., Millennials interested in sustainable fashion"
                                        className="mt-2"
                                        value={formData.targetAudience}
                                        onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Who are you trying to reach with your content?
                                    </p>
                                </div>

                                <div>
                                    <Label htmlFor="contentGoals" className="text-base font-semibold">
                                        Content Goals <span className="text-red-500">*</span>
                                    </Label>
                                    <Textarea
                                        id="contentGoals"
                                        placeholder="e.g., Increase brand awareness, drive website traffic, generate leads..."
                                        rows={4}
                                        className="mt-2"
                                        value={formData.contentGoals}
                                        onChange={(e) => setFormData({ ...formData, contentGoals: e.target.value })}
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        What do you want to achieve with your social media content?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Platform & Duration Selection</h4>

                            <p className="text-muted-foreground mb-4">
                                Select your target platforms and campaign duration to generate a customized content calendar.
                            </p>

                            <div className="bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mt-6">
                                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    Ready to Generate Your Content Calendar!
                                </h4>
                                <p className="text-sm text-orange-700 dark:text-orange-300">
                                    Complete all sections to receive a tailored social media content calendar with post templates and hashtag recommendations.
                                </p>
                            </div>
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
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                    {currentStep === totalSteps ? 'Generate Calendar' : 'Next'}
                    {currentStep < totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
