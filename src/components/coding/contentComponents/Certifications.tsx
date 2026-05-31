import CertificationsCard from '@/components/coding/contentComponents/certifications/CertificationsCard'
const certifications = [
  {
    title: "AWS Cloud Practitioner",
    description:
      "The AWS Cloud Practitioner certification deals with understanding the AWS Cloud ecosystem",
    pdfSrc: "/Certifications/pdfs/AWSCP.pdf",
    certBadgeImgSrc: "/Certifications/AWSCP.png",
  },
];

const Certifications = () => {
  return (
    <div className="flex flex-wrap lg:justify-start justify-center items-center">
      {certifications.map((certification) => (
        <CertificationsCard
          key={certification.title}
          {...certification}
        />
      ))}
    </div>
  )
}

export default Certifications
