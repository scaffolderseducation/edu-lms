// src/conclusion.js
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Conclusion = () => {
  const certificateRef = useRef(null);
  const learnerName = localStorage.getItem("learnerName") || "Learner";

  // ✅ Generate PDF
  const downloadPDF = async () => {
    const input = certificateRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "pt", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${learnerName}-Certificate.pdf`);
  };

  // ✅ Share on LinkedIn
  const shareOnLinkedIn = () => {
    const shareText = encodeURIComponent(
      `I am proud to have completed the "AI in Education" course with Scaffolders Education! 🎓🚀\n\n#AI #Education #Learning #EdTech`
    );
    const url = "https://www.scaffolders-education.com"; // 🔗 Replace with your site/course link
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}&summary=${shareText}`;
    window.open(linkedInUrl, "_blank", "width=600,height=500");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div
        ref={certificateRef}
        className="w-[900px] h-[600px] bg-white border-8 border-yellow-500 shadow-2xl rounded-2xl flex flex-col justify-center items-center relative"
      >
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <img src="/logo.svg" alt="Logo" className="w-20 h-20" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Certificate of Completion
        </h1>
        <p className="text-lg text-gray-600 mb-8">This is proudly presented to</p>

        {/* Learner Name */}
        <h2 className="text-3xl font-bold text-indigo-700 underline mb-6">
          {learnerName}
        </h2>

        {/* Course Info */}
        <p className="text-gray-700 text-center max-w-2xl mb-8">
          For successfully completing the <b>AI in Education</b> course,
          demonstrating commitment to innovation and technology in teaching.
        </p>

        {/* Signatures */}
        <div className="absolute bottom-10 left-20 flex flex-col items-center">
          <img src="/signature1.png" alt="Signature" className="h-12 mb-1" />
          <p className="text-gray-700 text-sm">Course Instructor</p>
        </div>

        <div className="absolute bottom-10 right-20 flex flex-col items-center">
          <img src="/signature2.png" alt="Signature" className="h-12 mb-1" />
          <p className="text-gray-700 text-sm">Head of Institution</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={downloadPDF}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          Download PDF
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
        >
          Share on LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Conclusion;
