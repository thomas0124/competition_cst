import Link from "next/link"
import { Instagram, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Footer = () => {
  return(
    <footer className="bg-gray-800 text-white p-4 mt-8">
        <p className="mb-3">作品提出先: <Mail className="inline" /> awb.nagoya.compe@gmail.com</p>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <TooltipProvider>
            <div className="flex flex-wrap gap-4">
            <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild className="relative">
                <Link
                    href="https://www.instagram.com/artwinebar_nagoya_design_conpe"
                    className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">アートワインバーコンペ Instagram</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>アートワインバーコンペ</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/artwinebarnagoya0w0"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">アートワインバー名古屋 Instagram</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>アートワインバー名古屋</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/tonkan_nagoya"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">TONKAN名古屋 Instagram</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>TONKAN名古屋</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://artwinebar-nagoya.com"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                <Globe className="h-4 w-4" />
                <span className="sr-only">アートワインバー名古屋 公式ウェブサイト</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>公式ウェブサイト</p>
              </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
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