import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Contact() {
  const info = photographerInfo;

  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${info.name}.`}
      />

      <div className="min-h-screen">
        <section className="border-b border-border bg-gradient-to-b from-secondary/50 to-background px-6 pt-36 pb-20 md:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Say hello</p>
              <h1 className="mt-3 text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
                Get in Touch
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base font-light text-muted-foreground md:text-lg">
                {info.availability}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="bg-gradient-to-br from-primary to-[hsl(222_70%_12%)] p-8 text-primary-foreground">
                <h2 className="text-3xl font-light">Hi, I'm {info.name} 👋</h2>
                <p className="mt-2 text-blue-100/80">
                  Feel free to reach out — my parents help me check messages.
                </p>
              </div>

              <div className="space-y-6 p-8">
                <ContactRow icon={Mail} label="Email">
                  <a href={`mailto:${info.email}`} className="hover:text-accent">
                    {info.email}
                  </a>
                </ContactRow>

                <Separator />

                <ContactRow icon={MapPin} label="Location">
                  {info.location}
                </ContactRow>

                <Separator />

                <ContactRow icon={GraduationCap} label="School">
                  {info.currentSchool}
                </ContactRow>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 text-base font-light text-foreground md:text-lg">{children}</p>
      </div>
    </div>
  );
}
