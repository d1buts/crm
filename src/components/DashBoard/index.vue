<template>
  <VApp>
    <DashBoardSideBar :sideBarVisibility.sync="sideBarVisibility" />
    <DashBoardToolBar :sideBarVisibility.sync="sideBarVisibility" />
    <VContent>
      <VContainer fluid fill-height>
        <VLayout justify-center align-center>
          <h1>title</h1>
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
      @click="showDialogModal"
    >
      <VIcon>add</VIcon>
    </VBtn>
    <DashBoardDialogModal :dialogModalVisibility.sync="dialogModalVisibility" />
  </VApp>
</template>

<script>
import DashBoardDialogModal from './DashBoardDialogModal'
import DashBoardSideBar from './DashBoardSideBar'
import DashBoardToolBar from './DashBoardToolBar'

export default {
  name: 'DashBoard',
  components: { DashBoardToolBar, DashBoardDialogModal, DashBoardSideBar },
  props: {
    source: String
  },
  data: () => ({
    dialogModalVisibility: false,
    sideBarVisibility: false
  }),
  methods: {
    clickVoid (event) {
      return event
    },
    showDialogModal () {
      this.dialogModalVisibility = true
    }
  }
}
</script>
