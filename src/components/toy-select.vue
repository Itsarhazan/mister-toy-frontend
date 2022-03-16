<template>
  <div style="display: inline-block">
    <p style="margin-left: 10px"></p>
    <el-select
      v-model="value1"
      multiple
       @change="setFilter"
      placeholder="Select"
      style="width: 240px"
    >
      <el-option>
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </el-option>
    </el-select>
  </div>
</template>

<!--       
      <select @change="setFilter" multiple v-model="filterBy.labels">
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select> -->
<script>
import { ref } from 'vue'

const value1 = ref([])

const options = [
  {
    value: 'On wheels',
    label: 'On wheels',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
