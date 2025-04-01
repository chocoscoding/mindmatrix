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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  // Check if device is mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIfMobile();

    // Set fullscreen state based on mobile detection when opening
    if (isOpen && isMobile) {
      setIsFullScreen(true);
    }

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [isOpen]);

  // Handle click outside to close the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !isFullScreen
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
  }, [isOpen, isFullScreen]);

  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Toggle modal open/close
  const toggleModal = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    // If we're opening the modal and on mobile, set to fullscreen
    if (newIsOpen && isMobile) {
      setIsFullScreen(true);
    } else if (!newIsOpen) {
      // Reset fullscreen when closing
      setIsFullScreen(false);
    }
  };

  // Toggle fullscreen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
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
          className={cn(
            "fixed z-50 transition-all animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-2xl !scrollbar-hide",
            isFullScreen ? "inset-0 w-full max-w-full h-screen m-0 rounded-none" : "bottom-[1rem] right-8 w-full max-w-[320px]"
          )}
          style={{
            maxHeight: isFullScreen ? "100vh" : "calc(100vh - 7rem)",
            boxShadow: isFullScreen ? "" : "0 1px 2px -3px rgba(147, 51, 234, 0.3), 0 1px 2px 0px rgba(147, 51, 234, 0.2)",
          }}>
          <Card
            className={cn(
              "border border-purple-300/40 bg-[#141414]/90 backdrop-blur-md text-gray-200 gap-0 py-0 overflow-hidden",
              isFullScreen ? "h-full rounded-none bg-[#141414]" : "rounded-2xl"
            )}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 !py-3 !px-3 border-b border-purple-800/40 h-20 shrink-0">
              <CardTitle
                className={cn(
                  "font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent",
                  isFullScreen && isMobile ? "text-lg" : "text-base",
                  isFullScreen && !isMobile ? "text-xl" : ""
                )}>
                MindMatrix AI
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullScreen}
                  className="rounded-full h-7 w-7 bg-purple-800/30 text-purple-300 cursor-pointer">
                  {isFullScreen ? (
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
                      <polyline points="4 14 10 14 10 20"></polyline>
                      <polyline points="20 10 14 10 14 4"></polyline>
                      <line x1="14" y1="10" x2="21" y2="3"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  ) : (
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
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <polyline points="9 21 3 21 3 15"></polyline>
                      <line x1="21" y1="3" x2="14" y2="10"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                  )}
                  <span className="sr-only">{isFullScreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                </Button>
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
              </div>
            </CardHeader>

            <CardContent className="p-1 flex-grow">
              <div
                className={cn(
                  "overflow-y-auto py-2 px-3 space-y-3 bg-transparent w-full rounded-md !scrollbar-hide",
                  isFullScreen ? "h-full" : "h-[270px]"
                )}>
                {messages.map((message) => (
                  <AnimatePresence key={message.id}>
                    <motion.div className="flex flex-row gap-2" initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                      <div className="w-[20px] flex-shrink-0 flex items-start pt-1 text-gray-600">
                        {message.role === "user" ? <UserIcon /> : <BotIcon />}
                      </div>

                      <div className="flex flex-col">
                        <div
                          className={cn(
                            "flex flex-col p-2 rounded-2xl backdrop-blur-sm",
                            message.role === "user"
                              ? "bg-gradient-to-br from-purple-600 to-purple-800 text-gray-100"
                              : "bg-gray-800 border border-purple-900/30 text-gray-200",
                            isFullScreen && isMobile ? "text-base" : "text-sm",
                            isFullScreen && window.innerWidth > 1280 ? "text-base" : "",
                            window.innerWidth > 1600 ? "text-lg" : ""
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
                    <div
                      className={cn(
                        "flex-shrink-0 flex items-start pt-1 text-gray-600 overflow-hidden rounded-[100px]",
                        isFullScreen && isMobile ? "w-[80px]" : "w-[63px]",
                        isFullScreen && window.innerWidth > 1280 ? "w-[90px]" : ""
                      )}>
                      <LogoPlain />
                    </div>
                    <div className="flex flex-col">
                      <div
                        className={cn(
                          "flex flex-col p-2 rounded-2xl backdrop-blur-sm bg-gray-800 border border-purple-900/30 text-gray-200",
                          isFullScreen && isMobile ? "text-base" : "text-sm",
                          isFullScreen && window.innerWidth > 1280 ? "text-base" : "",
                          window.innerWidth > 1600 ? "text-lg" : ""
                        )}>
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
                      <div
                        className={cn(
                          isFullScreen && isMobile ? "text-base" : "text-sm",
                          isFullScreen && window.innerWidth > 1280 ? "text-base" : "",
                          window.innerWidth > 1600 ? "text-lg" : ""
                        )}>
                        thinking...
                      </div>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>
            </CardContent>

            <CardFooter className="pt-1 pb-4 px-3 border-t bg-black shrink-0">
              <form onSubmit={handleSubmit} className="flex w-full gap-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className={cn(
                    "flex-1 px-3 py-1.5 border border-purple-900/40 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500/30 bg-gray-800 text-gray-100 placeholder:text-gray-400",
                    isFullScreen && isMobile ? "text-base" : "text-sm",
                    isFullScreen && window.innerWidth > 1280 ? "text-base" : "",
                    window.innerWidth > 1600 ? "text-lg" : ""
                  )}
                />
                {status === "streaming" ? (
                  <Button
                    type="button"
                    onClick={stop}
                    className={cn(
                      "rounded-full p-0 bg-white hover:opacity-90 text-white flex items-center justify-center disabled:opacity-50",
                      isFullScreen && isMobile ? "h-9 w-9" : "h-8 w-8",
                      isFullScreen && window.innerWidth > 1280 ? "h-10 w-10" : ""
                    )}>
                    <span
                      className={cn(
                        isFullScreen && isMobile ? "text-base" : "text-sm",
                        isFullScreen && window.innerWidth > 1280 ? "text-base" : ""
                      )}>
                      STOP
                    </span>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={cn(
                      "rounded-full p-0 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white flex items-center justify-center disabled:opacity-50",
                      isFullScreen && isMobile ? "h-9 w-9" : "h-8 w-8",
                      isFullScreen && window.innerWidth > 1280 ? "h-10 w-10" : ""
                    )}
                    disabled={status !== "ready" || !input.trim()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={isFullScreen && (isMobile || window.innerWidth > 1280) ? "16" : "14"}
                      height={isFullScreen && (isMobile || window.innerWidth > 1280) ? "16" : "14"}
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
