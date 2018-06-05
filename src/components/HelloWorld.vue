<template>
  <div class="root">


    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <div>
        {{'可以是js表达式'}}
      </div>
      <div>
        {{ '可以是js表达式'.split('').reverse().join('')}}
      </div>
      <div>
        <!-- 完整语法 -->
        <a v-on:click="doSomething">doSomething</a>

        <!-- 缩写 -->
        <a @click="doSomething">doSomething</a>
      </div>
      <div>
        <!-- 完整语法 -->
        <a v-bind:href="url">url</a>

        <!-- 缩写 -->
        <a :href="url">url</a>
      </div>
      <div>
        <div>
          <input v-model="message" placeholder="input sth"/>
        </div>
        <span>reversedMessage : </span>
        {{reversedMessage}}
      </div>
      <div>
        {{now}}
      </div>
      <div>
        <div>
          <span>firstName</span> <input v-model="firstName" placeholder="firstName"/>
        </div>
        <div>
          <span>lastName</span> <input v-model="lastName" placeholder="lastName"/>
        </div>
        <div>
          <span>fullName</span>{{fullName}}
        </div>
        <div>
          <span>fullName1</span> {{fullName1}}
        </div>
      </div>
      <div>
        <div>
          <button @click="isActive=!isActive">
            toggle class
          </button>
        </div>
        <div v-bind:class="{ 'active': isActive }" class="cls"> class bind</div>
        <div v-bind:class="[activeClass, errorClass]" class="cls">数组语法</div>
        <div v-bind:class="[isActive ? activeClass : '', errorClass]">条件切换列表</div>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">style bind</div>
        <div v-bind:style="styleObject">style object bind</div>
      </div>
    </div>
    <div>
      <div>
        v-if , v-show
        <button @click="ok=!ok">
          toggle class
        </button>
      </div>
      <div>
        <h1 v-if="ok">Yes</h1>
        <h1 v-else>No</h1>
      </div>


      <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
      <h1 v-show="ok">Hello!</h1>
    </div>

    <div>
      <div>
        v-for
      </div>
      <div>
        <ul id="example-1">
          <li v-for="item in items">
            {{ item.message }}
          </li>
        </ul>
      </div>
      <div v-for="(value, key, index) in object" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </div>

      <div>
        <span v-for="n in 10">{{ n * 100}} </span>
      </div>
      <div>
        <ul>
          <template v-for="(item,index) in items">
            <li>{{ item.message }}</li>
            <li class="divider">{{index}}</li>
          </template>
        </ul>
      </div>
    </div>


<div>
  <div>
    Event
  </div>
  <div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
  <div id="example-1">
    <button v-on:click="eventMethod">use method</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
  <div id="example-1">
    <button v-on:click="paramsMethod('params' , $event)">use params Method</button>
  </div>
  <div>
    <div>
      修饰符

    </div>
    <form v-on:submit.prevent="onSubmit">
      <input type="submit" value="submit"/>
    </form>
  </div>

</div>


<div>
  <div>
    v-model
  </div>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</div>




<div>
  <div>
    Component
  </div>
  <component1 :name.sync="message"/>
  <component1 name="component2" text="this is text" @customEvent="customEvent"/>
  <component1 :name.sync="message">
    <div>
      pass div to componet1
    </div>
  </component1>

  <component1 :name.sync="message">
    <div slot="nameSlot">
      pass div to nameSlot componet1
    </div>
  </component1>

  <component1 :name.sync="message" post-title="this is post title"/>

</div>

    <div ref="myDiv" class="ref">
      <button @click="changeDiv">
        changeDiv by ref
      </button>
    </div>

    <div>
      <div>
        animation
      </div>
      <animation/>
    </div>
    <div>
      <button @click="pushRouter">
        go to router 2

      </button>
    </div>
  </div>


</template>

<script>
  import Component1 from "./component1";
  import Animation from "./animation";
  export default {
    name: 'HelloWorld',
    components: {Animation, Component1},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        url: 'http://www.baidu.com',
        message: '',
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        isActive: false,
        activeClass: 'activeClass',
        errorClass: 'errorClass',
        activeColor: 'red',
        fontSize: 20,
        styleObject: {
          color: 'green',
          fontSize: 50,
        },
        ok: false,
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        counter:0,
        checked:false,
        selected:''
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },
      now: function () {
        return (new Date()).toString()
      },
      fullName1: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },

    methods: {
      doSomething() {
        alert('doSomething')
      },
      nowFun() {
        return (new Date()).toString()
      },
      eventMethod(){
        this.counter += 1
      },
      paramsMethod(str , e){
        if (e) event.preventDefault()
        alert(str)
      },
      onSubmit(){
        alert('submit')
      },
      customEvent(str){
        alert(str)
      },
      changeDiv(){
        this.$refs.myDiv.style.height = '100px'
      },
      pushRouter(){
        this.$router.push({path:'router2'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .cls {
    height: 100px;
  }

  .cls.active {
    background-color: blueviolet;
  }

  .errorClass {
    height: 50px;
  }

  .activeClass {
    background-color: yellow;
  }
  .root>div{
    margin: 20px;
  }
  .ref{
    background-color: blueviolet;
    height: 10px;
  }

</style>
