import CertificationsCard from '@/components/coding/contentComponents/certifications/CertificationsCard'
import { certifications } from '@/data/codingData';

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
