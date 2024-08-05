import AWS from 'aws-sdk'
import dotenv from 'dotenv';
dotenv.config();

import NodeGeocoder from 'node-geocoder';
export const DATABASE="mongodb+srv://adityadev43:4kWO9wmvA1RUcyq4@mernaws-webapp1.3bxnj8h.mongodb.net/?retryWrites=true&w=majority&appName=mernaws-webapp1";

// export const AWS_ACCESS_KEY_ID= "AKIAV6PDTFUCQBHKA7WF";
//export const AWS_ACCESS_KEY_ID="AKIAQKPIL2CNS33QPWIJ";
export const AWS_ACCESS_KEY_ID=process.env.AWS_ACCESS_KEY_ID;
//export const AWS_SECRET_ACCESS_KEY_ID="mIZStev5kVHzeC1EZOu+jqmbilvz6ikDQZYoH2e/";
//export const AWS_SECRET_ACCESS_KEY_ID="cTfHq8hIagYSQQ9V0hNQ02eorVf6rlzwxUxupvlN";
export const AWS_SECRET_ACCESS_KEY_ID=process.env.AWS_SECRET_ACCESS_KEY_ID;

export const EMAIL_FROM='aditya.dev746@gmail.com';

const awsConfig={
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey:AWS_SECRET_ACCESS_KEY_ID,
    region:"us-east-1",
    apiVersion: "2010-12-01"
}
AWS.config.update(awsConfig);
export const AWSSES = new AWS.SES();
export const AWSS3= new AWS.S3();
//export const AWSSES=new SES(awsConfig);

const options = {
  provider: 'google',

  // Optional depending on the providers
  
  apiKey: process.env.GOOGLE_PLACES_KEY, // for Mapquest, OpenCage, APlace, Google Premier
  formatter: null // 'gpx', 'string', ...
};

export const GOOGLE_GEOCODER = NodeGeocoder(options);

//export const JWT_SECRET="WEIBIWEBVV3311ENCNWJNECJNWCNWC3131113DWCN";
export const JWT_SECRET=process.env.JWT_SECRET;
export const CLIENT_URL="http://localhost:3000";