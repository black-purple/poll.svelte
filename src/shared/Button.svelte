<script>
    export let type = "primary";
    export let flat = false;
    export let outlined = false;
</script>

<button class={type} class:flat={flat} class:outlined={outlined} on:click>
    <slot>Button</slot>
</button>

<style>
    button{
        outline: transparent;
        border: transparent;
        padding: .7rem 1rem;
        border-radius: .3rem;
    }
    .primary{
        color: white;
        background-color: #8e44ad;
    }
    .secondary{
        color: black;
        background-color: lightsteelblue;
    }
    .danger{
        color: white;
        background-color: crimson;
    }
    .success{
        color: white;
        background-color: teal;
    }
    .warning{
        color: black;
        background-color: yellow;
    }
    .info{
        color: white;
        background-color: deepskyblue;
    }

    /* Outlined styles  */

    .primary.outlined{
        color: darkslateblue;
        border: .1rem solid darkslateblue;
    }
    .secondary.outlined{
        color: lightsteelblue;
        border: .1rem solid lightsteelblue;
    }
    .danger.outlined{
        color: crimson;
        border: .1rem solid crimson;
    }
    .success.outlined{
        color: teal;
        border: .1rem solid teal;
    }
    .warning.outlined{
        color: yellow;
        border: .1rem solid yellow;
    }
    .info.outlined{
        color: deepskyblue;
        border: .1rem solid deepskyblue;
    }
    .outlined{
        background-color: transparent;
    }

</style>