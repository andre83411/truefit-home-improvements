"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone } from "./icons";

const nav = [["Home","/"],["About","/about"],["Services","/services"],["Service Areas","/service-areas"],["Gallery","/gallery"],["Blog","/blog"],["Contact","/contact"]];
export function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="topbar"><div className="container topbar-inner"><span>Locally owned • Serving Sumter &amp; Lake Counties</span><a href="tel:+14076008738"><Phone/> 407-600-8738</a></div></div>
    <header className="header"><div className="container nav-wrap">
      <Link className="brand" href="/" aria-label="TrueFit Home Improvements home"><span className="brand-mark">TF</span><span><b>TRUEFIT</b><small>HOME IMPROVEMENTS</small></span></Link>
      <button className="menu-button" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}><span className="sr-only">Menu</span><i/><i/><i/></button>
      <nav id="primary-nav" className={open ? "nav open" : "nav"} aria-label="Primary navigation">{nav.map(([label,href])=><Link key={href} className={path===href||path.startsWith(`${href}/`)?"active":""} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="button nav-quote" href="/request-a-quote">Request a Quote</Link></nav>
    </div></header>
  </>;
}
