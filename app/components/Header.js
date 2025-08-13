'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
  CodeBracketIcon,
  FolderIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const products = [
  { name: 'Home', description: 'Back to the main page', href: '/', icon: HomeIcon },
  { name: 'About Me', description: 'Get to know me better', href: '/#aboutme', icon: UserCircleIcon },
  { name: 'Tech Stack', description: 'Technologies and tools I use', href: '/#techstack', icon: CodeBracketIcon },
  { name: 'Featured Project', description: 'My featured projects', href: '/#featuredproject', icon: FolderIcon },
  { name: 'Testimonial', description: 'Client feedback and experiences', href: '/#testimonial', icon: ChatBubbleLeftRightIcon },
  { name: 'Contact', description: 'Get in touch for collaboration', href: '/#contact', icon: EnvelopeIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 ">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex flex-row items-center gap-2">
            <span className="sr-only">Your Company</span>
            <svg className="h-6 w-auto" viewBox="0 0 91 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M54.8084 49.0625H72.995L63.7938 33.125L72.454 28.125L90.3163 59.0625H59.5311L70.6034 82.5L0 83.1469L6.33013 72.1828L54.8202 72.5L48.4725 59.0625L13.4559 59.0625L38.7977 15.1699L54.8084 49.0625ZM30.7772 49.0625L43.7489 49.0625L37.911 36.7041L30.7772 49.0625ZM67.0418 18.75L58.3817 23.75L47.5555 5L56.2166 0L67.0418 18.75Z"
                fill="black"
              />
            </svg>
            <div className=" text-2xl font-semibold">Nawfall</div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Homepage
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-8 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-900/5 p-4">
              <div className="grid grid-cols-2 gap-1">
                {products.map((item) => (
                  <Link key={item.name} href={item.href} className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-200" onClick={() => close()}>
                    <item.icon className="h-6 w-6 text-gray-600 " />
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/gallery" className="text-sm/6 font-semibold text-gray-900">
            Gallery
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg className="h-6 w-auto" viewBox="0 0 91 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M54.8084 49.0625H72.995L63.7938 33.125L72.454 28.125L90.3163 59.0625H59.5311L70.6034 82.5L0 83.1469L6.33013 72.1828L54.8202 72.5L48.4725 59.0625L13.4559 59.0625L38.7977 15.1699L54.8084 49.0625ZM30.7772 49.0625L43.7489 49.0625L37.911 36.7041L30.7772 49.0625ZM67.0418 18.75L58.3817 23.75L47.5555 5L56.2166 0L67.0418 18.75Z"
                  fill="black"
                />
              </svg>
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Homepage
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link href="/gallery" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  Marketplace
                </Link>
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
                  Company
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
