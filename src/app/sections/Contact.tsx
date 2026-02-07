"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SmoothDrawer from "@/components/kokonutui/smooth-drawer";

export default function Contact() {
  const [message, setMessage] = useState("");
  const maxChars = 500;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col bg-gray-100 text-primary w-full justify-center md:px-20 px-2 py-10 xl:px-44 xl:py-20">
      <div className="flex flex-col items-center px-4">
        <h3 className="font-bold text-2xl">Let&apos;s Connect</h3>
        <p>
          Have a project in mind or want to discuss opportunities? I&apos;d love
          to hear from you
        </p>
      </div>
      <div className="grid lg:grid-cols-2 w-full gap-8 mt-8 items-center">
        <div className="flex items-center justify-center">
          <ProfileCard
            name="John Pork"
            title="Software Engineer"
            handle="jporkknowscodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/projects/johnpork.png"
            showUserInfo
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => setDrawerOpen(true)}
            behindGlowEnabled={false}
            behindGlowColor="rgba(255, 85, 84, 0.67)"
          />
        </div>
        <form className="flex flex-col w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus-visible:border-theme-300 focus-visible:ring-theme-300"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus-visible:border-theme-300 focus-visible:ring-theme-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="subject" className="text-sm font-medium mb-1">
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="Subject"
              className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus-visible:border-theme-300 focus-visible:ring-theme-300"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="message" className="text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Message"
              maxLength={maxChars}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="mb-1 px-4 py-2 h-50 border border-gray-300 rounded-md resize-none focus-visible:border-theme-300 focus-visible:ring-theme-300"
              required
            />
          </div>
          <label className="text-sm text-gray-500 mb-4 self-end">
            {message.length}/{maxChars} characters
          </label>
          <button
            type="submit"
            className="px-6 py-2 bg-linear-to-l from-red-950 via-red-800 to-red-700 text-white rounded-md hover:bg-primary-dark hover:scale-[1.02] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <SmoothDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          showTrigger={false}
          contactEmail="mailto:mobaraqcamar@gmail.com"
          contactLinkedin="https://www.linkedin.com/in/mobaraq-camar-6858b426a/"
          contactFacebook="https://www.facebook.com/mobaraq.camar.3"
          contactGithub="https://github.com/Zanti00"
          contactLocation="Quezon City, Philippines"
        />
      </div>
    </div>
  );
}
