<template>
  <VContent>
    <VContainer fluid fill-height>
      <VLayout align-center justify-center>
        <VFlex xs12 sm8 md4>
          <VCard class="elevation-12">
            <VToolbar
              dark
              color="blue darken-3"
            >
              <VToolbarTitle>
                {{ title }}
              </VToolbarTitle>
              <VSpacer />
            </VToolbar>
            <VCardText>
              <VForm>
                <VTextField
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
              />
                <VTextField
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                />
              </VForm>
            </VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn color="danger">
                Login
              </VBtn>
            </VCardActions>
          </VCard>
        </VFlex>
      </VLayout>
    </VContainer>
  </VContent>
</template>

<script>
export default {
  data: () => ({
    title: 'Login form'
  })
}
</script>

<style>

</style>
