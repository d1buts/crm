<template>
  <VDialog v-model="$dialogModalVisibility" max-width="800px">
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
              <VTextField placeholder="Name" />
            </VLayout>
          </VFlex>
          <VFlex xs6>
            <VTextField prepend-icon="business" placeholder="Company" />
          </VFlex>
          <VFlex xs6>
            <VTextField placeholder="Job title" />
          </VFlex>
          <VFlex xs12>
            <VTextField prepend-icon="mail" placeholder="Email" />
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
            <VTextField prepend-icon="notes" placeholder="Notes" />
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
          @click="hideDialogModal"
        >
          Cancel
        </VBtn>
        <VBtn
          flat
          @click="hideDialogModal"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script>
export default {
  name: 'DashBoardDialogModal',
  props: {
    dialogModalVisibility: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    $dialogModalVisibility: {
      set (newValue) {
        this.$emit('update:dialogModalVisibility', newValue)
      },
      get () {
        return this.dialogModalVisibility
      }
    }
  },
  methods: {
    hideDialogModal () {
      this.$dialogModalVisibility = false
    }
  }
}
</script>
