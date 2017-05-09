
<?php

$conn = pg_pconnect("host=localhost dbname=hello_world user=yash");
if (!$conn) {
    echo "An error occurred.\n";
    exit;
}

$result = pg_query($conn, "SELECT * FROM country");
if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

echo json_encode($arr);

?>
