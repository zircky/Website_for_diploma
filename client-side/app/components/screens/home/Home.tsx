import { FC } from 'react'

import Layout from '@/layout/Layout'
import Swiper from "@/store/carousel/Swiper";

import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Swiper />
		</Layout>
	)
}

export default Home
