# Backend - Security - Validate

- Do not use mongo/mongoose
- Create a tiny API with two endpoints:
  - `GET /birds` - returns current list of bird sightings in app memory
  - `POST /birds` - adds a bird sighting to app memory

- A bird sighting record contains three strings: "species", "notes" and "estimatedAmount"
  - species must be at least 3 characters long
  - species must be at most 80 characters long
  - notes must be at most 140 characters long
  - estimatedAmount must contain only numbers
  - Question: what is it called when a string contains only letters and numbers? 
  
  ANSWER: ALPHANUMERIC
  -------

  - *BONUS* species and notes must contain only letters (no numbers or symbols)

  - *BONUS* Research: what is a mimetype? Provide a very short definition and 3 examples
  ANSWER
 -------
  
  The mime-type validator will have the task of getting the value of control,  which will be a file.
  They describe the media type of content either contained in email or served by web servers or web applications, and are intended to help guide a web browser to correctly process and display the content. Examples of MIME types are:

  text/html for normal web pages
  text/plain for plain text
  application/octet-stream meaning “download this file”
  application/x-java-applet for Java™ applets
  application/pdf for Adobe® PDF documents.

- Do not commit `node_modules`

- Test your API
