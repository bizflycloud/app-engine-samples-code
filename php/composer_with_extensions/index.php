<!DOCTYPE html>
<html>
  <head>
    <title>BizflyCloud App Engine</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://techvccloud.mediacdn.vn/2018/12/5/logofacebook-1543996079655547158445-crop-1543996085792308014951.png"></img>
<?php
  // https://getcomposer.org/doc/01-basic-usage.md#autoloading
  // This is how you autoload composer packages
  require 'vendor/autoload.php';

    foreach (get_loaded_extensions() as $ext) {
        print($ext . "\n");
    }
?>
  </body>
</html>
