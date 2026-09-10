import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import catGym from "@/assets/cat-gym.jpg";
import ballsCombined from "@/assets/balls-combined.png.asset.json";
import catVolleyball from "@/assets/cat-volleyball.jpg";
import catCombat from "@/assets/cat-combat.jpg";
import catSwimming from "@/assets/cat-swimming.jpg";
import catGymnastics from "@/assets/cat-gymnastics.jpg";
import offerImg from "@/assets/offer.jpg";
import prodDumbbell from "@/assets/prod-dumbbell.jpg";
import prodBasketball from "@/assets/prod-basketball.jpg";
import prodCleats from "@/assets/prod-cleats.jpg";
import prodGloves from "@/assets/prod-gloves.jpg";

const TITLE = "ميدان — أدوات رياضية ومستلزمات جيم وكرة وسباحة";
const DESCRIPTION =
  "متجر ميدان لكل الأدوات والمستلزمات الرياضية في مصر: معدات جيم، كرة سلة وقدم ويد وطائرة، ألعاب قتالية، سباحة وجمباز بأسعار وضمان أصلي.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "ميدان",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressLocality: "القاهرة",
            addressCountry: "EG",
          },
          telephone: "+201001234567",
        }),
      },
    ],
  }),
});

type Category = {
  name: string;
  count: string;
  img: string;
  alt: string;
  items: string[];
};

const categories: Category[] = [
  {
    name: "معدات الجيم",
    count: "+180 منتج",
    img: catGym,
    alt: "دمبلز وكيتل بل على أرضية جيم",
    items: ["دمبل", "بار حديد", "كيتل بل", "حبال مقاومة", "بنش", "قفاز رفع"],
  },
  {
    name: "كرات رياضية",
    count: "+280 منتج",
    img: ballsCombined.url,
    alt: "كرات قدم وسلة ويد مع لاعبين في الخلفية",
    items: ["كرات قدم", "كرات سلة", "كرات يد", "أحذية ملاعب", "واقيات رياضية"],
  },
  {
    name: "كرة طائرة",
    count: "+62 منتج",
    img: catVolleyball,
    alt: "لاعبة كرة طائرة عند الشبكة",
    items: ["كرات طائرة", "شبكات وقوائم", "واقي كوع وركبة", "أحذية قفز"],
  },
  {
    name: "لعب قتالي",
    count: "+77 منتج",
    img: catCombat,
    alt: "قفازات ملاكمة وأدوات دفاع عن النفس",
    items: ["قفاز ملاكمة", "كيس لكم", "واقي رأس وفم", "بدل كاراتيه وتايكوندو"],
  },
  {
    name: "سباحة",
    count: "+54 منتج",
    img: catSwimming,
    alt: "سبّاح بنظارة وطاقية سباحة",
    items: ["نظارات سباحة", "طواقي", "مايوهات", "زعانف ولوح تدريب"],
  },
  {
    name: "جمباز",
    count: "+39 منتج",
    img: catGymnastics,
    alt: "مرتبة جمباز وأجهزة في صالة",
    items: ["مراتب أرضي", "عقلة وعارضة", "حبال وطوق", "شرائط إيقاعي"],
  },
];

const products = [
  {
    name: "دمبل قابل للتعديل ٢٠كجم",
    desc: "طقم رفع قوي",
    price: "1,850",
    img: prodDumbbell,
    alt: "دمبل قابل للتعديل",
  },
  {
    name: "كرة سلة احترافية",
    desc: "مقاس ٧ خارجي",
    price: "420",
    img: prodBasketball,
    alt: "كرة سلة برتقالي احترافية",
  },
  {
    name: "حذاء كرة قدم",
    desc: "مسمار طويل",
    price: "1,200",
    img: prodCleats,
    alt: "حذاء كرة قدم أسود",
  },
  {
    name: "قفاز ملاكمة ١٢ أوقية",
    desc: "جلد طبيعي",
    price: "980",
    img: prodGloves,
    alt: "قفاز ملاكمة أحمر",
  },
];

const brands = [
  "IRONFORGE",
  "ACE SPORT",
  "VOLT GEAR",
  "PRIME ATHLETICS",
  "STEELCORE",
  "NOVA FITNESS",
];

function BrandRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <span className="flex items-center gap-6 px-6" aria-hidden={hidden || undefined}>
      {brands.map((b) => (
        <span key={b} className="flex items-center gap-6">
          {b} <span className="text-primary">/</span>
        </span>
      ))}
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl leading-none font-black text-primary">⚡</span>
            <span className="text-lg font-black tracking-tight">ميدان</span>
            <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">
              / SPORTS GEAR
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a className="transition-colors hover:text-primary" href="#categories">
              الأقسام
            </a>
            <a className="transition-colors hover:text-primary" href="#offers">
              العروض
            </a>
            <a className="transition-colors hover:text-primary" href="#featured">
              الجديد
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              تواصل
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex">
              بحث
            </button>
            <button className="text-sm">الحساب</button>
            <button className="relative flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
              السلة
              <span className="absolute -top-2 -left-2 grid size-5 place-items-center rounded-full bg-foreground font-mono text-[11px] font-bold text-background">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,.14),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-6">
            <span className="animate-rise mb-5 inline-block font-mono text-[11px] tracking-[0.25em] text-primary-foreground/70 uppercase">
              EGYPT · SPORTS EQUIPMENT
            </span>
            <h1
              className="animate-rise text-6xl leading-[1.02] font-black text-balance text-primary-foreground md:text-7xl lg:text-8xl"
              style={{ animationDelay: "80ms" }}
            >
              العدّة اللي
              <br />
              تبني بطّلك
            </h1>
            <p
              className="animate-rise mt-6 max-w-[34ch] text-lg text-pretty text-primary-foreground/85 md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              أدوات رياضية ومستلزمات كاملة — جيم، كرة سلة، قدم، يد، طائرة، لعب قتالي، سباحة
              وجمباز. كل حاجة تحتاجها في مكان واحد.
            </p>
            <div
              className="animate-rise mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#categories"
                className="rounded-md bg-background px-7 py-4 font-bold text-foreground transition-colors hover:bg-card"
              >
                تسوّق الآن
              </a>
              <a
                href="#offers"
                className="rounded-md border border-primary-foreground/40 px-7 py-4 font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                شوف العروض
              </a>
            </div>
            <div
              className="animate-rise mt-10 flex gap-8 font-mono text-sm text-primary-foreground/80"
              style={{ animationDelay: "320ms" }}
            >
              <div>
                <span className="block text-2xl font-black text-primary-foreground">+12k</span>
                منتج
              </div>
              <div>
                <span className="block text-2xl font-black text-primary-foreground">24h</span>
                توصيل
              </div>
              <div>
                <span className="block text-2xl font-black text-primary-foreground">100%</span>
                أصلي
              </div>
            </div>
          </div>
          <div className="animate-rise md:col-span-6" style={{ animationDelay: "200ms" }}>
            <img
              src={hero}
              alt="رياضي يرفع دمبلز في الجيم"
              width={1080}
              height={1350}
              className="aspect-[4/5] w-full rounded-md object-cover outline-1 -outline-offset-1 outline-white/20"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-card py-4">
        <div className="animate-marq flex font-mono text-sm whitespace-nowrap text-muted-foreground">
          <BrandRun />
          <BrandRun hidden />
        </div>
      </div>

      <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        {/* CATEGORIES */}
        <div id="categories" className="mb-10 flex items-end justify-between scroll-mt-20">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
              (a) — Categories
            </span>
            <h2 className="mt-2 text-4xl font-black text-balance md:text-5xl">كل الأقسام</h2>
          </div>
          <a
            href="#featured"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            شوف الكل ←
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#featured"
              className="group relative overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="flex flex-col justify-between p-4">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="aspect-[4/5] w-full rounded object-cover outline-1 -outline-offset-1 outline-border"
                />
                <div>
                  <h3 className="mt-4 text-lg font-bold">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.count}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {c.items.join(" · ")}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* OFFERS */}
        <section
          id="offers"
          className="mt-16 scroll-mt-20 overflow-hidden rounded-md border border-primary/40 bg-card"
        >
          <div className="grid md:grid-cols-12">
            <div className="p-8 md:col-span-7 md:p-12">
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
                Deals — This Week
              </span>
              <h2 className="mt-3 text-4xl leading-tight font-black text-balance md:text-5xl">
                خصم 40% على كامل
                <br />
                معدات الجيم
              </h2>
              <p className="mt-4 max-w-[36ch] text-muted-foreground">
                عرض لفترة محدودة — أدوات رفع الأثقال والمعدات كاملة بخصومات تصل 40%.
              </p>
              <a
                href="#featured"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                اعرض العروض
              </a>
            </div>
            <div className="relative min-h-[280px] md:col-span-5">
              <img
                src={offerImg}
                alt="أوزان حديد وبار في جيم بإضاءة حمراء"
                loading="lazy"
                width={900}
                height={800}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-4">
          {[
            { n: "01", t: "توصيل سريع", d: "خلال 24 ساعة لكل مصر" },
            { n: "02", t: "منتج أصلي", d: "مع ضمان حقيقي" },
            { n: "03", t: "دفع آمن", d: "عند الاستلام أو أونلاين" },
            { n: "04", t: "دعم 24/7", d: "فريق متخصص" },
          ].map((f) => (
            <div key={f.n} className="bg-background p-6">
              <div className="font-mono text-lg text-primary">{f.n}</div>
              <h3 className="mt-3 font-bold">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </section>

        {/* FEATURED */}
        <div id="featured" className="mt-16 mb-10 flex scroll-mt-20 items-end justify-between">
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">
              (b) — Featured
            </span>
            <h2 className="mt-2 text-4xl font-black text-balance md:text-5xl">الأكثر مبيعاً</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary"
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover outline-1 -outline-offset-1 outline-border"
              />
              <div className="p-4">
                <h3 className="font-bold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-mono font-bold text-primary">
                    {p.price} <span className="text-xs">جنيه</span>
                  </span>
                  <button className="rounded border border-border bg-background px-3 py-2 text-xs font-bold transition-colors hover:border-primary">
                    اشترِ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="scroll-mt-20 border-t border-border bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-primary">⚡</span>
              <span className="text-lg font-black">ميدان</span>
            </div>
            <p className="mt-4 max-w-[24ch] text-sm text-muted-foreground">
              وجهتك الأولى لكل الأدوات والمستلزمات الرياضية في مصر.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold">الأقسام</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-primary" href="#categories">
                  معدات الجيم
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#categories">
                  كرة سلة و قدم
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#categories">
                  لعب قتالي
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#categories">
                  سباحة و جمباز
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">الدعم</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="transition-colors hover:text-primary" href="#contact">
                  شحن وتوصيل
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#contact">
                  الإرجاع
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-primary" href="#contact">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">تواصل</h4>
            <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground">
              <li>0100 123 4567</li>
              <li>care@midan.eg</li>
              <li>القاهرة، مصر</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center font-mono text-xs text-muted-foreground">
          © 2026 ميدان — جميع الحقوق محفوظة
        </div>
      </footer>
    </div>
  );
}
