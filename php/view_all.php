<?php
//setting header to json
header('Content-Type: application/json');
//database
define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'daq');
//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
if(!$mysqli){
	die("Connection failed: " . $mysqli->error);
}
//query to get data from the table
$query = sprintf("SELECT * FROM `tempmoist`");
//execute query
$result = $mysqli->query($query);
//loop through the returned data
 
 if($row = $result->fetch_assoc()) {
        echo 
	
              '<table class="table table-striped table-bordered table-hover id="dataTables-example" >  
                  <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Temperature</th>
                                            <th>Moisture</th>
                                            <th>Timestamp</th>
                                        </tr>
                  </thead>
              ';
 while ($row = $result->fetch_assoc()) {
      	echo 
              '<tbody>
                                        
                              <tr>
              								  <td >' . $row["Num_ID"]. '</td>
           								      <td> ' . $row["Temp_val"] .'</td>
              							    <td> '.$row["Moist_val"] .'</td>
         							          <td> '.$row["Timestamp"] .'</td>
           								    </tr>    
               </tbody>';
      }
                                   
            '</table>';
	
}

?>
<script src="assets/js/dataTables/jquery.dataTables.js"></script>
    <script src="assets/js/dataTables/dataTables.bootstrap.js"></script>
        <script>
            $(document).ready(function () {
                $('#dataTables-example').dataTable();
            });
    </script>
