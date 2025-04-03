<template>
	<section class="product-card">
		<p>{{ product.title }}</p>
	</section>
</template>

<script lang="ts" setup>
import type { IUser } from "~/types/user";
import "./style.scss";

interface ProductCardProps {
	_id: string;
	title: string;
	description?: string;
	thumbnail?: string;
	creator: IUser;
	date_posted: Date;
}


defineProps<{ product: ProductCardProps }>();
</script>
