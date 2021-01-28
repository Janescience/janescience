<template>
    <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Skills</h4>
                                <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
                                    thaws every summer, and that process will continue whatever happens.</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Programming language</h5>
                                    <base-progress :value="100" type="success" label="Java [Expert]"></base-progress>
                                    <base-progress :value="80" type="success" label="JavaScript [Senior]"></base-progress>
                                    <!-- <a href="#" class="text-success">Learn more</a> -->
                                </div>
                                
                            </div>
                        </card>
                    
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Framework</h5>
                                    <base-progress :value="100" type="warning" label="Springboot (JAVA) [Expert]"></base-progress>
                                    <base-progress :value="100" type="warning" label="Hibernate (JAVA) [Senior]"></base-progress>

                                    <!-- <a href="#" class="text-warning">Learn more</a> -->
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
</template>