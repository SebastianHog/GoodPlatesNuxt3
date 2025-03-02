<template>
	<section
		class="buttons-display-full-wrapper"
		:class="classes">
		<h1
			v-if="title"
			class="buttons-display-title">
			{{ title }}
		</h1>
		<div class="buttons-display-wrapper">
			<div
				v-for="button in buttons"
				:key="button"
				class="buttons-display-button-wrapper">
				<SiteButton
					class="buttons-display-button"
					variant="2"
					:to="`c/${button}`">
					{{ button }}
				</SiteButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import './style.scss';

	interface ButtonDisplayProps {
		buttons: string[];
		title?: string;
		scroller?: boolean;
	}

	const props = defineProps<ButtonDisplayProps>();

	const buttons = computed(() => props.buttons);

	const classes = computed(() => {
		const classNames = [];

		if (props.scroller) {
			classNames.push('scroller');
		}

		return classNames;
	});
</script>
