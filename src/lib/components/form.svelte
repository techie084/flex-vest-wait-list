<script lang="ts">
	// let submit: string = $state('yes');
</script>

<div class="glass flex w-full max-w-md justify-center rounded-2xl p-6 shadow-2xl">
	<form id="waitlistForm" class="w-full space-y-4">
		<div class="mb-2">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="mb-1 block text-xs text-slate-300">Full name</label>
			<div class="flex items-center rounded-lg bg-black/40 px-3 py-2">
				<input
					name="name"
					type="text"
					required
					class="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
					placeholder="Full name"
				/>
			</div>
		</div>

		<div class="mb-2">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="mb-1 block text-xs text-slate-300">Email address</label>
			<div class="flex items-center rounded-lg bg-black/40 px-3 py-2">
				<input
					name="email"
					type="email"
					required
					class="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
					placeholder="Email address"
				/>
			</div>
		</div>

		<div class="mt-4">
			<button
				type="submit"
				class="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-green-400 to-green-500 py-3 font-semibold text-black transition hover:from-green-500 hover:to-green-900"
			>
				<span>Join the waitlist</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/></svg
				>
			</button>
		</div>

		<!-- <p class="mt-3 text-center text-xs text-slate-400">
						We’ll only send a few updates — no spam. By joining you agree to our terms.
					</p> -->
	</form>
</div>
