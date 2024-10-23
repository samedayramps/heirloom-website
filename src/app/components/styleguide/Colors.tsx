import React from "react";

const colors = [
  { name: "Primary", className: "bg-primary text-primary-content" },
  { name: "Secondary", className: "bg-secondary text-secondary-content" },
  { name: "Accent", className: "bg-accent text-accent-content" },
  { name: "Neutral", className: "bg-neutral text-neutral-content" },
  { name: "Base 100", className: "bg-base-100 text-base-content" },
  { name: "Base 200", className: "bg-base-200 text-base-content" },
  { name: "Base 300", className: "bg-base-300 text-base-content" },
  { name: "Info", className: "bg-info text-info-content" },
  { name: "Success", className: "bg-success text-success-content" },
  { name: "Warning", className: "bg-warning text-warning-content" },
  { name: "Error", className: "bg-error text-error-content" },
];

export function Colors() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Colors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`flex items-center justify-center w-24 h-24 ${color.className} border border-gray-300 rounded`}
          >
            <span className="ml-4">{color.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
