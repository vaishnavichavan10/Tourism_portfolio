<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Tourism Portfolio</title>
    <link rel="stylesheet" href="constyles.css">
</head>

<body>
    <header>
        <h1>Tourism Portfolio</h1>
        
    </header>

    <div class="container">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
        </form>

        <div id="response"></div>
    </div>

    <script src="conscript.js"></script>
</body>

</html>
