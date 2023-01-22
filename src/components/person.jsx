import React from 'react';
import './assets/css/person.css';
function Person() {
    return (
        <div class="" style={{ marginTop: "50px" }}><br></br><br></br>
            <div class="">
                <div class="col-md-2 col-sm-6 sidenav">
                    <div class="our-team">
                        <div style={{ border: "1px solid lightgray", }}>
                            <h6 style={{ backgroundColor: "navy", textAlign: "center", color: "white", padding: "10px", height: "30px" }}>News &
                                Events <a href="notice_events.php" style={{ padding: "10px", color: "red" }}>View All</a></h6>
                            <marquee direction="up" onmouseover="this.stop();" onmouseout="this.start();" height="482px"
                                class="ml-2">
                            </marquee>
                        </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="http://gpkanpur.co.in/image/ashish_patel.jpg" />
                        </div>
                        <h3 class="title">Kristiana</h3>
                        <span class="post">Web Designer</span>
                        <ul class="social">
                            <li><a href="./" class="fa fa-facebook"></a></li>
                            <li><a href="./" class="fa fa-twitter"></a></li>
                            <li><a href="./" class="fa fa-google-plus"></a></li>
                            <li><a href="./" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-2 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="http://gpkanpur.co.in/image/ashish_patel.jpg" />
                        </div>
                        <h3 class="title">Kristiana</h3>
                        <span class="post">Web Designer</span>
                        <ul class="social">
                            <li><a href="./" class="fa fa-facebook"></a></li>
                            <li><a href="./" class="fa fa-twitter"></a></li>
                            <li><a href="./" class="fa fa-google-plus"></a></li>
                            <li><a href="./" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="http://gpkanpur.co.in/image/ashish_patel.jpg" />
                        </div>
                        <h3 class="title">Kristiana</h3>
                        <span class="post">Web Designer</span>
                        <ul class="social">
                            <li><a href="./" class="fa fa-facebook"></a></li>
                            <li><a href="./" class="fa fa-twitter"></a></li>
                            <li><a href="./" class="fa fa-google-plus"></a></li>
                            <li><a href="./" class="fab fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src="http://gpkanpur.co.in/image/ashish_patel.jpg" />
                        </div>
                        <h3 class="title">Kristiana</h3>
                        <span class="post">Web Designer</span>
                        <ul class="social">
                            <li><a href="./" class="fa fa-facebook"></a></li>
                            <li><a href="./" class="fa fa-twitter"></a></li>
                            <li><a href="./" class="fa fa-google-plus"></a></li>
                            <li><a href="./" class="fab fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>




                <div class="col-md-8 col-sm-6" style={{ marginTop: "10px" }}>
                    <table class="table table-bordered" style={{ backgroundColor: "white", }}>
                        <thead>
                            <tr>
                                <th class="text-light" style={{ backgroundColor: "navy", color: "white" }}>Principal Message
                                    </th>
                            </tr>
                        </thead>
                        <td>
                            <p class="text-justify text-captalize " style={{ margin: "2%", height: "100px", marginTop: "17px" }}>The
                                <b><em>"We have achieve goals of education to explore our talent and wisdom."</em>
                                    ~ said by Swami Vivekanand</b><br></br>



                                Education is not meant just to empower us in terms of knowledge and skills; it gives us so much
                                more. At gpk, we believe that becoming a bookworm is not education;
                                it is more important to put into practice at least a fraction of what you have learnt.

                                Education is tool through you can change the world being technically educated. We should able to change the struggled life.

                                तकनीक का प्रयोग करके हमें लोगों के जीवन को सरल बनाना है|</p>

                            <p><b>...Mukesh Chandra Anand</b></p>
                        </td>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Person;
