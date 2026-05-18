"use client";

import {DashRing} from "@/components/loading-ui/dash-ring";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewerClient = ({
  pdfSrc,
}: {
  pdfSrc: string;
}) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);

  const [pageWidth, setPageWidth] = useState(800);

  const onDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // subtract a little padding
        setPageWidth(containerRef.current.offsetWidth - 32);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-auto p-4"
    >
    
      <div className="flex justify-center">
        <Document
          file={pdfSrc}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex lg:h-[60vh] h-[30vh] w-full items-center justify-center p-8">
              <DashRing className="lg:size-20 size-5 text-white" />
            </div>
          }
          error={
            <div className="p-8 text-center text-red-500">
              Failed to load PDF.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={pageWidth}
          />
        </Document>
      </div>
    </div>
  );
};

export default PDFViewerClient;
