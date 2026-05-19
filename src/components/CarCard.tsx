'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Car as CarType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';

interface CarCardProps {
  car: CarType;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 gold-border">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={car.imageUrl}
          alt={car.name}
          data-ai-hint={car.imageHint}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,14%)]/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium gold-text bg-[hsl(222,47%,14%)]/80 px-3 py-1 rounded-sm uppercase tracking-wider">Premium</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <h3 className="font-headline text-xl font-bold text-white">{car.name}</h3>
          <div className="flex items-baseline gap-1 bg-[hsl(222,47%,14%)]/90 px-3 py-1 gold-border rounded-sm">
            {car.originalPricePerDay && (
              <span className="text-xs text-gray-500 line-through">${car.originalPricePerDay}</span>
            )}
            <span className="font-headline text-lg font-bold gold-text">${car.pricePerDay}</span>
            <span className="text-xs text-gray-500">/día</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{car.description}</p>
        <div className="flex flex-wrap gap-1.5">
            {car.features.slice(0, 4).map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs font-normal gold-text border-accent/30 rounded-sm">{feature}</Badge>
            ))}
            {car.features.length > 4 && (
                <Badge variant="outline" className="text-xs rounded-sm">+{car.features.length - 4}</Badge>
            )}
        </div>
        <Button asChild className="w-full bg-[hsl(222,47%,14%)] hover:bg-[hsl(222,47%,20%)] text-accent gold-border rounded-sm">
            <Link href={`/reserva?carId=${car.id}`}>
                Rentar Ahora
            </Link>
        </Button>
      </div>
    </div>
  );
}
