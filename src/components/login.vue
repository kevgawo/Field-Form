<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-4 col-xs-offset-4 ">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title ">Dixpose</h3>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <input type="email" class="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="password" placeholder="Enter Password " />
          </div>
          <button class="btn btn-primary pull-right">Log in</button>
        </form>
      </div>
    </div>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "login.vue"
    }
</script>

<style scoped>
  body{
    background-color : green;
  }

</style>

/* eslint-disable */
