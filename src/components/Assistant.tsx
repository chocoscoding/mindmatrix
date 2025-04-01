"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: "user" | "bot"; content: string }>>([
    { type: "bot", content: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }]);

    // Simulate bot response (in a real app, you'd call an API here)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: `Thanks for your message: "${input}". This is a simulated response.`,
        },
      ]);
    }, 1000);

    setInput("");
  };

  // Toggle modal open/close
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating button */}
      <button
        ref={buttonRef}
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg hover:bg-purple-500 transition-all"
        onClick={toggleModal}>
        <div className="relative">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10">
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
            </svg>
          )}
        </div>
      </button>

      {/* Chat modal positioned above the button */}
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed bottom-[1rem] right-8 z-50 w-full max-w-[320px] transition-all animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-2xl !scrollbar-hide"
          style={{
            maxHeight: "calc(100vh - 7rem)",
            boxShadow: "0 1px 2px -3px rgba(147, 51, 234, 0.3), 0 1px 2px 0px rgba(147, 51, 234, 0.2)",
          }}>
          <Card className="border border-purple-300/40 bg-[#141414]/90 backdrop-blur-md text-gray-200 rounded-2xl gap-0 py-0 pt-4 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2 px-3 border-b border-purple-800/40 h-12">
              <CardTitle className="text-base font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                MindMatrix AI
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full h-7 w-7 bg-purple-800/30 text-purple-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </Button>
            </CardHeader>

            <CardContent className="p-1 ">
              <div className="h-[270px] overflow-y-auto py-2 px-3 space-y-3 bg-transparent w-full rounded-md !scrollbar-hide">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex flex-col max-w-[85%] p-2 rounded-2xl backdrop-blur-sm text-sm",
                      msg.type === "user"
                        ? "ml-auto bg-gradient-to-br from-purple-600 to-purple-800 text-gray-100 shadow-md"
                        : "mr-auto bg-gray-800 border border-purple-900/30 text-gray-200 shadow-md"
                    )}>
                    {msg.content}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </CardContent>

            <CardFooter className="pt-1 pb-4 px-3 border-t bg-black">
              <form onSubmit={handleSubmit} className="flex w-full gap-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-1.5 text-sm border border-purple-900/40 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-gray-800 text-gray-100 placeholder:text-gray-400"
                />
                <Button
                  type="submit"
                  className="rounded-full h-8 w-8 p-0 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Assistant;
