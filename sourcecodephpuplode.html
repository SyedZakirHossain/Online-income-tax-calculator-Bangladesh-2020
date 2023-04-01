<?php
$con=mysqli_connect("localhost","root","","image_upload");
//database connection
 ?>


<form method="POST" action="file_upload.php" enctype="multipart/form-data">
<input type="file" name="image" />
<input type="submit" name="upload" value="upload"/>
</form>


<?php
//displaying the image

$get_image ="select * from image";
$run_image = mysqli_query($con, $get_image);
$row_image =mysqli_fetch_array($run_image);

$image_id = $row_image['id'];
$image = $row_image['image'];

echo"<img src='file/$image' width='160' height='160'/>";
?>

<?php
 //insert file into databse fisrt

 if(!empty($_POST['upload'])){

	 switch($_FILES['image']['type']){
		 case"image/jpeg":
		 echo"allowed file";
		 break;
		 case"image/png":
		 echo"allowed file";
		 break;
		 default:
		 //illegal file type, shutdown
		 exit("illegal filetype");
	 }
	 $file=$_FILES['image']['name'];
	 $file_tmp=$_FILES['image']['tmp_name'];
	 move_uploaded_file($file_tmp,"file/$file");
	 $insert_file ="INSERT INTO image(image)VALUES('$file')";
		$run_file = mysqli_query($con, $insert_file);
		if($run_file){
			echo"<script>alert('file is uploaded')</script>";
		}

 }

?>
