"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  return (
    <div className="flex flex-col bg-gray-100 text-primary w-full justify-center items-center px-44 py-20">
      <h3 className="font-bold text-2xl">Let&apos;s Connect</h3>
      <p>
        Have a project in mind or want to discuss opportunities? I&apos;d love
        to hear from you
      </p>
      <div className="flex flex-row w-full gap-8 mt-8">
        <form className="flex flex-col w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-row justify-between gap-4">
            <Input
              type="text"
              placeholder="Name"
              className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus-visible:border-theme-300 focus-visible:ring-theme-300"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus-visible:border-theme-300 focus-visible:ring-theme-300"
              required
            />
          </div>

          <Input
            type="text"
            placeholder="Subject"
            className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus-visible:border-theme-300 focus-visible:ring-theme-300"
            required
          />
          <Textarea
            placeholder="Message"
            maxLength={maxChars}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-1 px-4 py-2 h-32 border border-gray-300 rounded-md resize-none focus-visible:border-theme-300 focus-visible:ring-theme-300"
            required
          />
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
      </div>
    </div>
  );
}
