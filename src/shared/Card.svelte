<div class="card">
    <slot>Card Content</slot>
</div>

<style>
    div.card{
        background-color: #fff;
        padding: 2rem;
        border-radius: .3rem;
        box-shadow: 0 .1rem .6rem rgba(0, 0, 0, .1);
        text-align: start;
    }
    @media screen and (max-width: 500px) {
        div.card{
            width: 100%;
        }
    }
</style>