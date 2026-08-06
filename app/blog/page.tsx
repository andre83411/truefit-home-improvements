import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { projectStories } from "@/data/projectStories";

export const metadata: Metadata = {
  title: "Home Improvement Project Stories",
  description:
    "Explore real handyman and home improvement projects completed by TrueFit Home Improvements across Lake and Sumter Counties, Florida.",
};

export default function Blog() {
  return (
    <Shell>
      <PageHero eyebrow="PROJECT STORIES" title="Real homes. Thoughtful improvements.">
        Go behind the before-and-after photos to see how practical ideas become
        useful, finished spaces.
      </PageHero>
      <section className="section">
        <div className="container story-list">
          {projectStories.map((story) => (
            <article className="story-card" key={story.slug}>
              <Link href={`/blog/${story.slug}`} aria-label={`Read ${story.title}`}>
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  width={1125}
                  height={1498}
                  sizes="(max-width: 760px) calc(100vw - 30px), 480px"
                />
              </Link>
              <div>
                <span className="eyebrow navy">{story.category}</span>
                <h2><Link href={`/blog/${story.slug}`}>{story.title}</Link></h2>
                <p className="story-location">{story.location}</p>
                <p>{story.excerpt}</p>
                <Link className="button button-navy" href={`/blog/${story.slug}`}>
                  Read the project story
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </Shell>
  );
}
