// src/formatters.js
import { yesNo, included, hoursTranslation, temperatureUnit, fahrenheitUnit, localizeEnvironmentalKey, localizeSymbol } from "./localization.js";
/**
 * Appends a symbol to a given value.
 *
 * @param {any} value - The value to append the symbol to.
 * @param {string} language - Can be used to determin formatting
 * @param {boolean} [space=false] - Whether to add a space before the symbol.
 * @return {string|null} The value with the symbol appended, or null if the value is falsy.
 */
export function appendSymbol(value, symbol, language) {
  if (!value) return null;
  // console.log("appendSymbol", value, symbol, language);
  symbol = localizeSymbol(symbol, language);
  // console.log("localized appendSymbol", symbol);
  return `${value}${symbol}`;
}

export function formatBoolean(value, language) {
  if (value === null || value === undefined) return null;

  const strValue = String(value).trim().toLowerCase();

  const responses = yesNo[language] || yesNo.en;

  return strValue === "true" ? responses[0] : responses[1];
}

export function formatBooleanIncluded(value, language) {
  if (value === null || value === undefined) return null;

  const strValue = String(value).trim().toLowerCase();

  const responses = included[language] || yesNo.en;

  return strValue === "true" ? responses[0] : responses[1];
}
export function formatEnergyStarValue(value, language) {
  if (value === null || value === undefined) return null;

  const strValue = String(value).trim().toLowerCase();

  const responses = yesNo[language] || yesNo.en;

  return strValue === "true" ? responses[0] : responses[1];
}

export function formatNumberIncluded(value, language) {
  if (value === null || value === undefined) return null;

  const numValue = parseInt(value, 10);

  const responses = yesNo[language] || yesNo.en;

  if (numValue === 0) {
    return responses[1]; // "No" in the specified language
  }

  return `${responses[0]}, ${numValue}`; // "Yes, [value]" in the specified language
}

export function formatLifespan(value, language) {
  if (!value) return null;

  const numberFormatter = new Intl.NumberFormat(language, { maximumFractionDigits: 0 });
  let formattedNumber = numberFormatter.format(value);

  const hoursText = hoursTranslation[language] || hoursTranslation["en"];

  // Replace non-breaking space (U+202F) with a comma if it exists
  formattedNumber = formattedNumber.replace(/\u202F/g, ",");

  return `${formattedNumber} ${hoursText}`;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
export function formatTemperatureRange(min, max, language) {
  // console.log("in formatTemperatureRange", min, max, language);
  if (min === null && max === null) return null;
  if (min === null) {
    min = 0;
  }

  if (max === null) {
    max = 0;
  }

  const minF = celsiusToFahrenheit(min);
  const maxF = celsiusToFahrenheit(max);

  return `${min} ${temperatureUnit[language] || temperatureUnit["en"]} to ${max} ${
    temperatureUnit[language] || temperatureUnit["en"]
  } (${minF.toFixed(1)} ${fahrenheitUnit[language] || fahrenheitUnit["en"]} to ${maxF.toFixed(1)} ${
    fahrenheitUnit[language] || fahrenheitUnit["en"]
  })`;
}

export function formatHumidityRange(min, max, nonCondensing, language) {
  if (min === null || max === null) return null;
  const nonCondensingText = nonCondensing ? localizeEnvironmentalKey("non-condensing humidity", language) + " " : "";
  let formattedString = `${min}% to ${max}% ${nonCondensingText}`; //default to english
  if (language == "fr") {
    formattedString = `${min} à ${max} % (${nonCondensingText})`;
  }
  return formattedString;
}
export function prepareBoxList(value) {
  const itemPattern = /\d+x/; // Pattern to match '1x', '2x', etc.
  let result = [];
  let items = value.split(" ");

  let currentItem = "";

  items.forEach((word, index) => {
    if (itemPattern.test(word) && index !== 0) {
      result.push(currentItem.trim());
      currentItem = "";
    }
    currentItem += word + " ";
  });

  result.push(currentItem.trim());
  let arrayResult = result.filter((item) => item !== "");
  return arrayResult.join("£^");
}
