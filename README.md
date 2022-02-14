Please run the following commands in the terminal in order for the program to run properly:

npm install @mui/icons-material

npm install @mui/material @emotion/react @emotion/styled

npm install axios

Google Books API Field Documentation:

https://www.googleapis.com/books/v1/volumes?q={{{atomic}}}+inauthor:{{{clear}}}&printType={{{books}}}&projection=lite&key=AIzaSyDQgG9PY_tH65Mss-EP1a8M_YQNZqORmys

* q= "search text for title"
* +inauthor= "search text for author name"
* &printType= "books" or "magazines


{
  <!-- "kind": "books#volumes", -->
  "totalItems": 53,
  "items": [
    {
      "kind": "books#volume",
      "id": "XfFvDwAAQBAJ",
      "etag": "d3yA4KQEh74",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ",
      "volumeInfo": {
        "title": "Atomic Habits",
        "subtitle": "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        "authors": [
          "James Clear"
        ],
        "publisher": "Penguin",
        "publishedDate": "2018-10-16",
        "description": "The #1 New York Times bestseller. Over 3 million copies sold! Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights. Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field. Learn how to: • make time for new habits (even when life gets crazy); • overcome a lack of motivation and willpower; • design your environment to make success easier; • get back on track when you fall off course; ...and much more. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
        <!-- "readingModes": {
          "text": false,
          "image": false
        }, -->
        "maturityRating": "NOT_MATURE",
        <!-- "allowAnonLogging": false, -->
        <!-- "contentVersion": "0.9.0.0.preview.0", -->
        <!-- "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        }, -->
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.com/books?id=XfFvDwAAQBAJ&printsec=frontcover&dq=atomic+inauthor:clear&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=XfFvDwAAQBAJ&dq=atomic+inauthor:clear&hl=&as_pt=BOOKS&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Atomic_Habits.html?hl=&id=XfFvDwAAQBAJ"
      },
      <!-- "saleInfo": {
        "country": "US"
      },
      "accessInfo": {
        "country": "US",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "accessViewStatus": "SAMPLE"
      }, -->
      "searchInfo": {
        "textSnippet": "Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an ..."
      }
    },