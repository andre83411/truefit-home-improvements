import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { CTA } from "@/components/CTA";

const title = "Builder Closet Transformation in Tavares, Florida";
const description =
  "A Tavares builder-model closet transformed with custom wood shelving, organized hanging space, a personal-care vanity, and stylish finishing details.";
const url = "https://www.truefithome.com/blog/builder-closet-transformation-tavares-fl";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    images: [{
      url: "/gallery/closet-transformation/angle-1-after.jpeg",
      width: 1125,
      height: 1498,
      alt: "Finished custom closet with shelving, hanging space, and a vanity in Tavares, Florida",
    }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: [
    "https://www.truefithome.com/gallery/closet-transformation/angle-1-after.jpeg",
    "https://www.truefithome.com/gallery/closet-transformation/angle-2-after.jpeg",
  ],
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
  author: { "@type": "Organization", name: "TrueFit Home Improvements" },
  publisher: { "@type": "Organization", name: "TrueFit Home Improvements" },
  mainEntityOfPage: url,
  about: ["Custom closet shelving", "Closet organization", "Home improvements in Tavares, Florida"],
};

export default function ClosetStory() {
  return (
    <Shell>
      <article className="project-article">
        <header className="project-article-hero">
          <div className="container narrow">
            <span className="eyebrow gold">CUSTOM STORAGE • TAVARES, FLORIDA</span>
            <h1>{title}</h1>
            <p>
              A basic builder closet becomes a functional, tidy, and stylish
              space for clothing, organization, personal care, and makeup.
            </p>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-body">
            <p className="article-lead">
              Builder-model homes often include spaces with plenty of potential
              but only the most basic fixtures. That was the case with this
              closet in Tavares, Florida. Its footprint was well suited to the
              homeowner’s needs, but a single wire shelf did little to support
              an organized daily routine.
            </p>

            <h2>The homeowner’s goal</h2>
            <p>
              The homeowner wanted the closet to feel orderly and easy to use
              without sacrificing style. Clothing and personal items needed
              clear, dedicated places, while a vanity area would create a
              comfortable spot for makeup and personal care. The goal was not
              simply to add more storage—it was to make the whole room work
              better and look intentionally finished.
            </p>

            <figure className="article-comparison">
              <div>
                <Image src="/gallery/closet-transformation/angle-1-before.jpeg" alt="Builder-model closet in Tavares before custom shelving was installed" width={1125} height={1498} sizes="(max-width: 760px) calc(50vw - 24px), 380px" />
                <span>Before</span>
              </div>
              <div>
                <Image src="/gallery/closet-transformation/angle-1-after.jpeg" alt="Tavares closet after custom shelving, hanging space, vanity, mirror, and lighting were installed" width={1125} height={1498} sizes="(max-width: 760px) calc(50vw - 24px), 380px" />
                <span>After</span>
              </div>
              <figcaption>From one wire shelf to a complete storage and personal-care space.</figcaption>
            </figure>

            <h2>Custom storage shaped around the room</h2>
            <p>
              TrueFit Home Improvements built and installed the wood shelving
              and custom hanging areas to use the closet’s height and available
              wall space more effectively. Open shelves make frequently used
              items easy to see, while a mix of hanging space, baskets, and
              contained storage helps the finished room stay visually calm.
            </p>
            <p>
              A dedicated vanity gives personal-care and makeup routines their
              own place instead of competing with clothing storage. The mirror,
              chandelier, coordinated containers, and décor bring warmth and
              personality to the practical layout. TrueFit also styled the
              completed area so every part of the closet felt connected.
            </p>

            <figure className="article-comparison">
              <div>
                <Image src="/gallery/closet-transformation/angle-2-before.jpeg" alt="Second view of the Tavares closet before the storage transformation" width={1125} height={1498} sizes="(max-width: 760px) calc(50vw - 24px), 380px" />
                <span>Before</span>
              </div>
              <div>
                <Image src="/gallery/closet-transformation/angle-2-after.jpeg" alt="Finished wood shelving and custom hanging area in the Tavares closet" width={1125} height={1498} sizes="(max-width: 760px) calc(50vw - 24px), 380px" />
                <span>After</span>
              </div>
              <figcaption>Custom shelving and hanging space make better use of the builder-model footprint.</figcaption>
            </figure>

            <h2>A polished result for everyday life</h2>
            <p>
              The completed closet is easier to organize, easier to maintain,
              and more enjoyable to use. It shows how a basic room in a builder
              home can become a personal, hardworking space through thoughtful
              shelving, well-planned hanging areas, and carefully installed
              finishing details.
            </p>

            <aside className="article-callout">
              <h2>Planning a custom closet in Lake County?</h2>
              <p>
                TrueFit Home Improvements helps homeowners in Tavares and
                surrounding Lake County communities improve storage and make
                everyday spaces more useful.
              </p>
              <Link className="button button-gold" href="/request-a-quote">Request a quote</Link>
            </aside>

            <div className="article-links">
              <Link href="/gallery">View more project transformations</Link>
              <Link href="/services">Explore our home improvement services</Link>
            </div>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      </article>
      <CTA />
    </Shell>
  );
}
