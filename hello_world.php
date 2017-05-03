
<?php

$conn = pg_pconnect("host=localhost dbname=hello_world user=yash");
if (!$conn) {
    echo "An error occurred.\n";
    exit;
}

$result = pg_query($conn, "SELECT english_name FROM country");
if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

print_r($arr);

?>
