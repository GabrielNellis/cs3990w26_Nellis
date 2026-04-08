import {Tile} from "./Tile.js"
import {AssetTile} from "./AssetTile.js"
export let score = 0;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "Do you like JS?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "The answer to this is a",
        options: ["a", "b", "c", "d"],
        correctAnswer: "a"
    },
    {
        question: "The answer to this is a",
        options: ["a", "b", "c", "d"],
        correctAnswer: "a"
    },
    {
        question: "The answer to this is a",
        options: ["a", "b", "c", "d"],
        correctAnswer: "a"
    },
    {
        question: "The answer to this is a",
        options: ["a", "b", "c", "d"],
        correctAnswer: "a"
    }
]

const assets = [
    {
        value: "💎",
        description: "You are getting an extra star"
    },
    {
        value: "🐻",
        description: "The scary bear takes away one star"
    },
    {
        value: "❌",
        description: "Game OVER!!!"
    }
]

export function changeScore(num){
    score = score + num;
}

export function generateTiles() { //only going to do the questions array for now
    questions.forEach(tile => {
        new Tile(tile);
    });
    assets.forEach(asset => {
        new AssetTile(asset);
    });
}