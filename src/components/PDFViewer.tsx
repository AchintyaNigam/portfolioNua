"use client";
import dynamic from "next/dynamic";
import {DashRing} from "@/components/loading-ui/dash-ring";
// Dynamically import the PDF viewer client component.
const PDFViewerClient = dynamic(() => import("./PDFViewerClient"), {
  ssr: false,
  loading: () => (
    <div className="lg:h-[60vh] h-[30vh] w-full flex justify-center items-center">
    <DashRing className="lg:size-20 size-5 text-white" />
    </div>
  ),
});

const PDFViewer = ({pdfSrc} : {pdfSrc : string}) => {
  return <PDFViewerClient pdfSrc={pdfSrc} />;
};
export default PDFViewer;
