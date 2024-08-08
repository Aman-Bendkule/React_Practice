import React, { useState } from 'react'

const Quotes = () => {

    const data = [["My Life My Rules","Trust Your Ability","Programming 10% writing ND UNDERSTANDING WHY IT IS NOT WORKING"],
    ["Old is Gold", "No Pain No Gain", "If you Want It!!! Work For It!!!!!"],
    ["No Guts No Story","Nothing Is Impossible","Broken Crayons still Colors"]
];

const [index, setIndex] = useState(0)

const generateRandom = () => {
    const randomQuote = Math.floor(Math.random()*data.length);
    setIndex(randomQuote);
}

  return (
    <div>
      <button onClick={generateRandom} >Code</button>
      <button onClick={()=>(setIndex(1))}>Motivation</button>
      <button onClick={()=>(setIndex(2))}>Reality</button>
      {data[index].map((quote, i)=>(
        <div key={i}>{quote}</div>
      ))}
    </div>
  )
}

export default Quotes;


// import React, { useState } from 'react';


// const Quotes = () => {
//   const data = [
//     ["My Life My Rules", "Trust Your Ability", "Programming 10% writing ND UNDERSTANDING WHY IT IS NOT WORKING"],
//     ["Old is Gold", "No Pain No Gain", "If you Want It!!! Work For It!!!!!"],
//     ["No Guts No Story", "Nothing Is Impossible", "Broken Crayons still Colors"]
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const [showSingleQuote, setShowSingleQuote] = useState(false);

//   const generateRandomQuote = () => {
//     const randomArrayIndex = Math.floor(Math.random() * data.length);
//     const randomQuoteIndex = Math.floor(Math.random() * data[randomArrayIndex].length);
//     setCurrentIndex(randomArrayIndex);
//     setQuoteIndex(randomQuoteIndex);
//     setShowSingleQuote(true);
//   };

//   const nextQuote = () => {
//     setQuoteIndex((prevQuoteIndex) => (prevQuoteIndex + 1) % data[currentIndex].length);
//     if (quoteIndex + 1 === data[currentIndex].length) {
//       setCurrentIndex((prevArrayIndex) => (prevArrayIndex + 1) % data.length);
//       setQuoteIndex(0);
//     }
//   };

//   return (
//     <div>
//       <button onClick={generateRandomQuote}>Code</button>
//       <button onClick={() => { setCurrentIndex(1); setShowSingleQuote(false); }}>Motivation</button>
//       <button onClick={() => { setCurrentIndex(2); setShowSingleQuote(false); }}>Reality</button>

//       {showSingleQuote ? (
//         <div>
//           <div>{data[currentIndex][quoteIndex]}</div>
//           <button onClick={nextQuote}>Next Quote</button>
//         </div>
//       ) : (
//         data[currentIndex].map((quote, i) => (
//           <div key={i}>{quote}</div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Quotes;
