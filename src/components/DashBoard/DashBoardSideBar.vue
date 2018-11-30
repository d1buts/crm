<template>
  <VNavigationDrawer
    v-model="$sideBarVisibility"
    app
    fixed
    :clipped="$vuetify.breakpoint.lgAndUp"
  >
    <VList dense>
      <template v-for="item in items">
        <VLayout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
        >
          <VFlex xs6>
            <VSubheader v-if="item.heading">
              {{ item.heading }}
            </VSubheader>
          </VFlex>
          <VFlex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">
              EDIT
            </a>
          </VFlex>
        </VLayout>
        <VListGroup
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <VListTile slot="activator">
            <VListTileContent>
              <VListTileTitle>
                {{ item.text }}
              </VListTileTitle>
            </VListTileContent>
          </VListTile>
          <VListTile
            v-for="(child, i) in item.children"
            :key="i"
            @click="clickVoid"
          >
            <VListTileAction v-if="child.icon">
              <VIcon>{{ child.icon }}</VIcon>
            </VListTileAction>
            <VListTileContent>
              <VListTileTitle>
                {{ child.text }}
              </VListTileTitle>
            </VListTileContent>
          </VListTile>
        </VListGroup>
        <VListTile v-else :key="item.text" @click="clickVoid">
          <VListTileAction>
            <VIcon>{{ item.icon }}</VIcon>
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle>
              {{ item.text }}
            </VListTileTitle>
          </VListTileContent>
        </VListTile>
      </template>
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  name: 'DashBoardSideBar',
  props: {
    sideBarVisibility: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Duplicates' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'add', text: 'Create label' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' }
        ]
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' }
    ]
  }),
  computed: {
    $sideBarVisibility: {
      set (newValue) {
        this.$emit('update:sideBarVisibility', newValue)
      },
      get () {
        return this.sideBarVisibility
      }
    }
  },
  methods: {
    clickVoid (arg) {
      return arg
    }
  }
}
</script>
