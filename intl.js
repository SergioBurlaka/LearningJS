// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// tutorials:

// https://www.youtube.com/watch?v=4oGWpTAY_hc&ab_channel=WebDevSimplified

// https://www.youtube.com/watch?v=Wh2zd2oZOmo&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

const myBrowserLocalization = window.navigator.language;
const usaLocalization = "en-US";
const spanishLocalization = "es-ES";
const ukraineLocalization = "uk-UA";
const germanyLocalization = 'de-DE';

console.log("myBrowserLocalization ", myBrowserLocalization);

const dateNow = new Date();

const getFormattedData = (Localization, date) => {
  return new Intl.DateTimeFormat(Localization).format(date);
};

const uaFormat = new Intl.DateTimeFormat(myBrowserLocalization).format(dateNow);
console.log("uaFormat ", uaFormat);

const usaFormat = new Intl.DateTimeFormat(usaLocalization).format(dateNow);

console.log("usaFormat ", usaFormat);

const myBrtd = new Date("11.11.1985");

console.log("myBrtd ", myBrtd);

const uaFormatMyBrtd = new Intl.DateTimeFormat(myBrowserLocalization).format(
  myBrtd
);
console.log("uaFormatMyBrtd ", uaFormatMyBrtd);

const usaFormatMyBrtd = new Intl.DateTimeFormat(usaLocalization, {
  style: "full",
}).format(myBrtd);

console.log("usaFormatMyBrtd ", usaFormatMyBrtd);

// new Date(year, monthIndex, day)

const maxBrtd = new Date(1996, 7, 2);

const uaFormatMaxBrtd = new Intl.DateTimeFormat(myBrowserLocalization).format(
  maxBrtd
);
console.log("uaFormatMaxBrtd ", uaFormatMaxBrtd);

const usaFormatMaxBrtd = new Intl.DateTimeFormat(usaLocalization).format(
  maxBrtd
);

console.log("usaFormatMaxBrtd ", usaFormatMaxBrtd);

const spanishFormatMaxBrtd = new Intl.DateTimeFormat(
  spanishLocalization
).format(maxBrtd);

console.log("spanishFormatMaxBrtd ", spanishFormatMaxBrtd);

const currentFormatt = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
}).format(dateNow);

// Alt+Z - vscode text on visible screen

console.log("currentFormatt ", currentFormatt);

const currentFormatt_myBrtd = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
}).format(myBrtd);

console.log("currentFormatt_myBrtd ", currentFormatt_myBrtd);

const currentFormatt_maxBrtd = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
}).format(maxBrtd);

console.log("currentFormatt_maxBrtd ", currentFormatt_maxBrtd);

const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const options2 = { year: "2-digit", month: "numeric", day: "numeric" };

const currentFormatt_UA = new Intl.DateTimeFormat(
  ukraineLocalization,
  options1
).format(dateNow);
const currentFormatt_UA_2 = new Intl.DateTimeFormat(
  ukraineLocalization,
  options2
).format(dateNow);

console.log("currentFormatt_UA ", currentFormatt_UA);
console.log("currentFormatt_UA_2 ", currentFormatt_UA_2);

const currentFormattSpanish = new Intl.DateTimeFormat(spanishLocalization, {
  dateStyle: "long",
}).format(dateNow);

console.log("currentFormattSpanish ", currentFormattSpanish);

const testDateFormatter = new Intl.DateTimeFormat(usaLocalization, {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
  era: "long",
}).format(dateNow);

console.log("testDateFormatter ", testDateFormatter);

// RelativeTimeFormat

const formater = new Intl.RelativeTimeFormat(myBrowserLocalization, {
  style: "long",
}).format(-43, "minutes");

console.log("formater ", formater);

const yesterday = new Intl.RelativeTimeFormat(myBrowserLocalization, {
  numeric: "auto",
}).format(-1, "day");
console.log("yesterday ", yesterday);

const tomorrow = new Intl.RelativeTimeFormat(myBrowserLocalization, {
  numeric: "auto",
}).format(1, "day");

console.log("tomorrow ", tomorrow);


// Intl.NumberFormat


// https://www.youtube.com/watch?v=1vf7CuHRkX8&t=310s&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9




function formatPercent(value = 0) {
  return new Intl.NumberFormat('de-DE', {
    style: 'percent',
  }).format(value)
}

function formatEur(value = 0) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}


const resPercent = formatPercent(0.65)

console.log("resPercent ", resPercent);


const resEuro = formatEur(284.65)

console.log("resEuro ", resEuro);

const formatNumber = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency'}).format(9234.23)

console.log("formatNumber ", formatNumber);


const price = 1056.78

const formatNumber_2 = new Intl.NumberFormat(ukraineLocalization, {currency: 'EUR', currencyDisplay: 'name',style: 'currency'}).format(price)

console.log("formatNumber_2 ", formatNumber_2);


const formaterCurrency = new Intl.NumberFormat(usaLocalization, {
  currency: 'YEN',
  style: 'currency'
}).format(97738)

console.log("formaterCurrency ", formaterCurrency);

const formaterCurrency_2 = new Intl.NumberFormat(germanyLocalization, {
  currency: 'EUR',
  style: 'currency'
}).format(34535)

console.log("formaterCurrency_2 ", formaterCurrency_2);

const mySaalry = new Intl.NumberFormat(germanyLocalization, {
  currency: 'UAH',
  style: 'currency'
}).format(48560.43)

console.log("mySaalry ", mySaalry);


const mySaalryUSD = new Intl.NumberFormat(usaLocalization, {
  currency: 'USD',
  style: 'currency'
}).format(1800.76)

console.log("mySaalryUSD ", mySaalryUSD);

// liter


const volumeGalon = new Intl.NumberFormat(usaLocalization, {
  style: 'unit',
  unit: 'gallon',
  unitDisplay: 'long'

}).format(98)

console.log("volumeGalon ", volumeGalon);


const volumeLiter = new Intl.NumberFormat(usaLocalization, {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long'
}).format(45)

console.log("volumeLiter ", volumeLiter);


// notation


const notationBillion = new Intl.NumberFormat(usaLocalization, {
  notation:'compact'
}).format(234151345134)

console.log("notationBillion ", notationBillion);

const notationThousand = new Intl.NumberFormat(usaLocalization, {
  notation:'compact'
}).format(19993)

console.log("notationThousand ", notationThousand);



const fractionalDigits = new Intl.NumberFormat(usaLocalization, {
  maximumFractionDigits: 2
}).format(4.365345265464)

console.log("fractionalDigits ", fractionalDigits);

const fractionalDigits_2 = new Intl.NumberFormat(usaLocalization, {
  minimumFractionDigits: 2
}).format(8)

console.log("fractionalDigits_2 ", fractionalDigits_2);

//  Plural Routes

const pluralExample  =  new Intl.PluralRules(ukraineLocalization).select(0)

console.log("pluralExample ", pluralExample);

const pluralExample_1  =  new Intl.PluralRules(ukraineLocalization).select(1)

console.log("pluralExample_1 ", pluralExample_1);


const pluralExample_2  =  new Intl.PluralRules(ukraineLocalization).select(-1)

console.log("pluralExample_2 ", pluralExample_2);

const pluralExample_3  =  new Intl.PluralRules(ukraineLocalization).select(2)

console.log("pluralExample_3 ", pluralExample_3);

const pluralExample_4  =  new Intl.PluralRules(ukraineLocalization).select(3)

console.log("pluralExample_4 ", pluralExample_4);







