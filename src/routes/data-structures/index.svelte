<script lang="ts">
	import { currentRouteURL, parentRouteURL } from 'src/stores/routes';
</script>

<svelte:head>
	<title>Data structures</title>
</svelte:head>

<h1>Data structures</h1>

<a href={$parentRouteURL}>Back to the main page</a>

<ul>
	<a href="{$currentRouteURL}/linked-list">Linked list</a>
</ul>
