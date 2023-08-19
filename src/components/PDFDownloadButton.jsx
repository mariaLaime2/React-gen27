const PDFDownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "documento.pdf";
    link.click();
  };

  return (
    <button
      className=" p-2 h-15 min-w-1/2 bg-violet-500 hover:bg-violet-700 focus:bg-blue-700 text-white font-bold px-4 text-center  rounded"
      onClick={handleDownload}
    >
      Descargar C.V
    </button>
  );
};

export default PDFDownloadButton;
