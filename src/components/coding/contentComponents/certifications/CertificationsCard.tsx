import Image from 'next/image'
import PDFViewer from '@/components/PDFViewer'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const CertificationsCard = ({
  certBadgeImgSrc,
  pdfSrc,
  title,
  description
}: {
  certBadgeImgSrc: string,
  pdfSrc: string,
  title: string,
  description: string
}) => {
  return (
    <div className="p-4 min-h-sm max-h-xl">
      <Dialog>
        <DialogTrigger className="border-2 rounded-lg p-4 hover:cursor-pointer hover:border-cyan-500 transition duration-300">
          <Image
            src={certBadgeImgSrc}
            width={200}
            height={200}
            alt="Certificate Badge Image"
            className="object-contain"
          />
        </DialogTrigger>

        <DialogContent
          className="
            !w-[95vw]
            !max-w-6xl
            lg:h-[90vh]
            p-0
            bg-blue-500/90
            text-white
            flex
            flex-col
          "
        >
          <DialogHeader className="p-6 pb-2 shrink-0">
            <DialogTitle className="text-2xl">{title}</DialogTitle>
        
            <DialogDescription className="text-white">
            {description}
            </DialogDescription>
          </DialogHeader>
        
          <div className="flex-1 overflow-auto p-4">
            <PDFViewer pdfSrc={pdfSrc} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CertificationsCard
