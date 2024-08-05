import AWS from 'aws-sdk'

import dotenv from 'dotenv';
dotenv.config();

import NodeGeocoder from 'node-geocoder';
export const DATABASE= process.env.DATABASE_URL;


export const AWS_ACCESS_KEY_ID=process.env.AWS_ACCESS_KEY_ID;

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


export const JWT_SECRET=process.env.JWT_SECRET;
export const CLIENT_URL="http://localhost:3000";