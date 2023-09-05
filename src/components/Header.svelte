<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
</script>

<header class="flex flex-row justify-between p-3">
	<div>
		<a href="/"> CV-IA </a>
	</div>
	<nav class="flex flex-row gap-3">
		<div aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</div>
		<div aria-current={$page.url.pathname === '/cv' ? 'page' : undefined}>
			<a href="/cv">CV</a>
		</div>
	</nav>

	<div>Profile</div>
</header>
