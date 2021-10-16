export const SetWeights = (weights) => {
  const sortedWeights = sortData(weights);

  localStorage.setItem("weights", JSON.stringify(sortedWeights));
};

export const GetWeights = () => {
  const weights = JSON.parse(localStorage.getItem("weights")) ?? [];

  return cleanData(weights);
};

export const AddNewWeight = (date, weight) => {
  const weights = GetWeights();

  const entryForDate = weights.find((e) => e.date === date);

  if (entryForDate) {
    entryForDate.weight = weight;
  } else {
    weights.push({ date: date, weight: weight });
  }

  SetWeights(weights);

  window.location.reload();
};

const cleanData = (currnetData) => {
  if (Array.isArray(currnetData)) {
    return currnetData;
  }

  return Object.entries(currnetData).map((entry) => {
    return { date: entry[0], weight: entry[1] };
  });
};

const sortData = (unsortedData) => {
  return unsortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
};
