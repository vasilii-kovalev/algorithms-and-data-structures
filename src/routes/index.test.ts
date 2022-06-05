import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';

import MainPage from './index.svelte';

test('Render', () => {
	render(MainPage);

	expect(
		screen.getByRole('heading', { name: 'Welcome to SvelteKit', level: 1 })
	).toBeInTheDocument();
});
