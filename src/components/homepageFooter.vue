<template>
  <div class="footer fluid-container text">
    <div class="footer-continer">
      <div class="row">
        <div class="col-md-4 col-xs-12 order-1 order-md-1">
          <hr class="hr-foot" />
          <div class="ongkharak">
            <h6>Srinakharinwirot University Ongkharak Campus</h6>
            <hr class="hr-foot " />

            <p>
              7 63 Rangsit - Nakhon Nayok Rd, Ongkharak district,<br />
              Nakhon Nayok, 26120
            </p>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 order-3 order-md-2">
          <div class="coppyright">
            <h6 id="c">Copyright © {{new Date().getFullYear()}} Faculty of Computer Engineering</h6>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 order-2 order-md-2">
          <hr class="hr-foot" />
          <div class="prasanmit">
            <h6>Srinakharinwirot University Prasarnmit Campus</h6>
            <hr class="hr-foot" />
            <p>
              174 Soi Sukhumvit 23, Khlong Toei Nuea, Wattana,<br />
              Bangkok, 10110
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>


.footer {
  background-image: linear-gradient(#ffffff, #cfcfcf);
}
.footer .ongkharak {
  color: #323131;
}

.coppyright {
  color: #747578;
}

.footer .ongkharak .p {
  color: #7c7d80;
}

</style>
