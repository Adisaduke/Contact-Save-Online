<?php
if (isset($_POST['email']) && isset($_POST['message'])) {
//   $to = "contact@yassine-dehhani.com";
  $to = "akilapanunayan@gmail.com";
  $subject = "[PORTFOLIO] New message from " . $_POST['name'];
  $message = $_POST['message'];
  $headers = "From: " . $_POST['email'] . "\r\n" .
             "Reply-To: " . $_POST['email'] . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);
  header('Location: localhost:3000/thank-you');
}
?>
	