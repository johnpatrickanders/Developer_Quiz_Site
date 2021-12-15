const questions = [
  {
    "Question": "What does HTML stand for?",
    "Answer": "Hyper Text Markup Language",
    "Distractor1": "Hyper Text Marked Language",
    "Distractor2": "Hyper Text Marked Links",
    "Distractor3": "Hyper Text Machine Language",
    "Explanation": "HTML stands for Hyper Text Markup Language",
    "Link": "https://www.freecodecamp.org/news/html-crash-course/"
  },
  {
    "Question": "What HTML tag is used for creating a hyperlink?",
    "Answer": "<a>",
    "Distractor1": "<hyperlink>",
    "Distractor2": "<href>",
    "Distractor3": "<link>",
    "Explanation": "You create links by using an opening <a> and closing </a> tag",
    "Link": "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/"
  },
  {
    "Question": "What HTML attribute is used when creating a hyperlink?",
    "Answer": "href",
    "Distractor1": "src",
    "Distractor2": "id",
    "Distractor3": "style",
    "Explanation": "On the opening tag, <a>, an href attribute is added, which is short for hypertext reference. The value of the href attribute specifies the desired URL you want the link to take users to when the link text is clicked.",
    "Link": "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/"
  },
  {
    "Question": "What HTML tag is used to make text bold?",
    "Answer": "<b>",
    "Distractor1": "<br>",
    "Distractor2": "<bold>",
    "Distractor3": "<p>",
    "Explanation": "The <b> tag is used to to make a portion of the text bold without carrying any special importance",
    "Link": "https://www.freecodecamp.org/news/html-bold-text-tutorial-how-to-use-the-b-tag/"
  },
  {
    "Question": "What HTML tag is used to create an unordered(bulleted) list?",
    "Answer": "<ul>",
    "Distractor1": "<ol>",
    "Distractor2": "<li>",
    "Distractor3": "<a>",
    "Explanation": " The <ul> tag is used to create an unordered list. Within the <ul> and <ul/> tags, you use the <li> and </li> tags, to create individual list items.",
    "Link": "https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/"
  },
  {
    "Question": "Which value of the target attribute opens a link in a new tab?",
    "Answer": "_blank",
    "Distractor1": "_parent",
    "Distractor2": "_self",
    "Distractor3": "_top",
    "Explanation": "By default the browser opens links in the same tab. You add the target attribute to the opening <a> tag, and give it the value _blank which opens links in a new tab.",
    "Link": "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/"
  },
  {
    "Question": "What is a hyperlink?",
    "Answer": "A web reference to data",
    "Distractor1": "A piece of computer hardware",
    "Distractor2": "An executable programming script",
    "Distractor3": "A website",
    "Explanation": "A hyperlink, also called a link or web link, contains an address for a destination and acts as a reference to data. A user can easily follow, jump to, and be directed to the destination by either clicking, tapping on, or hovering over the link.",
    "Link": "https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/"
  },
  {
    "Question": "What HTML tag is used to italicize text?",
    "Answer": "<i>",
    "Distractor1": "<b>",
    "Distractor2": "<span>",
    "Distractor3": "<li>",
    "Explanation": "The <i> tag displays text in italic",
    "Link": "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/"
  },
  {
    "Question": "How do you write a comment in HTML?",
    "Answer": "<!-- I am a comment! -->",
    "Distractor1": "X!--I am a comment!--X",
    "Distractor2": "V!--I am a comment!--V",
    "Distractor3": ">!--I am a comment!--<",
    "Explanation": "The syntax for an HTML tag is <!-- I am a comment! -->",
    "Link": "https://www.freecodecamp.org/news/html-comment-how-to-comment-out-a-line-or-tag-in-html/"
  },
  {
    "Question": "What is the nav element in HTML?",
    "Answer": "A container for navigation links",
    "Distractor1": "A container for quotes",
    "Distractor2": "A container for paragraph tags",
    "Distractor3": "A container for headings",
    "Explanation": "The nav element is a semantic tag used to contain navigation links.",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the main element in HTML?",
    "Answer": "A tag used for the main content of the HTML page",
    "Distractor1": "A tag used only to contain images",
    "Distractor2": "A tag used to only contain links",
    "Distractor3": "A tag used to only contain paragraphs",
    "Explanation": "The main element is a semantic tag used to contain all of the main content of the HTML page",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is a section element in HTML?",
    "Answer": "A tag used to group related content into sections",
    "Distractor1": "A tag used to group images",
    "Distractor2": "A tag to group headings",
    "Distractor3": "A tag used to group links",
    "Explanation": "The section element is a tag used to group related content into sections",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the header element in HTML?",
    "Answer": "A tag used to group introductory content including navigation links",
    "Distractor1": "A tag used to group comment tags",
    "Distractor2": "A tag used to group block quotes",
    "Distractor3": "A tag used to group figure elements",
    "Explanation": "The header element is a tag used to group introductory content including navigation links",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the footer element in HTML?",
    "Answer": "A tag used to specify the footer of the HTML document",
    "Distractor1": "A tag used to specify the header of the HTML document",
    "Distractor2": "A tag used to specify a paragraph of the HTML document",
    "Distractor3": "A tag used to specify the main content of the HTML document",
    "Explanation": "The footer element is a tag used to specify the footer of the HTML document. This element will usually contain copyright information",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is an aside element in HTML?",
    "Answer": "An HTML element typically used for sidebar information",
    "Distractor1": "An HTML element typically used for footer information",
    "Distractor2": "An HTML element typically used for header information",
    "Distractor3": "An HTML element typically used for links",
    "Explanation": "An aside is an HTML element typically used for sidebar information",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the code element in HTML?",
    "Answer": "An HTML element used for displaying code snippets",
    "Distractor1": "An HTML element used for displaying images",
    "Distractor2": "An HTML element used for displaying links",
    "Distractor3": "An HTML element used for displaying paragraphs",
    "Explanation": "The code element is used for displaying code snippets",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the article tag in HTML?",
    "Answer": "A tag used for content that is independent from the main content of the HTML page",
    "Distractor1": "A tag used for quotes",
    "Distractor2": "A tag used for code",
    "Distractor3": "A tag used for links",
    "Explanation": "The article element is used for content that is independent from the main content of the HTML page",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the blockquote element in HTML?",
    "Answer": "A tag used to quote text from another source",
    "Distractor1": "A tag used to number quotes",
    "Distractor2": "A tag used to style quotes",
    "Distractor3": "A tag used to turn quotes into links",
    "Explanation": "The blockquote element is used to quote text from another source",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What is the mark element in HTML?",
    "Answer": "An element used to highlight text",
    "Distractor1": "A tag used to create an ordered list",
    "Distractor2": "A tag used to create quotes",
    "Distractor3": "A tag used to create headings",
    "Explanation": "The mark element is used to highlight text",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "How do you create a button using the input tag in HTML?",
    "Answer": "<input type=\"button\" value=\"Sample Button\" />",
    "Distractor1": "<input type=\"checkbox\" value=\"Sample Button\" />",
    "Distractor2": "<input type=\"date\" value=\"Sample Button\" />",
    "Distractor3": "<input type=\"color\" value=\"Sample Button\" />",
    "Explanation": "You can create a button using the input tag and set the type attribute to button",
    "Link": "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/"
  },
  {
    "Question": "How do you create a submit button in HTML?",
    "Answer": "<input type=\"submit\" value=\"Submit\" />",
    "Distractor1": "<input type=\"number\" value=\"Submit\" />",
    "Distractor2": "<input type=\"email\" value=\"Submit\" />",
    "Distractor3": "<input type=\"reset\" value=\"Submit\" />",
    "Explanation": "You can create a submit by using the input tag and set the type attribute to submit",
    "Link": "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/"
  },
  {
    "Question": "What is the button tag in HTML?",
    "Answer": "A tag used to create buttons for your HTML page",
    "Distractor1": "A tag used to create images",
    "Distractor2": "A tag used to create quotes",
    "Distractor3": "A tag used to create links",
    "Explanation": "The button tag is used to add buttons to your HTML page",
    "Link": "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/"
  },
  {
    "Question": "What is a div tag in HTML?",
    "Answer": "A generic block level container for grouping content",
    "Distractor1": "A container used to only group images",
    "Distractor2": "A container used to only group headings",
    "Distractor3": "A container used to only group code elements",
    "Explanation": "The div tag is a generic container for grouping content in the HTML page",
    "Link": "https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/"
  },
  {
    "Question": "What is a span tag in HTML?",
    "Answer": "A generic inline container for grouping content",
    "Distractor1": "A container used to only group footer links",
    "Distractor2": "A container used to only header content",
    "Distractor3": "A container used to only group navigation links",
    "Explanation": "A span tag is a generic inline container for grouping content in the HTML page",
    "Link": "https://www.freecodecamp.org/news/span-vs-div-html-tags-what-is-the-difference/"
  },
  {
    "Question": "What is the table tag in HTML?",
    "Answer": "An element to create rows and columns of data in HTML",
    "Distractor1": "An element to embed sound in an HTML document",
    "Distractor2": "An element to represent side comments",
    "Distractor3": "An element used for a specific set of time",
    "Explanation": "The table tag create rows and columns of data in HTML",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is the <tr> tag in HTML?",
    "Answer": "An element that represents a row in a table",
    "Distractor1": "A tag used to create buttons for your HTML page",
    "Distractor2": "A container used to only group headings",
    "Distractor3": "A tag used to group block quotes",
    "Explanation": "The <tr> tag is an element that represents a row in a table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is the <td> tag in HTML?",
    "Answer": "An element used to create data cells in a table",
    "Distractor1": "A tag that represents an abbreviation",
    "Distractor2": "A tag used to create word breaks",
    "Distractor3": "A tag used to create a horizontal line",
    "Explanation": "The <td> tag is an element used to create data cells in a table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is the <th> tag in HTML?",
    "Answer": "An element used to create table headings in a table",
    "Distractor1": "An element that represents a row in a table",
    "Distractor2": "An element used to create data cells in a table",
    "Distractor3": "A generic block level container for grouping content in a table",
    "Explanation": "The <th> tag is an element used to create table headings in a table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is the caption tag in an HTML table?",
    "Answer": "An element used to create captions for a table",
    "Distractor1": "An element used to create images in a table",
    "Distractor2": "An element used to create links in a table",
    "Distractor3": "A element used to create headings in a table",
    "Explanation": "The caption tag is an element used to create captions for a table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is a colspan attribute in an HTML table?",
    "Answer": "Represents the number of columns a cell should span in a table",
    "Distractor1": "Represents the number of rows a cell should span in a table",
    "Distractor2": "Represents the number of links in a table",
    "Distractor3": "Represents the number of images in a table",
    "Explanation": "The colspan attribute represents the number of columns a cell should span in a table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is a rowspan attribute in an HTML table?",
    "Answer": "Represents the number of rows a cell should span in a table",
    "Distractor1": "Represents the number of columns a cell should span in a table",
    "Distractor2": "Represents the number of headings in a table",
    "Distractor3": "Represents the number of code elements in a table",
    "Explanation": "The rowspan attribute represents the number of rows a cell should span in a table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "Which tag is used to represent the header for an HTML table?",
    "Answer": "<thead>",
    "Distractor1": "<img>",
    "Distractor2": "<tbody>",
    "Distractor3": "<tfoot>",
    "Explanation": "The <thead> tag is used to represent the header of an HTML table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "Which tag is used to represent the main body for an HTML table?",
    "Answer": "<tbody>",
    "Distractor1": "<tmain>",
    "Distractor2": "<content>",
    "Distractor3": "<td>",
    "Explanation": "The <tbody> tag is used to represent the main content for an HTML table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "Which tag is used to represent the footer for an HTML table?",
    "Answer": "<tfoot>",
    "Distractor1": "<tfooter>",
    "Distractor2": "<tfooting>",
    "Distractor3": "<tfoots>",
    "Explanation": "The <tfoot> tag is used to represent the footer content for an HTML table",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What is the first tag you add to a HTML5 document?",
    "Answer": "The <!doctype html> tag",
    "Distractor1": "The html tag",
    "Distractor2": "The header tag",
    "Distractor3": "The body tag",
    "Explanation": "The first element on every HTML page is doctype. It tells the browser to expect HTML and what version to use. For the newest version of HTML, the element should look like this: <!doctype html>",
    "Link": "https://www.freecodecamp.org/news/html-crash-course/"
  },
  {
    "Question": "What is the syntax for creating a mailto link?",
    "Answer": "<a href=\"mailto:johndoe@fakeemail.com\">Example mailto link</a>",
    "Distractor1": "<a name=\"mailto:johndoe@fakeemail.com\">Example mailto link</a>",
    "Distractor2": "<a src=\"mailto:johndoe@fakeemail.com\">Example mailto link</a>",
    "Distractor3": "<a link=\"mailto:johndoe@fakeemail.com\">Example mailto link</a>",
    "Explanation": "This is the correct syntax for a mailto link: <a href=\"mailto:johndoe@fakeemail.com\">Example mailto link</a>",
    "Link": "https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/"
  },
  {
    "Question": "Which one is NOT an attribute for the select tag?",
    "Answer": "src",
    "Distractor1": "name",
    "Distractor2": "multiple",
    "Distractor3": "required",
    "Explanation": "The select tag can have the following attributes: name, multiple,required, size, disabled and autofocus",
    "Link": "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    "Question": "Which HTML element contains the select tag?",
    "Answer": "form tag",
    "Distractor1": "anchor tag",
    "Distractor2": "img tag",
    "Distractor3": "footer tag",
    "Explanation": "The select tag is nested inside the form tag so the data can be sent to the server when the form is submitted.",
    "Link": "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    "Question": "What is the name of the tag nested inside the select tag?",
    "Answer": "option tag",
    "Distractor1": "h1 tag",
    "Distractor2": "code tag",
    "Distractor3": "aside tag",
    "Explanation": "The option tag is nested inside the select tag and it serves to provide options for the dropdown menu.",
    "Link": "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    "Question": "What does the size attribute do in the select tag?",
    "Answer": "sets the number of options shown on default",
    "Distractor1": "sets the width of the select tag",
    "Distractor2": "set the height of the select tag",
    "Distractor3": "sets the width and height of the select tag",
    "Explanation": "The size attribute sets the number of options shown on default inside the select dropdown menu",
    "Link": "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    "Question": "What does the multiple attribute do in the select tag?",
    "Answer": "allows the user to choose multiple options in the select tag",
    "Distractor1": "a way to add multiple select tags",
    "Distractor2": "a way to add multiple option tags",
    "Distractor3": "a way to add multiple link tags",
    "Explanation": "The multiple attribute allows the user to choose multiple options in the select tag.",
    "Link": "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    "Question": "What does the optgroup element do in HTML?",
    "Answer": "groups option elements together in the select tag",
    "Distractor1": "groups labels together in the select tag",
    "Distractor2": "groups form tags together",
    "Distractor3": "groups inputs together in the form",
    "Explanation": "The optgroup groups option elements together in the select tag",
    "Link": "https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/"
  },
  {
    "Question": "What does the Doctype do in HTML?",
    "Answer": "specifies the HTML version for the document",
    "Distractor1": "specifies the type of CSS used",
    "Distractor2": "specifies the type of JavaScript used",
    "Distractor3": "specifies the number of elements in the HTML document",
    "Explanation": "The Doctype is used to specify the HTML version for the document",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What are the html tags?",
    "Answer": "root element that contains all other HTML tags",
    "Distractor1": "an element that only contains all paragraph tags",
    "Distractor2": "an element that only contains all image tags",
    "Distractor3": "an element that only contains anchor tags",
    "Explanation": "The html tag is the root level element that contains all of the other HTML elements",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What are the head tags in HTML?",
    "Answer": "a tag that contains metadata for a website",
    "Distractor1": "a tag that contains table cells for a table",
    "Distractor2": "a tag that contains header elements",
    "Distractor3": "a tag that contains navigation links",
    "Explanation": "The head tags contain metadata including title and stylesheets for a website",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What are meta tags in HTML?",
    "Answer": "defines metadata for the HTML document",
    "Distractor1": "defines the number of elements in the HTML document",
    "Distractor2": "defines the number of img tags in the HTML document",
    "Distractor3": "defines the number of p tags in the HTML document",
    "Explanation": "The meta tags define metadata for the HTML document",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What is the title tag in HTML?",
    "Answer": "defines the title for the HTML document",
    "Distractor1": "defines the subtitle for the HTML document",
    "Distractor2": "displays the headings for the HTML document",
    "Distractor3": "displays the paragraph tags for the HTML document",
    "Explanation": "The title tag defines the title for the HTML document",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What are the body tags in HTML?",
    "Answer": "defines the body content for the HTML document",
    "Distractor1": "defines the header content for the HTML document",
    "Distractor2": "defines the image content for the HTML document",
    "Distractor3": "defines the table content for the HTML document",
    "Explanation": "The body tags defines the body content for the HTML document",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What is semantic HTML?",
    "Answer": "HTML tags that hold special meaning",
    "Distractor1": "generic HTML tags that hold no meaning",
    "Distractor2": "tags that only hold special meaning for links",
    "Distractor3": "tags that only hold special meaning for table tags",
    "Explanation": "Semantic HTML tags are HTML elements that hold special meaning",
    "Link": "https://www.freecodecamp.org/news/what-is-html-definition-and-meaning/"
  },
  {
    "Question": "What is the correct code for linking a CSS stylesheet to an HTML file?",
    "Answer": "<link rel=\"stylesheet\" src=\"style.css\">",
    "Distractor1": "<anchor rel=\"stylesheet\" src=\"style.css\">",
    "Distractor2": "<links rel=\"stylesheet\" src=\"style.css\"></links>",
    "Distractor3": "<a rel=\"stylesheet\" src=\"style.css\"></a>",
    "Explanation": "The link tag is used to link your CSS stylesheet to your HTML file",
    "Link": "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    "Question": "What is the rel attribute in the link tag?",
    "Answer": "shows the relationship between the HTML file and linked document",
    "Distractor1": "defines the relationship between an img tag and p tag",
    "Distractor2": "defines the relationship between a table tag and td tag",
    "Distractor3": "defines the relationship between an ul tag and li tag",
    "Explanation": "The rel attribute is used to show the relationship between the linked document and HTML file",
    "Link": "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    "Question": "What does the src attribute do in the link tag?",
    "Answer": "tells the computer where to import the document",
    "Distractor1": "tells the computer where to export the document",
    "Distractor2": "specifies the number of link tags in the HTML document",
    "Distractor3": "specifies the number of anchor tags in the HTML document",
    "Explanation": "The src attribute tells the computer where to import the document",
    "Link": "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    "Question": "What is the type attribute in the link tag?",
    "Answer": "describes the type of content for the linked document",
    "Distractor1": "provides descriptive text for an img",
    "Distractor2": "opens up the link tag in another browser window",
    "Distractor3": "provides the width and height for a link tag",
    "Explanation": "The type attribute describes the type of content for the linked document",
    "Link": "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    "Question": "What is the media attribute in the link tag?",
    "Answer": "Specifies the type of media that should be used when importing the linked content",
    "Distractor1": "tells the computer to import the linked content for phones only",
    "Distractor2": "tells the computer to import the linked content for laptops only",
    "Distractor3": "tells the computer to import the linked content for tablets only",
    "Explanation": "The media attribute specifies the type of media that should be used when importing the linked content",
    "Link": "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/"
  },
  {
    "Question": "What  makes up an element in HTML?",
    "Answer": "The opening tag, any attributes, text or other content  in between and lastly the closing tag",
    "Distractor1": "Just the closing tag",
    "Distractor2": "Just the closing tag and text content",
    "Distractor3": "Just the opening tag",
    "Explanation": "The terms elements and tags are used interchangeably. Tags consist of left and right angle brackets.( < and >) and often come in pairs, with an opening and closing one. Elements have an opening tag and a closing tag, attributes that go inside the starting tag and text content (and possibly other elements) in between the opening and closing tag. So,an element refers to the whole thing.",
    "Link": "https://www.freecodecamp.org/news/the-html-handbook/#html-basics"
  },
  {
    "Question": "How do you change the font-size of an h1 tag using inline CSS?",
    "Answer": "<h1 style=\"font-size: 4rem\">freeCodeCamp</h1>",
    "Distractor1": "<h1 css=\"font-size: 4rem\">freeCodeCamp</h1>",
    "Distractor2": "<h1 font=\"font-size: 4rem\">freeCodeCamp</h1>",
    "Distractor3": "<h1 fontSize=\"font-size: 4rem\">freeCodeCamp</h1>",
    "Explanation": "To change the font size of an HTML tag, you can use the style attribute and the font-size property",
    "Link": "https://www.freecodecamp.org/news/html-font-style-how-to-change-text-color-and-size-with-an-html-tag/"
  },
  {
    "Question": "What is a character entity?",
    "Answer": "used to display reserved HTML characters on the page",
    "Distractor1": "used to change the color for HTML characters",
    "Distractor2": "used to change the font for HTML characters",
    "Distractor3": "used to change the width of HTML characters",
    "Explanation": "Character entities allow you to display reserved HTML characters in your document.",
    "Link": "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/"
  },
  {
    "Question": "What is the character entity of the less than symbol in HTML?",
    "Answer": "&lt;",
    "Distractor1": "&lessthan;",
    "Distractor2": "&less;",
    "Distractor3": "&lthan;",
    "Explanation": "You can use the &lt; to display a less than symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/"
  },
  {
    "Question": "What is the character entity of the greater than symbol in HTML?",
    "Answer": "&gt;",
    "Distractor1": "&greaterthan;",
    "Distractor2": "&greater;",
    "Distractor3": "&gthan;",
    "Explanation": "You can use the &gt; entity to display a greater than symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/"
  },
  {
    "Question": "How do you add a non-breaking space in HTML?",
    "Answer": "&nbsp;",
    "Distractor1": "&breakingspace;",
    "Distractor2": "&nonbreaking;",
    "Distractor3": "&n-b-s-p;",
    "Explanation": "You can use the &nbsp; entity to display the non-breaking space in HTML",
    "Link": "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/"
  },
  {
    "Question": "How do you add two non-breaking spaces in HTML?",
    "Answer": "&ensp;",
    "Distractor1": "&twospaces;",
    "Distractor2": "&e-n-s-p;",
    "Distractor3": "&enspaces;",
    "Explanation": "You can use the &ensp; entity to display two non-breaking spaces in HTML",
    "Link": "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/"
  },
  {
    "Question": "How do you add four non-breaking spaces in HTML?",
    "Answer": "&emsp;",
    "Distractor1": "&fourspaces;",
    "Distractor2": "&e-m-s-p;",
    "Distractor3": "&emspaces;",
    "Explanation": "You can use the &emsp; entity to display four non-breaking spaces in HTML",
    "Link": "https://www.freecodecamp.org/news/html-space-how-to-add-a-non-breaking-space-with-the-nbsp-character-entity/"
  },
  {
    "Question": "What is an HTML 5 boilerplate?",
    "Answer": "block of code you use as a starter template for any HTML document",
    "Distractor1": "a block on code that groups images",
    "Distractor2": "a block on code that groups links",
    "Distractor3": "a block of code that groups forms",
    "Explanation": "An HTML 5 boilerplate, is a block of code you use as a starter template for any HTML document",
    "Link": "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/"
  },
  {
    "Question": "What is the viewport meta tag in HTML?",
    "Answer": "renders the width of the page to the width of the device's screen size.",
    "Distractor1": "sets the viewport for phones only",
    "Distractor2": "sets the viewport for laptops only",
    "Distractor3": "sets the viewport for 4k monitors",
    "Explanation": "This tag renders the width of the page to the width of the device's screen size.",
    "Link": "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/"
  },
  {
    "Question": "What does X-UA-Compatible mean?",
    "Answer": "specifies the document mode for Internet Explorer.",
    "Distractor1": "specifies the document mode for Google chrome",
    "Distractor2": "specifies the document mode for Safari",
    "Distractor3": "specifies the document mode for Brave",
    "Explanation": "This <meta> tag specifies the document mode for Internet Explorer.",
    "Link": "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/"
  },
  {
    "Question": "What are script tags in HTML?",
    "Answer": "used for client side JavaScript code",
    "Distractor1": "used for server side JavaScript code",
    "Distractor2": "used to link SQL databases",
    "Distractor3": "used to link noSQL databases",
    "Explanation": "The script tag is used for client side JavaScript code.",
    "Link": "https://www.freecodecamp.org/news/basic-html5-template-boilerplate-code-example/"
  },
  {
    "Question": "What does the <u> tag stand for?",
    "Answer": "Unarticulated Annotation element",
    "Distractor1": "Unarticulated Anchor element",
    "Distractor2": "Unarticulated Aside element",
    "Distractor3": "Unarticulated Article element",
    "Explanation": "The <u> tag stands for Unarticulated Annotation element",
    "Link": "https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/"
  },
  {
    "Question": "What is the default styling for the <u> tag?",
    "Answer": "single underline",
    "Distractor1": "line through",
    "Distractor2": "line above the text",
    "Distractor3": "no line at all",
    "Explanation": "The default styling for the u tag is a single underline",
    "Link": "https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/"
  },
  {
    "Question": "What is a common use for the <u> tag?",
    "Answer": "to point out misspelled words",
    "Distractor1": "to change the color for text",
    "Distractor2": "to create an unordered list",
    "Distractor3": "to highlight a portion of text",
    "Explanation": "A common use for the u tag is to point out misspelled words",
    "Link": "https://www.freecodecamp.org/news/html-underline-text-how-to-use-the-u-tag-with-example-code/"
  },
  {
    "Question": "What is the name of the attribute that allows you to set an element's tab position?",
    "Answer": "tabindex",
    "Distractor1": "style",
    "Distractor2": "hover",
    "Distractor3": "name",
    "Explanation": "You can use the tabindex attribute to set an element's tab position",
    "Link": "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/"
  },
  {
    "Question": "What is the default value for the tabindex attribute?",
    "Answer": "0",
    "Distractor1": "12",
    "Distractor2": "14",
    "Distractor3": "7",
    "Explanation": "The default value for the tabindex attribute is 0",
    "Link": "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/"
  },
  {
    "Question": "What is the range of values for the tabindex attribute?",
    "Answer": "0 to 32767",
    "Distractor1": "-9 to 30",
    "Distractor2": "0 to 578",
    "Distractor3": "-20 to 3000",
    "Explanation": "The tabindex attribute accepts a range of integers from 0 to 32767",
    "Link": "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/"
  },
  {
    "Question": "What does the <i> tag stand for?",
    "Answer": "Idiomatic Text element",
    "Distractor1": "Inline Text element",
    "Distractor2": "Intent Text element",
    "Distractor3": "Inline Table element",
    "Explanation": "The <i> tag stands for Idiomatic Text element.",
    "Link": "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/"
  },
  {
    "Question": "What is the semantic meaning behind the <i> tag?",
    "Answer": "span of text that represents a change in mood or quality of text",
    "Distractor1": "block on text used to highlight misspelled words",
    "Distractor2": "span of text used to signal high importance",
    "Distractor3": "block of text used to represent the main content of the HTML page",
    "Explanation": "The <i> tag is a span of text that represents a change in mood or quality of text",
    "Link": "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/"
  },
  {
    "Question": "Which description is NOT an appropriate use for the <i> tag?",
    "Answer": "used to place emphasis on a word or span of text",
    "Distractor1": "taxonomic descriptions",
    "Distractor2": "to show someone's thoughts",
    "Distractor3": "to mark phrases in a different language",
    "Explanation": "The <i> tag can be used to mark phrases in a different language, show someone's thoughts, or for taxonomic descriptions",
    "Link": "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/"
  },
  {
    "Question": "What is the name of the tag that adds emphasis on a word or span of text.?",
    "Answer": "<em>",
    "Distractor1": "<p>",
    "Distractor2": "<i>",
    "Distractor3": "<hr>",
    "Explanation": "The <em> tag is used to add emphasis on a word or span of text in HTML",
    "Link": "https://www.freecodecamp.org/news/html-italics-tutorial-how-to-make-text-italic-with-the-i-tag/"
  },
  {
    "Question": "What is the HTML character entity for double quotes?",
    "Answer": "&quot;",
    "Distractor1": "&quotes;",
    "Distractor2": "&doublequot;",
    "Distractor3": "&dquot;",
    "Explanation": "The &quot; character entity is used to display quotes in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the ampersand sign?",
    "Answer": "&amp;",
    "Distractor1": "&amper;",
    "Distractor2": "&and;",
    "Distractor3": "&ampsand;",
    "Explanation": "The &amp; character entity is used to dispaly the ampersand sign in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the Euro sign?",
    "Answer": "&euro;",
    "Distractor1": "&esign;",
    "Distractor2": "&eurosign;",
    "Distractor3": "&eu;",
    "Explanation": "The &euro; character entity is used to display the Euro sign in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the left single quote symbol?",
    "Answer": "&lsquo;",
    "Distractor1": "&rsquo;",
    "Distractor2": "&leftquo;",
    "Distractor3": "&lsquotes;",
    "Explanation": "The &lsquo; character entity is used to display the left single quote symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the right single quote symbol?",
    "Answer": "&rsquo;",
    "Distractor1": "&lsquo;",
    "Distractor2": "&rightquo;",
    "Distractor3": "&rsquote;",
    "Explanation": "The &rsquo; character entity is used to display the right single quote symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the left double quote symbol?",
    "Answer": "&ldquo;",
    "Distractor1": "&leftdouble;",
    "Distractor2": "&ldquotes;",
    "Distractor3": "&ldoublequo;",
    "Explanation": "The &ldquo; character entity is used to display the left double quote symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the right double quote symbol?",
    "Answer": "&rdquo;",
    "Distractor1": "&rdquotes;",
    "Distractor2": "&rightdquo;",
    "Distractor3": "&rdoublequo;",
    "Explanation": "The &rdquo; character entity is used to display the right double quote symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the trademark symbol?",
    "Answer": "&trade;",
    "Distractor1": "&trademark;",
    "Distractor2": "&tmark;",
    "Distractor3": "&trademk;",
    "Explanation": "The &trade; character entity is used to display the trademark symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the copyright symbol?",
    "Answer": "&copy;",
    "Distractor1": "&copyright;",
    "Distractor2": "&cright;",
    "Distractor3": "&copyr;",
    "Explanation": "The &copy; character entity is used to display the copyright symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the HTML character entity for the degree symbol?",
    "Answer": "&deg;",
    "Distractor1": "&degree;",
    "Distractor2": "&d;",
    "Distractor3": "&dg;",
    "Explanation": "The &deg; character entity is used to display the degree symbol in HTML",
    "Link": "https://www.freecodecamp.org/news/ascii-table-hex-to-ascii-value-character-code-chart-2/"
  },
  {
    "Question": "What is the address tag in HTML?",
    "Answer": "a section to place address information",
    "Distractor1": "a place for links",
    "Distractor2": "a place for images",
    "Distractor3": "a place for table data",
    "Explanation": "The address tag is used as a section to place address information",
    "Link": "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    "Question": "What is the blockquote tag in HTML?",
    "Answer": "a block of text that represents a quote",
    "Distractor1": "a generic block container to hold other elements",
    "Distractor2": "a generic inline element",
    "Distractor3": "a caption for a figure element",
    "Explanation": "The blockquote is a block of text that represents a quote",
    "Link": "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    "Question": "What is the figcaption tag in HTML?",
    "Answer": "a text description for the content inside the figure element",
    "Distractor1": "a caption for the table element",
    "Distractor2": "a caption for the form element",
    "Distractor3": "a caption for the div element",
    "Explanation": "The figcaption is a text description for the content inside the figure element",
    "Link": "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    "Question": "What is the small tag in HTML?",
    "Answer": "a tag used to represent small text for side comments or copyright information",
    "Distractor1": "small text for div elements only",
    "Distractor2": "small text for img tags only",
    "Distractor3": "small text for h1 tags only",
    "Explanation": "The small tag is used to represent small text for side comments or copyright information",
    "Link": "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    "Question": "What is the time tag in HTML?",
    "Answer": "a tag used to represent the time and/or date",
    "Distractor1": "used to convert minutes to seconds",
    "Distractor2": "used to convert seconds to milliseconds",
    "Distractor3": "used to convert hours to minutes",
    "Explanation": "The time tag is used to represent the time and/or date",
    "Link": "https://www.freecodecamp.org/news/semantic-html5-elements/"
  },
  {
    "Question": "Which HTML tag is used to create an image?",
    "Answer": "<img>",
    "Distractor1": "<image>",
    "Distractor2": "<i>",
    "Distractor3": "<hr>",
    "Explanation": "The <img> tag is used to add images to a website",
    "Link": "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    "Question": "Which one of these attributes does NOT work with the img tag?",
    "Answer": "capture",
    "Distractor1": "src",
    "Distractor2": "alt",
    "Distractor3": "height",
    "Explanation": "The img tag can use a variety of attributes including src, alt, width, and height",
    "Link": "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    "Question": "What does the src attribute do in the img tag?",
    "Answer": "represents the source for the image",
    "Distractor1": "provides descriptive text for the image",
    "Distractor2": "provides the height of the image",
    "Distractor3": "provides the width of the image",
    "Explanation": "The src attribute represents  the source for the image so the browser knows where to locate it",
    "Link": "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    "Question": "What does the alt attribute do in the img tag?",
    "Answer": "it provides a description of the image",
    "Distractor1": "it provides the time when the image was taken",
    "Distractor2": "it provides the source for the image",
    "Distractor3": "it provides the dimensions for an image",
    "Explanation": "The alt attribute provides a description of the image",
    "Link": "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    "Question": "What does the title attribute do in the img tag?",
    "Answer": "it provides additional information about the image",
    "Distractor1": "it creates a title above the img tag",
    "Distractor2": "it creates a title below the img tag",
    "Distractor3": "it creates a title to the left of the img tag",
    "Explanation": "The title attribute can be used to provide additional information about the image",
    "Link": "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    "Question": "Which one is NOT a supported format for the img tag?",
    "Answer": "txt",
    "Distractor1": "png",
    "Distractor2": "WebP",
    "Distractor3": "jpeg",
    "Explanation": "The img tag can support many formats including WebP, JPEG and PNG",
    "Link": "https://www.freecodecamp.org/news/img-html-image-tag-tutorial/"
  },
  {
    "Question": "What is the pre tag in HTML?",
    "Answer": "a tag used for preformatted sections of text",
    "Distractor1": "small text for h1 tags only",
    "Distractor2": "a generic block container to hold other elements",
    "Distractor3": "a caption for the form element",
    "Explanation": "The pre tag is used to display preformatted sections of text",
    "Link": "https://www.freecodecamp.org/news/pre-tag-in-html-example-code/"
  },
  {
    "Question": "Which HTML tag supports mailto links?",
    "Answer": "anchor tag",
    "Distractor1": "paragraph tag",
    "Distractor2": "script tag",
    "Distractor3": "img tag",
    "Explanation": "You can create a mailto link in the href value for an anchor tag",
    "Link": "https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/"
  },
  {
    "Question": "What property should you add to <input> to create a checkbox?",
    "Answer": "type=\"checkbox\"",
    "Distractor1": "type=\"radio\"",
    "Distractor2": "type=\"check\"",
    "Distractor3": "type=\"button\"",
    "Explanation": "To create a checkbox, you must add type=\"checkbox\" to the <input> tag.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"
  },
  {
    "Question": "What tag would you use to create a level 1 section heading? ",
    "Answer": "<h1>",
    "Distractor1": "<t1>",
    "Distractor2": "<1h>",
    "Distractor3": "<1H>",
    "Explanation": "You can use the <h1> tag to create a level 1 section heading in HTML.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    "Question": "What property should you add to <input> to create a radio button?",
    "Answer": "type=\"radio\"",
    "Distractor1": "type=\"checkbox\"",
    "Distractor2": "type=\"check\"",
    "Distractor3": "type=\"button\"",
    "Explanation": "To create a radio button, you must add type=\"radio\" to the <input> tag.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"
  },
  {
    "Question": "What is the main purpose of HTML in a website?",
    "Answer": "Structure",
    "Distractor1": "Style",
    "Distractor2": "Functionality",
    "Distractor3": "Sound",
    "Explanation": "HTML defines the structure of the website. ",
    "Link": "https://www.freecodecamp.org/news/html-crash-course/"
  },
  {
    "Question": "What HTML is used to represent the dominant content of a website?",
    "Answer": "<main>",
    "Distractor1": "<dom>",
    "Distractor2": "<content>",
    "Distractor3": "<con>",
    "Explanation": "The <main> tag is used in HTML to represent the dominant content of a website.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"
  },
  {
    "Question": "What HTML tag is used to create an ordered list?",
    "Answer": "<ol>",
    "Distractor1": "<ul>",
    "Distractor2": "<img>",
    "Distractor3": "<dl>",
    "Explanation": "The <ol> tag is used to create an ordered list in HTML.",
    "Link": "https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/"
  },
  {
    "Question": "What HTML tag is used to create a description list?",
    "Answer": "<dl>",
    "Distractor1": "<del>",
    "Distractor2": "<des>",
    "Distractor3": "<d>",
    "Explanation": "The <dl> tag is used to create a description list in HTML.",
    "Link": "https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/"
  },
  {
    "Question": "It is recommended to write HTML tags in...",
    "Answer": "Lowercase",
    "Distractor1": "Uppercase",
    "Distractor2": "camelCase",
    "Distractor3": "snake_case",
    "Explanation": "It is recommended to write HTML tags in lowercase.",
    "Link": "https://www.freecodecamp.org/news/the-html-handbook/"
  },
  {
    "Question": "What HTML tag is used to represent a set of navigation links?",
    "Answer": "<nav>",
    "Distractor1": "<navigation>",
    "Distractor2": "<link>",
    "Distractor3": "<navig>",
    "Explanation": "The <nav> tag is used to represent the main navigation functionality of a webpage.",
    "Link": "https://www.freecodecamp.org/news/how-to-build-a-navigation-bar/"
  },
  {
    "Question": "What HTML tag represents a line break element?",
    "Answer": "<br>",
    "Distractor1": "<hr>",
    "Distractor2": "<break>",
    "Distractor3": "<line>",
    "Explanation": "The <br> tag is used to represent a line break element.",
    "Link": "https://www.freecodecamp.org/news/html-line-break-how-to-break-a-line-with-the-html-br-tag/"
  },
  {
    "Question": "What HTML tag represents a thematic break (horizontal line) element?",
    "Answer": "<hr>",
    "Distractor1": "<br>",
    "Distractor2": "<line>",
    "Distractor3": "<hor>",
    "Explanation": "The <hr> tag is used to represent a thematic break (horizontal rule) element.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"
  },
  {
    "Question": "What HTML tag is used to make text bold and mark it as important text?",
    "Answer": "<strong>",
    "Distractor1": "<b>",
    "Distractor2": "<em>",
    "Distractor3": "<bold>",
    "Explanation": "The <strong> tag is used to make text bold and to indicate that the text is important.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"
  },
  {
    "Question": "What HTML tag is used to make text italic without emphasis on its content?",
    "Answer": "<i>",
    "Distractor1": "<em>",
    "Distractor2": "<b>",
    "Distractor3": "<italic>",
    "Explanation": "The <i> tag is used to make text italic without adding extra emphasis. It is commonly used for text that is set off from normal prose, like foreign words or thoughts. ",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em#i_vs._em"
  },
  {
    "Question": "What HTML tag is used to make text italic with emphasis on its content?",
    "Answer": "<em>",
    "Distractor1": "<i>",
    "Distractor2": "<b>",
    "Distractor3": "<italic>",
    "Explanation": "The <em> tag is used to make text italic with extra emphasis on its content.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"
  },
  {
    "Question": "What HTML tag is used to make inline text be displayed as superscript?",
    "Answer": "<sup>",
    "Distractor1": "<super>",
    "Distractor2": "<sub>",
    "Distractor3": "<s>",
    "Explanation": "The <sup> tag displays inline text as superscript.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup"
  },
  {
    "Question": "What HTML tag is used to make inline text be displayed as subscript?",
    "Answer": "<sub>",
    "Distractor1": "<subs>",
    "Distractor2": "<s>",
    "Distractor3": "<sup>",
    "Explanation": "The <sub> tag displays inline text as subscript.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub"
  },
  {
    "Question": "What HTML tag is used to represent an abbreviation or acronym?",
    "Answer": "<abbr>",
    "Distractor1": "<abr>",
    "Distractor2": "<abbreviation>",
    "Distractor3": "<acr>",
    "Explanation": "The <abbr> tag is used to represent abbreviations or acronyms in HTML.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"
  },
  {
    "Question": "What HTML tag is used to create a table?",
    "Answer": "<table>",
    "Distractor1": "<t>",
    "Distractor2": "<tbl>",
    "Distractor3": "<ta>",
    "Explanation": "The <table> tag is used to create a table in HTML.",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What HTML tag is used to create a row in a table?",
    "Answer": "<tr>",
    "Distractor1": "<trow>",
    "Distractor2": "<th>",
    "Distractor3": "<td>",
    "Explanation": "The <tr> tag is used to create a row in a table.",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What HTML tag is used to create a column (cell) in a table?",
    "Answer": "<td>",
    "Distractor1": "<table>",
    "Distractor2": "<tcol>",
    "Distractor3": "<col>",
    "Explanation": "The <td> tag is used to create a column (cell) in a table.",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What HTML tag is used to create a header in a table?",
    "Answer": "<th>",
    "Distractor1": "<header>",
    "Distractor2": "<theader>",
    "Distractor3": "<td>",
    "Explanation": "The <th> tag is used to create a header in a table.",
    "Link": "https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/"
  },
  {
    "Question": "What does DOM stand for?",
    "Answer": "Document Object Model",
    "Distractor1": "Direct Object Model",
    "Distractor2": "Document Objective Model",
    "Distractor3": "Documentary Object Mobile",
    "Explanation": "DOM stands for Document Object Model.",
    "Link": "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/#:~:text=DOM%20stands%20for%20Document%20Object,remove%20elements%20from%20the%20document."
  },
  {
    "Question": "What HTML tag is used to taget specific inline content such as text?",
    "Answer": "<span>",
    "Distractor1": "<div>",
    "Distractor2": "<s>",
    "Distractor3": "<i>",
    "Explanation": "The <span> tag is used to target specific inline content such as text. This is helpful when you want to style only certains parts of the text.",
    "Link": "https://www.freecodecamp.org/news/span-html-how-to-use-the-span-tag-with-css/"
  },
  {
    "Question": "What HTML tag is used to embed video?",
    "Answer": "<video>",
    "Distractor1": "<vid>",
    "Distractor2": "<v>",
    "Distractor3": "<player>",
    "Explanation": "The <video> tag is used to embed video in an HTML document.",
    "Link": "https://www.freecodecamp.org/news/html5-video/"
  },
  {
    "Question": "What attribute can you add to a <video> tag to add the browser's default video controls to the embedded video?",
    "Answer": "controls",
    "Distractor1": "control",
    "Distractor2": "c",
    "Distractor3": "basiccontrols",
    "Explanation": "The controls attribute adds the browser's basic video controls to the embedded video.",
    "Link": "https://www.freecodecamp.org/news/html5-video/"
  },
  {
    "Question": "What is metadata in an HTML file?",
    "Answer": "Information about the webpage that is not directly displayed.",
    "Distractor1": "Information about the users of the website",
    "Distractor2": "Information about the server that hosts the webpage.",
    "Distractor3": "Information about the version of CSS being used.",
    "Explanation": "Metadata is information about the webpage that is not directly displayed. This includes information about its title, scripts, stylesheets, and author information.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
  },
  {
    "Question": "What HTML tag is used to create a form?",
    "Answer": "<form>",
    "Distractor1": "<f>",
    "Distractor2": "<th>",
    "Distractor3": "<table>",
    "Explanation": "The <form> tag is used to create a form. ",
    "Link": "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/"
  },
  {
    "Question": "What attribute can you add to <input> to create an input field for a password?",
    "Answer": "type=\"password\"",
    "Distractor1": "type=\"pass\"",
    "Distractor2": "type=\"secret\"",
    "Distractor3": "type=\"hide\"",
    "Explanation": "The type=\"password\" attribute is used to create an input field for a password (the characters will be hidden).",
    "Link": "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/"
  },
  {
    "Question": "What attribute can you add to <input> to define a range of valid values for the user input?",
    "Answer": "type=\"range\"",
    "Distractor1": "type=\"r\"",
    "Distractor2": "type=\"maxmin\"",
    "Distractor3": "type=\"number\"",
    "Explanation": "The type=\"range\" attribute is used to create an input field that takes a numerical value within a certain range.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range"
  },
  {
    "Question": "What attribute can you add to <input> to create a checkbox?",
    "Answer": "type=\"checkbox\"",
    "Distractor1": "type=\"c\"",
    "Distractor2": "type=\"box\"",
    "Distractor3": "type=\"form\"",
    "Explanation": "The type=\"checkbox\" attribute is used to create a checkbox in HTML.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox"
  },
  {
    "Question": "What attribute can you add to <input> to create a submit button?",
    "Answer": "type=\"submit\"",
    "Distractor1": "type=\"send\"",
    "Distractor2": "type=\"end\"",
    "Distractor3": "type=\"receive\"",
    "Explanation": "The type=\"submit\" attribute is used to create a submit button in HTML.",
    "Link": "https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/"
  },
  {
    "Question": "What HTML attribute can you add to <input> to match a pattern with a regular expression?",
    "Answer": "pattern",
    "Distractor1": "regex",
    "Distractor2": "match",
    "Distractor3": "find",
    "Explanation": "The pattern attribute is used to check for a pattern in a text field. You can assign a regular expression to this attribute to define the pattern.",
    "Link": "https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/"
  },
  {
    "Question": "What HTML attribute should you add to set a maximum value for a numerical <input> field?",
    "Answer": "max",
    "Distractor1": "maximum",
    "Distractor2": "min",
    "Distractor3": "top",
    "Explanation": "The max attribute is used to set a maximum value allowed for user input in a numerical input field.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
  },
  {
    "Question": "What HTML attribute should you add to set a minimum value for a numerical <input> field?",
    "Answer": "min",
    "Distractor1": "minimum",
    "Distractor2": "max",
    "Distractor3": "bottom",
    "Explanation": "The min attribute is used to set a minimum value allowed for user input in a numerical input field.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
  },
  {
    "Question": "What HTML attribute is used to make an <input> field required?",
    "Answer": "required",
    "Distractor1": "mandatory",
    "Distractor2": "must",
    "Distractor3": "fixed",
    "Explanation": "The required attribute is used to make an <input> field required to submit a form.",
    "Link": "https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/"
  },
  {
    "Question": "What HTML tag is used to embed audio into a document?",
    "Answer": "<audio>",
    "Distractor1": "<video>",
    "Distractor2": "<sound>",
    "Distractor3": "<mp3>",
    "Explanation": "The <audio> tag is used to embed audio into a document. ",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
  },
  {
    "Question": "What HTML tag is used to represent a section quotes from another source?",
    "Answer": "<blockquote>",
    "Distractor1": "<quote>",
    "Distractor2": "<q>",
    "Distractor3": "<section>",
    "Explanation": "The <blockquote> tag is used to represent a section quotes from another source.",
    "Link": "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    "Question": "What HTML element is a generic container for other HTML elements?",
    "Answer": "<div>",
    "Distractor1": "<p>",
    "Distractor2": "<a>",
    "Distractor3": "<img>",
    "Explanation": "A div is the HTML element that serves as a generic container for other HTML elements.",
    "Link": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
  },
  {
    "Question": "How is the title attribute used in the abbr tag?",
    "Answer": "provides descriptive text for the abbr tag",
    "Distractor1": "provides links for the abbr tag",
    "Distractor2": "bolds the abbr tag",
    "Distractor3": "italicizes the abbr tag",
    "Explanation": "The title attribute provides descriptive text for the abbr tag",
    "Link": "https://devdocs.io/html/element/abbr"
  },
  {
    "Question": "What is the name of the HTML element that creates an area inside an image map?",
    "Answer": "<area>",
    "Distractor1": "<img>",
    "Distractor2": "<blink>",
    "Distractor3": "<bdo>",
    "Explanation": "The area tag is used inside the map tag and creates an area inside an image map with clickable areas",
    "Link": "https://devdocs.io/html/element/area"
  },
  {
    "Question": "What is the name of the HTML element that specifies the base URL for all relative URLs in the document?",
    "Answer": "<base>",
    "Distractor1": "<bdi>",
    "Distractor2": "<a>",
    "Distractor3": "<p>",
    "Explanation": "The base tag specifies the base URL for all relative URLs in the document",
    "Link": "https://devdocs.io/html/element/base"
  },
  {
    "Question": "What does the bdi HTML element stand for?",
    "Answer": "Bidirectional Isolate",
    "Distractor1": "Biodecision Isolate",
    "Distractor2": "BiometicDirection Image",
    "Distractor3": "Biodirectional Inline",
    "Explanation": "The bdi element stands for Bidirectional Isolate",
    "Link": "https://devdocs.io/html/element/bdi"
  },
  {
    "Question": "What does the bdo element do?",
    "Answer": "overrides the current direction and renders the text in a new direction",
    "Distractor1": "highlights the current text",
    "Distractor2": "deletes the current text",
    "Distractor3": "only renders the text from left to right",
    "Explanation": "The bdo element overrides the current direction and renders the text in a new direction",
    "Link": "https://devdocs.io/html/element/bdo"
  },
  {
    "Question": "What is the name of the element used to draw graphics on the page?",
    "Answer": "<canvas>",
    "Distractor1": "<bdo>",
    "Distractor2": "<table>",
    "Distractor3": "<big>",
    "Explanation": "The canvas element is used to draw graphics on the page",
    "Link": "https://devdocs.io/html/element/canvas"
  },
  {
    "Question": "What is the name of the element that connects content to a machine-readable translation?",
    "Answer": "<data>",
    "Distractor1": "<del>",
    "Distractor2": "<dd>",
    "Distractor3": "<dt>",
    "Explanation": "The data element is used to connect content to a machine-readable translation",
    "Link": "https://devdocs.io/html/element/data"
  },
  {
    "Question": "What does the HTML datalist element do?",
    "Answer": "provides a dropdown list of recommended options",
    "Distractor1": "list of image tags",
    "Distractor2": "list of tables",
    "Distractor3": "list of paragraphs",
    "Explanation": "The datalist element contains option tags and provides a dropdown list of recommended options",
    "Link": "https://devdocs.io/html/element/datalist"
  },
  {
    "Question": "What is the name of the HTML element to show that content was deleted from the document?",
    "Answer": "<del>",
    "Distractor1": "<figure>",
    "Distractor2": "<embed>",
    "Distractor3": "<em>",
    "Explanation": "The del tag is used to show that content was deleted from the document",
    "Link": "https://devdocs.io/html/element/del"
  },
  {
    "Question": "What does the details element do in HTML?",
    "Answer": "displays information when the element is toggled to the open state",
    "Distractor1": "renders text from right to left",
    "Distractor2": "overrides the current direction and renders the text in a new direction",
    "Distractor3": "provides descriptive text for the abbr tag",
    "Explanation": "The details tag displays information when the element is toggled to the open state",
    "Link": "https://devdocs.io/html/element/details"
  },
  {
    "Question": "What is the name of the HTML element used to create a dialog box?",
    "Answer": "<dialog>",
    "Distractor1": "<dialogging>",
    "Distractor2": "<dt>",
    "Distractor3": "<data>",
    "Explanation": "The dialog tag is used to create a dialog box",
    "Link": "https://devdocs.io/html/element/dialog"
  },
  {
    "Question": "What does the dl tag stand for in HTML?",
    "Answer": "Description List",
    "Distractor1": "Data List",
    "Distractor2": "Dialog List",
    "Distractor3": "Details List",
    "Explanation": "The dl tag stands for Description List and is commonly used in glossaries",
    "Link": "https://devdocs.io/html/element/dl"
  },
  {
    "Question": "What is the name of the HTML element that shows content added to the document?",
    "Answer": "<ins>",
    "Distractor1": "<map>",
    "Distractor2": "<mark>",
    "Distractor3": "<dd>",
    "Explanation": "The ins tag shows content added to the document",
    "Link": "https://devdocs.io/html/element/ins"
  }
];
export default questions;
