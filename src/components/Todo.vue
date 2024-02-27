<template>
    <div>
        <h1 class="text-xl font-medium text-black">Task Tracker</h1>
        <input type="text"
        style="border: 1px solid black;border-radius: 4px;"
        v-model="title" placeholder="Title" class="p-2 m-2" />
        <br />
        <input type="text" v-model="description" placeholder="Description" />
        <br />
        <button @click="addTask" v-if="!editTask" class="bg-black p-5 m-5">Add Task</button>
        <button @click="updateTask(currentTask)" v-else>Update Task</button>
    </div>
    <div>
        <ul v-for="(item, i) in getData">
            <li>{{ item.title }} {{ item.desc }} <button @click="edit(i)">Edit</button> <button @click="remove(i)">Delete</button></li>
        </ul>
    </div>
</template>
<script setup>
import store from '@/store';
import { ref, computed } from 'vue';
const title = ref();
const description = ref();
const addTask = () => {
    const temp = {
        title: title.value,
        desc: description.value
    }
    title.value = null;
    description.value = null;
    const data = store.state.taskManager;
    data.push(temp);
    store.commit('setTaskManager', data);
}
const editTask = ref(false);
const currentTask = ref();
const edit = (index) => {
    editTask.value = true;
    currentTask.value = index;
    title.value = getData.value[index].title;
    description.value = getData.value[index].desc;
}
const getData = computed(() => {
    return store.getters.getTaskManager;
})
const updateTask = (index) => {
    const temp = {
        title: title.value,
        desc: description.value
    }
    title.value = null;
    description.value = null;
    getData.value[index] = temp;
    store.commit('setTaskManager', getData.value);
    editTask.value = false;
}
const remove = (index) => {
    alert("Do you want to delete task ?")
    getData.value.splice(index, 1);
    store.commit('setTaskManager', getData.value);
}
</script>