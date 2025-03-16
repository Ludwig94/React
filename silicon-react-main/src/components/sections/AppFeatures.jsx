import React, { useState } from 'react'

const AppFeatures = () => {
        const [images, setImages] = useState([
            { id: 1, src: '/images/image-sliders/app-features.svg', alt: 'slide 1'}
        ])

 
     return (
        <section id="app-features">
        <div class="container">
            <div class="column left">
            {
                        images.map(image => (
                            <div key={image.id} class="image-slide">
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))
                    }
            </div>
            <div class="column center">
                <div class="content">
                    <div class="section-title">
                        <h2>App Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                        
                    </div>
            
                    <div className="section-body">
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon">
                                    <img src="images/icons/af-easy-payments.svg" alt="credit card" />
                                </div>
                                <h5>Easy Payments</h5>
                                
                            </div>
                            <div className="flex-p">
                            <p>Id mollis consectetur congue <br />egestas egestas suspendisse <br/>blandit justo.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <img src="images/icons/af-cost-statistics.svg" alt="credit card" />
                                </div>
                                <h5>Cost Statistics</h5>
                                
                            </div>
                            <div className="flex-p">
                            <p>Mattis urna ultricies non amet,<br/> purus in auctor non.<br/> Odio vulputate ac nibh.</p>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">
                                    <img src="images/icons/af-regular-cashback.svg" alt="credit card" />
                                </div>
                                <h5>Regular Cashback</h5>
                                
                            </div>
                            <div className="flex-p">
                            <p>Sit facilisis dolor arcu,<br/> fermentum vestibulum arcu<br/> elementum imperdiet eleifend.</p>
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
                
            </div>
            <div class="column right">
            <div class="content">


                <div class="section-body">
                    <div class="features">
                        <div class="feature">
                            <div class="feature-icon">
                                <img src="images/icons/af-data-security.svg" alt="security" />
                            </div>
                            <h5>Data Security</h5>
                            
                        </div>
                        <div className="flex-p">
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">
                                <img src="images/icons/af-support.svg" alt="support" />
                            </div>
                            <h5>Support 24/7</h5>
                            
                        </div>
                        <div className="flex-p">
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                        </div>
                        <div class="feature">
                            <div class="feature-icon">
                                <img src="images/icons/af-top-standards.svg" alt="credit card" />
                            </div>
                            <h5>Top Standards</h5>
                           
                        </div>
                        <div className="flex-p">
            
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>

        </div>
        
    </section>
  )
}
export default AppFeatures