"use client";

import { Github, Linkedin, Facebook, Phone } from "lucide-react";

const FooteSection = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="lg:px-8 xl:px-[8%] mx-auto py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Khandaker Mohyet;
            </h2>

            <p className="text-muted-foreground">
              Gazipur, Bangladesh
            </p>

            <p className="text-muted-foreground">
              +8801700592546
            </p>

            <div className="flex gap-4 pt-2">
              <Github className="w-5 h-5 cursor-pointer hover:text-primary transition" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition" />
              <Phone className="w-5 h-5 cursor-pointer hover:text-primary transition" />
            </div>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Latest Project
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>Natural Sefa</li>
              <li>Edu Genius</li>
              <li>Projoss - Web Development</li>
              <li>Pixoranest</li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-muted-foreground">
              <li>Home</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Contact Me</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border my-10"></div>

        {/* Bottom */}
        <div className="text-center text-muted-foreground text-sm">
          Copyright © 2026 All Rights Reserved to খন্দকার মুহিত
        </div>

      </div>
    </footer>
  );
};

export default FooteSection;
