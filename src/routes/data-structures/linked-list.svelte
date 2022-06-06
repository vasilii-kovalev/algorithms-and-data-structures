<script lang="ts">
	import {
		addBasicNode,
		createBasicLinkedList,
		removeNode,
		type BasicNodeType
	} from 'src/data-structures/linked-list';
	import { parentRouteURL } from 'src/stores/routes';
	import { getLinkedListNodes } from 'src/utilities/data-structures/linked-list';

	type NodeType = string;

	let linkedListHead = createBasicLinkedList<NodeType>();

	let value = '';

	const addNodeHandler = (): void => {
		linkedListHead = addBasicNode(linkedListHead, value);
		value = '';
	};

	const removeNodeHandler = (node: BasicNodeType<NodeType>): void => {
		linkedListHead = removeNode(linkedListHead, node);
	};

	$: nodes = getLinkedListNodes(linkedListHead);
</script>

<svelte:head>
	<title>Data structures | Linked list</title>
</svelte:head>

<h1>Linked list</h1>

<a href={$parentRouteURL}>Back to data structures</a>

<form on:submit|preventDefault={addNodeHandler}>
	<input type="text" name="value" required bind:value />
	<button type="submit">Add node</button>
	<ul>
		{#each nodes as node}
			<li>
				{node.value}
				<button type="button" on:click={() => removeNodeHandler(node)}>
					Remove node
				</button>
			</li>
		{/each}
	</ul>
</form>
