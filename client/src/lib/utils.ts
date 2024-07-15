import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generatePDF: (
  html: string
) => Promise<{ src: string; pdf: jsPDF | null }> = async (html) => {
  try {
    const tempDiv = document.createElement("div");
    tempDiv.style.width = "1200px";
    tempDiv.innerHTML = html;

    document.body.appendChild(tempDiv);

    const canvas = await html2canvas(tempDiv);
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    document.body.removeChild(tempDiv);
    return { src: imgData, pdf };
  } catch (e) {
    console.error(e);
    return { src: "", pdf: null };
  }
};
