import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 p-8 sm:p-20">
      <header className="text-center mb-12">
        <p className="text-lg text-neutral">Feature Length Wedding Films</p>
        <h1 className="text-4xl font-serif playfair-display mb-4">
          Your wedding day, remembered for <span className="ephesis-regular text-6xl">generations</span>
        </h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            src: "/wedding-video.jpg",
            alt: "Wedding video",
            title: "Our Portfolio",
            description: "Explore our collection of beautifully captured wedding moments.",
            link: "/portfolio",
            linkText: "View Portfolio",
          },
          {
            src: "/wedding-couple.jpg",
            alt: "Wedding couple",
            title: "About Us",
            description: "Learn more about our passion for capturing the magic of weddings.",
            link: "/about",
            linkText: "Learn More",
          },
          {
            src: "/testimonials.jpg",
            alt: "Testimonials",
            title: "Testimonials",
            description: "Hear from our happy clients about their experiences with us.",
            link: "/testimonials",
            linkText: "Read Testimonials",
          },
          {
            src: "/contact.jpg",
            alt: "Contact",
            title: "Contact Us",
            description: "Get in touch to book your wedding videography session today!",
            link: "/contact",
            linkText: "Get In Touch",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
            <p className="text-center text-neutral mt-2">{item.description}</p>
            <a className="btn btn-primary mt-4" href={item.link}>
              {item.linkText}
            </a>
          </div>
        ))}
      </main>
      <footer className="mt-12 text-center">
        <p className="text-neutral">Contact us to book your wedding videography session today!</p>
        <a className="btn btn-primary mt-4" href="/contact">
          Get In Touch
        </a>
      </footer>
    </div>
  );
}
