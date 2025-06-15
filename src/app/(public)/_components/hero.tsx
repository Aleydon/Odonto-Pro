import Image from 'next/image';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="flex-2 space-y-8 max-w-3xl">
            <h1 className="text-3xl font-bold lg:text-5xl max-w-2xl tracking-tight">
              Find the best professionals in one place!
            </h1>
            <p className="text-base md:text-lg text-zinc-700">
              We are a platform for healthcare professionals focused on
              streamlining their care in a simplified and organized way.
            </p>
            <Button className="w-fit px-6 font-semibold bg-emerald-500 hover:bg-emerald-400">
              Available professionals
            </Button>
          </article>
          <div className="hidden lg:block">
            <Image
              className="object-contain"
              src="/doctor-hero.png"
              priority
              quality={100}
              width={340}
              height={400}
              alt="Illustrative photo, healthcare professional"
            />
          </div>
        </main>
      </div>
    </section>
  );
}
