<template>
    
        <section class="section bg-secondary">
            
            <div class="container">
                    <div class="col-md-12">
                        <VueSlickCarousel v-bind="settings">
                            <div >
                                <div class="row row-grid align-items-center project">
                                    <div class="col-md-6">
                                        <div class="card bg-dark shadow border-0 floating">
                                        <img v-lazy="'img/theme/HRMS-project.png'" class="card-img-top">
                                            <blockquote class="card-blockquote">
                                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                                    class="svg-bg">
                                                    <polygon points="0,52 583,95 0,95" class="fill-dark"></polygon>
                                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-dark"></polygon>
                                                </svg>
                                                <h4 class="display-3 font-weight-bold text-white">HRMS</h4>
                                                <p class="lead text-italic text-white">There are a total of 13 modules as follows 
                                                    Organiztion Structure , Personal Movement , Time Attendance , Payroll , Taining Development , Benefits , Resource Planing , Royal Decoration 
                                                , Individual Development Planing , Employee Self Service , Salary Adjustment System , Disciplinary Offense System and Administrator. </p>
                                            </blockquote>
                                        </div>
                                    </div>      
                                    <div class="col-md-6">
                                        <div class="pl-md-5">
                                            <icon name="ni ni-single-02" class="mb-5" size="lg" type="dark" shadow rounded></icon>

                                        <h3>HUMAN RESOURCE MANAGEMENT SYSTEM</h3>
                                        <p class="lead">Web application used for manage human resource
                                            and related processes throughout the employee
                                            lifecycle.This project is a package program and has multiple
                                        modules. </p>
                                                <div>
                                                    <badge type="dark" rounded>java</badge>
                                                    <badge type="dark" rounded>spring roo</badge>
                                                    <badge type="dark" rounded>hibernate</badge>
                                                    <badge type="dark" rounded>java script</badge>
                                                    <badge type="dark" rounded>jquery</badge>
                                                    <badge type="dark" rounded>bootstrap</badge>
                                                    <badge type="dark" rounded>jasper</badge>
                                                    <badge type="dark" rounded>oracle , postgres</badge>
                                                    <badge type="dark" rounded>tomcat</badge>
                                                    <badge type="dark" rounded>jenkins</badge>
                                                    <badge type="dark" rounded>git , svn </badge>
                                                </div>
                                            <p class="mt-5 text-muted">Develop with Soft Square Group of Companies team.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="row row-grid mt-5 align-items-center project">
                                    <div class="col-md-6">
                                        <div class="pl-md-5">
                                            <icon name="ni ni-money-coins" class="mb-5" size="lg" type="dark" shadow rounded></icon>

                                            <h3>LEGAL ENFORCEMENT ACTION DATABASE</h3>
                                            <p class="lead">The Government Savings Bank’s web application
                                                used for collecting debts of banks and lawyers.</p>
                                            <div>
                                                        <badge type="dark" rounded>java</badge>
                                                        <badge type="dark" rounded>spring boot</badge>
                                                        <badge type="dark" rounded>hibernate</badge>
                                                        <badge type="dark" rounded>java script</badge>
                                                        <badge type="dark" rounded>jquery</badge>
                                                        <badge type="dark" rounded>bootstrap</badge>
                                                        <badge type="dark" rounded>jasper</badge>
                                                        <badge type="dark" rounded>sql server</badge>
                                                        <badge type="dark" rounded>docker</badge>
                                                        <badge type="dark" rounded>jenkins</badge>
                                                        <badge type="dark" rounded>git</badge>
                                                        <badge type="dark" rounded>nginx</badge>
                                            </div>
                                            <p class="mt-5 text-muted">Develop with Soft Square Group of Companies team.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card bg-dark shadow border-0 floating">
                                            <img v-lazy="'img/theme/gsb-bank-project.png'" class="card-img-top">
                                            <blockquote class="card-blockquote">
                                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                                    class="svg-bg">
                                                    <polygon points="0,52 583,95 0,95" class="fill-dark"></polygon>
                                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-dark"></polygon>
                                                </svg>
                                                <h4 class="display-3 font-weight-bold text-white">LEAD</h4>
                                                <p class="lead text-italic text-white"> Functions like
                                                creating a case file , file a lawsuit , record the progress of litigation , print case file delivery slip and auction etc.</p>
                                            </blockquote>
                                        </div>
                                    </div>
                    
                                </div>
                            </div>
                            <div>
                                <div class="row row-grid mt-5 align-items-center project">
                    
                                    <div class="col-md-6">
                                        <div class="card bg-dark shadow border-0 floating">
                                            <img v-lazy="'img/theme/e-workflow-project.png'" class="card-img-top">
                                            <blockquote class="card-blockquote">
                                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                                    class="svg-bg">
                                                    <polygon points="0,52 583,95 0,95" class="fill-dark"></polygon>
                                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-dark"></polygon>
                                                </svg>
                                                <h4 class="display-3 font-weight-bold text-white">MPG-EWF</h4>
                                                <p class="lead text-italic text-white">There are a total of 3 modules as follows 
                                                    E-Approve , E-Expense and  E-Medical  </p>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="pl-md-5">
                                            <icon name="ni ni-vector" class="mb-5" size="lg" type="dark" shadow rounded></icon>

                                            <h3>E-WORKFLOW</h3>
                                            <p class="lead">Mitr Phol’s web application used for
                                                reimbursement of expenses and approvals within the
                                                organization. Divided by approval line.
                                            </p>
                                            <div>
                                                        <badge type="dark" rounded>java</badge>
                                                        <badge type="dark" rounded>spring boot</badge>
                                                        <badge type="dark" rounded>hibernate</badge>
                                                        <badge type="dark" rounded>java script</badge>
                                                        <badge type="dark" rounded>jquery</badge>
                                                        <badge type="dark" rounded>bootstrap</badge>
                                                        <badge type="dark" rounded>jasper</badge>
                                                        <badge type="dark" rounded>sql server</badge>
                                                        <badge type="dark" rounded>tomcat</badge>
                                                        <badge type="dark" rounded>jenkins</badge>
                                                        <badge type="dark" rounded>git</badge>
                                                        <badge type="dark" rounded>jbpm</badge>
                                                        <badge type="dark" rounded>sap</badge>
                                            </div>
                                            <p class="mt-5 text-muted">Develop and supports with Soft Square Group of Companies team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="row row-grid mt-5 align-items-center project">
                                    <div class="col-md-6">
                                        <div class="pl-md-5">
                                            <icon name="ni ni-cart" class="mb-5" size="lg" type="dark" shadow rounded></icon>

                                            <h3>E-PROPERTY</h3>
                                            <p class="lead">Big C’s web application used for rent space to shop inside.</p>
                                            <div>
                                                        <badge type="dark" rounded>java</badge>
                                                        <badge type="dark" rounded>spring boot</badge>
                                                        <badge type="dark" rounded>hibernate</badge>
                                                        <badge type="dark" rounded>java script</badge>
                                                        <badge type="dark" rounded>jquery</badge>
                                                        <badge type="dark" rounded>bootstrap</badge>
                                                        <badge type="dark" rounded>birth</badge>
                                                        <badge type="dark" rounded>oracle</badge>
                                                        <badge type="dark" rounded>pl/sql</badge>
                                                        <badge type="dark" rounded>git</badge>
                                            </div>
                                            <p class="mt-5 text-muted">Develop with Soft Square Group of Companies team.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card bg-dark shadow border-0 floating">
                                            <img v-lazy="'img/theme/eprop-project.png'" class="card-img-top">
                                            <blockquote class="card-blockquote">
                                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                                    class="svg-bg">
                                                    <polygon points="0,52 583,95 0,95" class="fill-dark"></polygon>
                                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-dark"></polygon>
                                                </svg>
                                                <h4 class="display-3 font-weight-bold text-white">EPROP</h4>
                                                <p class="lead text-italic text-white"> Functions like
                                                creating a case file , file a lawsuit , record the progress of litigation , print case file delivery slip and auction etc.</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>      
        </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    computed: {
        
    },
    data () {
        return {
            settings : 
                {
                    "dots": true,
                    "focusOnSelect": true,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "touchThreshold": 5,
                    "autoplay": true,
                    "speed": 500,
                    "autoplaySpeed": 2000,
                    "pauseOnDotsHover": true,
                    "pauseOnFocus": true,
                    "pauseOnHover": true
                }
            }
        }
        
}
</script>