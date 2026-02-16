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
      "Football has a concussion crisis. Here's how we're solving it with dynamic neck stabilization.",
    image: pendingImg,
    longDescription:
      "Concussions have been a major topic of discussion in American football for multiple decades now. Despite advancements in technology, problems are still arising. We propose a dynamic new approach that prioritize stability, preventing whiplash induced consussions that plague so many today.",
    bullets: [
      "Problem: concussion + neck injury risk in sports, despite protective equipment",
      "Solution: companion system with dynamic neck stabilization, preventing rotational injuries",
      "Status: prototyping / testing / partner outreach",
    ],
  },
  {
    slug: "matera-birthing-aid",
    title: "Matera Birthing Aid",
    shortDescription:
      "Our woman-led team is partnering with obgyns and midwives to challenge the outdated design of birthing beds.",
    image: pendingImg,
    longDescription:
      "Matera is designed to be modular, fitting in to current hospital infrastructure while providing the support for multiple more ergonomic birthing positions that support comfortbaility, ease of use, and prevent pain and injury.",
    bullets: [
      "Biomechanics-first redesign",
      "Made to be implementable for any modern hospital",
      "Status: research / design / clinical feedback",
    ],
  },
  {
    slug: "tiptopspin-wrist-strengthening-device",
    title: "TipTopSpin Tennis Wrist Trainer",
    shortDescription:
      "Our easy to use wearable device to help any player hit pro level shots with confidence.",
    image: pendingImg,
    longDescription:
      "Tennis is a sport that requires precision and control, especially when it comes to wrist movements. Our device is designed to specifically target the movements most critical towards performing a heavy top spin shot. We've collaborated with professional players and coaches to create an easy to use wearable device that any player or coach can implement in their day to day improvement routines.",
    bullets: [
      "Targets wrist abduction movements for increased topspin",
      "Built with coaches + pro player input",
      "Status: prototype + athlete testing, pending preliminary patent approval.",
    ],
  },
];
