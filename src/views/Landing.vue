<template>
    <div>
        <profile></profile>
        <personal-info></personal-info>
        <work-exp></work-exp>
        <projects></projects>
        <skills></skills>
        <tools></tools>
        <contact></contact>
        
        <!-- <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">We made website building easier for you.</h3>
                                <p class="lead text-white mt-3">I will be the leader of a company that ends up being
                                    worth billions of dollars, because I got the answers. I understand culture.</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="https://www.creative-tim.com/product/vue-argon-design-system"
                                             type="white" block size="lg">
                                    Download Vue
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section> -->
        
        <!-- <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">Do you love this awesome
                            <span class="text-success">Design System for Bootstrap 4?</span>
                        </h2>
                        <p class="lead">Cause if you do, it can be yours for FREE. Hit the button below to navigate to
                            Creative Tim where you can find the Design System in HTML. Start a new project or give an
                            old Bootstrap project a new look!</p>
                        <div class="btn-wrapper">
                            <a href="https://www.creative-tim.com/product/vue-argon-design-system"
                               class="btn btn-primary mb-3 mb-sm-0">Download Vue</a>
                        </div>
                        <div class="text-center">
                            <h4 class="display-4 mb-5 mt-5">Available on these technologies</h4>
                            <div class="row justify-content-center">
                                <div class="col-lg-2 col-4">
                                    <a href="https://getbootstrap.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Bootstrap 4 - Most popular front-end component library">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.sketchapp.com/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Sketch - Digital design toolkit">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://www.adobe.com/products/photoshop.html" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg'"
                                             class="img-fluid  opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://vuejs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="Vue.js - The progressive javascript framework">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg'"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://angularjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://reactjs.org/" target="_blank" data-toggle="tooltip"
                                       data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
                                        <img v-lazy="'https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg'"
                                             class="img-fluid opacity-5">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

    </div>
</template>

<script>
import Profile from "./components/Portfolio/Profile";
import PersonalInfo from "./components/Portfolio/PersonalInfo";
import WorkExp from "./components/Portfolio/WorkExp";
import Projects from "./components/Portfolio/Projects";
import Skills from "./components/Portfolio/Skills";
import Tools from "./components/Portfolio/Tools";
import Contact from "./components/Portfolio/Contact";

export default {
  name: "home",
  components: {
    Profile,
    PersonalInfo,
    WorkExp,
    Projects,
    Skills,
    Tools,
    Contact
  }
};



</script>
