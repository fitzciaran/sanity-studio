import {
  drawSection,
  drawConnectivitySection,
  drawDisplaySection,
  drawInteractivitySection,
  drawPhysicalSpecsSection,
  drawComputingSection,
  drawPanelManagementSection,
  drawPowerSection,
  drawEnvironmentalSection,
  drawComplianceSection,
  drawFooter,
  standardSectionWidth,
  standardSectionYSpacing,
  standardFirstColumnLeft,
  standardColumnTop,
  standardColumnTopNoProductImage,
  standardSecondColumnLeft,
  createPageWithHeader,
  drawAudioSection,
} from "../template-utils.js";
import { localizeMiscKey } from "../localization.js";
import { getProductValue } from "../dataPullers.js";
import { prepareBoxList, formatBooleanIncluded } from "../formatters.js";
import { getNonLocalizedPropertyValue } from "../dataPullers.js";
import { savePDF, savePDFToOcean } from "../pdf-utils.js";
const { StandardFonts, rgb } = require("pdf-lib");

//somewhat bespoke template for AP9 due to the multiple sizes and versions being covered in one sheet.
export async function generateProductPDFForLangTemplate4(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight) {
  try {
    let pageNumber = 1;
    const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontHelvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontHelveticaBoldOblique = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);

    const textOptions = {
      font: fontHelvetica,
      size: 12,
      color: rgb(0, 0, 0),
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

    let currentY = await drawDisplaySection(
      product,
      language,
      page,
      textOptions,
      standardColumnTop,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true
    );

    currentY = await drawInteractivitySection(
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true
    );

    currentY = await drawComputingSection(
      product,
      language,
      page,
      textOptions,
      standardColumnTop,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      "COMPUTING"
    );

    currentY = await drawAudioSection(
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      "AUDIO"
    );

    currentY = await drawConnectivitySection(
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      "CONNECTIVITY",
      true
    );

    currentY = await drawPanelManagementSection(
      product,
      language,
      page,
      textOptions,
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      "PANEL MANAGEMENT"
    );

    drawFooter(page, textOptions, product, language, pageNumber);

    pageNumber++;

    const page2 = await createPageWithHeader(
      pdfDoc,
      pageWidth,
      pageHeight,
      fontHelvetica,
      headerGradientBase64,
      product,
      language,
      timesRoman,
      logoPath
    );

    currentY = await drawPowerSection(
      product,
      language,
      page2,
      textOptions,
      standardColumnTopNoProductImage,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      "POWER"
    );

    currentY = await drawEnvironmentalSection(
      product,
      language,
      page2,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      "ENVIRONMENTAL"
    );

    currentY = await drawComplianceSection(
      product,
      language,
      page2,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      "COMPLIANCE & CERTIFICATION"
    );

    currentY = await drawPhysicalSpecsSection(
      product,
      language,
      page2,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      false,
      ['65"', '75"', '86"'],
      1,
      "PHYSICAL SPECIFICATIONS - AP9-Axx-NA"
    );

    currentY = await drawPhysicalSpecsSection(
      product,
      language,
      page2,
      textOptions,
      currentY - 10,
      standardFirstColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      true,
      true,
      ['65"', '75"', '86"'],
      1,
      "PHYSICAL SPECIFICATIONS - AP9-Axx-V-NA"
    );
    const packedContentsSpecs = {
      [localizeMiscKey("What’s in the Box", language)]: prepareBoxList(getProductValue(product.whatsInTheBox, language)),
    };

    currentY = await drawSection(
      page2,
      textOptions,
      "PACKED CONTENTS",
      standardColumnTopNoProductImage,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      packedContentsSpecs,
      language,
      true,
      true,
      true
    );

    const installationSpecs = {
      installationBlurb: getProductValue(product.installationBlurb, language),
    };

    currentY = await drawSection(
      page2,
      textOptions,
      "INSTALLATION",
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      installationSpecs,
      language,
      true,
      false,
      false
    );

    const warrantySpecs = {
      standardWarranty: getProductValue(product.standardWarranty, language),
    };

    currentY = await drawSection(
      page2,
      textOptions,
      "WARRANTY",
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      warrantySpecs,
      language,
      true,
      false,
      false
    );

    const supportSpecs = {
      supportBlurb: getProductValue(product.supportBlurb, language),
    };

    currentY = await drawSection(
      page2,
      textOptions,
      "SUPPORT",
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      supportSpecs,
      language,
      true,
      false,
      false
    );

    const eduSpecs = {
      [localizeMiscKey("ActivInspire® Professional Single User", language)]: formatBooleanIncluded(
        getNonLocalizedPropertyValue(product, "activInspireProfessionalSingleUser"),
        language
      ),
    };

    currentY = await drawSection(
      page2,
      textOptions,
      "SUPPORT",
      currentY - 10,
      standardSecondColumnLeft,
      standardSectionYSpacing,
      standardSectionWidth,
      eduSpecs,
      language,
      true,
      false,
      true
    );
    drawFooter(page2, textOptions, product, language, pageNumber);

    pageNumber++;

    const page3 = await createPageWithHeader(
      pdfDoc,
      pageWidth,
      pageHeight,
      fontHelvetica,
      headerGradientBase64,
      product,
      language,
      timesRoman,
      logoPath
    );

    const technicalDrawingsTitle = localizeTitle("TECHNICAL DRAWINGS - AP9-A75-NA", language);
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

    drawFooter(page3, textOptions, product, language, pageNumber);

    savePDF(pdfDoc, product, language);
    savePDFToOcean(pdfDoc, product, language);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
}
