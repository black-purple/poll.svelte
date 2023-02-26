<script>
    import Card from "../shared/Card.svelte";
    import PollStore from "../stores/PollStore";
    import Button from "../shared/Button.svelte";
    import {tweened} from "svelte/motion";
    export let poll;
    
    $: totalVotes = poll.votesa + poll.votesb;
    $: percentA = Math.floor(100 / totalVotes * poll.votesa) || 0;
    $: percentB = Math.floor(100 / totalVotes * poll.votesb) || 0;

    const tweenedA = tweened(0, {duration: 500});
    const tweenedB = tweened(0, {duration: 500});
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    const addVote = (option, id) => {
        PollStore.update(savedPolls => {
            let copiedPolls = [...savedPolls];
            let upvotedPoll = copiedPolls.find((poll) => poll.id == id);
            if (option === "a"){
                upvotedPoll.votesa++;
            } 
            if (option === "b") {
                upvotedPoll.votesb++;
            }
            return copiedPolls;
        });

    }
    const handleDelete = (id) => {
        PollStore.update(savedPolls => {
            return savedPolls.filter(poll => poll.id != id);
        });
    }
</script>

<Card>
    <h4>{poll.question}</h4>
    <p>Total votes : {totalVotes}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => addVote("a", poll.id)}>
        <div class="percent percent-a" style="width: {$tweenedA}%"></div>
        <span>{poll.answera} ({poll.votesa})</span>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => addVote("b", poll.id)}>
        <div class="percent percent-b" style="width: {$tweenedB}%"></div>
        <span>{poll.answerb} ({poll.votesb})</span>  
    </div>

    <div class="delete">
        <Button type="danger" on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
</Card>


<style>
    h4{
        margin-bottom: 1rem;
    }
    div.answer{
        position: relative;
        background-color: rgb(241, 241, 241);
        padding: .7rem 1rem;
        margin-block: .5rem;
        border-radius: .3rem;
        user-select: none;
    }
    div.answer:hover{
        opacity: 0.5;
        cursor: pointer;
    }
    div.percent{
        top: 0;
        left: 0;
        position: absolute;
        height: 100%;
        border-left: .3rem solid;
    }
    div.percent-b{
        background-color: #2980b925;
        border-left-color: #2980b9;
    }
    div.percent-a{
        background-color: #8e44ad25;
        border-left-color: #8e44ad;
    }
    div.delete{
        padding-top: 1rem;
        text-align: center;
    }
</style>