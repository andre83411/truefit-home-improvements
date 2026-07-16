export type Service = { title: string; slug: string; description: string; examples: string[] };

export const services: Service[] = [
  { title: "Handyman Services", slug: "handyman-services", description: "A dependable extra set of hands for the repairs and to-do lists that keep your home working well.", examples: ["General household repairs", "Punch lists", "Rental property turn items"] },
  { title: "Trim & Interior Doors", slug: "trim-interior-doors", description: "Careful installation and repair work that gives rooms a clean, finished look.", examples: ["Baseboards and casing", "Interior door replacement", "Trim repairs"] },
  { title: "Painting & Wallpaper", slug: "painting-wallpaper", description: "Room refreshes with thoughtful preparation, tidy work areas, and crisp results.", examples: ["Interior painting", "Accent walls", "Wallpaper installation and removal"] },
  { title: "LVP Flooring", slug: "lvp-flooring", description: "Practical luxury vinyl plank installation for durable, easy-care living spaces.", examples: ["Room and small-area installs", "Transitions and trim", "Damaged plank replacement"] },
  { title: "Drywall & Siding Repairs", slug: "drywall-siding-repairs", description: "Targeted repairs for common interior wall damage and minor exterior siding concerns.", examples: ["Drywall patches", "Texture touch-ups", "Minor siding repairs"] },
  { title: "Fixtures & Finishing Touches", slug: "fixtures-finishing-touches", description: "Small upgrades that make a noticeable difference in the comfort and function of your home.", examples: ["Hardware and fixture swaps", "Shelving and wall-mounted items", "Caulking and finishing details"] },
];
