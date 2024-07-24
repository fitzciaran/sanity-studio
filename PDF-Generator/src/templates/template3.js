import { localizeTitle, localizeMiscKey } from "../localization.js";
import {
  drawBasicTechnicalDrawingSection,
  drawSection,
  drawConnectivitySection,
  drawPhysicalSpecsSection,
  drawComplianceSection,
  drawFooter,
  standardSectionYSpacing,
  standardFirstColumnLeft,
  standardColumnTop,
  fullSectionWidth,
  createPageWithHeader,
} from "../template-utils.js";
import { getProductValue } from "../dataPullers.js";
import { prepareBoxList } from "../formatters.js";

import { savePDF, savePDFToOcean } from "../pdf-utils.js";
const { StandardFonts, rgb } = require("pdf-lib");

export async function generateProductPDFForLangTemplate3(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight) {
  try {
    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontHelveticaBoldOblique = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

    const textOptions = {
      font: fontHelvetica,
      size: 12,
      color: rgb(0, 0, 0), // Black
    };
    const page = await createPageWithHeader(
      pdfDoc,
      pageWidth,
      pageHeight,
      fontHelvetica,
      headerGradientBase64,
      product,
      language,
      timesRoman,
      logoPath,
      true
    );

    const connectivityTitle = localizeTitle("ActivPanel 9 Wi-Fi and Bluetooth Module", language);
    let currentY = await drawConnectivitySection(
      product,
      language,
      page,
      textOptions,
      standardColumnTop,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      fullSectionWidth,
      connectivityTitle,
      true
    );
    const packedContentsSpecs = {
      [localizeMiscKey("What’s in the Box", language)]: prepareBoxList(getProductValue(product.whatsInTheBox, language)),
    };

    currentY = await drawSection(
      page,
      textOptions,
      "PACKED CONTENTS",
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      fullSectionWidth,
      packedContentsSpecs,
      language,
      true,
      true,
      true
    );

    currentY = await drawPhysicalSpecsSection(
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      fullSectionWidth,
      true,
      false,
      [],
      1,
      "PHYSICAL SPECIFICATIONS"
    );

    currentY = await drawComplianceSection(
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      fullSectionWidth,
      true,
      "COMPLIANCE & CERTIFICATION"
    );

    const sectionHeight = 200;
    const technicalDrawingsTitle = localizeTitle("TECHNICAL DRAWINGS (in mm)", language);
    await drawBasicTechnicalDrawingSection(
      pdfDoc,
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      fullSectionWidth,
      sectionHeight,
      technicalDrawingsTitle
    );

    drawFooter(page, textOptions, product, language);
    savePDF(pdfDoc, product, language);
    savePDFToOcean(pdfDoc, product, language);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
}
