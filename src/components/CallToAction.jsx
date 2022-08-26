import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-auth.jpg'

export function CallToAction() {
  return (
    <section id="get-started-today" className="relative overflow-hidden  py-32">
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="m-1 p-1 text-4xl  font-extrabold text-[#ECA72C] sm:text-6xl">
            <span className="block">$ $</span>
            <span className="block rotate-90 text-5xl sm:text-7xl">)</span>
          </h2>
          <h2 className="m-2 p-2 text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">
              Check on your refund status right here!
            </span>
          </h2>
          <div className="mt-8 flex justify-evenly">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-2.5
                                        py-1.5 text-base font-semibold text-blue-50 hover:bg-blue-900
                                        hover:ring-1 hover:ring-blue-200 md:px-5 md:py-3 "
              >
                Check Refund Status
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-2.5
                                        py-1.5 text-base font-semibold text-blue-50 hover:bg-blue-900
                                        hover:ring-1 hover:ring-blue-200 md:px-5 md:py-3"
              >
                Check Amended Status
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
