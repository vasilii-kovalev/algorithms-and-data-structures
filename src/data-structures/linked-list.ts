import isNull from 'lodash/isNull';

interface BasicNodeType<Value> {
	next: BasicNode<Value>;
	value: Value;
}

type BasicNode<Value> = BasicNodeType<Value> | null;

const createBasicNode = <Value>(value: Value): BasicNodeType<Value> => {
	return Object.create(null, {
		next: {
			value: null,
			writable: true
		},
		value: {
			value
		}
	});
};

const addBasicNode = <Value>(
	head: BasicNode<Value>,
	value: Value
): BasicNode<Value> => {
	const newBasicNode = createBasicNode(value);

	if (isNull(head)) {
		head = newBasicNode;
	} else {
		let currentNode: BasicNode<Value> = head;

		while (!isNull(currentNode.next)) {
			currentNode = currentNode.next;
		}

		currentNode.next = newBasicNode;
	}

	return head;
};

const removeNode = <Value>(
	head: BasicNode<Value>,
	nodeToRemove: BasicNodeType<Value>
): BasicNode<Value> => {
	if (isNull(head)) {
		throw new Error("Can't remove the node because head is `null`.");
	}

	if (nodeToRemove === head) {
		head = head.next;
	} else {
		let node: BasicNode<Value> = head;

		while (!isNull(node)) {
			const nextNode: BasicNode<Value> = node.next;

			if (nodeToRemove === nextNode) {
				node.next = nextNode.next;

				break;
			}

			node = nextNode;
		}
	}

	return head;
};

const getLength = <Value>(head: BasicNode<Value>): number => {
	let length = 0;
	let node: BasicNode<Value> = head;

	while (!isNull(node)) {
		length++;

		node = node?.next;
	}

	return length;
};

const createBasicLinkedList = <Value>(): BasicNode<Value> => {
	return null;
};

export { addBasicNode, createBasicLinkedList, getLength, removeNode };
export type { BasicNode, BasicNodeType };
