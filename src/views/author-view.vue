<template>
  <div class="author-view">
    {{params.authorId}}
  </div>
</template>

<script>
module.exports = {
  props: ['params']
  data: function () {
    return {
      'params': {
        'authorId': null
      },
      'author': null
    }
  }
}
</script>
