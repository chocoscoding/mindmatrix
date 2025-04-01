import { Logo } from "@/components/logo";
import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Whitepaper",
    href: "/whitepaper",
  },
  {
    title: "Tokenomics",
    href: "/tokenomics",
  },
];

export default function FooterSection() {
  return (
    <footer className="pt-16 md:pt-32 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto block size-fit">
          <Logo />
        </div>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary block duration-150">
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="https://x.com/mindmatrix_sol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-primary block">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
            </svg>
          </Link>
          <Link
            href="https://github.com/mindmatrixai/Mind-Matrix-AI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-muted-foreground hover:text-primary block">
            <svg className="size-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="2em" height="2em">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>github</title> <rect width="24" height="24" fill="none"></rect>{" "}
                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
              </g>
            </svg>
          </Link>
          <Link
            href=" https://t.me/mindmatrixprivate"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-muted-foreground hover:text-primary block">
            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path>
              </g>
            </svg>
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Mind Matrix, All rights reserved
        </span>
      </div>
      <div className="h-[19rem] flex items-center justify-center">
        <TextHoverEffect text="MIND MATRIX" />
      </div>
    </footer>
  );
}
