import { localizeFooter, localizeMiscKey } from "./localization";
const { StandardFonts, rgb } = require("pdf-lib");
import {
  pullDisplaySpecs,
  pullConnectivitySpecs,
  pullPhysicalSpecs,
  pullInteractivitySpecs,
  pullComputingSpecs,
  pullAudioSpecs,
  pullPanelManagementSpecs,
  pullComplianceSpecs,
  pullEnvironmentalSpecs,
  getProductValue,
  pullPowerSpecs,
} from "./dataPullers.js";
import { localizeTitle, localizeDisplayKey, localizePhysicalSpecsKey, localizeConnectivityKey } from "./localization.js";

export const standardSectionWidth = 260;
export const fullSectionWidth = 400; // 3/4 of the way across screenish
export const standardSectionYSpacing = 11.0;
export const standardFirstColumnLeft = 30;
export const standardSecondColumnLeft = 310;
export const standardColumnTop = 660;
export const standardColumnTopNoProductImage = 700;

export async function drawConnectivitySection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  sectionTitle = "CONNECTIVITY",
  multipleLineKeys = false
) {
  if (sectionTitle == "CONNECTIVITY") {
    sectionTitle = localizeTitle("CONNECTIVITY", language);
  }
  const specs = await pullConnectivitySpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys
  );
  return currentY;
}

export async function drawBasicTechnicalDrawingSection(
  pdfDoc,
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionWidth,
  sectionHeight,
  sectionTitle = "TECHNICAL DRAWINGS (in mm)"
) {
  if (sectionTitle == "TECHNICAL DRAWINGS (in mm)") {
    sectionTitle = localizeTitle("TECHNICAL DRAWINGS (in mm)", language);
  }
  let currentY = sectionYStart;
  textOptions.size = 10;
  page.drawText(sectionTitle, { x: sectionXStart, y: currentY, ...textOptions });
  // Draw technical drawing top image
  let imageDrawX = sectionXStart + 5;
  let imageDrawWidth = sectionWidth - 20;
  let imageDrawHeight = sectionHeight - 20;
  currentY = currentY - (20 + imageDrawHeight);

  try {
    const response = await fetch(product.technicalDrawingTopUrl);
    const imageBuffer = await response.arrayBuffer();
    const technicalDrawingTopImage = await pdfDoc.embedPng(imageBuffer);
    page.drawImage(technicalDrawingTopImage, {
      x: imageDrawX,
      y: currentY,
      width: imageDrawWidth,
      height: imageDrawHeight,
    });
  } catch (error) {
    console.log("error drawing technical drawing: " + error);
  }
  return currentY;
}

export async function drawFullTechnicalDrawingSection(
  pdfDoc,
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionWidth,
  sectionHeight,
  sectionTitle = "TECHNICAL DRAWINGS (in mm)"
) {
  if (sectionTitle == "TECHNICAL DRAWINGS (in mm)") {
    sectionTitle = localizeTitle("TECHNICAL DRAWINGS (in mm)", language);
  }
  let currentY = sectionYStart;
  textOptions.size = 10;
  page.drawText(sectionTitle, { x: sectionXStart, y: currentY, ...textOptions });

  let imageDrawX = sectionXStart + 5;
  let imageDrawWidth = sectionWidth - 200;
  let imageDrawHeight = sectionHeight - 20;
  currentY = currentY - (20 + imageDrawHeight);

  let technicalDrawingTopUrl = product.technicalDrawingTopUrl;
  let technicalDrawingFrontUrl = product.technicalDrawingFrontUrl;
  let technicalDrawingSideUrl = product.technicalDrawingSideUrl;

  try {
    const response = await fetch(technicalDrawingTopUrl);
    const imageBuffer = await response.arrayBuffer();
    const technicalDrawingTopImage = await pdfDoc.embedPng(imageBuffer);
    page.drawImage(technicalDrawingTopImage, {
      x: imageDrawX,
      y: currentY,
      width: imageDrawWidth,
      height: imageDrawHeight,
    });
  } catch (error) {
    console.log("error drawing technical drawing: " + error);
  }
  imageDrawX = sectionXStart + 5;
  imageDrawWidth = sectionWidth - 200;
  imageDrawHeight = sectionHeight - 20;
  currentY = currentY - (20 + imageDrawHeight);

  try {
    const response = await fetch(technicalDrawingFrontUrl);
    const imageBuffer = await response.arrayBuffer();
    const technicalDrawingTopImage = await pdfDoc.embedPng(imageBuffer);
    page.drawImage(technicalDrawingTopImage, {
      x: imageDrawX,
      y: currentY,
      width: imageDrawWidth,
      height: imageDrawHeight,
    });
  } catch (error) {
    console.log("error drawing technical drawing: " + error);
  }

  imageDrawX = sectionXStart + 405;
  imageDrawWidth = 200;
  imageDrawHeight = sectionHeight - 20;

  try {
    const response = await fetch(technicalDrawingSideUrl);
    const imageBuffer = await response.arrayBuffer();
    const technicalDrawingTopImage = await pdfDoc.embedPng(imageBuffer);
    page.drawImage(technicalDrawingTopImage, {
      x: imageDrawX,
      y: currentY,
      width: imageDrawWidth,
      height: imageDrawHeight,
    });
  } catch (error) {
    console.log("error drawing technical drawing: " + error);
  }
  return currentY;
}
function drawDimensionTableAtoD(pdfDoc, product, language, page, textOptions, sectionYStart, sectionXStart, sectionWidth, sectionHeight) {}

function drawDimensionTableEtoL(pdfDoc, product, language, page, textOptions, sectionYStart, sectionXStart, sectionWidth, sectionHeight) {}

export async function drawDisplaySection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "DISPLAY"
) {
  if (sectionTitle == "DISPLAY") {
    sectionTitle = localizeTitle("DISPLAY", language);
  }
  const specs = await pullDisplaySpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys
  );
  return currentY;
}

export async function drawInteractivitySection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "INTERACTIVITY"
) {
  if (sectionTitle == "INTERACTIVITY") {
    sectionTitle = localizeTitle("INTERACTIVITY", language);
  }
  const specs = await pullInteractivitySpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys
  );
  return currentY;
}

export async function drawComputingSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "COMPUTING"
) {
  if (sectionTitle == "COMPUTING") {
    sectionTitle = localizeTitle("COMPUTING", language);
  }

  // console.log("COMPUTING section title: " + sectionTitle);
  const specs = await pullComputingSpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    true
  );
  return currentY;
}
export async function drawAudioSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "AUDIO"
) {
  if (sectionTitle == "AUDIO") {
    sectionTitle = localizeTitle("AUDIO", language);
  }
  const specs = await pullAudioSpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    true
  );
  return currentY;
}

export async function drawPanelManagementSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "PANEL MANAGEMENT"
) {
  if (sectionTitle == "PANEL MANAGEMENT") {
    sectionTitle = localizeTitle("PANEL MANAGEMENT", language);
  }
  const specs = await pullPanelManagementSpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    true
  );
  return currentY;
}

export async function drawPowerSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "POWER"
) {
  if (sectionTitle == "POWER") {
    sectionTitle = localizeTitle("POWER", language);
  }
  const specs = await pullPowerSpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    false
  );
  return currentY;
}

export async function drawEnvironmentalSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "ENVIRONMENTAL"
) {
  if (sectionTitle == "ENVIRONMENTAL") {
    sectionTitle = localizeTitle("ENVIRONMENTAL", language);
  }
  const specs = await pullEnvironmentalSpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    false
  );
  return currentY;
}

export async function drawComplianceSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  sectionTitle = "COMPLIANCE & CERTIFICATION"
) {
  if (sectionTitle == "COMPLIANCE & CERTIFICATION") {
    sectionTitle = localizeTitle("COMPLIANCE & CERTIFICATION", language);
  }
  const specs = await pullComplianceSpecs(product, language);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    false
  );
  return currentY;
}

export async function drawPhysicalSpecsSection(
  product,
  language,
  page,
  textOptions,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  multipleLineKeys,
  secondProduct,
  sizes,
  fractionDigits = 1,
  sectionTitle = "PHYSICAL SPECIFICATIONS"
) {
  if (sectionTitle == "PHYSICAL SPECIFICATIONS") {
    sectionTitle = localizeTitle("PHYSICAL SPECIFICATIONS", language);
  }
  const specs = await pullPhysicalSpecs(product, language, sizes, secondProduct, fractionDigits);
  let currentY = await drawSection(
    page,
    textOptions,
    sectionTitle,
    sectionYStart,
    sectionXStart,
    sectionYSpacing,
    sectionWidth,
    specs,
    language,
    multipleLineKeys,
    true
  );
  return currentY;
}

export async function drawSection(
  page,
  textOptions,
  sectionTitle,
  sectionYStart,
  sectionXStart,
  sectionYSpacing,
  sectionWidth,
  specs,
  language,
  multipleLineKeys,
  shortKeySection = false,
  displayValue = true
) {
  let currentY = sectionYStart;

  try {
    let boxGrey = rgb(0.9, 0.9, 0.9);
    let prometheanPurple = rgb(0.363, 0.25, 0.355);
    let keyBlack = rgb(0.238, 0.207, 0.242);
    let keyGrey = rgb(0.254, 0.223, 0.258);
    // Draw section heading
    textOptions.size = 10;
    textOptions.color = prometheanPurple;
    page.drawText(sectionTitle, { x: sectionXStart, y: currentY, ...textOptions });
    page.drawLine({
      start: { x: sectionXStart, y: currentY - 7 },
      end: { x: sectionXStart + sectionWidth, y: currentY - 7 },
      thickness: 1,
    });
    currentY -= sectionYSpacing * 1.6; // Move down a big section spacing after the heading
    textOptions.size = 6.8;
    textOptions.color = keyBlack;
    let sectionIndex = 0;
    let keySpacing = sectionWidth / 2;
    if (shortKeySection) {
      keySpacing -= 30;
    }
    let multiLineValueLineSpacing = sectionYSpacing / 1.2;
    let keySize = 7.1;
    for (const [key, value] of Object.entries(specs)) {
      if (!value) continue; // Skip null or empty properties
      try {
        if (
          multipleLineKeys &&
          (key === localizeDisplayKey("Screen Size and Resolution", language) ||
            key === localizeDisplayKey("Display Area", language) ||
            key === localizePhysicalSpecsKey("Panel Dimensions", language) ||
            key === localizePhysicalSpecsKey("Packed Dimensions", language) ||
            key === localizePhysicalSpecsKey("Panel Net Weight", language) ||
            key === localizePhysicalSpecsKey("Packed Weight", language) ||
            key === localizePhysicalSpecsKey("VESA Mount Point", language) ||
            // key === localizeConnectivityKey("Wi-Fi (Client)", language) ||
            key === localizeMiscKey("What’s in the Box", language))
        ) {
          //   console.log("special key: " + key + " value: " + value + " currentY: " + currentY);
          const splitValues = splitByDelimiter(value);
          const delimiter = getDelimiterReplacementValue(value);
          if (sectionIndex === 1) {
            // Draw opaque grey colored rectangle for every other property
            page.drawRectangle({
              x: sectionXStart,
              y: currentY - multiLineValueLineSpacing * (splitValues.length - 1) - 0.6 * (splitValues.length - 1) + 9,
              width: sectionWidth,
              height: multiLineValueLineSpacing * (splitValues.length - 1) + 0.6 * (splitValues.length - 1),
              color: boxGrey,
              opacity: 0.5,
            });
          }

          // Draw key-value pair
          textOptions.color = keyBlack;
          textOptions.size = 7.1;
          page.drawText(key, { x: sectionXStart, y: currentY, ...textOptions });
          textOptions.color = keyGrey;
          textOptions.size = 6.8;
          // Split the value based on delimiter
          splitValues.forEach((splitValue, index) => {
            // Draw each screen size and resolution on a separate line
            splitValue = splitValue.trim();
            if (splitValue != null && splitValue != "") {
              const includeDelimiter = index === splitValues.length - 1 && delimiter != ")";
              const textToDraw = includeDelimiter ? splitValue : splitValue + delimiter;
              page.drawText(textToDraw, { x: sectionXStart + keySpacing, y: currentY + 0.7 - 0.1, ...textOptions });
              currentY -= multiLineValueLineSpacing;
            }
          });
          //add a little y spacing here?
          currentY -= 12 / splitValues.length;
        } else {
          let currentSectionYSpacing = sectionYSpacing;
          //for very long values shrink the text a little
          const valueString = value.toString();
          const keyString = key.toString();
          let maxLength = 40;
          let keyMaxLength = 31;
          if (shortKeySection) {
            keyMaxLength = 21;
          }
          keySize = 7.1;
          if (keyString.length > keyMaxLength) {
            if (shortKeySection) {
              keyMaxLength = 23;
            } else {
              keyMaxLength = 32;
            }

            keySize = 6.9;
          }
          if (keyString.length > keyMaxLength) {
            if (shortKeySection) {
              keyMaxLength = 26;
            } else {
              keyMaxLength = 35;
            }

            keySize = 6.85;
          }
          if (keyString.length > keyMaxLength || (shortKeySection && keyString.length > keyMaxLength)) {
            if (shortKeySection) {
              keyMaxLength = 28;
            } else {
              keyMaxLength = 38;
            }

            keySize = 6.8;
          }

          if (keyString.length > keyMaxLength || (shortKeySection && keyString.length > keyMaxLength)) {
            if (shortKeySection) {
              keyMaxLength = 30;
            } else {
              keyMaxLength = 40;
            }

            keySize = 6.75;
          }

          if (keyString.length > 70 && keyString.length < 77) {
            console.log("squeezing onto 2 lines: " + keyString);
            if (shortKeySection) {
              keyMaxLength = 31;
            } else {
              keyMaxLength = 40;
            }

            keySize = 6.7;
          }

          let valueSize = 6.7;
          if (valueString.length > 40) {
            valueSize = 6.6;
            maxLength = 41;
            currentSectionYSpacing -= 2.0;
          }
          if (valueString.length > 50) {
            console.log("long value for key: " + keyString);
            //if we have 2 lines for values but have tried to squeeze the key onto one line we might as well let the key fill 2 as well.
            if (keyString.length > 34 && keyString.length < 46) {
              keyMaxLength = 26;
              keySize = 7.1;
            }
          }
          if (valueString.length > 80) {
            valueSize = 6.3;
            maxLength = 43;
            currentSectionYSpacing -= 2.0;
          }
          if (!displayValue) {
            keyMaxLength = 80;
            maxLength = 80;
          }
          const lines = splitTextIntoLines(valueString, maxLength);
          const keyLines = splitTextIntoLines(keyString, keyMaxLength);
          let maxLines = Math.max(lines.length, keyLines.length);

          if (key == localizeConnectivityKey("Wi-Fi (Client)", language)) {
            console.log("Wi-Fi (Client) maxLines: " + maxLines);
          } else if (key.includes("Wi-Fi)")) {
            console.log(key + " maxLines: " + maxLines);
          }
          console.log("key is: " + key);

          if (sectionIndex === 1) {
            // console.log("drawing background for " + key + " lines: " + lines.length);
            // Draw opaque grey colored rectangle for every other property
            page.drawRectangle({
              x: sectionXStart,
              y: currentY - currentSectionYSpacing * maxLines + 9 - 3 * (maxLines - 1),
              width: sectionWidth,
              height: currentSectionYSpacing * maxLines + 3 * (maxLines - 1),
              color: boxGrey,
              opacity: 0.5,
            });
          }
          if (displayValue) {
            let numberOfKeyLines = 0;
            let numberOfValueLines = 0;
            // Draw key-value pair
            textOptions.color = keyBlack;
            // textOptions.size = 7.8;
            textOptions.size = keySize;
            let keyLineCurrentY = currentY;
            keyLines.forEach((line) => {
              page.drawText(line, { x: sectionXStart, y: keyLineCurrentY, ...textOptions });
              keyLineCurrentY -= currentSectionYSpacing;
              numberOfKeyLines++;
            });

            // page.drawText(key, { x: sectionXStart, y: currentY, ...textOptions });
            textOptions.color = keyGrey;
            textOptions.size = valueSize;
            lines.forEach((line) => {
              page.drawText(line, { x: sectionXStart + keySpacing, y: currentY + valueSize / 10 - 0.1, ...textOptions });
              currentY -= currentSectionYSpacing;
              numberOfValueLines++;
            });
            if (numberOfKeyLines - numberOfValueLines > 0) {
              //make sure we have enough space for multiple key lines even if we don't have as many valueLines
              currentY -= currentSectionYSpacing * (numberOfKeyLines - numberOfValueLines);
            }
          } else {
            textOptions.color = keyGrey;
            textOptions.size = keySize;
            lines.forEach((line) => {
              page.drawText(line, { x: sectionXStart, y: currentY, ...textOptions });
              currentY -= currentSectionYSpacing;
            });
          }

          currentY -= 2 * maxLines;
        }
        sectionIndex = 1 - sectionIndex;
      } catch (error) {
        console.error(`Error drawing property "${key}": `, error);
      }
    }
  } catch (error) {
    console.error("Error drawing section: ", error);
    console.log("sectionTitle was : ", sectionTitle + " specs== " + specs);
  }
  return currentY;
}

function splitTextIntoLines(text, maxLength) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length > maxLength) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });

  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  return lines;
}

function splitByDelimiter(value) {
  if (value.includes("£^")) {
    return value.split("£^");
  } else if (value.includes(")")) {
    return value.split(")");
  } else if (value.includes(",")) {
    return value.split(",");
  } else if (value.includes(";")) {
    return value.split(";");
  } else {
    return [value];
  }
}

function getDelimiterReplacementValue(value) {
  if (value.includes("£^")) {
    //we use £^ as an internal separator
    return "";
  } else if (value.includes(")")) {
    return ")";
  } else if (value.includes(",")) {
    return ",";
  } else if (value.includes(";")) {
    return ";";
  } else {
    return "";
  }
}

export async function drawHeader(
  page,
  headerGradientBase64,
  pageHeight,
  pageWidth,
  textOptions,
  pdfDoc,
  product,
  language,
  timesRoman,
  logoPath,
  includeProductImage = false
) {
  await drawGradientHeader(page, headerGradientBase64, pageHeight, pageWidth, textOptions, pdfDoc, language);
  await drawProductTitleLogoAndImage(product, page, language, textOptions, timesRoman, logoPath, pdfDoc, includeProductImage);
}

async function drawGradientHeader(page, headerGradientBase64, pageHeight, pageWidth, textOptions, pdfDoc, language) {
  const headerHeight = 47;
  let headerImage = null;
  try {
    headerImage = await pdfDoc.embedPng(headerGradientBase64);
    page.drawImage(headerImage, {
      x: 0,
      y: pageHeight - headerHeight,
      width: pageWidth,
      height: headerHeight,
    });
  } catch (error) {
    console.log("error drawGradientHeader: " + error + " headerImage null == " + (headerImage == null));
  }
  textOptions.color = rgb(1, 1, 1);
  textOptions.font = await pdfDoc.embedFont(StandardFonts.HelveticaBoldOblique);
  page.drawText(localizeTitle("Product Specifications", language), { x: 30, y: 810, ...textOptions });

  textOptions.color = rgb(0, 0, 0);
}

async function drawProductTitleLogoAndImage(product, page, language, textOptions, timesRoman, logoPath, pdfDoc, includeProductImage = false) {
  // Draw product title
  textOptions.size = 28;
  page.drawText(product.localisedTitle.find((item) => item._key === language).value, { x: 30, y: 750, ...textOptions });
  if (product.subTitle) {
    textOptions.size = 18;
    page.drawText(product.subTitle.find((item) => item._key === language).value, { x: 30, y: 720, ...textOptions });
  }
  textOptions.font = timesRoman;
  // Draw logo
  try {
    const logoImageBytes = await fetch(logoPath).then((res) => res.arrayBuffer());
    const logoImage = await pdfDoc.embedPng(logoImageBytes);
    page.drawImage(logoImage, {
      x: 475,
      y: 805,
      width: 100,
      height: 20.7,
    });
  } catch (error) {
    console.log("error rendering logo image: " + error + " logoPath: " + logoPath);
  }
  if (includeProductImage) {
    try {
      const response = await fetch(product.featuredImageUrl);
      const imageBuffer = await response.arrayBuffer();
      const featuredImage = await pdfDoc.embedPng(imageBuffer);
      page.drawImage(featuredImage, {
        x: 375,
        y: 665,
        width: 185,
        height: 135,
      });
    } catch (error) {
      console.log("error rendering product image: " + error + " imageBuffer null == " + (imageBuffer == null));
    }
  }
}

export async function drawFooter(page, textOptions, product, language, pageNumber = -1) {
  const finalMainFontLineText = getProductValue(product.finalText, language);
  if (finalMainFontLineText != null && finalMainFontLineText != "") {
    page.drawText(finalMainFontLineText, { x: standardFirstColumnLeft, y: 70, ...textOptions, size: 7, maxWidth: 570, lineHeight: 7 });
  }
  const prefooterText = getProductValue(product.prefooterText, language);
  if (prefooterText != null && prefooterText != "") {
    page.drawText(prefooterText, { x: standardFirstColumnLeft, y: 50, ...textOptions, size: 5, maxWidth: 370, lineHeight: 7 });
  }
  if (pageNumber != -1) {
    page.drawText(`Page ${pageNumber}`, { x: 540, y: 50, ...textOptions, size: 8, maxWidth: 100, lineHeight: 7 });
  }
  const footerText = localizeFooter(language);
  page.drawText(footerText, { x: standardFirstColumnLeft, y: 40, ...textOptions, size: 5, maxWidth: 545, lineHeight: 7 });
}

export async function createPageWithHeader(
  pdfDoc,
  pageWidth,
  pageHeight,
  fontHelvetica,
  headerGradientBase64,
  product,
  language,
  timesRoman,
  logoPath,
  includeProductImage = false
) {
  const page = pdfDoc.addPage([pageWidth, pageHeight]);
  page.moveTo(0, 0);

  const textOptions = {
    font: fontHelvetica,
    size: 12,
    color: rgb(0, 0, 0),
  };

  await drawHeader(
    page,
    headerGradientBase64,
    pageHeight,
    pageWidth,
    textOptions,
    pdfDoc,
    product,
    language,
    timesRoman,
    logoPath,
    includeProductImage
  );

  return page;
}
