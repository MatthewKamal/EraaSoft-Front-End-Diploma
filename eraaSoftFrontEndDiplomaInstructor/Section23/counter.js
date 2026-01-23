const counterClosure = () => {
  let count = 0;
  const increaseCount = () => {
    count++;
    return count;
  };

  return increaseCount;
};

const inc = counterClosure();

export { inc };
