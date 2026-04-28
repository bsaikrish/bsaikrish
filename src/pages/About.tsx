import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { GraduationCap, Users, Palette, BookOpen } from 'lucide-react';

export default function About() {
  const info = photographerInfo;

  return (
    <>
      <SEOHead
        title="About"
        description={`About ${info.name} — ${info.tagline}.`}
        image={info.portraitImage}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-secondary/50 to-background px-6 py-28 pt-36 md:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Get to know me
              </p>
              <h1 className="mt-3 text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
                About Me
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Split */}
        <section className="px-6 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
                  <img
                    src={info.portraitImage}
                    alt={`${info.name} portrait`}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-4xl font-light tracking-tight md:text-5xl">{info.name}</h2>
                  <p className="text-lg font-light text-accent">{info.tagline}</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {info.biography.split('\n\n').map((p, i) => (
                    <p key={i} className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="space-y-3 rounded-xl border border-border bg-card p-5">
                  <p className="text-base font-light leading-relaxed text-foreground">
                    {info.approach}
                  </p>
                </div>

                <dl className="grid grid-cols-2 gap-4 pt-2 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Born</dt>
                    <dd className="mt-1 font-medium">{info.dateOfBirth}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Grade</dt>
                    <dd className="mt-1 font-medium">{info.grade}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Lives in</dt>
                    <dd className="mt-1 font-medium">{info.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Email</dt>
                    <dd className="mt-1 break-all font-medium">
                      <a href={`mailto:${info.email}`} className="hover:text-accent">{info.email}</a>
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facts grid */}
        <section className="border-t border-border bg-secondary/30 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-light tracking-tight md:text-4xl">A few fun facts</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <FactCard icon={GraduationCap} title="Education">
                <p className="font-medium">{info.currentSchool}</p>
                <p className="mt-2 text-sm text-muted-foreground">Previously: {info.previousSchool}</p>
              </FactCard>

              <FactCard icon={BookOpen} title="Favourite Subject">
                <p className="text-2xl font-light text-accent">{info.favoriteSubject}</p>
                <p className="mt-1 text-sm text-muted-foreground">Numbers make sense to me.</p>
              </FactCard>

              <FactCard icon={Palette} title="Favourite Colours">
                <div className="mt-1 flex gap-2">
                  <span className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white">Blue</span>
                  <span className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white">Black</span>
                </div>
              </FactCard>

              <FactCard icon={Users} title="Family">
                <ul className="space-y-1 text-sm">
                  {info.family?.map((f) => (
                    <li key={f.role}>
                      <span className="text-muted-foreground">{f.role}:</span>{' '}
                      <span className="font-medium">{f.name}</span>
                    </li>
                  ))}
                </ul>
              </FactCard>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function FactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h3>
      <div className="text-foreground">{children}</div>
    </div>
  );
}
