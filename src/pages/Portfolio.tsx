import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Sparkles } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';

const achievementIcons = [Trophy, Medal, Award, Sparkles];

export default function Portfolio() {
  const info = photographerInfo;

  return (
    <>
      <SEOHead
        title="Achievements"
        description={`Achievements and highlights of ${info.name}.`}
      />

      <div className="min-h-screen">
        <section className="border-b border-border bg-gradient-to-b from-secondary/50 to-background px-6 pt-36 pb-20 md:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Highlights
              </p>
              <h1 className="mt-3 text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
                Achievements
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base font-light text-muted-foreground md:text-lg">
                A growing collection of wins, medals and moments that keep me chasing bigger goals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {info.awards.map((award, i) => {
              const Icon = achievementIcons[i % achievementIcons.length];
              return (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-accent/10 transition-transform group-hover:scale-125" />
                  <div className="relative flex items-start gap-5">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white shadow-lg">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Achievement 0{i + 1}
                      </p>
                      <p className="mt-2 text-xl font-light text-foreground">{award}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Career goals banner */}
        <section className="border-t border-border bg-gradient-to-br from-[hsl(222_70%_10%)] to-black px-6 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-300">
              What's next
            </p>
            <h2 className="mt-3 text-3xl font-light md:text-4xl">Chasing bigger dreams</h2>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left md:grid-cols-2">
              {info.careerGoals?.map((g, i) => (
                <div
                  key={g}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-2xl font-light text-blue-400">0{i + 1}</div>
                  <p className="mt-1 text-base font-light text-blue-50">{g}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
