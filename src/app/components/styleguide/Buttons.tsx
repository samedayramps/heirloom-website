import React from "react";

export function Buttons() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
      <div className="flex flex-wrap gap-4">
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-disabled" disabled>
          Disabled
        </button>
      </div>
    </section>
  );
}
