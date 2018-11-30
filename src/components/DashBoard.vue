<template>
  <VApp id="inspire">
    <VNavigationDrawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
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
    <VToolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <VToolbarTitle style="width: 300px" class="ml-0 pl-3">
        <VToolbarSideIcon @click.stop="drawer = !drawer" />
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
      <VBtn icon large>
        <VAvatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </VAvatar>
      </VBtn>
    </VToolbar>
    <VContent>
      <VContainer fluid fill-height>
        <VLayout justify-center align-center>
          <VTooltip right>
            <VBtn
              slot="activator"
              :href="source"
              icon
              large
              target="_blank"
            >
              <VIcon large>
                code
              </VIcon>
            </VBtn>
            <span>Source</span>
          </VTooltip>
          <VTooltip right>
            <VBtn slot="activator" icon large href="https://codepen.io/johnjleider/pen/EQOYVV" target="_blank">
              <VIcon large>
                mdi-codepen
              </VIcon>
            </VBtn>
            <span>Codepen</span>
          </VTooltip>
        </VLayout>
      </VContainer>
    </VContent>
    <VBtn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="dialog = !dialog"
    >
      <VIcon>add</VIcon>
    </VBtn>
    <VDialog v-model="dialog" width="800px">
      <VCard>
        <VCardTitle
          class="grey lighten-4 py-4 title"
        >
          Create contact
        </VCardTitle>
        <VContainer grid-list-sm class="pa-4">
          <VLayout row wrap>
            <VFlex xs12 align-center justify-space-between>
              <VLayout align-center>
                <VAvatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </VAvatar>
                <VTextField
                  placeholder="Name"
                />
              </VLayout>
            </VFlex>
            <VFlex xs6>
              <VTextField
                prepend-icon="business"
                placeholder="Company"
              />
            </VFlex>
            <VFlex xs6>
              <VTextField
                placeholder="Job title"
              />
            </VFlex>
            <VFlex xs12>
              <VTextField
                prepend-icon="mail"
                placeholder="Email"
              />
            </VFlex>
            <VFlex xs12>
              <VTextField
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              />
            </VFlex>
            <VFlex xs12>
              <VTextField
                prepend-icon="notes"
                placeholder="Notes"
              />
            </VFlex>
          </VLayout>
        </VContainer>
        <VCardActions>
          <VBtn flat color="primary">
            More
          </VBtn>
          <VSpacer />
          <VBtn
            flat
            color="primary"
            @click="dialog = false"
          >
            Cancel
          </VBtn>
          <VBtn
            flat
            @click="dialog = false"
          >
            Save
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VApp>
</template>

<script>
/* eslint-disable */
export default {
  name: 'DashBoard',
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
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
  methods: {
    clickVoid (event) {
      return event
    }
  }
}
</script>
