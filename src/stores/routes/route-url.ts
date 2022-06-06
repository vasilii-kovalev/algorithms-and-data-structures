import { page } from '$app/stores';
import isEmpty from 'lodash/isEmpty';
import { derived } from 'svelte/store';

const currentRouteURL = derived(page, (value) => {
	return value.url.pathname;
});

const parentRouteURL = derived(currentRouteURL, (value) => {
	const routes = value.split('/');
	const parentRoutes = routes.slice(0, -1);

	const parentRouteURL = parentRoutes.join('/');

	if (isEmpty(parentRouteURL)) {
		return '/';
	}

	return parentRouteURL;
});

export { currentRouteURL, parentRouteURL };
