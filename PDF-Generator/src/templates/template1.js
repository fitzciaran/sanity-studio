import { drawConnectivitySection, drawDisplaySection, drawHeader, drawFooter } from "../template-utils.js";
import { savePDF, savePDFToOcean } from "../pdf-utils.js";
const { StandardFonts, rgb } = require("pdf-lib");

export async function generateProductPDFForLangTemplate1(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight) {
  try {
    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontHelveticaBoldOblique = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    page.moveTo(0, 0);

    const textOptions = {
      font: fontHelvetica,
      size: 12,
      color: rgb(0, 0, 0),
    };
    await drawHeader(page, headerGradientBase64, pageHeight, pageWidth, textOptions, pdfDoc, product, language, timesRoman, logoPath);

    const displaySectionYStart = 640;
    const displaySectionXStart = 30;
    const sectionYSpacing = 12;
    const sectionWidth = 250; //halfway across screen
    let currentY = await drawDisplaySection(
      product,
      language,
      page,
      textOptions,
      displaySectionYStart,
      displaySectionXStart,
      sectionYSpacing,
      sectionWidth,
      false
    );

    const connectivitySectionYStart = 450;
    const connectivitySectionXStart = 290;
    currentY = await drawConnectivitySection(
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
