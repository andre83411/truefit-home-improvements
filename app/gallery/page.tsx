import type { Metadata } from "next";
import Image from "next/image";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { beforeAfterProjects, galleryProjects } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Home Improvement Project Gallery",
  description:
    "See before-and-after custom storage, flooring, and home improvement projects completed by TrueFit Home Improvements in Central Florida.",
};

export default function Gallery() {
  return (
    <Shell>
      <PageHero eyebrow="PROJECT GALLERY" title="The details make the difference.">
        Explore before-and-after views of recent TrueFit custom storage,
        flooring, and home improvement work.
      </PageHero>
      <section className="section">
        <div className="container before-after-list">
          {beforeAfterProjects.map((project) => (
            <article className="before-after-project" key={project.title}>
              <header className="before-after-header">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </header>
              <div className="comparison-list">
                {project.comparisons.map((comparison) => (
                  <figure className="comparison" key={comparison.label}>
                    <figcaption>{comparison.label}</figcaption>
                    <div className="before-after-pair">
                      {(["before", "after"] as const).map((stage) => {
                        const photo = comparison[stage];
                        return (
                          <div className="comparison-photo" key={stage}>
                            <Image
                              src={photo.image}
                              alt={photo.alt}
                              width={photo.width}
                              height={photo.height}
                              sizes="(max-width: 760px) calc(50vw - 29px), 540px"
                            />
                            <span>{stage}</span>
                          </div>
                        );
                      })}
                    </div>
                  </figure>
                ))}
              </div>
              {project.details.length > 0 && (
                <div className="project-detail-list">
                  {project.details.map((detail) => (
                    <figure className="project-detail" key={detail.image}>
                      <figcaption>{detail.label}</figcaption>
                      <Image
                        src={detail.image}
                        alt={detail.alt}
                        width={detail.width}
                        height={detail.height}
                        sizes="(max-width: 760px) calc(100vw - 66px), 520px"
                      />
                    </figure>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
        <div className="container gallery-grid">
          {galleryProjects.map((project) => (
            <figure key={project.image}>
              <Image
                className="gallery-image"
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(max-width: 760px) calc(100vw - 30px), 575px"
              />
              <figcaption>
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTA />
    </Shell>
  );
}
