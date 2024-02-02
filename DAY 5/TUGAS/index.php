<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body>
  <h1 style="text-align: center">Uang Saku BFLP</h1>
  <form method="post" action="">
    <div style="margin-left: 25%">
      Nama Trainee : <input type="text" name="nama" required /><br />
      <br />
      Gaji Pokok : <input type="number" name="gapok" required /><br />
      <br />
      Tunjangan : <input type="number" name="tunjangan" required /><br /><br />
      <input type="submit" name="submit" value="Submit" />
    </div>
  </form>
  <div style="margin-left: 25%">
    <?php
    if (isset($_POST['submit'])) {
      $nama = $_POST['nama'];
      $gapok = $_POST['gapok'];
      $tunjangan = $_POST['tunjangan'];
      if (
        !is_numeric($gapok) || !is_numeric($tunjangan) ||
        $gapok < 0 || $tunjangan < 0
      ) {
        echo "Masukkan nilai yang valid";
      } else { //gaji pokok
        $gajibruto = $gapok + $tunjangan;
        $pajak = ($gajibruto * 10) / 100;
        $asuransi = ($gajibruto * 5) / 100;
        $gajibersih = $gajibruto - $pajak - $asuransi;




        echo  "Nama Trainee : $nama <br>";
        echo  "Gaji Bruto : Rp. " . number_format($gajibruto, 0, ',', '.') . " <br>";
        echo "Pajak penghasilan: Rp. " . number_format($pajak, 0, ',', '.') . "  <br>";
        echo  "Asuransi Kesehatan: Rp. " . number_format($asuransi, 0, ',', '.') . "  <br>";
        echo "Gaji Bersih : Rp. " . number_format($gajibersih, 0, ',', '.') . " <br>";
      }
    }

    ?>

  </div>
</body>

</html>