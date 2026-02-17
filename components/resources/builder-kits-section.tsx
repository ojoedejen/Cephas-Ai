'use client';

import { useState } from 'react';
import { builderKits } from '@/lib/data/builder-kits-data';
import { BuilderKit } from '@/lib/types/resources';
import { BuilderKitCard } from './builder-kit-card';
import { BuilderKitModal } from './builder-kit-modal';

export function BuilderKitsSection() {
    const [selectedKit, setSelectedKit] = useState<BuilderKit | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleKitClick = (kit: BuilderKit) => {
        setSelectedKit(kit);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {builderKits.map((kit) => (
                    <BuilderKitCard
                        key={kit.id}
                        kit={kit}
                        onClick={() => handleKitClick(kit)}
                    />
                ))}
            </div>

            <BuilderKitModal
                kit={selectedKit}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
            />
        </>
    );
}
