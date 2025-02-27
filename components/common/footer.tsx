import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f1e5d1] text-[#001e2e]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/public" className="font-bold text-xl">
              TET
            </Link>
            <p className="mt-2 text-sm">Transforming information into a competitive edge since 2002.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/procurement" className="hover:text-[#745e30]">
                  Procurement
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-[#745e30]">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/raw-materials" className="hover:text-[#745e30]">
                  Raw Materials
                </Link>
              </li>
              <li>
                <Link href="/eu-projects" className="hover:text-[#745e30]">
                  EU Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p>Amman, Jordan</p>
            <p>info@tetsolutions.com</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-[#001e2e] hover:text-[#745e30]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#001e2e] hover:text-[#745e30]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#001e2e] hover:text-[#745e30]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@tetsolutions.com" className="text-[#001e2e] hover:text-[#745e30]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#001e2e] pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Technical Engineers for Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

