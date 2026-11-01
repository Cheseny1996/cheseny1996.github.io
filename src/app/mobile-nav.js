"use client";

import { useRef, useState } from "react";

const links = [
  ["Selected work", "#work"],
  ["About", "#about"],
  ["Capabilities", "#capabilities"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <div
      className={`mobile-nav${isOpen ? " mobile-nav--open" : ""}`}
      onKeyDown={handleKeyDown}
    >
      <button
        aria-controls="mobile-navigation-links"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="mobile-nav-toggle"
        onClick={() => setIsOpen((open) => !open)}
        ref={buttonRef}
        type="button"
      >
        <span />
        <span />
      </button>
      {isOpen && (
        <nav aria-label="Mobile navigation" id="mobile-navigation-links">
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
