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
          <p class="text-h4">
            Heading 4
          </p>
          <p class="text-h5">
            Heading 5
          </p>
          <p class="text-h6">
            Heading 6
          </p>
          <p
            class="text-subtitle-1
"
          >
            Subtitle 1
          </p>
          <p class="text-subtitle-2">
            Subtitle 2
          </p>
          <p
            class="text-body-1
"
          >
            Body 1
          </p>
          <p class="text-body-2">
            Body 2
          </p>
          <p class="text-button">
            BUTTON
          </p>
          <p class="text-caption">
            Caption
          </p>
          <p class="text-overline">
            OVERLINE
          </p>
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