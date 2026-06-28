import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Anchor,
  Bike,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Droplets,
  Facebook,
  Flame,
  Flower2,
  Heart,
  Instagram,
  MapPin,
  Mail,
  Menu,
  PawPrint,
  Phone,
  Sailboat,
  Sun,
  TreePine,
  Trees,
  Users,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroBeach from "@/assets/hero-beach.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import bedroom from "@/assets/bedroom.jpg";
import terrace from "@/assets/terrace.jpg";
import sunset from "@/assets/sunset.jpg";
import petsImg from "@/assets/pets.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Villa Sonnenstrand · Boutique Ferienhaus in Zinnowitz" },
      {
        name: "description",
        content:
          "Romantisches Boutique-Gästehaus in Zinnowitz an der Ostsee. 400 m zum Strand, 4–6 Gäste, haustierfreundlich, Fahrrad- & Wassersportverleih.",
      },
      { property: "og:title", content: "Villa Sonnenstrand · Zinnowitz Ostsee" },
      {
        property: "og:description",
        content: "Sonnendurchflutetes Ferienhaus im French Coastal Stil – 400 m zum Strand.",
      },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Index() {
  const [lang, setLang] = useState<"DE" | "EN" | "PL">("DE");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [withPet, setWithPet] = useState(false);
  const [bikeAdd, setBikeAdd] = useState(false);
  const [waterAdd, setWaterAdd] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Anfrage gesendet", {
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
  };

  const nav = [
    { href: "#unterkunft", label: "Unterkunft" },
    { href: "#haustiere", label: "Haustiere" },
    { href: "#verleih", label: "Verleih" },
    { href: "#galerie", label: "Galerie" },
    { href: "#faq", label: "FAQ" },
    { href: "#buchen", label: "Buchen" },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Toaster position="top-center" />

      {/* Top weather bar */}
      <div className="hidden border-b border-border/60 bg-gradient-sky/60 text-xs text-muted-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Sun className="h-3.5 w-3.5 text-accent-foreground" aria-hidden />
              <span>Zinnowitz · Luft <strong className="font-semibold text-foreground">22°C</strong></span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Droplets className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span>Ostsee · Wasser <strong className="font-semibold text-foreground">18°C</strong></span>
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <Cloud className="h-3.5 w-3.5" aria-hidden />
              <span>Leichte Brise · 8 km/h</span>
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> Usedom, Deutschland
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-sun shadow-soft">
              <Anchor className="h-4.5 w-4.5 text-foreground" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-xl leading-none font-semibold tracking-tight">
                Villa Sonnenstrand
              </span>
              <span className="block truncate text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Zinnowitz · Usedom
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              role="group"
              aria-label="Sprache auswählen"
              className="hidden items-center rounded-full border border-border bg-card p-1 text-xs font-semibold md:inline-flex"
            >
              {(["DE", "EN", "PL"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`min-w-9 rounded-full px-2.5 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <Button asChild className="hidden rounded-full md:inline-flex">
              <a href="#buchen">Jetzt buchen</a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <nav aria-label="Mobile Navigation" className="mx-auto max-w-7xl px-6 py-3">
              <ul className="flex flex-col">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <Button asChild className="w-full rounded-full">
                    <a href="#buchen" onClick={() => setMobileOpen(false)}>
                      Jetzt buchen
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroBeach}
            alt="Sonniger Ostseestrand in Zinnowitz auf Usedom"
            width={1920}
            height={1280}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/30 to-background/90" aria-hidden />

          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 md:py-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <Badge className="rounded-full border border-border/70 bg-card/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-foreground uppercase backdrop-blur">
                <Sun className="mr-1.5 h-3.5 w-3.5" aria-hidden /> Boutique Ferienhaus · Ostsee
              </Badge>

              <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                Sonnentage am Meer,
                <span className="block italic text-primary">romantisch eingerichtet.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
                Unser French-Coastal-Refugium in Zinnowitz vereint helle Räume, weiche Pastelltöne und
                den Duft der Ostsee – Ihr stilvoller Rückzugsort auf Usedom.
              </p>

              <p className="mt-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-foreground/80">
                <span className="inline-flex items-center gap-1.5"><Waves className="h-4 w-4 text-primary" aria-hidden /> Nur 400 m zum Strand</span>
                <span aria-hidden className="text-muted-foreground">·</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" aria-hidden /> Für 4–6 Gäste</span>
                <span aria-hidden className="text-muted-foreground">·</span>
                <span className="inline-flex items-center gap-1.5"><PawPrint className="h-4 w-4 text-primary" aria-hidden /> Haustiere willkommen</span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7 shadow-soft">
                  <a href="#buchen">Jetzt buchen</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/20 bg-card/70 px-7 backdrop-blur">
                  <a href="#verleih">Verleih entdecken</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AMENITIES */}
        <Section id="unterkunft" eyebrow="Unterkunft" title="Boutique-Komfort am Meer" lead="Liebevoll kuratierte Räume, ausgestattet mit allem, was Sie für unvergessliche Tage an der Ostsee brauchen.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, title: "Platz für 4–6 Gäste", text: "Großzügige Schlafzimmer mit französischen Vintage-Betten und feinster Bettwäsche." },
              { icon: Sun, title: "Private Terrasse", text: "Sonnige Frühstücksterrasse mit Lavendel, Korbsesseln und Blick ins Grüne." },
              { icon: Flame, title: "BBQ-Grill", text: "Hochwertiger Grill für laue Sommerabende unter dem Sternenhimmel." },
              { icon: Wifi, title: "High-Speed WLAN", text: "Glasfaser-Internet im gesamten Haus – auch das Homeoffice am Meer gelingt." },
              { icon: Flower2, title: "Privater Garten", text: "Kleiner, eingewachsener Garten mit Hortensien und Rosen – Ihre eigene Oase." },
              { icon: Waves, title: "400 m zum Ostseestrand", text: "Ein Spaziergang durch die Dünen genügt – schon stehen Sie im weißen Sand.", badge: true },
            ].map(({ icon: Icon, title, text, badge }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="group h-full border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="p-7">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-sun text-foreground">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                    {badge && (
                      <Badge className="mt-4 rounded-full bg-primary/10 text-primary hover:bg-primary/10">
                        <MapPin className="mr-1 h-3 w-3" aria-hidden /> 400 m zum Strand
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PETS */}
        <section id="haustiere" className="bg-gradient-sky">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="rounded-full bg-blush/40 text-foreground hover:bg-blush/40">
                <PawPrint className="mr-1.5 h-3.5 w-3.5" aria-hidden /> Haustiere ausdrücklich willkommen
              </Badge>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Vier Pfoten reisen
                <span className="italic text-primary"> hier erster Klasse.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Wir glauben, ein Urlaub ist erst dann perfekt, wenn auch der beste Freund dabei sein darf.
                Deshalb empfangen wir Ihren Vierbeiner mit einer kleinen Aufmerksamkeit.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  { icon: Heart, text: "Kostenlose Hundenäpfe & weiche Decken bei der Ankunft" },
                  { icon: TreePine, text: "Wunderschöne Hunde-Spazierwege direkt vor der Haustür" },
                  { icon: Waves, text: "Hundefreundlicher Strandabschnitt nur 5 Minuten entfernt" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-card shadow-card">
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                    </span>
                    <span className="text-base text-foreground/90">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-sun opacity-60 blur-2xl" aria-hidden />
              <img
                src={petsImg}
                alt="Glücklicher Hund am Ostseestrand"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
              />
            </motion.div>
          </div>
        </section>

        {/* RENTAL */}
        <Section id="verleih" eyebrow="Verleih" title="Usedom auf zwei Rädern oder dem Wasser" lead="Buchen Sie Ihre Ausrüstung gleich mit – wir halten alles für Sie bereit.">
          <Tabs defaultValue="bikes" className="w-full">
            <TabsList className="mx-auto mb-8 grid h-auto w-full max-w-md grid-cols-2 rounded-full bg-secondary p-1">
              <TabsTrigger value="bikes" className="rounded-full py-2.5 data-[state=active]:bg-card data-[state=active]:shadow-card">
                <Bike className="mr-2 h-4 w-4" aria-hidden /> Fahrräder
              </TabsTrigger>
              <TabsTrigger value="water" className="rounded-full py-2.5 data-[state=active]:bg-card data-[state=active]:shadow-card">
                <Sailboat className="mr-2 h-4 w-4" aria-hidden /> Wassersport
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bikes">
              <RentalGrid
                items={[
                  { title: "City Cruiser", desc: "Komfortables Hollandrad für entspannte Touren entlang der Promenade.", price: "12 €/Tag" },
                  { title: "E-Bike Premium", desc: "Modernes Pedelec mit 80 km Reichweite – ideal für die ganze Insel.", price: "29 €/Tag" },
                  { title: "Familien-Paket", desc: "Zwei Erwachsenen- und zwei Kinderräder inkl. Helme & Schlössern.", price: "55 €/Tag" },
                ]}
                onAdd={setBikeAdd}
                checked={bikeAdd}
              />
            </TabsContent>

            <TabsContent value="water">
              <RentalGrid
                items={[
                  { title: "Kajak (2-Sitzer)", desc: "Stabiles Tourenkajak für Erkundungen entlang der Küste.", price: "35 €/Tag" },
                  { title: "Kanadier", desc: "Klassisches Kanu für bis zu 3 Personen – romantisch im Sonnenuntergang.", price: "39 €/Tag" },
                  { title: "SUP Board", desc: "Stand-Up-Paddleboard inkl. Paddel & Leash für ruhige Tage.", price: "25 €/Tag" },
                ]}
                onAdd={setWaterAdd}
                checked={waterAdd}
              />
            </TabsContent>
          </Tabs>
        </Section>

        {/* GALLERY */}
        <Section id="galerie" eyebrow="Galerie" title="Ein Blick in unser Refugium" lead="Helle Räume, weiche Stoffe, das Licht der Ostsee.">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] md:grid-cols-4">
            <GalleryImg src={interiorLiving} alt="Shabby-chic Wohnzimmer im französischen Küstenstil" className="col-span-2 row-span-2" />
            <GalleryImg src={bedroom} alt="Sonniges Boutique-Schlafzimmer mit Meerblick" className="col-span-2" />
            <GalleryImg src={terrace} alt="Private Terrasse mit Lavendel" />
            <GalleryImg src={sunset} alt="Sonnenuntergang über der Ostsee in Zinnowitz" />
            <GalleryImg src={heroBeach} alt="Weißer Sandstrand von Zinnowitz" className="col-span-2" />
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="FAQ" title="Häufig gestellte Fragen" lead="Antworten auf die Dinge, die Gäste am meisten interessieren.">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                {
                  q: "Wann sind Check-in und Check-out?",
                  a: "Check-in ist von 15:00 bis 19:00 Uhr möglich. Check-out bitten wir bis 11:00 Uhr. Späterer Check-in auf Anfrage gerne möglich.",
                },
                {
                  q: "Welche Regeln gelten für Haustiere?",
                  a: "Bis zu zwei gut erzogene Hunde sind herzlich willkommen (15 € pro Hund/Nacht). Wir stellen Näpfe und Decken. Auf Möbel bitte nicht – Garten und Strand laden zum Toben ein.",
                },
                {
                  q: "Wie ist die Stornierungs­bedingung?",
                  a: "Kostenfreie Stornierung bis 30 Tage vor Anreise. Danach werden 50 % fällig, ab 7 Tagen vor Anreise der volle Betrag. Wir empfehlen eine Reiserücktrittsversicherung.",
                },
                {
                  q: "Gibt es Parkplätze am Haus?",
                  a: "Ja, zwei private, kostenfreie Stellplätze direkt auf dem Grundstück gehören zur Unterkunft.",
                },
                {
                  q: "Ist das Haus für Kinder geeignet?",
                  a: "Absolut. Hochstuhl und Reisebett stehen kostenfrei bereit. Der flach abfallende Strand ist ideal für Familien.",
                },
              ].map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-card"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* BOOKING */}
        <section id="buchen" className="bg-gradient-sky">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">Buchung</p>
              <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
                Verfügbarkeit prüfen & anfragen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Wählen Sie Ihren Wunschzeitraum – wir bestätigen Ihre Anfrage persönlich innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[auto_1fr]">
              <Card className="border-border/60 bg-card shadow-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" aria-hidden /> Verfügbarkeits-Kalender
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="pointer-events-auto rounded-xl border border-border bg-background p-3"
                  />
                  <p className="mt-3 text-xs text-muted-foreground">
                    Grau markierte Tage sind bereits belegt.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card shadow-card">
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" id="name">
                      <Input id="name" required placeholder="Marie Mustermann" autoComplete="name" />
                    </Field>
                    <Field label="E-Mail" id="email">
                      <Input id="email" type="email" required placeholder="marie@beispiel.de" autoComplete="email" />
                    </Field>
                    <Field label="Anreise" id="arrival">
                      <Input id="arrival" type="date" required />
                    </Field>
                    <Field label="Abreise" id="departure">
                      <Input id="departure" type="date" required />
                    </Field>
                    <Field label="Anzahl Gäste" id="guests">
                      <Input id="guests" type="number" min={1} max={6} defaultValue={2} required />
                    </Field>

                    <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 sm:col-span-1">
                      <Label htmlFor="pet" className="flex items-center gap-2 text-sm font-medium">
                        <PawPrint className="h-4 w-4 text-primary" aria-hidden /> Mit Haustier?
                      </Label>
                      <Switch id="pet" checked={withPet} onCheckedChange={setWithPet} />
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="text-sm font-semibold">Extras zur Buchung hinzufügen</Label>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <ExtraBox
                          icon={Bike}
                          label="Fahrrad-Verleih"
                          checked={bikeAdd}
                          onChange={setBikeAdd}
                          id="extra-bike"
                        />
                        <ExtraBox
                          icon={Sailboat}
                          label="Wassersport-Verleih"
                          checked={waterAdd}
                          onChange={setWaterAdd}
                          id="extra-water"
                        />
                      </div>
                    </div>

                    <Field label="Nachricht (optional)" id="message" className="sm:col-span-2">
                      <Textarea id="message" rows={4} placeholder="Wünsche, Fragen, besondere Anlässe…" />
                    </Field>

                    <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-muted-foreground">
                        Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung.
                      </p>
                      <Button type="submit" size="lg" className="w-full rounded-full px-8 sm:w-auto">
                        Unverbindlich anfragen
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-sun shadow-soft">
                <Anchor className="h-4.5 w-4.5 text-foreground" aria-hidden />
              </span>
              <span className="font-display text-xl font-semibold">Villa Sonnenstrand</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ihr boutique Refugium an der Ostsee – sonnig, romantisch, herzlich. Wir freuen uns auf Sie.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: Phone, label: "WhatsApp Chat", href: "https://wa.me/491700000000" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: MapPin, label: "Google Maps", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>Strandpromenade 12<br />17454 Zinnowitz, Usedom</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href="mailto:hallo@villa-sonnenstrand.de" className="hover:text-foreground">
                  hallo@villa-sonnenstrand.de
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a href="tel:+491700000000" className="hover:text-foreground">+49 170 0000000</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Rechtliches</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Impressum</a></li>
              <li><a href="#" className="hover:text-foreground">Datenschutz</a></li>
              <li><a href="#" className="hover:text-foreground">AGB</a></li>
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-gradient-sky p-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Trees className="h-4 w-4 text-primary" aria-hidden />
                <strong className="text-foreground">Naturpark Usedom</strong>
              </div>
              <p className="mt-1">Wir reisen leise und respektieren die Insel, die uns Heimat ist.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Villa Sonnenstrand · Mit Liebe an der Ostsee gemacht.</p>
            <p>Hergestellt in Zinnowitz, Usedom 🌊</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- Helpers --- */

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
          {lead && <p className="mt-4 text-lg text-muted-foreground">{lead}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function GalleryImg({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl shadow-card ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
    </motion.figure>
  );
}

function RentalGrid({
  items,
  onAdd,
  checked,
}: {
  items: { title: string; desc: string; price: string }[];
  onAdd: (v: boolean) => void;
  checked: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it) => (
        <Card key={it.title} className="border-border/60 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
          <CardContent className="flex h-full flex-col p-7">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold">{it.title}</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {it.price}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            <label className="mt-5 flex cursor-pointer items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium transition hover:bg-secondary">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
                Zur Buchung hinzufügen
              </span>
              <Checkbox checked={checked} onCheckedChange={(v) => onAdd(Boolean(v))} aria-label={`${it.title} hinzufügen`} />
            </label>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Field({
  label,
  id,
  children,
  className = "",
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 ${className}`}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      {children}
    </div>
  );
}

function ExtraBox({
  icon: Icon,
  label,
  checked,
  onChange,
  id,
}: {
  icon: typeof Bike;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  id: string;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition ${
        checked ? "border-primary bg-primary/5" : "border-border bg-background hover:bg-secondary"
      }`}
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <Icon className="h-4 w-4 text-primary" aria-hidden /> {label}
      </span>
      <Checkbox id={id} checked={checked} onCheckedChange={(v) => onChange(Boolean(v))} />
    </label>
  );
}
