"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const formObject = Object.fromEntries(formData.entries());
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      // Handle response if necessary
      const data = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <input
        className="smallbody flex border-[5px] border-solid border-hydw-blue bg-[unset] p-4 text-hydw-blue outline-none placeholder:text-hydw-blue"
        type="text"
        name="name"
        aria-label="Name"
        placeholder="Name"
      />
      <input
        className="smallbody flex border-[5px] border-solid border-hydw-blue bg-[unset] p-4 text-hydw-blue outline-none placeholder:text-hydw-blue"
        type="email"
        name="email"
        aria-label="Email"
        placeholder="Email"
      />
      <textarea
        className="smallbody flex border-[5px] border-solid border-hydw-blue bg-[unset] p-4 text-hydw-blue outline-none placeholder:text-hydw-blue"
        name="message"
        aria-label="Message"
        placeholder="Message"
        rows={4}
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="submit"
        disabled={isLoading}
        className="heading5 flex items-center justify-center bg-hydw-blue p-5 leading-[0.8] text-white transition-colors duration-150 hover:bg-hydw-pink"
      >
        {isLoading ? "Loading..." : "Submit"}
      </motion.button>
    </form>
  );
}
