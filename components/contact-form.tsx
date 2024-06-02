"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ambitFont, flyerFont } from "@/fonts";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-4 text-xl ${ambitFont.className} mb-4`}
    >
      <input
        className="flex border-[5px] border-solid border-hydw-blue p-4 text-hydw-blue placeholder:text-hydw-blue smallbody bg-[unset]"
        type="text"
        name="name"
        aria-label="Name"
        placeholder="Name"
      />
      <input
        className="flex border-[5px] border-solid border-hydw-blue p-4 text-hydw-blue placeholder:text-hydw-blue smallbody bg-[unset]"
        type="email"
        name="email"
        aria-label="Email"
        placeholder="Email"
      />
      <textarea
        className="flex border-[5px] border-solid border-hydw-blue p-4 text-hydw-blue placeholder:text-hydw-blue smallbody bg-[unset]"
        name="message"
        aria-label="Message"
        placeholder="Message"
        rows={4}
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="submit"
        disabled={isLoading}
        className={`${flyerFont.className} flex items-center justify-center bg-hydw-blue p-5 uppercase leading-[0.8] text-white transition-colors duration-150 hover:bg-hydw-pink`}
      >
        {isLoading ? "Loading..." : "Submit"}
      </motion.button>
    </form>
  );
}
