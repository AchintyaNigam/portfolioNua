import CertificationsCard from '@/components/coding/contentComponents/certifications/CertificationsCard'
import PDFViewer from '@/components/PDFViewer';

const Certifications = () => {
  return (
    <div className="h-full w-full">
      <CertificationsCard certBadgeImgSrc = {"/certifications/AWSCP.png"} />
      <PDFViewer pdfSrc="/Certifications/pdfs/AWSCP.pdf" />
    </div>
  )
}

export default Certifications
