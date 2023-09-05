<script>
	// Your script here
</script>

<svelte:head>
	<title>CV AI</title>
	<meta name="description" content="Craft your cv with the help of ai." />
</svelte:head>

<div class="h-full min-h-screen text-text-main">
	<main class="px-10">
		<section class="h-screen flex flex-col justify-center items-center text-center">
			<h2 class="text-5xl mb-5">Craft Your Resume on the Fly!</h2>
			<p class="text-2xl mb-5">
				Use AI to optimize your resume and improve your chances for an interview.
			</p>
			<div class="space-x-4">
				<button class="text-2xl bg-bg-1 text-text-main px-8 py-4 rounded hover:bg-bg-2"
					>Get Started</button
				>
				<button class="text-2xl bg-bg-1 text-text-main px-8 py-4 rounded hover:bg-bg-2"
					>Learn More</button
				>
			</div>
		</section>

		<section class="text-center mb-52">
			<h3 class="text-4xl mb-10">Features</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div>
					<h4 class="text-3xl mb-5">Automated Proofreading</h4>
					<p class="text-xl">Our AI checks for grammatical errors and suggests improvements.</p>
				</div>
				<div>
					<h4 class="text-3xl mb-5">Optimized Content</h4>
					<p class="text-xl">Get content suggestions tailored to your industry and role.</p>
				</div>
				<div>
					<h4 class="text-3xl mb-5">Instant Feedback</h4>
					<p class="text-xl">Receive immediate feedback and make changes on the fly.</p>
				</div>
			</div>
		</section>

		<section class="text-center mb-52">
			<h3 class="text-4xl mb-10">Testimonials</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div>
					<p class="text-2xl italic">"CV-AI helped me land my dream job!"</p>
					<p class="text-xl mt-5">- Jane Doe</p>
				</div>
				<div>
					<p class="text-2xl italic">"Highly recommend for anyone in the job market."</p>
					<p class="text-xl mt-5">- John Smith</p>
				</div>
			</div>
		</section>
	</main>

	<footer class="py-10 px-10 text-center">
		<h3 class="text-3xl mb-5">Ready to get started?</h3>
		<button class="text-2xl bg-bg-1 text-text-main px-8 py-4 rounded hover:bg-bg-2 mb-10"
			>Get Started Now</button
		>
		<p class="text-xl">&copy; 2023 CV-AI. All Rights Reserved.</p>
	</footer>
</div>
