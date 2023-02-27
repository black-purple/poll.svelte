<script>
    import {createEventDispatcher} from "svelte";
    export let tabItems;
    export let activeItem;

    const dispatch = createEventDispatcher();
</script>

<ul>
    {#each tabItems as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class:active={item === activeItem} on:click={() => dispatch("switchTab", item)}>
            {item}
        </li>
    {/each}
</ul>

<style>
    .active{
        border-bottom: .3rem solid #ff3e00;
        color: #ff3e00;
        border-radius: .25rem;
    }
    ul{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    li{
        text-align: center;
        font-size: large;
        font-weight: bold;
        list-style-type: none;
        padding: .1rem 0;
        margin-inline: 1rem;
        cursor: pointer;
        border: none;
    }
    li:hover{
        border-bottom: .3rem solid #ff3e00;
    }
    @media screen and (max-width: 670px) {
        li{
            min-width: 45%;
        }
    }
</style>