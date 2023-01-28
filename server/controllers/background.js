import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';

export const getBackground = async (req, res) => {
    dotenv.config();
    try {
        let helo ='';
        const authorList = ["George R.R. Martin", "Rowling", "J.R.R. Tolkien", "Terry Prechet"]
        const styleList = ["comedic", "pesimistic", "optimistic", "angry", "romantic"]
        const randomNumber = Math.floor(Math.random() * authorList.length)
        const randomAuthor = authorList[randomNumber];
        const randomStyle  = styleList[Math.floor(Math.random() * styleList.length)]

        const {name, charClass, race, trait, str, dex, int} = req.body;

        const configuration = new Configuration({
            apiKey: process.env.OPEN_AI_KEY,
        });

        const openai = new OpenAIApi(configuration);

        openai.createCompletion({
            model: "text-davinci-003", 
            prompt: "Generate short character backstory for " + name + " who is " + race + " " + charClass + " and he is special for being " + trait + " Write it as if it were written by " + randomAuthor + " but dont mention him in text and give this writing mood " + randomStyle,
            max_tokens: 300,
            temperature: 0.7,
        })
        .then((response) => {
            helo =({
                response: `${response.data.choices[0].text}`
            })
            res.status(200).json(helo.response);
            })
    } catch {
        res.status(404).json({message: error.message});
    }
}


export const getDescription = async (req, res) => {
    dotenv.config();
    try {
        
        let helo ='';
        const authorList = ["George R.R. Martin", "Rowling", "J.R.R. Tolkien", "Terry Prechet"]
        const styleList = ["comedic", "pesimistic", "optimistic", "angry", "romantic"]
        const randomNumber = Math.floor(Math.random() * authorList.length)
        const randomAuthor = authorList[randomNumber];
        const randomStyle  = styleList[Math.floor(Math.random() * styleList.length)]

        const {name, shortDescription, type} = req.body;
        console.log(req.body);

        const configuration = new Configuration({
            apiKey: process.env.OPEN_AI_KEY,
        });

        const openai = new OpenAIApi(configuration);

        openai.createCompletion({
            model: "text-davinci-003", 
            prompt: "Write a 150 word description about " + type + " with name " + name + ". One Line phrase that describes it is " + shortDescription + ". Try to create original description. Do not reference sources of your inspiration. Write it in style of " + randomAuthor + "and give it " + randomStyle + " mood.",
            max_tokens: 1000,
            temperature: 0.7,
        })
        .then((response) => {
            helo =({
                response: `${response.data.choices[0].text}`
            })
            res.status(200).json(helo.response);
            })
    } catch {
        res.status(404).json({message: error.message});
    }
}