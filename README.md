# Backup State

Easily create backup and restore buttons.

## Installation

```bash
npm i backup-state
```

## Backup

```html
<script setup="">
  import {backup} from 'backup-state'

  const data = {
    name: 'Zen',
    location: 'Indonesia'
  }
</script>

<template>
  <button @click='backup(data, "data.txt")'>backup</button>
</template>
```

## Restore

```html
<script setup="">
  import {restore} from 'backup-state'
  import {ref} from 'vue'
  
  const data = ref({})

  async function getNow(){
    data.value = await restore()
  }
</script>

<template>
  <button @click='getNow'>restore</button>
</template>
```