import { drawConnectivitySection, drawHeader, drawFooter } from "../template-utils.js";
import { savePDF, savePDFToOcean } from "../pdf-utils.js";
const { StandardFonts, rgb } = require("pdf-lib");

export async function generateProductPDFForLangTemplate2(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight) {
  try {
    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontHelveticaBoldOblique = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    page.moveTo(0, 0);

    const textOptions = {
      font: fontHelvetica,
      size: 12,
      color: rgb(0, 0, 0), // Black
    };
    await drawHeader(page, headerGradientBase64, pageHeight, pageWidth, textOptions, pdfDoc, product, language, timesRoman, logoPath);

    const sectionYSpacing = 12;
    const sectionWidth = 250; //halfway across screen
    const connectivitySectionYStart = 650;
    const connectivitySectionXStart = 30;
    drawConnectivitySection(
      product,
      language,
      page,
      textOptions,
      connectivitySectionYStart,
      connectivitySectionXStart,
      sectionYSpacing,
      sectionWidth
    );

    drawFooter(page, textOptions, product, language);
    savePDF(pdfDoc, product, language);
    savePDFToOcean(pdfDoc, product, language);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
}
