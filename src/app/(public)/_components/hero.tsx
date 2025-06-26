import Image from 'next/image';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-20 pb-4 sm:px-6 sm:pb-0 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="max-w-3xl flex-2 space-y-8">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight lg:text-5xl">
              Find the best professionals in one place!
            </h1>
            <p className="text-base text-zinc-700 md:text-lg">
              We are a platform for healthcare professionals focused on
              streamlining their care in a simplified and organized way.
            </p>
            <Button className="w-fit bg-emerald-500 px-6 font-semibold hover:bg-emerald-400">
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
