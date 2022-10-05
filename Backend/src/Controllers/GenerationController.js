const sendToken = require('../../utils/sendToken');
const User = require('../Models/UserModel');
const asyncHandler=require('../../middleware/catchAsyncError');
const error= require('../../utils/Errorhandling');
const cloudinary = require('cloudinary');
const path = require('path');
const crypto = require("crypto");
const fs=require('fs');
const reader = require('xlsx');
const generator = require('generate-password');
const QRCode = require('qrcode');


// take data from excel file
function  extractDataFromExcel(fileName){
    let data = [];

    //for reading the file
    const file = reader.readFile(path.join(__dirname,'..','..','Data',`${fileName}`));
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[0]])
    temp.forEach((res) => {
      data.push(res)
    });

   fs.unlinkSync(path.join(__dirname,'..','..','Data',`${fileName}`));

   return data;
};


// for generating QR for verification
const generateQR = (prop,link,password)=>{
    return new Promise((resolve,reject)=>{
        QRCode.toDataURL(link, async function (err, url) {
            // upload QR on cloudinary
            const mycloud=await cloudinary.v2.uploader.upload(url,{
                folder:"CertificateQR",
                width:"150",
                crop:"scale"
            });
            prop.CID=password;
            prop.QR=mycloud.secure_url
            resolve();
        });
    });
};


// generating Data for each Certificate from excel and making unique CID
const generateData=asyncHandler(async(req,res,next)=>{

    // for uploading file in system
        const fileName = Date.now()+""+req.files.file.name;
        const file = req.files.file;
        const uploadFile = path.join(__dirname,'..','..','Data',`${fileName}`);

        file.mv(uploadFile,(err)=>{
            if(err){
                return next(new error(400,err.message));
            };
        });
      
    // Sending Data
        setTimeout( async ()=>{
            let certData= extractDataFromExcel(fileName);
            let length = certData.length;

             for(let prop of certData){
                var password = generator.generate({
                    length: 10,
                    numbers:true,
                    exclude:'`)({}[];:<>,.?/~-+=_|\\"',
                    symbols:true
                });
                let link = `http://localhost:4000/v1/verify/:${password}`;
                await generateQR(prop,link,password);            
             };
            
            res.status(200).send({
                    certData,
            });  
        },[200]);   
});





// const generateIDAndQR = (certData)=>{
//   return new Promise((resolve,reject)=>{
//     var password = generator.generate({
//         length: 10,
//         numbers:true,
//         exclude:'`)({}[];:<>,.?/~-+=_|\\"',
//         symbols:true
//     });
    
//     let link = `http://localhost:4000/v1/verify/:${password}`;

//     QRCode.toDataURL(link, async function (err, url) {

//         const mycloud=await cloudinary.v2.uploader.upload(url,{
//             folder:"Avatars",
//             width:"150",
//             crop:"scale"
//         });
//         res.status(200).send({
//             password,
//             qr:mycloud.secure_url
//         });
//     });
//   });
// };

const uploadCertificate = asyncHandler(async(req,res,next)=>{
      
});



module.exports={generateData, uploadCertificate}
