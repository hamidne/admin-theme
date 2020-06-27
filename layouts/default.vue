<template>
	<div class="d-flex flex-column flex-root">
		<!-- begin:: Header Mobile -->
		<KTHeaderMobile />
		<!-- end:: Header Mobile -->

		<Loader v-if="loaderEnabled" :logo="loaderLogo" />

		<!-- begin::Body -->
		<div class="d-flex flex-row flex-column-fluid page">
			<!-- begin:: Aside Left -->
			<KTAside v-if="asideEnabled" />
			<!-- end:: Aside Left -->

			<div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
				<!-- begin:: Header -->
				<KTHeader />
				<!-- end:: Header -->

				<!-- begin:: Content -->
				<div
					id="kt_content"
					class="content d-flex flex-column flex-column-fluid"
				>
					<!-- begin:: Content Head -->

					<!-- begin:: Content Head -->
					<KTSubheader
						v-if="subheaderDisplay"
						:breadcrumbs="breadcrumbs"
						:title="pageTitle"
					/>
					<!-- end:: Content Head -->

					<!-- begin:: Content Body -->
					<div class="d-flex flex-column-fluid">
						<div
							:class="{
								'container-fluid': contentFluid,
								container: !contentFluid,
							}"
						>
							<transition name="fade-in-up">
								<router-view />
							</transition>
						</div>
					</div>
				</div>
				<KTFooter />
			</div>
		</div>
		<KTStickyToolbar v-if="toolbarDisplay" />
		<KTScrollTop />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import KTAside from '~/components/layouts/aside/Aside.vue'
import KTHeader from '~/components/layouts/header/Header.vue'
import KTHeaderMobile from '~/components/layouts/header/HeaderMobile.vue'
import KTFooter from '~/components/layouts/footer/Footer.vue'
import KTSubheader from '~/components/layouts/subheader/Subheader.vue'
import KTStickyToolbar from '~/components/layouts/extras/StickyToolbar.vue'
import KTScrollTop from '~/components/layouts/extras/ScrollTop'
import Loader from '@/view/content/Loader.vue'

export default {
	name: 'Layout',
	components: {
		KTAside,
		KTHeader,
		KTHeaderMobile,
		KTFooter,
		KTSubheader,
		KTStickyToolbar,
		KTScrollTop,
		Loader,
	},
	methods: {},
	computed: {
		...mapGetters(['breadcrumbs', 'pageTitle', 'layoutConfig']),

		/**
		 * Check if the page loader is enabled
		 * @returns {boolean}
		 */
		loaderEnabled() {
			return !/false/.test(this.layoutConfig('loader.type'))
		},

		/**
		 * Check if container width is fluid
		 * @returns {boolean}
		 */
		contentFluid() {
			return this.layoutConfig('content.width') === 'fluid'
		},

		/**
		 * Page loader logo image using require() function
		 * @returns {string}
		 */
		loaderLogo() {
			return process.env.BASE_URL + this.layoutConfig('loader.logo')
		},

		/**
		 * Check if the left aside menu is enabled
		 * @returns {boolean}
		 */
		asideEnabled() {
			return !!this.layoutConfig('aside.self.display')
		},

		/**
		 * Set the right toolbar display
		 * @returns {boolean}
		 */
		toolbarDisplay() {
			// return !!this.layoutConfig("toolbar.display");
			return true
		},

		/**
		 * Set the subheader display
		 * @returns {boolean}
		 */
		subheaderDisplay() {
			return !!this.layoutConfig('subheader.display')
		},
	},
}
</script>
