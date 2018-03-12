<template>
  <!--sign-up container-->

  <div class="container">
    <div class="row">
      <div class="col-xs-4 col-xs-offset-4 ">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title ">Sign Up</h3>
          </div>
          <div class="panel-body">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" v-model="signUp.firstName" id="firstName"  placeholder="First Name" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" v-model="signUp.lastName"  id="lastName" placeholder="Last Name" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" v-model="signUp.email" id="email"  placeholder="Enter Email" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" v-model="signUp.password" id="password" placeholder="Enter Password " />
                <div class="form-group">
                  <div class="card">
                      <label>Select bins type</label>
                      <select v-model="signUp.bins">
                        <option v-for="bin in bins">{{bin}}</option>
                      </select>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary pull-right" v-on:click.prevent="post">Sign Up</button>
            </form>
            <div class="card">
              <h3>Preview</h3>
              <p>First Name: {{signUp.firstName}}</p>
              <p>First Name: {{signUp.lastName}}</p>
              <p>First Name: {{signUp.email}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--end of the  sign up container-->
</template>

<script>

    export default {
      name: "sign-up.vue",
      data: function () {
        return {
          signUp: {
            firstName: "",
            lastName: "",
            email: "",
            bins: ""
          },
          bins: ['2', '4', '6', '8', '10']
        }
      },

      methods: {
        post: function () {
          this.$http.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.signUp.firstName,
            body: this.signUp.lastName,
            userId: 1
          }).then(function (data) {
            console.log(data);
          });
        }
      }
    }

</script>


<style scoped>
  body{
    background-color : green;
  }

</style>



