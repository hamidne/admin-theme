<template>
	<div class="d-flex flex-column flex-root min-vh-100">
		<KTHeaderMobile />

		<Loader v-if="loaderEnabled" :logo="loaderLogo" />

		<div class="d-flex flex-row flex-column-fluid page">
			<KTAside />

			<div id="kt_wrapper" class="d-flex flex-column flex-row-fluid wrapper">
				<KTHeader />

				<div
					id="kt_content"
					class="content d-flex flex-column flex-column-fluid"
				>
					<KTSubheader :breadcrumbs="breadcrumbs" :title="pageTitle" />

					<div class="d-flex flex-column-fluid">
						<div
							:class="{
								'container-fluid': contentFluid,
								container: !contentFluid
							}"
						>
							<transition name="fade-in-up">
								<nuxt />
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
import Loader from '~/components/global/Loader.vue'

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
		Loader
	},
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
		}
	},
	methods: {},
	head() {
		return {
			bodyAttrs: {
				class:
					'quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed subheader-fixed subheader-enabled subheader-solid aside-enabled aside-fixed'
			}
		}
	}
}
</script>
