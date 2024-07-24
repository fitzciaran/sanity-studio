// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import { headerBase64 } from "../base64ImageData.js";
import { getNonLocalizedPropertyValue } from "./dataPullers.js";

import { generateProductPDFForLangTemplate1 } from "./templates/template1.js";
import { generateProductPDFForLangTemplate2 } from "./templates/template2.js";
import { generateProductPDFForLangTemplate3 } from "./templates/template3.js";
import { generateProductPDFForLangTemplate4 } from "./templates/template4.js";
const { PDFDocument } = require("pdf-lib");
const logoPath = pluginData.pluginDirUrl + "dist/logo.png";

jQuery(document).ready(function ($) {
  const client = createClient({
    projectId: "h80aa7ve",
    dataset: "test2",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2024-03-13", // use current date (YYYY-MM-DD) to target the latest API version
  });

  // $("#generate-pdf-button").on("click", async function () {
  $(document).ready(async function () {
    try {
      // Fetch product data
      const productData = await client.fetch(
        '*[_type == "product"]{ ..., "featuredImageUrl": featuredImage.asset->url,"technicalDrawingTopUrl": top.asset->url }'
      );

      // Generate PDF for each product
      for (const product of productData) {
        await generateProductPDFButtons(product, logoPath, headerBase64);

        console.dir(product);
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  });
});
// async function generateProductPDF(product, logoPath, headerGradientBase64) {
//   try {
//     // Create a new PDF document for each language
//     const languages = ["en", "fr"];
//     // Portrait A4 size (595 x 842 points)
//     const a4Width = 595;
//     const a4Height = 842;
//     for (const language of languages) {
//       console.log("generating pdf for: " + product.localisedTitle.find((item) => item._key === language).value);
//       generateProductPDFForLang(product, logoPath, headerGradientBase64, language, a4Width, a4Height);
//     }
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//   }
// }

async function generateProductPDFButtons(product, logoPath, headerGradientBase64) {
  try {
    // Create a new PDF document for each language
    const languages = ["en", "fr"];
    // Portrait A4 size (595 x 842 points)
    const a4Width = 595;
    const a4Height = 842;
    const buttonsContainer = document.getElementById("pdf-buttons-container");

    for (const language of languages) {
      const localizedTitleItem = product.localisedTitle.find((item) => item._key === language);
      const localizedSubtitleItem = product.subTitle ? product.subTitle.find((item) => item._key === language) : null;

      if (localizedTitleItem) {
        // Create button text with title and subtitle
        let buttonText = `${localizedTitleItem.value}`;
        if (localizedSubtitleItem) {
          buttonText += ` - ${localizedSubtitleItem.value}`;
        }
        buttonText += ` (${language})`;

        // Create a button for each product/lang combination
        const button = document.createElement("button");
        button.className = "button button-primary";
        button.innerText = buttonText;
        button.onclick = () => {
          console.log("Generating PDF for:", localizedTitleItem.value, language);
          generateProductPDFForLang(product, logoPath, headerGradientBase64, language, a4Width, a4Height);
        };

        buttonsContainer.appendChild(button);
      } else {
        console.log(`No localized title found for language: ${language}`);
      }
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
}

async function generateProductPDFForLang(product, logoPath, headerGradientBase64, language, pageWidth, pageHeight) {
  const pdfDoc = await PDFDocument.create();

  const pdfTemplateNumber = getNonLocalizedPropertyValue(product, "pdfTemplate");
  if (!pdfTemplateNumber || pdfTemplateNumber == "" || pdfTemplateNumber == 1) {
    generateProductPDFForLangTemplate1(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight);
  } else if (pdfTemplateNumber == 2) {
    generateProductPDFForLangTemplate2(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight);
  } else if (pdfTemplateNumber == 3) {
    generateProductPDFForLangTemplate3(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight);
  } else if (pdfTemplateNumber == 4) {
    generateProductPDFForLangTemplate4(pdfDoc, product, logoPath, headerGradientBase64, language, pageWidth, pageHeight);
  }
}
