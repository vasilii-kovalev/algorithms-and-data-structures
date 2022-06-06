import isNil from 'lodash/isNil';

import type {
	BasicNode,
	BasicNodeType
} from '../../../data-structures/linked-list';

const getLinkedListNodes = <Type>(
	head: BasicNode<Type>
): BasicNodeType<Type>[] => {
	const nodes: BasicNodeType<Type>[] = [];

	if (!isNil(head)) {
		let node: BasicNode<Type> = head;

		while (!isNil(node)) {
			nodes.push(node);

			node = node?.next;
		}
	}

	return nodes;
};

export { getLinkedListNodes };
