import { useState } from "react";

export default function QuoteGenerator () {
    const quotes = [
        "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It always seems impossible until it's done. - Nelson Mandela",
        "I am not afraid... I was born to do this. - Joan of Arc",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
        "Be yourself; everyone else is already taken. -Oscar Wilde"
      ];

    const [currentQuote, setCurrentQuote] = useState("");

    function generatorQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }

    return (
        <div className="Quotes_Gen">
            <h1>Random Quote Generator</h1>
            <p>{currentQuote}</p>
            <button onClick={generatorQuote}>Generate Quote</button>
        </div>
    );
};