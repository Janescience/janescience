<template>
<div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
            <div class="shape  bg-gradient-dark shape-skew ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
            </div>
    </section>
    <section class="section section-skew"> 
            <div class="container">
                <card shadow class="card-profile mt--200" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/janescience-profile.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="default" size="sm" class="float-right">Resume</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">{{ calculateAge }}</span>
                                        <span class="description">Year olds</span>
                                    </div>
                                    <div>
                                        <span class="heading">{{ calculateExperience }}</span>
                                        <span class="description">Exp/Years</span>
                                    </div>
                                    <div>
                                        <span class="heading">{{ countProjects }}</span>
                                        <span class="description">Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Janewit Sirijan</h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Saimai , Bangkok</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Software Developer</div>
                            <div><i class="ni education_hat mr-2"></i>Suranaree University of Technology</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Hi,my name is Jane.I'm currently a Java Developer outsource at Ocean Life Insurance.
                                        I enjoy programming as though playing games and learning never ends.
                                        I am ready to grow and look for good opportunities. You just give me a chance</p>
                                    <!-- <a  href="#">Show more</a> -->
                                    <base-button  type="info" size="sm" class="float-right">Show more</base-button>

                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
    </section>
</div>
</template>
<script>
import Projects from "./Projects";

export default {
  name : "profile",
  components:{Projects},
  computed: {
      calculateAge: function() {
          let currentDate = new Date();
          let birthDate = new Date("1995/10/22");
          let difference = currentDate - birthDate;
          let age = Math.floor(difference/31557600000);
          return age
        },
        calculateExperience: function() {
          let currentDate = new Date();
          let startDate = new Date("2018/03/12");
          let difference = currentDate - startDate;
          let experience = Math.floor(difference/31557600000);
          return experience
        },
        countProjects: function() {
          let countDivProject = document.getElementsByClassName('project');
          return countDivProject.length
        }
  }
  
};

</script>