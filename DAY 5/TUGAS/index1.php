<?php
    $angka = "89";

    if($angka >=85 && $angka <= 100){
        echo "PERINGKAT A";
     }elseif($angka >=75 && $angka <= 84){
         echo "PERINGAT B";
     }elseif ($angka >=60 && $angka <= 74){
        echo "PERINGAT C";
     }elseif ($angka >=50 && $angka <= 59){
        echo "PERINGKAT D";
     }elseif ($angka >=0 && $angka <= 49){
        echo "PERINGKAT E";
     }else {
        echo "ANDA TIDAK PUNYA PERINGKAT";
     }
    
?>