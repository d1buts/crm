<template>
  <VToolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
  >
    <VToolbarTitle style="width: 300px" class="ml-0 pl-3">
      <VToolbarSideIcon @click.stop="toggleSideBar" />
      <span class="hidden-sm-and-down">
          Google Contacts
        </span>
    </VToolbarTitle>
    <VTextField
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    />
    <VSpacer />
    <VBtn icon>
      <VIcon>apps</VIcon>
    </VBtn>
    <VBtn icon>
      <VIcon>notifications</VIcon>
    </VBtn>
  </VToolbar>
</template>

<script>
export default {
  name: 'DashBoardToolBar',
  props: {
    sideBarVisibility: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSideBar () {
      this.$emit('update:sideBarVisibility', !this.sideBarVisibility)
    }
  }
}
</script>
