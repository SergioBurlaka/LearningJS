// node ./numbers

const oneMillion = 1000_000;
console.log("oneMillion", oneMillion);

const oneBillion = 1e9;
console.log("oneBillion", oneBillion);

const bigNum = 7.9756e6;
console.log("bigNum", bigNum);

const bigNum_2 = 7_975_600;
console.log("bigNum_2", bigNum_2);

const millisecond = 1.356e-6;

console.log("millisecond", millisecond);

const redHex = "FF0000";
const blueHex = "0000ff";

const num_3 = 256;

const hexNumber = num_3.toString(16);

console.log("hexNumber", hexNumber);

const blueInDecimal = parseInt("00", 16);

console.log("blueInDecimal", blueInDecimal);

const blueWith50PersentAlpha = "0000ff80";
// Альфа канал теж пишеться у hex від 0 до 256

// 50%  =  128 -> to hex

const fiftyPercentOfAlpha = 128;

console.log("fiftyPercentOfAlpha", fiftyPercentOfAlpha.toString(16));

// fiftyPercentOfAlpha 80

const orangeInHex = "ffa500";
