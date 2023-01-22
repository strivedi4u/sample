import React from 'react';
import "./assets/css/slider.css";
function Slider() {

return (
    <div class="slider">
<div class="container" style={{margin:"-150px"}}>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				
				<div class="carousel-inner">
					<div class="item active">
						<img src="https://www.tutorialrepublic.com/examples/images/slides/notebook.jpg" alt="" />
					</div>
					<div class="item">
						<img src="/examples/images/slides/workstation.jpg" alt="" />
					</div>
					<div class="item">
						<img src="/examples/images/slides/tablet.jpg" alt="" />
					</div>						
				</div>
				
				<a class="carousel-control left" href="#myCarousel" data-slide="prev">
					<span><i class="fa fa-angle-left"></i></span>
				</a>
				<a class="carousel-control right" href="#myCarousel" data-slide="next">
					<span><i class="fa fa-angle-right"></i></span>
				</a>
			</div>
		</div>
	</div>
</div>



<div class="col-md-5 ml-2 col-12 text-center" style={{marginTop:"-230px"}}>
                <table class="table table-bordered" style={{ backgroundColor:"white",}}>
                    <thead>
                        <tr>
                            <th class="text-light" style={{backgroundColor:"navy", color:"white"}}>Welcome To Government Polytechnic
                                Kanpur</th>
                        </tr>
                    </thead>
                    <td>
                        <p class="text-justify text-captalize " style={{margin:"2%", height:"250px", marginTop:"17px"}}>The
                            institute was established in the year 1958. Initially it was started as Government Technical
                            Institute. All India Council for Technical Educational renamed it as Government Polytechnic
                            Kanpur to bring the uniformity in the pattern of technical education throughout the country
                            in the year 1964.<br></br>
                            <br></br>Government Polytechnic Kanpur is approved by AICTE Govt. of India and affiliated to
                            Board of Technical Education UP (BTEUP) .<br></br><br></br>
                            The institution is running various courses in Information Technology, Electronics
                            Engineering
                            , Chemical Engineering , Mechanical Engineering (production)&(also a Automobile) , Civil
                            Engineering
                            ,Electrical Engineering , Instrumentation And Control Engineering,
                            Paint Technology,Textile Technology,Textile Chemistry etc. with intake of 60 students in
                            each.
                            </p>
                    </td>
                </table>
            </div>
</div>
);
}
export default Slider;