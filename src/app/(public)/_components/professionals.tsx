import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clinics available
        </h2>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  className="object-cover"
                  src="/doctor.png"
                  alt="Professional"
                  priority
                  fill
                />
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clinica Centro</h3>
                    <p className="text-sm text-gray-500">
                      Rua x, Centro, Campo Grande - MS
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <Link
                  className="flex items-center justify-center w-full bg-emerald-500 
                  hover:bg-emerald-400 transition-all duration-200  text-white py-2 rounded-md text-sm font-medium
                  md:text-base"
                  href="#"
                >
                  Schedule appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
