import { PutObjectCommand, S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  endpoint: "https://nyc3.digitaloceanspaces.com",
  forcePathStyle: false,
  region: "us-east-1",
  credentials: {
    accessKeyId: "DO00BJPQRM3PW36J6Q7V",
    secretAccessKey: pluginData.spacesKey,
  },
});
async function generatePDFBlobAndName(pdfDoc, product, language) {
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });

  let fileName, productName;
  if (product.subTitle != null) {
    fileName = `product_specification_${product.localisedTitle.find((item) => item._key === language).value}_${
      product.subTitle.find((item) => item._key === language).value
    }_${language}.pdf`;
    productName = `${product.localisedTitle.find((item) => item._key === language).value}_${
      product.subTitle.find((item) => item._key === "en").value
    }`;
  } else {
    fileName = `product_specification_${product.localisedTitle.find((item) => item._key === language).value}_${language}.pdf`;
    productName = `${product.localisedTitle.find((item) => item._key === "en").value}`;
  }

  return { blob, fileName, productName };
}

export async function savePDF(pdfDoc, product, language) {
  const { blob, fileName, productName } = await generatePDFBlobAndName(pdfDoc, product, language);

  // Create a download link for the PDF
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
async function checkS3ClientAndBucket(bucketName) {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Complete response data:", JSON.stringify(data, null, 2));
    const bucketExists = data.Buckets.some((bucket) => bucket.Name === bucketName);

    if (!bucketExists) {
      throw new Error(`Bucket ${bucketName} does not exist.`);
    }

    console.log("S3 client is initialized and bucket exists.");
    return true;
  } catch (err) {
    console.error("Error verifying S3 client and bucket: ", err);
    //  throw new Error("S3 client initialization or bucket verification failed.");
  }
}
export async function savePDFToOcean(pdfDoc, product, language) {
  const bucketName = "spec-sheets";
  // await testCORS();
  // await checkS3ClientAndBucket(bucketName);

  const { blob, fileName, productName } = await generatePDFBlobAndName(pdfDoc, product, language);
  const arrayBuffer = await blob.arrayBuffer();

  const params = {
    Bucket: "spec-sheets",
    Key: `PDFs/${productName}/${fileName}`,
    Body: new Uint8Array(arrayBuffer),
    ACL: "public-read",
    Metadata: {
      "x-amz-meta-my-key": "spec-sheet-meta-value-here",
    },
  };

  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log("Successfully uploaded object: " + params.Bucket + "/" + params.Key);
    return data;
  } catch (err) {
    console.log("Error", err);
    // throw new Error("Failed to upload PDF to DigitalOcean Spaces");
  }
}

async function testCORS() {
  // let url = "https://spec-sheets.nyc3.digitaloceanspaces.com/";
  let url = "https://spec-sheets.nyc3.cdn.digitaloceanspaces.com";

  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    if (response.ok) {
      console.log("CORS Test Successful: ", response);
    } else {
      console.log("CORS Test Failed: ", response);
    }
  } catch (error) {
    console.error("CORS Test Error: ", error);
  }
  // url = "https://spec-sheets.nyc3.digitaloceanspaces.com/?x-id=ListBuckets";
  url = "https://spec-sheets.nyc3.cdn.digitaloceanspaces.com/?x-id=ListBuckets";

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (response.ok) {
      console.log("ListBuckets Test Successful: ", response);
    } else {
      console.log("ListBuckets Test Failed: ", response);
    }
  } catch (error) {
    console.error("ListBuckets Test Error: ", error);
  }
}
