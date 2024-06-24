// // Do you want to install the recommended 'vscode-pdf'
// //  extension from tomoki1207 for Resume.Cv.pdf?

// // maybe is ki extension install hoti ho pdf ki 


const download_button = document.getElementById('download_Btn');
const content = document.getElementById('area-cv');

download_button.addEventListener
('click', async function () {
    const filename = 'resume.pdf';

    try {
        const opt = {
            margin: 1,
            filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: 'in', format: 'letter',
                orientation: 'portrait'
            }
        };
        await html2pdf().set(opt).
            from(content).save();
    } catch (error) {
        console.error('Error:', error.message);
    }
});


// image par bh download ho raha ha lakin pdf me image nh arahi ha or font sizebh bhot micro ho gya ha is ki coding ye ha 

// <!-- ---- -->
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Download PDF on Button Click</title>
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>
//     <h1>
//         How to Download PDF File on Button
//         Click using JavaScript
//     </h1>
//     <p>
//         You can add your content here...
//     </p>
//     <div id="content">
//         <table>
//             <thead>
//                 <tr>
//                     <th bgcolor="green">Name</th>
//                     <th bgcolor="brown">Age</th>
//                     <th bgcolor="olive">Country</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Employee 1</td>
//                     <td>30</td>
//                     <td>USA</td>
//                 </tr>
//                 <tr>
//                     <td>Employee 2</td>
//                     <td>25</td>
//                     <td>Canada</td>
//                 </tr>
//                 <tr>
//                     <td>Employee 3</td>
//                     <td>21</td>
//                     <td>Canada</td>
//                 </tr>
//                 <tr>
//                     <td bgcolor="gray">Employee 4</td>
//                     <td>22</td>
//                     <td>India</td>
//                 </tr>
//             </tbody>
//         </table>
//         <img src="loading-4.gif" alt="Loading Image" id="loadingImage">
//     </div>
//     <button id="download_Btn">
//         Download Table Data
//     </button>

//     <!-- Include html2canvas and jsPDF libraries -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>

//     <script>
//         document.getElementById('download_Btn').addEventListener('click', function () {
//             const content = document.getElementById('content');

//             // Ensure images are fully loaded before converting to canvas
//             const image = document.getElementById('loadingImage');
//             if (!image.complete) {
//                 image.onload = function () {
//                     generatePDF(content);
//                 };
//                 image.onerror = function () {
//                     console.error('Error loading image');
//                 };
//             } else {
//                 generatePDF(content);
//             }
//         });

//         function generatePDF(content) {
//             html2canvas(content, {
//                 useCORS: true,
//                 onrendered: function (canvas) {
//                     const imgData = canvas.toDataURL('image/png');
//                     const pdf = new jsPDF('p', 'pt', 'letter');
//                     const imgWidth = 500;
//                     const pageHeight = 780;
//                     const imgHeight = canvas.height * imgWidth / canvas.width;
//                     let heightLeft = imgHeight;
//                     let position = 0;

//                     pdf.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
//                     heightLeft -= pageHeight;

//                     while (heightLeft >= 0) {
//                         position = heightLeft - imgHeight;
//                         pdf.addPage();
//                         pdf.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
//                         heightLeft -= pageHeight;
//                     }

//                     pdf.save('table_data.pdf');
//                 },
//                 // Optional: handle errors
//                 onerror: function (error) {
//                     console.error('Error:', error.message);
//                 }
//             });
//         }
//     </script>
// </body>

// </html>
















// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// how to download image pc in javacsript code 




// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" 
//           content="width=device-width, initial-scale=1.0" />
//     <title>Download Image</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             margin: 0;
//             background-color: #f4f4f4;
//         }

//         #downloadBtn {
//             padding: 10px 20px;
//             font-size: 16px;
//             background-color: #007bff;
//             color: #fff;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             transition: background-color 0.3s;
//         }

//         #downloadBtn:hover {
//             background-color: #0056b3;
//         }
//     </style>
// </head>

// <body>
//     <button id="downloadBtn">Download Image</button>

//     <script>
//         document
//             .getElementById('downloadBtn')
//             .addEventListener('click', function () 
//             {
//                 const proxyUrl = 
//                     'https://cors-anywhere.herokuapp.com/'
//                 const targetUrl =
// 'https://media.geeksforgeeks.org/wp-content/uploads/20240426035114/79dd11a9452a92a1accceec38a45e16a.jpg'

//                 fetch(proxyUrl + targetUrl)
//                     .then((response) => 
//                     {
//                         console.log('Response:', response)
//                         return response.blob()
//                     })
//                     .then((blob) =>
//                     {
//                         console.log('Blob:', blob)
//                         const url = URL
                        
//                         .createObjectURL(blob)

//                         const link = document
//                         .createElement('a')
//                         link
//                         .href = url
//                         link
//                         .download = 'img.jpg'
//                          // The name for the downloaded file
//                         document
//                         .body
//                         .appendChild(link)
//                         link
//                         .click()
//                         document
//                         .body
//                         .removeChild(link)

//                         URL.revokeObjectURL(url)
//                     })
//                     .catch(console.error)
//             })
//     </script>
// </body>

// </html>