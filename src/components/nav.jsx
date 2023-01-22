import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/nav.css';
function Navbar(props) {
    return (
<nav class="navbar navbar-default navbar-expand-lg navbar-light">
	<div class="navbar-header">
		<a class="navbar-brand" href="./">Brand<b>Name</b></a>  		
		<button type="button" data-target="./navbarCollapse" data-toggle="collapse" class="navbar-toggle">
			<span class="navbar-toggler-icon"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>
	
	<div id="navbarCollapse" class="collapse navbar-collapse">
		<ul class="nav navbar-nav">
			<li><a href="./">Home</a></li>
			<li><a href="./">About</a></li>			
			<li class="dropdown">
				<a data-toggle="dropdown" class="dropdown-toggle" href="./">Services <b class="caret"></b></a>
				<ul class="dropdown-menu">					
					<li><a href="./">Web Design</a></li>
					<li><a href="./">Web Development</a></li>
					<li><a href="./">Graphic Design</a></li>
					<li><a href="./">Digital Marketing</a></li>
				</ul>
			</li>
			<li class="active"><a href="./">Portfolio</a></li>
			<li><a href="./">Blog</a></li>
			<li><a href="./">Contact</a></li>
		</ul>
		<form class="navbar-form form-inline navbar-right ml-auto">
			<div class="input-group search-box">
				<input type="text" class="form-control" />
				<span class="input-group-btn">
					<button type="button" class="btn btn-primary"><span>Search</span></button>
				</span>
			</div>
		</form>		
	</div>
</nav>
    );
}

export default Navbar;
