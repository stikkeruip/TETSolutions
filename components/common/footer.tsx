import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f1e5d1] text-[#013d60]">
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
                <Link href="/procurement" className="hover:text-[#9A7E43]">
                  Procurement
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-[#9A7E43]">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/raw-materials" className="hover:text-[#9A7E43]">
                  Raw Materials
                </Link>
              </li>
              <li>
                <Link href="/eu-projects" className="hover:text-[#9A7E43]">
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
              <a href="https://www.facebook.com/profile.php?id=61573699178756" className="text-[#013d60] hover:text-[#9A7E43]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#013d60] hover:text-[#9A7E43]">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/106932061" className="text-[#013d60] hover:text-[#9A7E43]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@tetsolutions.com" className="text-[#013d60] hover:text-[#9A7E43]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#013d60] pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Technical Engineers for Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

