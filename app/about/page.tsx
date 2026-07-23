import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Our Local Handyman Business",
  description:
    "Meet the husband-and-wife team behind TrueFit Home Improvements, serving homes in Sumter and Lake Counties, Florida.",
};

export default function About() {
  return (
    <Shell>
      <PageHero
        eyebrow="ABOUT TRUEFIT"
        title="The right fit for the work your home needs."
      >
        A husband-and-wife-owned business built around useful skills, honest
        communication, and respect for the place you call home.
      </PageHero>
      <section className="section">
        <div className="container story-grid">
          <div className="owner-portraits" aria-label="TrueFit owners">
            <Image
              src="/team/owner-headshot-woman.png"
              alt="Professional portrait of a TrueFit Home Improvements co-owner"
              width={1023}
              height={1537}
              sizes="(max-width: 760px) calc(50vw - 23px), 220px"
            />
            <Image
              src="/team/owner-headshot-man.png"
              alt="Professional portrait of a TrueFit Home Improvements co-owner"
              width={1086}
              height={1448}
              sizes="(max-width: 760px) calc(50vw - 23px), 220px"
            />
          </div>
          <div>
            <span className="eyebrow navy">LOCAL PEOPLE. PRACTICAL HELP.</span>
            <h2>A personal approach to home improvement.</h2>
            <p className="large-copy">
              TrueFit Home Improvements helps homeowners, retirees, landlords,
              and property managers take care of the smaller projects that make
              a home safer, more functional, and more enjoyable.
            </p>
            <p>
              As a locally owned team, we believe good service starts with
              listening. We take time to understand the project, communicate
              clearly about what’s involved, and treat your home with care.
            </p>
            <div className="values">
              {[
                "Friendly, direct communication",
                "Thoughtful attention to detail",
                "Clean, considerate work areas",
                "Solutions suited to your home",
              ].map((value) => (
                <span key={value}>
                  <Check />
                  {value}
                </span>
              ))}
            </div>
            <Link className="button button-navy" href="/request-a-quote">
              Tell us about your project
            </Link>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow navy">WHY “TRUEFIT”?</span>
            <h2>Work that suits your home—not a one-size-fits-all answer.</h2>
          </div>
          <div>
            <p className="large-copy">
              Every home and every to-do list is different. Our goal is to
              understand the need, recommend a sensible path, and complete the
              agreed work with care.
            </p>
            <p>
              We focus on handyman services and small home improvement projects.
              If a request falls outside our capabilities or project scope,
              we’ll let you know.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </Shell>
  );
}
