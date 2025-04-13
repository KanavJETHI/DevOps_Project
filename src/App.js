import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('');

  const localQuotes = [
    { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { content: "Get busy living or get busy dying.", author: "Stephen King" },
    { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { content: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { content: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { content: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { content: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { content: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { content: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { content: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { content: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", author: "Henry Ford" },
    { content: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
    { content: "The big lesson in life, baby, is never be scared of anyone or anything.", author: "Frank Sinatra" },
    { content: "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching.", author: "Satchel Paige" },
    { content: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.", author: "Leo Burnett" },
    { content: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
    { content: "The unexamined life is not worth living.", author: "Socrates" },
    { content: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { content: "The way I see it, if you want the rainbow, you gotta put up with the rain.", author: "Dolly Parton" },
    { content: "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.", author: "Hillary Clinton" },
    { content: "Don’t settle for what life gives you; make life better and build something.", author: "Ashton Kutcher" },
    { content: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", author: "Kobe Bryant" },
    { content: "I like criticism. It makes you strong.", author: "LeBron James" },
    { content: "You never really learn much from hearing yourself speak.", author: "George Clooney" },
    { content: "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.", author: "Celine Dion" },
    { content: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { content: "My mama always said, life is like a box of chocolates. You never know what you’re gonna get.", author: "Forrest Gump" },
    { content: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller" },
    { content: "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", author: "Marilyn Monroe" }
  ];
  
  const getQuote = async () => {
    const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    setQuote(random.content);
    setAuthor(random.author);
  };

  // const getQuote = async () => {
  //   try {
  //     const response = await fetch('https://api.https://api.api-ninjas.com/v1/quotes.io');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch quote');
  //     }
  //     const data = await response.json();
  //     setQuote(data.content);
  //     setAuthor(data.author);
  //   } catch (error) {
  //     setQuote('Could not fetch a quote. Try again later.');
  //     setAuthor('');
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="app">
      <div className="quote-box">
        <h2 className="quote">"{quote}"</h2>
        <p className="author">- {author}</p>
        <div className="buttons">
          <button onClick={getQuote}>New Quote</button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote}" — ${author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;