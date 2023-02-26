<script>
	import Header from "./shared/Header.svelte";
	import Footer from "./shared/Footer.svelte";
	import ActivePolls from "./components/ActivePolls.svelte";
	import NewPoll from "./components/NewPoll.svelte";
	import Tabs from "./shared/Tabs.svelte";

	const tabItems = ["Active Polls", "New Poll"];
	let activeItem = tabItems[0];

	const switchTab = (e) => {
		activeItem = e.detail;
	}
	const addPoll = () => {
		activeItem = tabItems[0];
	}
</script>

<Header/>
<center>
	<main>
		<Tabs {tabItems} {activeItem} on:switchTab={switchTab}/>
		{#if activeItem === tabItems[0]}
			<ActivePolls/>
			{:else if tabItems[1]}
			<NewPoll on:addPoll={addPoll}/>
		{/if}
	</main>
</center>
{#if activeItem === tabItems[0]}
	<Footer/>
{/if}
<style>
	main{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
		max-width: 80%;
	}
	center{
		width: 100%;
		padding: 3rem;
	}
</style>