"use client";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

const CLIENTS = [
    "coinbase",
    "spotify",
    "pinterest",
    "google",
    "amazon",
    "netflix",
  ];

export default function Techstack() {
  return (
    <div className="z-10 w-full mt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-6 lg:gap-y-16">
                {CLIENTS.map((logo, key) => (
                    <Image
                    key={key}
                    alt={logo}
                    width={768}
                    height={768}
                    className="w-40"
                    src={`/logos/logo-${logo}.svg`}
                    />
                ))}
          </dl>
        </div>
      </div>
    </div>
  )
}