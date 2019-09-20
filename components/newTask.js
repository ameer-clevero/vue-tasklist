Vue.component('new-task', {
    template: `<form @submit.prevent="">
        <div class="w-full">
            <label class="font-bold mb-2 text-gray-700" for="name">Task Name</label>
            <input v-model="inputVal" type="text" class="w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-blue-700 mb-2 p-4">
        </div>
    </form>`,
    props: ['value'],
    data() {
        return { inputVal: this.value }
    },
    watch: {
        inputVal(val) {
            this.$emit('input', val);
        }
    }
});