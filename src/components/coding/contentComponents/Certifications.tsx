import CertificationsCard from '@/components/coding/contentComponents/certifications/CertificationsCard'

const Certifications = () => {
  return (
    <div className="h-full w-full">
      <CertificationsCard pdfSrc = {"/Certifications/pdfs/AWSCP.pdf"} certBadgeImgSrc = {"/certifications/AWSCP.png"} />
    </div>
  )
}

export default Certifications
