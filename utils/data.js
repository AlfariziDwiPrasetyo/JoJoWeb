data = [1,2,3,4,5,6,7,8,9,10]

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max + min )) + min
}

const getRandomData = (data, count) => {
    const selectedNumbers = [];
    while (selectedNumbers.length < count) {
      const randomIndex = getRandomInt(0, data.length);
      const randomNumber = data[randomIndex];
      if (!selectedNumbers.includes(randomNumber)) {
        selectedNumbers.push(randomNumber);
      }
    }
    return selectedNumbers;
  }

  console.log(getRandomData(data,3))