Vue.component('editable-span', {
    props:['value'],
    template: `
        <span class="editableSpan">
            <span v-show="!editing"><b>{{value}}</b></span>
            <input type="text" v-show="editing" v-bind:value="value" v-on:input="triggerEdit">
            <button v-on:click="editing = !editing">编辑</button>
        </span>
      `,
    data(){
        return {
            editing: false
        }
    },
    methods:{
        triggerEdit(e){
            this.$emit('edit',e.currentTarget.value)
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        editingName: false,
        resume: {
            name: '陈 辛 达',
            gender: '男',
            birthday: '10月9日',
            tel: '18627841680',
            email: 'chenxinda520@qq.com',
            job: '前端开发工程师'
        }
    },
    methods: {
        onEdit(value){
            this.resume.name = value
        }
    }
})

