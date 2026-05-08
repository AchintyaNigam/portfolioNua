import Image from 'next/image'
import PDFViewer from '@/components/PDFViewer';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const CertificationsCard = ({certBadgeImgSrc, pdfSrc }: {certBadgeImgSrc: string, pdfSrc: string}) => {
  return (
    <div className="h-full w-full">
      <PDFViewer pdfSrc="/Certifications/pdfs/AWSCP.pdf" />
    </div>
  )
}

export default CertificationsCard
