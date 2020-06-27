<template>
	<ul class="navi navi-hover py-4">
		<template v-for="(item, i) in languages">
			<li
				:key="i"
				class="navi-item"
				:class="{ 'navi-item-active': isActiveLanguage(item.lang) }"
			>
				<a
					href="#"
					class="navi-link"
					:data-lang="item.lang"
					@click="selectedLanguage"
				>
					<span class="symbol symbol-20 mr-3">
						<img :src="item.flag" alt="" />
					</span>
					<span class="navi-text">{{ item.name }}</span>
				</a>
			</li>
		</template>
	</ul>
</template>

<script>
// import i18nService from '@/core/services/i18n.service.js'

export default {
	name: 'KTDropdownLanguage',
	data() {
		return {
			languages: 'en',
			// languages: i18nService.languages,
		}
	},
	computed: {
		activeLanguage() {
			return ''
			// return i18nService.getActiveLanguage()
		},
	},
	methods: {
		selectedLanguage(e) {
			const el = e.target.closest('.navi-link')
			const lang = el.getAttribute('data-lang')

			// i18nService.setActiveLanguage(lang)

			this.$emit(
				'language-changed',
				this.languages.find((val) => {
					return val.lang === lang
				})
			)

			window.location.reload()
		},
		isActiveLanguage(current) {
			return this.activeLanguage === current
		},
	},
}
</script>
