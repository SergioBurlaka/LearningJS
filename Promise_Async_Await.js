const myPromise = new Promise((res, rej) => {
  res("hello");
});

myPromise.then((resp) => {
  console.log(resp);
});


///////////////////

const MyAsync = async () => {
  return "hello from async";
};

MyAsync().then((res) => {
  console.log(res);
});

const getResOfAsync = async () => {
  const resOfAsync = await MyAsync();

  console.log("resOfAsync", resOfAsync);
};

getResOfAsync()