<?php
get-header();
if(true===apply-filters("graduate_filter_frontpage_content_enable",true));?>
<div class="container page-selection">
  <div id="primary"class="content-area">
    <main id="main"class="site-main"role="main">


<form role="form"method="post">
  <div class="form-group">
    <input id="name"name='name'type="text"placeholder="Student Name"class="form-control input-sm"required="">
  </div>
  <div class="form-group">
    <input id="Roll"name='Roll'type="number"placeholder="Roll"class="form-control input-sm"required="">
  </div>
  <div class="form-group">
    <input id="Age"name='Age'type="number"placeholder="Age"class="form-control input-sm"required="">
  </div>
  <div class="row justify-contest-center">
    <div class="cd-xs-4 col-sm-4 col-md-4">
      <input type="submit"value="submit"class="btn btn-info btn-block"
      name="Submitbtn">
    </div>
  </div>
</form>
