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
    <!--<VTextField
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    />-->
    <VSpacer />
    <VMenu offset-y>
      <VBtn
        slot="activator"
        color="primary"
        dark
        icon
      >
        <VIcon>settings</VIcon>
      </VBtn>
      <VList>
        <VListTile
          v-for="(item, index) in menuList"
          :key="index"
          @click="item.callback"
        >
          <VListTileTitle>
            <VIcon>{{ item.icon }}</VIcon>
            {{ item.title }}
          </VListTileTitle>
        </VListTile>
      </VList>
    </VMenu>
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
  data: () => ({
    menuList: [
      { title: 'Доступи', callback: () => console.log('Доступи'), icon: 'fingerprint' },
      { title: 'Особистий профіль', callback: () => console.log('Профіль'), icon: 'accessibility_new' },
      { title: 'Вихід', callback: () => console.log('Вихід'), icon: 'exit_to_app' }
    ],
  }),
  methods: {
    toggleSideBar () {
      this.$emit('update:sideBarVisibility', !this.sideBarVisibility)
    }
  }
}
</script>
