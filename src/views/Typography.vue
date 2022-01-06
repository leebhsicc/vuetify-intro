<template>
  <v-container>
    <v-card>
      <v-card-title>
        Typography
      </v-card-title>
      <v-card-text>
        <v-card
          class="pa-3 primary lighten-1"
        >
          컨텐츠
        </v-card>
        <v-card
          class="pa-3 warning darken-1"
        >
          컨텐츠
        </v-card>
        <v-card
          class="pa-3 error"
        >
          컨텐츠
        </v-card>
        <v-card
          class="pa-3 primary--text"
        >
          컨텐츠
        </v-card>
        <v-card
          class="pa-3 warning--text"
        >
          컨텐츠
        </v-card>
        <v-card
          class="pa-3 error--text"
        >
          컨텐츠
        </v-card>
        <v-card
          class="pa-3 mt-3"
          outlined
        >
          <p>
            {{ $vuetify.breakpoint.name }}
          </p>
          <p class="text-h1">
            Heading 1
          </p>
          <p class="text-h2">
            Heading 2
          </p>
          <p class="text-h3 text-sm-h2">
            Heading 3
          </p>
          Heading 4
          Heading 5
          Heading 6
          Subtitle 1
          Subtitle 2
          Body 1
          Body 2
          BUTTON
          Caption
          OVERLINE
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>