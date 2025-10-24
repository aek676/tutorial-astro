import { useState } from "preact/hooks";

interface GreetingProps {
    messages: string[];
}

export default function Greeting({ messages }: GreetingProps) {
    const [greeting, setGreeting] = useState(messages[0]);

    const randomMessage = () => setGreeting(messages[(Math.floor(Math.random() * messages.length))]);

    return (
        <div>
            <h3>
                ¡{greeting}! ¡Gracias por visitarnos!
            </h3>
            <button onClick={randomMessage}>Nuevo saludo</button>
        </div>
    );
};
