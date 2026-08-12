import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Check, Arrow } from "@/components/icons";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Handyman, Home Improvement & PERGOLUX Installation Services",
  description:
    "Explore handyman, small home improvement, flooring, repair, and PERGOLUX pergola installation services in Sumter and Lake Counties, Florida.",
};

export default function Services() {
  return (
    <Shell>
      <PageHero eyebrow="SERVICES" title="Helpful solutions for the projects on your list.">
        Repairs, updates, and finishing touches—handled with a practical plan and a detail-minded approach.
      </PageHero>
      <section className="pergolux-section section" id="pergolux">
        <div className="container pergolux-grid">
          <div className="pergolux-logo-panel">
            <Image src="/partners/pergolux-logo.png" alt="PERGOLUX" width={512} height={119} sizes="(max-width: 760px) 70vw, 360px" priority />
            <span>AUTHORIZED PARTNER</span>
          </div>
          <div className="pergolux-copy">
            <span className="eyebrow navy">OUTDOOR LIVING, PROFESSIONALLY INSTALLED</span>
            <h2>Bring adjustable shade and polished design to your outdoor space.</h2>
            <p className="large-copy">We are an <a href="https://pergoluxshop.com">Authorized PERGOLUX Partner</a>.</p>
            <p>PERGOLUX builds motorized louvered pergolas: the louvers open, close, and adjust at the touch of a button, so you get shade when you want it and cover when the weather turns. As an authorized partner, TrueFit helps homeowners add freestanding backyard structures and wall-mounted patio covers with careful site review and professional installation.</p>
            <p>We serve Sumter and Lake Counties, including The Villages, Wildwood, Lady Lake, Leesburg, Fruitland Park, Bushnell, and surrounding Central Florida communities. Ask us about adding a PERGOLUX pergola to your property.</p>
            <div className="pergolux-actions">
              <Link className="button button-navy" href="/request-a-quote">Request a PERGOLUX quote <Arrow /></Link>
              <a className="text-link dark" href="https://pergoluxshop.com">Explore PERGOLUX <Arrow /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container service-detail-list">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug}>
              <div className="service-number">0{index + 1}</div>
              <div><h2>{service.title}</h2><p>{service.description}</p><ul>{service.examples.map((example) => <li key={example}><Check />{example}</li>)}</ul></div>
              <Link className="text-link dark" href={`/request-a-quote?project=${service.slug}`}>Ask about this service <Arrow /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="notice"><div className="container"><b>Not sure if your project fits?</b><p>Send a few details. We’ll review the request and let you know whether it’s within our service scope.</p></div></section>
      <CTA />
    </Shell>
  );
}
