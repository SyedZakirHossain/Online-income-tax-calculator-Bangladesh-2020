<html>
<body>
<?php
    class Movie
    {
  public $title;
  private $rating;

  function __construct($title,$rating)
  {
    $this->title=$title;
    $this->setRating($rating);// code...
  }
  function getRating(){
    return $this->rating;
  }
  function setRating($rating){
    if($rating=="G"||$rating=="PG"||$rating=="PG-13"||$rating=="R"){
       $this->rating=$rating;
                 }
                  else {
                  $this->rating="NR";
                     }
                  }
                }
    $don = new Movie("Don","PG-13");
          $don->setRating("Riiii");
     echo $don->getRating();
       ?>
   </body>
</html>
