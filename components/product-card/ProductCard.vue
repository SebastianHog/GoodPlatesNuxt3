<template>
	<div @click="goToRecipe" class="product-card-wrapper">
		<img :src="product.thumbnail" alt="recipe thumbnail" class="card-thumbnail" />
		<div class="card-body">
			<h2 class="card-title">{{ product.title }}</h2>
			<user-icon :user="product.creator" class="card-creator-dt"></user-icon>
			<p class="card-creator-mb">By <site-button @click.stop class="card-profile-link"
					:to="`/user/${product.creator._id}`" variant="transparent"> {{
						product.creator.username }} </site-button>
			</p>
			<p class="card-description-mb">{{ firstSentence }}</p>
			<p class="card-description-dt">{{ product.description }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { IUser } from "~/types/user";
import "./style.scss";

interface ProductCardProps {
	_id: string;
	title: string;
	description?: string;
	thumbnail: string;
	creator: IUser;
	date_posted: Date;
}

const router = useRouter();

const props = defineProps<{ product: ProductCardProps }>();

const firstSentence = computed(() => {
	if (!props.product.description) return '';

	const match = props.product.description.match(/^.*?[.!?](?:\s|$)/);
	return match ? match[0].trim() : props.product.description;
});

const goToRecipe = () => {
	router.push(`/recipe/${props.product._id}`)
}

</script>
