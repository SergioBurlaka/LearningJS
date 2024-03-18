// 68. Как бы Вы реализовали вспомогательную функцию запоминания?

// https://habr.com/ru/articles/486820/

// node ./68.Memoization

const memoization = () => {
  let savedValue = 0;
  let result = 0;

  return (value) => {
    if (value === savedValue) {
      console.log("return old result");
      return result;
    }

    console.log("return new result");

    const hardCalculation = value * value * value;
    result = hardCalculation;
    savedValue = value;

    return hardCalculation;
  };
};

const memo = memoization();

memo(5);
memo(100);
memo(100);
