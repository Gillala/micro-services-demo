# Proof of Concept
Written a proof of concept Web API Method using Nodejs Hapi Framework.
 
###### API URL : http://localhost:3000/pdf 

# Introduction
The rational of this project is to design API structures and write a method to generate PDF document, which should look like A4 Letter head with multiple pages along with header and logo information

# Technologies Used
I have used HapiJs, NodeJs, Pdfmake to write the Web API for Generating the Quotation PDF Document
# Solution Structure
The Project is Self Explanotory, there are two routes,
1) Basic Route with Get
2) Route  with httpget, which will generate pdf file(random name), the route will look like: http://localhost:3000/pdf. This is get route. For time being it will generate pdf with some dummy data and this data can be parametrized.

# How to run this project
1) Clone it form the Git URL 
2) npm i or sudo npm i.
3) node index.js or npm run start

Once the Service is running it looks as below.
![runningsolution](https://user-images.githubusercontent.com/2565141/87624992-fadeae80-c720-11ea-8b57-2dfb35302e1e.JPG)

File Generated Location in the Solution:
![filegenerated](https://user-images.githubusercontent.com/2565141/87624987-f9ad8180-c720-11ea-8483-a78d395c5691.JPG)

File Generated with Route:
![pdfquotationgeneration](https://user-images.githubusercontent.com/2565141/87624991-fa461800-c720-11ea-81f3-9ae4ab1e208f.JPG)

Content Of PDF File Screenshot:
![PDFFileContent](https://user-images.githubusercontent.com/2565141/87624989-fa461800-c720-11ea-838b-7839fad887af.JPG)

## Test








