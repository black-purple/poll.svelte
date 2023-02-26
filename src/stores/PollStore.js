import { writable } from "svelte/store";

const PollStore = writable([{
    question: "Are you human",
    answera: "Yes",
    answerb: "No",
    votesa: 10,
    votesb: 3,
    id : Math.random()
},{
    question: "Favorite Frontend Framwework ",
    answera: "React",
    answerb: "Svelte",
    votesa: 45,
    votesb: 30,
    id : Math.random()
},{
    question: "favorite Backend Framework",
    answera: "Laravel",
    answerb: "NestJS",
    votesa: 1,
    votesb: 0,
    id : Math.random()
},]);

export default PollStore;