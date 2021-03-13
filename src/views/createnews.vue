<template>
    <HomepageHeader />
    <div class="row ">
      <Sidebar />
      <div class="container">
        <form class="ac-req-form">
          <div class="posting">
            <div class="coverpost">
              <label>
                <!-- radio image -->
                <input type="radio" name="test" value="small" checked />
                <img class="radioim" src="/img/Mask-Group-25.png" />
              </label>
              <label>
                <input type="radio" name="test" value="big" />
                <img class="radioim" src="/img/Mask-Group-25.png" />
              </label>
              <label>
                <input type="radio" name="test" value="big" />
                <img class="radioim" src="/img/Mask-Group-25.png" />
              </label>
              <label>
                <input type="radio" name="test" value="big" />
                <img class="radioim" src="/img/Mask-Group-25.png" />
              </label>
            </div>
  
            
            <div class="user-badge">
              <img
                class=" profile-img  "
                src="/img/Mask-Group-25.png"
                alt="profile.img"
              />
  
              <p class="firstname pt-4 ">
                <b>**Select image above or upload your cover image here**</b>
              </p>
              <input
                type="file"
                class="form-control-file btn btn-light"
                id="exampleFormControlFile1"
              />
            </div>
          </div>
  
          <div class="ATinput">
            <div class="row my-4">
              <div class="col-3">
                <label for="title" class="form-label">Activity Title</label>
              </div>
              <div class="col-9">
                <input
                  type="input"
                  class="form-control form-control-sm"
                  id="title"
                  placeholder=""
                />
              </div>
            </div>
  
            <h5>Applicant Qualification</h5>
            <div class="row my-4 form-group ">
              <div class="col-1 col-sm-3">
                <label for="example-number-input">Applicant Number</label>
              </div>
  
              <div class="col-sm-2 col-6 mx-2 mx-sm-none">
                <input
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  maxlength="3"
                  v-model="value"
                  :min="1"
                  :max="100"
                  class="form-input "
                  type="number"
                  id="example-number-input"
                />
              </div>
            </div>
  
            <div class="row">
              <div class="col-1 col-sm-3 ">
                <label for="st-year">Student Year</label>
              </div>
              <div class="col-8  mx-0 px-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                />
                <label class="form-check-label mx-2" for="flexCheckDefault">
                  1
                </label>
                <input
                  class=" form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                />
                <label class="form-check-label mx-2" for="flexCheckDefault">
                  2
                </label>
                <input
                  class=" form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                />
                <label class="form-check-label mx-2" for="flexCheckDefault">
                  3
                </label>
                <input
                  class=" form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                />
                <label class="form-check-label mx-2" for="flexCheckDefault">
                  4
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked
                />
                <label class="form-check-label mx-2" for="flexCheckDefault">
                  <p>More Than 5</p>
                </label>
              </div>
            </div>
            <div class="row my-4">
              <div class="col-3">
                <label for="title" class="form-label">At Place</label>
              </div>
              <div class="col-9">
                <input
                  type="input"
                  class="form-control form-control-sm"
                  id="title"
                  placeholder=""
                />
              </div>
            </div>
            <div class="row my-4">
              <div class="col-2">
                <label for="st-date" class="form-label">Start Date</label>
              </div>
              <div class="col-4">
                <input
                  type="date"
                  class="form-control form-control-sm"
                  id="st-date"
                  value=""
                />
              </div>
  
              <div class="col-2">
                <label for="st-time" class="form-label">At Time</label>
              </div>
              <div class="col-4">
                <input
                  type="time"
                  class="form-control form-control-sm"
                  id="st-time"
                  value=""
                />
              </div>
            </div>
  
            <div class="row my-4">
              <div class="col-2">
                <label for="st-date" class="form-label">End Date</label>
              </div>
              <div class="col-4">
                <input
                  type="date"
                  class="form-control form-control-sm"
                  id="st-date"
                  value=""
                />
              </div>
  
              <div class="col-2">
                <label for="st-time" class="form-label">End Time</label>
              </div>
              <div class="col-4">
                <input
                  type="time"
                  class="form-control form-control-sm"
                  id="st-time"
                  value=""
                />
              </div>
            </div>
  
            <div class="row my-4">
              <div class="col-3">
                <label for="title" class="form-label">Short Description</label>
              </div>
              <div class="col-9">
                <textarea
                  class="form-control"
                  placeholder="Leave a short description here"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
              </div>
            </div>
  
            <div class="row my-4">
              <div class="col-12">
                <label for="title" class="form-label">Detials</label>
              </div>
              <div class="col-12">
                <textarea
                  class="form-control"
                  placeholder="Leave a short description here"
                  id="floatingTextarea2"
                  style="height: 300px"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <!-- Detail -->
      </div>
    </div>
  
    <HPfooter />
  </template>
  
  <script>
  import Sidebar from "../components/sliderbar";
  import HomepageHeader from "../components/HomepageHeader";
  import HPfooter from "../components/homepageFooter";
  export default {
    name: "ProductDetailPage",
    components: {
      HomepageHeader,
      HPfooter,
      Sidebar,
    },
    data() {
      return {
        quantity: 10,
        mquantity: 50,
        value: 1,
        user: {
          faculty: "0",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .col-3.d-none.d-md-block {
    margin-left: -45px;
  }
  
  .form-control-sm {
    min-height: calc(1em + 0.5rem + 1px);
    padding: 0.15rem 0.25rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }
  .selecfaculty {
    box-shadow: none;
    padding: 0rem 0.55rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .form-input {
    padding: 0rem 0.55rem;
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .ac-req-form {
    font-family: "THSaraban";
  }
  .radioim {
    opacity: 0.3;
    object-fit: cover;
    height: 150px;
    width: 150px;
    border-radius: 0px;
    margin: 5px;
  }
  /* HIDE RADIO */
  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* IMAGE STYLES */
  [type="radio"] + img {
    cursor: pointer;
  }
  
  /* CHECKED STYLES */
  [type="radio"]:checked + img {
    opacity: 1;
  }
  /* Radio */
  
  .sidebar {
    position: fixed;
    background-color: #f8ca00;
    height: 100%;
  }
  
  .container {
    max-width: 55%;
    width: 100%;
  }
  .posting {
    text-align-last: center;
  }
  .profile-img {
    margin-top: 5%;
      -o-object-fit: cover;
  }
  
  .user-badge {
    font-weight: 400;
    font-size: 21px;
    color: #000000;
    border-radius: 0px;
    font-family: "THSaraban";
    padding: 0px 0px;
  }
  .user-badge .p {
    margin-top: 2px;
  }
  .time-badge {
    color: #636468;
    margin-top: -8px;
    margin-left: 47px;
    line-height: 0;
  }
  .anounce-title {
    font-size: 26px;
  }
  
  @media screen and (max-width: 1320px) and (min-width: 768px) {
    .container[data-v-e3c53f88] {
      max-width: 643px;
      width: 100%;
      font-size: 16px;
    }
   section.sidebar.ml-5 {
      font-size: 17px;
  }
    h5{
      font-size:18px ;
    }
  }
  </style>
  