"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { BotIcon, UserIcon } from "@/components/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { Markdown } from "./markdown";
import { LogoPlain } from "./logo";

export const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, stop, status } = useChat();
  //   const [messages, setMessages] = useState<Array<{ id: string; role: "user" | "assistant"; content: string }>>([
  //     {
  //       id: "1",
  //       role: "assistant",
  //       content: "Hi there! I am Mind Matrix Assistant. \n" + "I can help you with any inquiry and questions related to Mind Matrix",
  //     },
  //   ]);

  const modalRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
                {messages.map((message) => (
                  <AnimatePresence key={message.id}>
                    <motion.div className="flex flex-row gap-2" initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                      <div className="w-[20px] flex-shrink-0 flex items-start pt-1 text-gray-600">
                        {message.role === "user" ? <UserIcon /> : <BotIcon />}
                      </div>

                      <div className="flex flex-col">
                        <div
                          className={cn(
                            "flex flex-col p-2 rounded-2xl backdrop-blur-sm text-sm",
                            message.role === "user"
                              ? "bg-gradient-to-br from-purple-600 to-purple-800 text-gray-100"
                              : "bg-gray-800 border border-purple-900/30 text-gray-200"
                          )}>
                          {message.parts.map((part, i) => {
                            switch (part.type) {
                              case "text":
                                return <Markdown key={`${message.id}-${i}`}>{part.text}</Markdown>;
                            }
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ))}
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[63px] flex-shrink-0 flex items-start pt-1 text-gray-600 overflow-hidden rounded-[100px]">
                      <LogoPlain />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col p-2 rounded-2xl backdrop-blur-sm text-sm bg-gray-800 border border-purple-900/30 text-gray-200">
                        <p>
                          Hi there! I am <strong>MindMatrix AI</strong>. I am here to assist you with any questions or inquiries related to
                          MindMatrix.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {status !== "ready" && messages[messages.length - 1]?.role !== "assistant" && (
                  <div className="flex flex-row gap-2">
                    <div className="w-[20px] flex-shrink-0 flex items-start pt-1 text-gray-400">
                      <BotIcon />
                    </div>
                    <div className="flex flex-col gap-1 text-gray-400">
                      <div className="text-sm">thinking...</div>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>
            </CardContent>

            <CardFooter className="pt-1 pb-4 px-3 border-t bg-black">
              <form onSubmit={handleSubmit} className="flex w-full gap-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-1.5 text-sm border border-purple-900/40 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-gray-800 text-gray-100 placeholder:text-gray-400"
                />
                {status === "streaming" ? (
                  <Button
                    type="button"
                    onClick={stop}
                    className="rounded-full h-8 w-8 p-0 bg-white hover:opacity-90 text-white flex items-center justify-center disabled:opacity-50">
                    <span>STOP</span>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="rounded-full h-8 w-8 p-0 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white flex items-center justify-center disabled:opacity-50"
                    disabled={status !== "ready" || !input.trim()}>
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
                )}
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Assistant;
