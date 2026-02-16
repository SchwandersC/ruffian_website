import pendingImg from "../assets/blueprints.jpg";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  image?: string;

  // Detail page content
  longDescription: string;
  bullets?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "quickcatch-helmet-system",
    title: "QuickCatch Helmet System",
    shortDescription:
      "Everyone who loves sports hates injuries... dynamic neck stabilization system.",
    image: pendingImg,
    longDescription:
      "Add your longer, richer description here. This is where you can talk about the problem, the solution, prototypes, testing, and why it matters.",
    bullets: [
      "Problem: concussion + neck injury risk in high-impact sports",
      "Solution: companion system with dynamic neck stabilization",
      "Status: prototyping / testing / partner outreach (edit as needed)",
    ],
  },
  {
    slug: "matera-birthing-aid",
    title: "Matera Birthing Aid",
    shortDescription:
      "Our woman-led team is challenging this archaic design... biomechanics and ergonomics.",
    image: pendingImg,
    longDescription:
      "Add your longer description here: why current designs lead to complications, what your alternative changes, how you’re validating, and what’s next.",
    bullets: [
      "Biomechanics-first redesign",
      "Comfort + safety for mother and care team",
      "Status: research / design / clinical feedback (edit as needed)",
    ],
  },
  {
    slug: "tiptopspin-wrist-strengthening-device",
    title: "TipTopSpin Wrist Strengthening Device",
    shortDescription:
      "We partnered with pro players/coaches... isolates wrist abduction muscles.",
    image: pendingImg,
    longDescription:
      "Add your longer description here: training protocol, who it’s for, what progress looks like, and prototype details.",
    bullets: [
      "Targets wrist abduction muscles for topspin",
      "Built with coaches + pro player input",
      "Status: prototype + athlete testing (edit as needed)",
    ],
  },
];
