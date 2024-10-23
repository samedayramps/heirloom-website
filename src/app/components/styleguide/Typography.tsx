import React from "react";

export function Typography() {
  return (
    <section className="mb-8 prose lg:prose-xl">
      <h1 className="font-serif">Typography Example</h1>
      <p>This is a paragraph demonstrating the typography styles. It includes various elements to showcase the styling capabilities.</p>
      
      <h2 className="font-serif">Subheading</h2>
      <p>More text with <strong>bold</strong> and <em>italic</em> styles. You can also include <a href="#" className="font-ephesis">links</a> to demonstrate link styling.</p>
      
      <h3 className="font-serif">Lists</h3>
      <ul>
        <li>Unordered list item one</li>
        <li>Unordered list item two</li>
        <li>Unordered list item three</li>
      </ul>
      <ol>
        <li>Ordered list item one</li>
        <li>Ordered list item two</li>
        <li>Ordered list item three</li>
      </ol>
      
      <h3 className="font-serif">Blockquote</h3>
      <blockquote>
        <p>This is a blockquote example. It is used to highlight important information or quotes.</p>
      </blockquote>
    </section>
  );
}
