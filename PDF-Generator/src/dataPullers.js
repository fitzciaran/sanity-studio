// src/pullers.js
import {
  formatBoolean,
  formatNumberIncluded,
  formatLifespan,
  appendSymbol,
  formatTemperatureRange,
  formatHumidityRange,
  formatEnergyStarValue,
} from "./formatters.js";
import {
  localizeConnectivityKey,
  localizeDisplayKey,
  localizePanelManagementKey,
  localizePhysicalSpecsKey,
  localizeComputingKey,
  localizePowerKey,
  localizeMiscKey,
  localizeEnvironmentalKey,
  localizeComplianceKey,
} from "./localization.js";

/**
 * Retrieves the value of a property for a specific language.
 *
 * @param {Array} property - The array of objects containing the property values.
 * @param {string} language - The language for which to retrieve the value.
 * @return {string|null} The value of the property for the specified language, or null if the property is falsy or the language is not found.
 */
export function getProductValue(property, language) {
  if (!property) return null;
  const value = property.find((item) => item._key === language)?.value;
  return value || null;
}

export function getNonLocalizedPropertyValue(obj, propertyKey) {
  if (!obj || !propertyKey) return null;
  return obj[propertyKey] || null;
}

export function pullDisplaySpecs(product, language) {
  const specs = {
    [localizeDisplayKey("Screen Size and Resolution", language)]: getProductValue(product.screenSizeAndResolution, language),
    [localizeDisplayKey("Screen Type", language)]: getProductValue(product.screenType, language),
    [localizeDisplayKey("Blue Light Reduction", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "blueLightReduction"), language),
    [localizeDisplayKey("Bonded Glass", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "bondedGlass"), language),
    [localizeDisplayKey("Aspect Ratio", language)]: getNonLocalizedPropertyValue(product, "aspectRatio"),
    [localizeDisplayKey("Display Area", language)]: getProductValue(product.displayArea, language) || "N/A",
    [localizeDisplayKey("Display Colors", language)]: getProductValue(product.displayColors, language),
    [localizeDisplayKey("LCD Viewing Angle", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "lcdViewingAngle"), "°", language),
    [localizeDisplayKey("LCD Response Time", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "lcdResponseTime"), " ms", language),
    [localizeDisplayKey("LCD Refresh Rate", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "lcdRefreshRate"), " ms", language),
    [localizeDisplayKey("LCD Brightness", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "lcdBrightness"), " cd/m²", language),
    [localizeDisplayKey("LED Lifespan", language)]: formatLifespan(getNonLocalizedPropertyValue(product, "ledLifespan"), language),
    [localizeDisplayKey("Contrast Ratio", language)]: getProductValue(product.contrastRatio, language),
    [localizeDisplayKey("Brightness", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "brightness"), " cd/m²", language),
    [localizeDisplayKey("Ambient Light Sensor", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "ambientLightSensor"), language),
    [localizeDisplayKey("Glass Hardness", language)]: getProductValue(product.glassHardness, language),
    [localizeDisplayKey("Glass Type", language)]: getProductValue(product.glassType, language),
    [localizeDisplayKey("Glass Thickness", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "glassThickness"), " mm", language),
  };
  return specs;
}

export function pullInteractivitySpecs(product, language) {
  const specs = {
    [localizeDisplayKey("Vellum Touch Technology", language)]: formatBoolean(
      getNonLocalizedPropertyValue(product, "vellumTouchTechnology"),
      language
    ),
    [localizeDisplayKey("Continuous Touch Points", language)]: getNonLocalizedPropertyValue(product, "continuousTouchPoints"),
    [localizeDisplayKey("Touch Resolution", language)]: getNonLocalizedPropertyValue(product, "touchResolution"),
    [localizeDisplayKey("Response Time", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "responseTime"), " ms", language),
    [localizeDisplayKey("Touch Accuracy", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "touchAccuracy"), " mm", language),
    [localizeDisplayKey("Tracking Rate", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "trackingRate"), " m/s", language),
    [localizeDisplayKey("Scan Rate", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "scanRate"), " hz", language),
    [localizeDisplayKey("Gestures and Edge Swipes", language)]: getProductValue(product.gesturesAndEdgeSwipes, language),
    [localizeDisplayKey("Unique Pen IDs", language)]: getNonLocalizedPropertyValue(product, "uniquePenIds"),
    [localizeDisplayKey("Pen and Touch Differentiation", language)]: formatBoolean(
      getNonLocalizedPropertyValue(product, "penAndTouchDifferentiation"),
      language
    ),
    [localizeDisplayKey("Palm Erase", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "palmErase"), language),
    [localizeDisplayKey("Palm Rejection", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "palmRejection"), language),
    [localizeDisplayKey("Pens Included", language)]: formatNumberIncluded(getNonLocalizedPropertyValue(product, "pensIncluded"), language),
    [localizeDisplayKey("Pen Type", language)]: getProductValue(product.penType, language),
    [localizeDisplayKey("Pen Holder", language)]: getProductValue(product.penHolder, language),
    [localizeDisplayKey("Pen Tip Diameter ", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "penTipDiameter"), " mm", language),
    [localizeDisplayKey("Classroom Essential Apps", language)]: getProductValue(product.classroomEssentialApps, language),
    [localizeDisplayKey("Compatibility", language)]: getProductValue(product.compatibility, language),
  };
  return specs;
}
export function pullComputingSpecs(product, language) {
  const specs = {
    [localizeComputingKey("Operating System", language)]: getProductValue(product.operatingSystem, language),
    [localizeComputingKey("RAM", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "ram", language), " GB", language),
    [localizeComputingKey("Internal Storage", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "internalStorage"), " GB", language),
    [localizeComputingKey("CPU", language)]: getProductValue(product.cpu, language),
    [localizeComputingKey("GPU", language)]: getProductValue(product.gpu, language),
    [localizeComputingKey("Trusted Platform Module", language)]: formatBoolean(
      getNonLocalizedPropertyValue(product, "trustedPlatformModule"),
      language
    ),
    [localizeComputingKey("Cloud Based User Profiles", language)]: formatBoolean(
      getNonLocalizedPropertyValue(product, "cloudBasedUserProfiles"),
      language
    ),
  };
  return specs;
}

export function pullAudioSpecs(product, language) {
  const specs = { [localizeMiscKey("Dual Front-facing Speakers", language)]: getNonLocalizedPropertyValue(product, "dualFrontFacingSpeakers") };
  return specs;
}
export function pullPowerSpecs(product, language) {
  const specs = {
    [localizePowerKey("Power Requirements", language)]: getProductValue(product.powerRequirements, language),
    [localizePowerKey("Power Consumption (Typical)", language)]: getNonLocalizedPropertyValue(product, "powerConsumption"),
    [localizePowerKey("Power Consumption (Standby)", language)]: getNonLocalizedPropertyValue(product, "powerConsumptionStandby"),
    [localizePowerKey("Ultra-Quiet Fanless Design", language)]: formatBoolean(
      getNonLocalizedPropertyValue(product, "ultraQuietFanlessDesign"),
      language
    ),
  };
  return specs;
}

export function pullComplianceSpecs(product, language) {
  const specs = {
    [localizePowerKey("Regulatory Certifications", language)]: getNonLocalizedPropertyValue(product, "regulatoryCertification"),
    [localizePowerKey("Energy Star Certified", language)]: formatEnergyStarValue(
      getNonLocalizedPropertyValue(product, "energyStarCertified"),
      language
    ),
    [localizePowerKey("Trade Agreements Act (TAA) Compliance", language)]: getProductValue(product.tradeAgreementsActTaaCompliance, language),
  };
  return specs;
}

export function pullPanelManagementSpecs(product, language) {
  const specs = {
    [localizePanelManagementKey("OTA Updates", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "otaUpdates"), language),
    [localizePanelManagementKey("Promethean Admin Tools", language)]: formatBoolean(
      getNonLocalizedPropertyValue(product, "prometheanAdminTools"),
      language
    ),
  };
  return specs;
}

export function pullEnvironmentalSpecs(product, language) {
  const specs = {
    [localizeComputingKey("Operating Temperature", language)]: formatTemperatureRange(
      getNonLocalizedPropertyValue(product, "operatingTemperatureMin"),
      getNonLocalizedPropertyValue(product, "operatingTemperatureMax"),
      language
    ),
    [localizeComputingKey("Storage Temperature", language)]: formatTemperatureRange(
      getNonLocalizedPropertyValue(product, "storageTemperatureMin"),
      getNonLocalizedPropertyValue(product, "storageTemperatureMax"),
      language
    ),
    [localizeComputingKey("Operating Humidity", language)]: formatHumidityRange(
      getNonLocalizedPropertyValue(product, "operatingHumidityMin"),
      getNonLocalizedPropertyValue(product, "operatingHumidityMax"),
      formatBoolean(getNonLocalizedPropertyValue(product, "nonCondensingHumidity"), language),
      language
    ),
    [localizeComputingKey("Storage Humidity", language)]: formatHumidityRange(
      getNonLocalizedPropertyValue(product, "storageHumidityMin"),
      getNonLocalizedPropertyValue(product, "storageHumidityMax"),
      formatBoolean(getNonLocalizedPropertyValue(product, "nonCondensingHumidity"), language),
      language
    ),
  };
  return specs;
}

export function pullPhysicalSpecs(product, language, sizes, secondProduct = false, fractionDigits = 1) {
  const productDimensionsWidthString = getNonLocalizedPropertyValue(product, "productDimensionWidth");
  const productDimensionsHeightString = getNonLocalizedPropertyValue(product, "productDimensionHeight");
  const productDimensionsDepthString = getNonLocalizedPropertyValue(product, "productDimensionDepth");
  let index = 0;
  if (secondProduct) {
    index = 1;
  }
  console.log(
    "pulling physical specs for: " +
      product.localisedTitle.find((item) => item._key === language).value +
      " sizes == " +
      sizes +
      " secondProduct == " +
      secondProduct
  );
  const formattedPanelDimensions = formatDimensions(
    index,
    productDimensionsWidthString,
    productDimensionsHeightString,
    productDimensionsDepthString,
    false,
    false,
    sizes,
    fractionDigits,
    language
  );
  // console.log("formattedPanelDimensions:" + formattedPanelDimensions);

  const packedDimensionsWidthString = getNonLocalizedPropertyValue(product, "packedDimensionWidth");
  const packedDimensionsHeightString = getNonLocalizedPropertyValue(product, "packedDimensionHeight");
  const packedDimensionsDepthString = getNonLocalizedPropertyValue(product, "packedDimensionDepth");

  const formattedPackedDimensions = formatDimensions(
    index,
    packedDimensionsWidthString,
    packedDimensionsHeightString,
    packedDimensionsDepthString,
    false,
    false,
    sizes,
    fractionDigits,
    language
  );
  // console.log("formattedPackedDimensions:" + formattedPackedDimensions);
  const netWeightString = getNonLocalizedPropertyValue(product, "netWeight");
  let formattedNetWeight;

  formattedNetWeight = formatDimensions(index, netWeightString, "", "", true, false, sizes, fractionDigits, language);
  formattedNetWeight = formatDimensions(index, netWeightString, "", "", true, false, sizes, fractionDigits, language);

  // console.log("netWeightString: " + netWeightString);
  // console.log("formattedNetWeight:" + formattedNetWeight);
  const packedWeightString = getNonLocalizedPropertyValue(product, "packedWeight");
  const formattedPackedWeight = formatDimensions(index, packedWeightString, "", "", true, false, sizes, fractionDigits, language);
  // console.log("packedWeightString: " + packedWeightString);
  // console.log("formattedPackedWeight:" + formattedPackedWeight);

  const wallMountWidthString = getNonLocalizedPropertyValue(product, "wallMountWidth");
  const wallMountHeightString = getNonLocalizedPropertyValue(product, "wallMountHeight");
  const wallMountDepthString = getNonLocalizedPropertyValue(product, "wallMountDepth");

  const formattedWallMountDimensions = formatWallMountDimensions(wallMountWidthString, wallMountHeightString, wallMountDepthString, language);

  const vesaMountWidthString = getNonLocalizedPropertyValue(product, "vesaMountPointWidth");
  const vesaMountHeightString = getNonLocalizedPropertyValue(product, "vesaMountPointHeight");

  const formattedVesaMountDimensions = formatDimensions(
    index,
    vesaMountWidthString,
    vesaMountHeightString,
    "",
    false,
    true,
    sizes,
    fractionDigits,
    language
  );

  const specs = {
    [localizePhysicalSpecsKey("Panel Dimensions", language)]: formattedPanelDimensions,
    [localizePhysicalSpecsKey("Packed Dimensions", language)]: formattedPackedDimensions,
    [localizePhysicalSpecsKey("Panel Net Weight", language)]: formattedNetWeight,
    [localizePhysicalSpecsKey("Packed Weight", language)]: formattedPackedWeight,
    [localizePhysicalSpecsKey("Wall Mount Dimensions", language)]: formattedWallMountDimensions,
    [localizePhysicalSpecsKey("VESA Mount Point", language)]: formattedVesaMountDimensions,
  };
  return specs;
}
//async???
export function pullConnectivitySpecs(product, language) {
  const specs = {
    [localizeConnectivityKey("OPS Slot", language)]: getNonLocalizedPropertyValue(product, "opsSlot"),
    [localizeConnectivityKey("HDMI In (Rear)", language)]: getNonLocalizedPropertyValue(product, "hdmiInRear"),
    [localizeConnectivityKey("HDMI In (Front)", language)]: getNonLocalizedPropertyValue(product, "hdmiInFront"),
    [localizeConnectivityKey("Display Port", language)]: getNonLocalizedPropertyValue(product, "displayPort"),
    [localizeConnectivityKey("USB-A (Rear)", language)]: getNonLocalizedPropertyValue(product, "usbARear"),
    [localizeConnectivityKey("USB-A 2.0 (Rear)", language)]: getNonLocalizedPropertyValue(product, "usbA2Rear"),
    [localizeConnectivityKey("USB-A 3.2 Gen 1 (Rear)", language)]: getNonLocalizedPropertyValue(product, "usbA32Rear"),
    [localizeConnectivityKey("USB-A 3.2 Gen 1 (Front)", language)]: getNonLocalizedPropertyValue(product, "usbA32Front"),
    [localizeConnectivityKey("USB-A 3.2 Gen 1 (Touch, Rear)", language)]: getNonLocalizedPropertyValue(product, "usbB32Rear"),
    [localizeConnectivityKey("USB-A 3.2 Gen 1 (Touch, Front)", language)]: getNonLocalizedPropertyValue(product, "usbB32Front"),
    [localizeConnectivityKey("USB-C 3.2 Gen 1 (Rear)", language)]: getProductValue(product.usbC32Rear, language),
    [localizeConnectivityKey("USB-B Touch (Front)", language)]: getNonLocalizedPropertyValue(product, "usbBTouchFront"),
    [localizeConnectivityKey("USB-B Touch (Rear)", language)]: getNonLocalizedPropertyValue(product, "usbBTouchRear"),
    [localizeConnectivityKey("USB-A (Front)", language)]: getNonLocalizedPropertyValue(product, "usbAFront"),
    [localizeConnectivityKey("MicroSD Slot", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "microSdSlot"), language),
    [localizeConnectivityKey("LAN In (RJ45)", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "lanIn"), " Gbit/s", language),
    [localizeConnectivityKey("LAN Out (RJ45)", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "lanOut"), " Gbit/s", language),
    [localizeConnectivityKey("Wake-on-LAN", language)]: formatBoolean(getNonLocalizedPropertyValue(product, "wakeOnLan"), language),
    [localizeConnectivityKey("Wi-Fi (Client)", language)]: getProductValue(product.wifi, language),
    [localizeConnectivityKey("Bluetooth", language)]: getNonLocalizedPropertyValue(product, "bluetooth"),
    [localizeConnectivityKey("HDMI Out", language)]: appendSymbol(getNonLocalizedPropertyValue(product, "hdmiOut", language), "(2.0)", language),
    [localizeConnectivityKey("AV-In (3.5 mm)", language)]: getNonLocalizedPropertyValue(product, "avIn"),
    [localizeConnectivityKey("Mic (3.5 mm)", language)]: getNonLocalizedPropertyValue(product, "mic"),
    [localizeConnectivityKey("Audio Out (3.5 mm)", language)]: getNonLocalizedPropertyValue(product, "audioOut"),
    [localizeConnectivityKey("RS-232", language)]: getNonLocalizedPropertyValue(product, "rs232"),
    [localizeConnectivityKey("Wireless Protocol", language)]: getProductValue(product.wirelessProtocol, language),
    [localizeConnectivityKey("Dual Band", language)]: getProductValue(product.dualBand, language),
    [localizeConnectivityKey("MIMO ", language)]: getNonLocalizedPropertyValue(product, "mimo"),
    [localizeConnectivityKey("Bandwidth ", language)]: getNonLocalizedPropertyValue(product, "bandwidth"),
    [localizeConnectivityKey("Connector ", language)]: getNonLocalizedPropertyValue(product, "connector"),
    [localizeConnectivityKey("Encryption ", language)]: getProductValue(product.encryption, language),
    [localizeConnectivityKey("HDMI In Details", language)]: getProductValue(product.hdmiInDetails, language),
    [localizeConnectivityKey("HDMI Out Details", language)]: getProductValue(product.hdmiOutDetails, language),
    [localizeConnectivityKey("USB Type", language)]: getProductValue(product.usbType, language),
    [localizeConnectivityKey("USB 2.0", language)]: getNonLocalizedPropertyValue(product, "usb2"),
    [localizeConnectivityKey("USB 3.0", language)]: getNonLocalizedPropertyValue(product, "usb3"),
    [localizeConnectivityKey("USB Type-C", language)]: getNonLocalizedPropertyValue(product, "usbTypeC"),
    [localizeConnectivityKey("Combined Audio 3.5 mm", language)]: getNonLocalizedPropertyValue(product, "combinedAudio35Mm"),
    [localizeConnectivityKey("Network Connectivity", language)]: getProductValue(product.networkConnectivity, language),
  };
  return specs;
}
function mmToInches(mm, fractionDigits = 1) {
  return (mm / 25.4).toFixed(fractionDigits);
}

function kgToLb(kg) {
  return (kg * 2.20462).toFixed(1);
}
function formatWallMountDimensions(width, height, depth, language, fractionDigits = 1) {
  //todo modify format based on language
  if (width == null || height == null || depth == null) {
    return "";
  }
  return `${width} x ${height} x ${depth} mm (${mmToInches(width, fractionDigits)} x ${mmToInches(height, fractionDigits)} x ${mmToInches(
    depth,
    fractionDigits
  )} in)`;
}

function formatDimensions(
  index,
  primaryValues,
  secondaryValues,
  tertiaryValues,
  weightConversion = false,
  widthHeightOnly = false,
  sizes = [],
  fractionDigits = 1,
  language
) {
  let output = "";
  try {
    let selectedPrimaryPart = primaryValues;
    let selectedHeightPart = secondaryValues;
    let selectedDepthPart = tertiaryValues;
    if (index != -1) {
      if (primaryValues == null || secondaryValues == null || tertiaryValues == null) {
        console.log("primaryValues == " + primaryValues);
        console.log("secondaryValues == " + secondaryValues);
        console.log("tertiaryValues == " + tertiaryValues);
        return "";
      }
      // Split each dimension string on '-' to get the parts
      let primaryParts = primaryValues.split("-");
      let secondaryParts = secondaryValues.split("-");
      let tertiaryParts = tertiaryValues.split("-");
      // Select the appropriate part based on the index
      if (index >= 0 && index < primaryParts.length) {
        selectedPrimaryPart = primaryParts[index];
      }

      if (index >= 0 && index < secondaryParts.length) {
        selectedHeightPart = secondaryParts[index];
      }

      if (index >= 0 && index < tertiaryParts.length) {
        selectedDepthPart = tertiaryParts[index];
      }
    }

    // todo based on language adjust the formatting as required
    if (weightConversion) {
      if (sizes && sizes.length > 0) {
        const weights = selectedPrimaryPart.split("/").map(Number);

        output = sizes
          .map((size, idx) => {
            const weight = weights[idx];
            return `${size}: ${weight} kg (${kgToLb(weight)}lb)`;
          })
          .join("\n");
      } else {
        return `${selectedPrimaryPart} kg (${kgToLb(selectedPrimaryPart)}lb)`;
      }
    } else if (!sizes || sizes.length == 0) {
      return `${selectedPrimaryPart} x ${selectedHeightPart} x ${selectedDepthPart} mm (${mmToInches(
        selectedPrimaryPart,
        fractionDigits
      )} x ${mmToInches(selectedHeightPart, fractionDigits)} x ${mmToInches(selectedDepthPart, fractionDigits)} in)`;
    } else if (widthHeightOnly) {
      // Split the selected parts on '/' and map to numbers
      const widths = selectedPrimaryPart.split("/").map(Number);
      const heights = selectedHeightPart.split("/").map(Number);

      if (widths.length !== 3 || heights.length !== 3) {
        console.error(
          'Invalid dimensions format. Each part must contain exactly three dimensions separated by "/". selectedPrimaryPart: ' +
            selectedPrimaryPart +
            " selectedHeightPart: " +
            selectedHeightPart
        );
        return "";
      }
      output = sizes
        .map((size, idx) => {
          const width = widths[idx];
          const height = heights[idx];
          return `${size}: ${width} x ${height} mm (${mmToInches(width, fractionDigits)} x ${mmToInches(height, fractionDigits)} in)`;
        })
        .join("\n");
    } else {
      // Split the selected parts on '/' and map to numbers
      const widths = selectedPrimaryPart.split("/").map(Number);
      const heights = selectedHeightPart.split("/").map(Number);
      const depths = selectedDepthPart.split("/").map(Number);

      if (widths.length !== 3 || heights.length !== 3 || depths.length !== 3) {
        console.error(
          'Invalid dimensions format. Each part must contain exactly three dimensions separated by "/". selectedPrimaryPart: ' +
            selectedPrimaryPart +
            " selectedHeightPart: " +
            selectedHeightPart +
            " selectedDepthPart: " +
            selectedDepthPart
        );
        return "";
      }
      output = sizes
        .map((size, idx) => {
          const width = widths[idx];
          const height = heights[idx];
          const depth = depths[idx];
          return `${size}: ${width} x ${height} x ${depth} mm (${mmToInches(width, fractionDigits)} x ${mmToInches(
            height,
            fractionDigits
          )} x ${mmToInches(depth, fractionDigits)} in)`;
        })
        .join("\n");
    }
  } catch (error) {
    console.log("error formating dimensions" + error);
    return "";
  }
  return output;
}
