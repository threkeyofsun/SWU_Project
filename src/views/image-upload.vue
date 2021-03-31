<template>
  <form
    @submit.prevent="sendFile"
    action=""
    method="post"
    enctype="multipar/form-data"
  >
    <div
      v-if="message"
      :class="`message ${error ? 'bg-danger' : 'bg-success'} `"
    >
      <div class="message-body">{{ message }}</div>
    </div>

    <div class="field">
      <div class="file p-3 mb-3 mx-5 my-5 text-white">
        <label class="file-label">
          <!-- File Input -->
          <input
            name="file"
            id="file"
            type="file"
            ref="file"
            @change="selectFile"
            class="file-input"
            accept="image/*"
          />

          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file...
            </span>
          </span>
          <span v-if="selectedFile" class="badge bg-secondary">
            {{ selectedFile.name }} &nbsp; &nbsp;
            <a
              @click.prevent="selectedFile = ''"
              class="d-inline btn-close delete"
            ></a>
          </span>
        </label>
      </div>
    </div>
    
    <div class="previewImage">
      <div
        class="image-input"
        :style="{ 'background-image': `url(${imageData})` }"
        @click="selectedFile"
      >
        <p
          @input="onUpload"
          :class="selectedFile ? '' : 'd-none'"
          class="px-5 py-5"
        ></p>
      </div>
    </div>

    <button
      :class="
        `message ${
          selectedFile ? '' : 'disabled bg-secondary border-secondary'
        }`
      "
      class="btn btn-primary mx-5 my-5 "
      type="submit"
      value="submit"
      @click="onUpload"
    >
      Upload
    </button>
  </form>

  <!-- Multiple Upload ---------------------------------------------------------->
  <form
    v-on:submit.prevent="submitForm"
    action=""
    method="post"
    enctype="multipar/form-data"
  >
    <div class="field">
      <div class="file p-3 mb-3 mx-5 my-5 d-block text-white bg-warning">
        <label class="file-label">
          <!-- File Input -->
          <input
            multiple
            name="files"
            id="files"
            type="file"
            ref="files"
            @change="selectFiles"
            class="file-input"
          />

          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file...
            </span>
          </span>
        </label>
      </div>
    </div>

    <div class="field  d-inline-block mx-5">
      <div
        v-for="(file, index) in files"
        :key="index"
        class="my-2"
        :class="`level ${file.invalidMessage && 'text-danger'}`"
      >
        <div class="level-left ">
          <div class="level-item m-3 d-inline ">
            {{ file.name }}
            <span v-if="file.invalidMessage">
              &nbsp;- {{ file.invalidMessage }}</span
            >
          </div>
          <a
            @click.prevent="
              files.splice(index, 1);
              uploadFiles.splice(index, 1);
            "
            class="d-inline btn-close delete"
          ></a>
        </div>
      </div>
    </div>

    <button
      class="btn btn-info mx-5 my-5"
      type="submit"
      value="submit"
     
    >
      Send
    </button>
  </form>

  <!-- Start of Dropzone--------------- -->
  <form
    @submit.prevent="senddropzoneFiles"
    action=""
    method="post"
    enctype="multipar/form-data"
  >
    <div class="dropzone">
      <input
        type="file"
        ref="drop"
        @change="senddropzoneFiles"
        class="input-field"
      />

      <p v-if="!uploaded" class="call-to-action">
        Drag your files here
      </p>

      <p v-if="uploading" class="progress-bar">
        <progress :value="progress" class="progress bg-primary" max="100">
          {{ progress }} %
        </progress>
      </p>
    </div>

    <div class="content">
      <ul>
        <li v-for="file in uploadFiles" :key="file.originalname">
          {{ file.originalname }}
        </li>
      </ul>
    </div>


    <!-- image -->
 
  </form>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data() {
    return {
      student: {
        id: "12345678",
      },
      uploadFiles: [],
      files: [],
      selectedFile: "",
      message: " ",
      error: false,
      dropzonefile: "",
      uploading: false,
      progress: 0,
      imageData: "",
    };
  },
  methods: {
    // Dropzone
    async submitForm() {
      const dropzonefile = this.$refs.drop.files[0];
      const fdt = new FormData();

      fdt.append("dropzonefile", dropzonefile);

      try {
        this.uploading = true;
        const res = await axios.post("/api/posts/dropzone", fdt, {
          onUploadProgress: (e) =>
            (this.progress = Math.round((e.loaded * 100) / e.total)),
        });
        this.uploadFiles.push(res.data.file);
        this.uploading = false;
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
        this.uploading = false;
      }
    },
    // End of dropzone

    // Multiple file Upload
    selectFiles() {
      const files = this.$refs.files.files;
      this.uploadFiles = [...this.uploadFiles, ...files];

      this.files = [
        ...this.files,
        ..._.map(files, (file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          invalidMessage: this.validate(file),
        })),
      ];
    },

    validate(file) {
      const MAX_SIZE1 = 200000;
      const allowedTypes1 = ["image/jpeg", "image/png", "image/gif"];

      if (!allowedTypes1.includes(file.type)) {
        return "Not an image";
      }
      if (file.size > MAX_SIZE1) {
        return `Too large. Max size is ${MAX_SIZE1 / 1000}Kb`;
      }

      return "";
    },

    async sendFiles() {
      const formData = new FormData();
      _.forEach(this.uploadFiles, (file) => {
        if (this.validate(file) === "") {
          formData.append("files", file);
        }
      });
      try {
        await axios.post("/api/posts/multiple", formData);
        this.message = "File has been uploaded!";
        this.files = [];
        this.uploadFiles = [];
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    },

    // single file upload
    selectFile() {
      //ชื่อเหมือน iput@change
      const selectFile = this.$refs.file.files[0];
      this.selectedFile = selectFile;

      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 200000;
      const tooLarge = selectFile.size > MAX_SIZE;

      if (allowedTypes.includes(selectFile.type) && !tooLarge) {
        this.error = false;
        this.message = "";
      } else {
        this.error = true;
        this.message = tooLarge
          ? `Too large. Max size is ${MAX_SIZE / 1000}Kb`
          : "Only images are allowed";
        this.selectedFile = "";
      }

      // Preview Image
      const input = this.$refs.file;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    chooseImage() {
      this.$refs.file.click();
    },

    async sendFile() {
      const formdata = new FormData();
      formdata.append("selectedFile", this.selectedFile);

      try {
        await axios.post("/api/posts/upload", formdata);
        this.message = "File has been uploaded!";
        this.selectedFile = "";
        this.error = false;
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    },
  },
};
</script>

<style lang="css" scoped>



.text-white {
  background-color: #009dff;
}
input#file {
  display: none;
}

.dropzone {
  min-height: 200px;
  padding: 10px 10px;
  position: relative;
  cursor: pointer;
  outline: 2px dashed grey;
  outline-offset: -10px;
  margin: 0% 5%;
  background: lightskyblue;
  font-family: "THSaraban";
}

.input-field {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropzone:hover {
  background: lightblue;
}

.dropzone .call-to-action {
  font-size: 1.2rem;
  text-align: center;
  padding: 70px 0px;
}
form {
  font-family: "THSaraban";
}
</style>
