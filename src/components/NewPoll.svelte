<script>
    import Button from "../shared/Button.svelte";
    import {createEventDispatcher} from "svelte";
    import PollStore from "../stores/PollStore";
    import {scale} from "svelte/transition";
  import Card from "../shared/Card.svelte";

    let fields = {
        question: '',
        answera: '',
        answerb: '',
    };
    const dispatch = createEventDispatcher();
    const handleSubmit = () => {
        const poll = {
            question: fields.question,
            answera: fields.answera,
            answerb: fields.answerb,
            votesa: 0,
            votesb: 0,
            id : Math.random()
        };

        PollStore.update(savedPolls => {
            return [...savedPolls, poll];
        })
        dispatch("addPoll");
        console.log(poll);
    }
</script>
<div in:scale>
    <Card>
        <form on:submit|preventDefault={handleSubmit}>
            <label class="form-label" for="question">Question</label>
            <input type="text" class="form-control" id="question" bind:value={fields.question}/>
            
            <label class="form-label" for="a">Answer A</label>
            <input type="text" class="form-control" id="a" bind:value={fields.answera}/>
            
            <label class="form-label" for="b">Answer B</label>
            <input type="text" class="form-control mb-4" id="b" bind:value={fields.answerb}/>
            
            <div class="add">
                <Button>Add Poll</Button>
            </div>
        </form>
    </Card>
</div>

<style>
    div{
        width: 50%;
    }
    label{
        text-align: start !important;
    }
    input{
        width: 100%;
        height: 3rem;
        margin-bottom: 1rem;
    }
    div.add{
        width: 100%;
        text-align: end;
    }
</style>