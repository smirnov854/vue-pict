<template>
  <div class="container">
    <div>
      <div class="col-12 text-center">
        <h1>Picture upload</h1>
      </div>
      <div class="alert alert-danger" v-if="errors">{{errors}}</div>
      <div class="alert alert-success" v-if="success">{{success}}</div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="email" v-model="name" class="form-control" id="exampleFormControlInput1" placeholder="">
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Image</label>
        <input class="form-control" type="file" id="formFile" @change="handleFileUpload( $event )" ref="fileInput">
      </div>
      <br>
      <button class="btn btn-success" v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UplaodPict",
  data(){
    return {
      name:'',
      file: '',
      errors:'',
      success:''
    }
  },
  mounted() {

  },
  methods: {
    handleFileUpload( event ){
      this.file = event.target.files[0];
    },
    submitFile(){
      let formData = new FormData();

      formData.append('image', this.file);
      formData.append('name', this.name);

      axios.post( '/pictures',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then((response)=>{
        this.errors=''
        this.success=''
        if(response.status == 201){
          this.success='Image created'
          this.name=''
          const input = this.$refs.fileInput
          input.type = 'text'
          input.type = 'file'
        }

      })
      .catch((errors)=>{
        this.errors=''
        let text = ''
        for(let index in errors.response.data.errors){
          text+=errors.response.data.errors[index][0]
        }
        console.log(errors.response.data.errors)
        this.errors=text

      });
    }
  }
}



</script>

<style scoped>

</style>