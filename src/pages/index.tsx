import * as React from "react";

import Layout from "@/components/layout/Layout";

import Seo from "@/components/Seo";

import Vercel from "~/svg/Vercel.svg";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="bg-white">
          <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
            <Vercel className="text-5xl" />
            <h1 className="mt-4 text-blue-600">Legalforce RAPC Worldwide </h1>
            <h1 className="mt-4">
              Next.js + Tailwind CSS + TypeScript Template
            </h1>
            <p className="mt-2 text-sm text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{" "}
            </p>
            <p className="mt-2 text-sm text-gray-700"></p>

            <footer className="absolute bottom-2 text-gray-700">
              © {new Date().getFullYear()} By{" "}
              <a
                href="https://pushpalghoshal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Pushpal Ghoshal
              </a>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
