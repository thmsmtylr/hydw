"use client";
import React, { useState, FormEvent, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Track form submission status
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isSubmitted && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          colors={[
            "#3b2dff",
            "#f9f5cc",
            "#282828",
            "#F5F5F5",
            "#FF6CF4",
            "#FF9650",
            "#EFE145",
          ]}
        />
      )}
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <input
          className="smallbody flex border-[5px] border-solid border-hydw-blue bg-[unset] p-4 text-hydw-blue outline-none placeholder:text-hydw-blue"
          type="text"
          name="name"
          aria-label="Name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="smallbody flex border-[5px] border-solid border-hydw-blue bg-[unset] p-4 text-hydw-blue outline-none placeholder:text-hydw-blue"
          type="email"
          name="email"
          aria-label="Email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          className="smallbody flex border-[5px] border-solid border-hydw-blue bg-[unset] p-4 text-hydw-blue outline-none placeholder:text-hydw-blue"
          name="message"
          aria-label="Message"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
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
    </>
  );
}
