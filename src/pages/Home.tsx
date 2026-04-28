import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, BookOpen, Gamepad2 } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  const info = photographerInfo;

  const stats = [
    { icon: Trophy, label: 'Gold Medal', value: '100m' },
    { icon: BookOpen, label: 'Favourite', value: 'Maths' },
    { icon: Gamepad2, label: 'Dream', value: 'Chess GM' },
  ];

  return (
    <>
      <SEOHead
        title={`${info.name} — Student Portfolio`}
        description={info.heroIntroduction}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[hsl(222_70%_8%)] via-[hsl(222_60%_14%)] to-black">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[hsl(217_91%_60%/0.25)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[hsl(222_80%_40%/0.25)] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 lg:gap-16 lg:pt-40 lg:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-white"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200 backdrop-blur">
                Portfolio · Est. 2016
              </span>
              <h1 className="text-5xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Hi, I'm <span className="font-semibold text-blue-400">{info.name}</span>.
              </h1>
              <p className="text-lg font-light text-blue-100/80 md:text-xl lg:text-2xl">
                {info.tagline}
              </p>
              <p className="max-w-xl text-base font-light leading-relaxed text-blue-100/70 md:text-lg">
                {info.heroIntroduction}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/40"
                >
                  About Me
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10"
                >
                  My Achievements
                </Link>
              </div>

              {/* Stat chips */}
              <div className="grid grid-cols-3 gap-3 pt-8">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <s.icon className="mb-2 size-5 text-blue-400" />
                    <div className="text-xs uppercase tracking-widest text-blue-200/70">
                      {s.label}
                    </div>
                    <div className="text-lg font-medium text-white">{s.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-lg"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/40 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
                <img
                  src={info.fullImage}
                  alt={`${info.name} — full portrait`}
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <p className="text-sm uppercase tracking-widest text-blue-300">Class of 2026</p>
                  <p className="text-xl font-light text-white">{info.currentSchool}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hobbies strip */}
        <section className="border-y border-border bg-secondary/50 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What I love doing
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {info.hobbies?.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-primary"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Career goals */}
        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Dream Big</p>
                <h2 className="mt-3 text-4xl font-light tracking-tight md:text-5xl">
                  My Career Goals
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 md:grid-cols-2">
              {info.careerGoals?.map((goal, i) => (
                <ScrollReveal key={goal} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/10 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6" />
                    <div className="relative">
                      <div className="mb-3 text-3xl font-light text-accent">0{i + 1}</div>
                      <p className="text-lg font-light leading-relaxed text-foreground">{goal}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-base font-medium text-accent hover:underline"
              >
                Say hello <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
