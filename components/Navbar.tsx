'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const portfolioItems = [
  { href: '/portfolio/shoot', label: 'Photography/Videography' },
  { href: '/portfolio/video', label: 'Video Editing' },
  { href: '/portfolio/graphic', label: 'Graphic Designing' },
  { href: '/portfolio/web', label: 'Web/App Development' },
];

const pricingItems = [
  { href: '/pricing/photography-videography', label: 'Photography / Videography' },
  { href: '/pricing/creative', label: 'Editing Services' },
  { href: '/pricing/website-seo', label: 'Website & SEO' },
];

const locationItems = [
  { href: '/locations/tampa', label: 'Tampa, FL' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pricingDropdownRef = useRef<HTMLDivElement>(null);
  const locationsDropdownRef = useRef<HTMLDivElement>(null);

  const isPortfolioActive = pathname.startsWith('/portfolio');
  const isPricingActive = pathname.startsWith('/pricing');
  const isLocationsActive = pathname.startsWith('/locations');

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (pricingDropdownRef.current && !pricingDropdownRef.current.contains(e.target as Node)) {
        setPricingDropdownOpen(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(e.target as Node)) {
        setLocationsDropdownOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setPricingDropdownOpen(false);
        setLocationsDropdownOpen(false);
        setDrawerOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <Link href="/" className="nav-logo">
          Drishyam<sup>®</sup>
        </Link>

        <div className="nav-tabs" role="tablist">
          <Link
            href="/"
            className={`nav-tab${pathname === '/' ? ' active' : ''}`}
            role="tab"
            aria-selected={pathname === '/'}
          >
            Home
          </Link>

          {/* Portfolio Dropdown */}
          <div
            className={`nav-dropdown${dropdownOpen ? ' open' : ''}`}
            role="none"
            ref={dropdownRef}
          >
            <button
              className={`nav-tab nav-dropdown-trigger${isPortfolioActive ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen((prev) => !prev);
                setPricingDropdownOpen(false);
                setLocationsDropdownOpen(false);
              }}
            >
              Portfolio
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              <div className="nav-dropdown-menu-inner">
                {portfolioItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About, Reviews */}
          {navLinks.slice(1, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-tab${isActive(link.href) ? ' active' : ''}`}
              role="tab"
              aria-selected={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}

          {/* Locations Dropdown */}
          <div
            className={`nav-dropdown${locationsDropdownOpen ? ' open' : ''}`}
            role="none"
            ref={locationsDropdownRef}
          >
            <button
              className={`nav-tab nav-dropdown-trigger${isLocationsActive ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={locationsDropdownOpen}
              onClick={(e) => {
                e.stopPropagation();
                setLocationsDropdownOpen((prev) => !prev);
                setDropdownOpen(false);
                setPricingDropdownOpen(false);
              }}
            >
              Locations
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              <div className="nav-dropdown-menu-inner">
                {locationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setLocationsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Dropdown */}
          <div
            className={`nav-dropdown${pricingDropdownOpen ? ' open' : ''}`}
            role="none"
            ref={pricingDropdownRef}
          >
            <button
              className={`nav-tab nav-dropdown-trigger${isPricingActive ? ' active' : ''}`}
              aria-haspopup="true"
              aria-expanded={pricingDropdownOpen}
              onClick={(e) => {
                e.stopPropagation();
                setPricingDropdownOpen((prev) => !prev);
                setDropdownOpen(false);
                setLocationsDropdownOpen(false);
              }}
            >
              Pricing
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              <div className="nav-dropdown-menu-inner">
                {pricingItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setPricingDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog, Contact */}
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-tab${isActive(link.href) ? ' active' : ''}`}
              role="tab"
              aria-selected={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <Link href="/contact" className="btn-book">Contact Now</Link>
        </div>

        <button
          className={`nav-hamburger${drawerOpen ? ' open' : ''}`}
          id="hamburgerBtn"
          aria-label="Toggle navigation menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-drawer${drawerOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => { if (e.target === e.currentTarget) setDrawerOpen(false); }}
      >
        <button
          className="drawer-close"
          aria-label="Close navigation menu"
          onClick={() => setDrawerOpen(false)}
        >
          ×
        </button>
        <Link href="/" onClick={() => setDrawerOpen(false)}>Home</Link>
        <span className="drawer-group-label">Portfolio</span>
        {portfolioItems.map((item) => (
          <Link key={item.href} href={item.href} className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/about" onClick={() => setDrawerOpen(false)}>About</Link>
        <Link href="/reviews" onClick={() => setDrawerOpen(false)}>Reviews</Link>
        <span className="drawer-group-label">Locations</span>
        {locationItems.map((item) => (
          <Link key={item.href} href={item.href} className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>
            {item.label}
          </Link>
        ))}
        <span className="drawer-group-label">Pricing</span>
        {pricingItems.map((item) => (
          <Link key={item.href} href={item.href} className="drawer-sub-item" onClick={() => setDrawerOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/blog" onClick={() => setDrawerOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>
        <Link href="/contact" className="drawer-cta" onClick={() => setDrawerOpen(false)}>Contact Now</Link>
      </div>
    </>
  );
}
