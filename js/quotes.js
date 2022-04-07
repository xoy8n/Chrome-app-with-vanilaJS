const quotes = [
  {
    quote: "이 무한한 우주의 영원한 침묵이 나를 두려움으로 몰아넣는다.",
    author: "블레이즈 파스칼",
  },
  {
    quote: "내게 신이란 우주 만물에 대한 나의 경외감이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "우주상수의 도입은 내 인생 최대의 실수",
    author: "알버트 아인슈타인",
  },
  {
    quote: "우주는 단 하나의 신전이 있는데 바로 인간의 몸이다.",
    author: "노발리스",
  },
  {
    quote: "나는 우주의 원리가 아름답고 단순할 것이라고 굳게 믿는다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "우주에 우리 밖에 없다면 엄청난 공간의 낭비.",
    author: "칼 세이컨",
  },
  {
    quote: "지구는 우주에 떠 있는 창백한 푸른 점 하나.",
    author: "칼 세이컨",
  },
];

function getRandom() {
  const quote = document.querySelector(".quote-text");
  const author = document.querySelector(".author-text");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomAuthor = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = randomQuote.quote;
  author.innerText = randomAuthor.author;
}

setInterval(getRandom, 5000);
