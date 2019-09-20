Vue.component('task-row', {
    props: ["task"],
    template: `
  <div v-if="task.id">
    <article class="p-2 py-4 border-b-2">
      <h4 class="text-xl text-gray-800 font-bold mb-3">{{task.title}}</h4>
      <div class="flex flex-row">
        <img class="h-8 w-8 rounded-full inline-flex" src="./images/user.png">
        <div class="text-left px-4 w-full">
          <p>{{task.notes}}</p>
          <p  class="italic text-xs"><a href="#">Jay</a> updated {{task.updatedAt}} minutes ago</p>
        </div>
        <div v-if="task.progress" class="hover:text-black hover:font-extrabold w-40">
          <span @click="task.progress=0"><i class="fa fa-2x fa-check"></i><label class="italic text-xs">Click to undo</label></span>
        </div>
        <div v-else>
         <button class="bg-green-500 hover:bg-green-300 hover:text-black text-white font-bold py-2 px-4 w-40 rounded-full" @click="task.progress=1">Mark done</button>
        </div>
      </div>
    </article>
    </div>
  `
})