<?php $basename = basename($_SERVER["PHP_SELF"]) ?>

<!DOCTYPE html>
<html lang="kr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">
  <meta name="theme-color" content="#f8f8f8">

  <link rel="shortcut icon" href="assets/img/favicon/favicon.ico">
  <link rel="shortcut icon" href="assets/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="512x512"  href="assets/img/favicon/android-chrome-512x512.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="assets/img/favicon/android-chrome-192x192.png">
  <link rel="manifest" href="assets/img/favicon/site.webmanifest.json">

  <title>특허법인 넥스트</title>

  <link rel="stylesheet" href="assets/css/style.css">

  <script src="assets/libs/jquery-3.7.1/jquery-3.7.1.min.js"></script>
  <?php if( $basename == 'index.php') { ?>
    <script src="assets/libs/fullpage/fullpage-4.0.20.js"></script>
    <script src="assets/libs/jquery.slimscroll/jquery.slimscroll.js"></script>
  <?php } ?>
  <script src="assets/libs/slick-1.8.0/slick-1.8.0.min.js"></script>

  <script src="assets/js/front.js"></script>

  <?php if( $basename == 'index.php') { ?>
    <script src="assets/js/index.js"></script>
  <?php } else if ( $basename == 'members.php') { ?>
    <script src="assets/js/members.js"></script>
  <?php } ?>
  
</head>
<body>
  <div id="wrap">

    <header id="header">
      <div class="inner">
        <h1><a href="index.php"><span class="blind">NEXT</span></a></h1>
        <div class="utils">
          <button type="button" id="aside_button"></button>
        </div>
      </div>
    </header>

    <div id="aside">
      <nav class="aside-nav">
        <div class="inner">
          <ul>
            <li><a href="#" data-slide="1">Mission & Vision</a></li>
            <li><a href="#" data-slide="2">What we do</a></li>
            <li><a href="#" data-slide="3">Members</a></li>
            <li><a href="#" data-slide="4">Partners</a></li>
            <li><a href="#" data-slide="5">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div class="aside-copy">
        <div class="inner">
          © 2025 IP LAWFIRM NEXT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>