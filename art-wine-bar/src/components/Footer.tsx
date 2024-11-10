import Link from "next/link"
import { Instagram, Facebook} from "lucide-react"

const Footer = () => {
  return(
    <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="space-y-2">
            <div className="flex space-x-4">
            <Link href="https://www.instagram.com/artwinebar_nagoya_design_compe" target="_blank" aria-label="アートワインバーコンペ Instagram">
              <Instagram />
            </Link>
            <Link href="https://www.instagram.com/artwinebarnagoya0w0" target="_blank" aria-label="アートワインバー名古屋 Instagram">
              <Instagram />
            </Link>
            <Link href="https://www.instagram.com/tonkan_nagoya" target="_blank" aria-label="TONKAN名古屋 Instagram">
              <Instagram />
            </Link>
            <Link href="https://artwinebar-nagoya.com" target="_blank" aria-label="アートワインバー名古屋 ウェブサイト">
              <Facebook />
            </Link>
                </div>
            </div>
            <div className="mt-4 md:mt-0">
                <p>協賛企業</p>
                <div className="flex space-x-4">
                <div className="w-16 h-8 bg-gray-300"></div>
                <div className="w-16 h-8 bg-gray-300"></div>
                <div className="w-16 h-8 bg-gray-300"></div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer