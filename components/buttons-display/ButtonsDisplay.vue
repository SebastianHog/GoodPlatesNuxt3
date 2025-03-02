<template>
	<section class="buttons-display-wrapper">
		<div
			v-for="button in buttons"
			:key="button"
			class="buttons-display-button-wrapper">
			<SiteButton
				class="buttons-display-button"
				variant="2">
				{{ button }}
			</SiteButton>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import './style.scss';

	interface ButtonDisplayProps {
		buttons: string[];
	}

	const props = defineProps<ButtonDisplayProps>();

	const buttons = computed(() => props.buttons);
</script>
