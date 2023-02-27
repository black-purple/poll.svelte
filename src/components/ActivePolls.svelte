<script>
    import PollStore from "../stores/PollStore";
    import Poll from "./Poll.svelte";
    import {scale} from "svelte/transition";
    import {flip} from "svelte/animate";

</script>

<div class="polls">
    {#each $PollStore as poll (poll.id)}
    <div in:scale out:scale|local animate:flip={{duration: 500}}>
        <Poll {poll}/>
    </div>
    {/each}
</div>

<style>
    div.polls{
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding: 1rem;
        width: 100%;
    }
    @media screen and (max-width: 670px) {
        div.polls{
            grid-template-columns: 1fr;
            padding: 1rem 0;
        }
    }
</style>