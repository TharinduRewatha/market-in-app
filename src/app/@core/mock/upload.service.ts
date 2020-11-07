import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import * as AWS from 'aws-sdk/global';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  // Add New product image to s3 bucket 
  newProductImage(file , newProductImage) {
    const contentType = file.type;

    const BUCKET_REIGON = 'ap-southeast-1';

    const bucket = new S3(
      {
        accessKeyId: 'AKIAI6NFX2ZLAZHOGRNQ',
        secretAccessKey: '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',
        region: BUCKET_REIGON,

      }
    );


    const BUCKET_NAME = 'ws-item';


    const params = {
      Bucket: BUCKET_NAME,
      Key: newProductImage + '.jpg',
      bucketRegion: BUCKET_REIGON,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType

    };

    bucket.upload(params, function (err, data) {
      if (err) {
        throw err;
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }


  //add new Brand Image to s3 Bucket 
  newBrandImage(file , BrandName) {
    const contentType = file.type;
    const brandName = BrandName;

    const BUCKET_REIGON = 'ap-southeast-1';

    const bucket = new S3(
      {
        accessKeyId: 'AKIAI6NFX2ZLAZHOGRNQ',
        secretAccessKey: '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',
        region: BUCKET_REIGON,

      }
    );


    const BUCKET_NAME = 'ws-brand';


    const params = {
      Bucket: BUCKET_NAME,
      Key: brandName + '.jpg',
      bucketRegion: BUCKET_REIGON,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType

    };

    bucket.upload(params, function (err, data) {
      if (err) {
        throw err;
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('File Uploaded.');
      return true;
    });
  }

  //Edit product image upload
  editProductImageUpload(file , newProductImageEdit) {
    const contentType = file.type;

    const BUCKET_REIGON = 'ap-southeast-1';

    const bucket = new S3(
      {
        accessKeyId: 'AKIAI6NFX2ZLAZHOGRNQ',
        secretAccessKey: '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',
        region: BUCKET_REIGON,

      }
    );


    const BUCKET_NAME = 'ws-item';


    const params = {
      Bucket: BUCKET_NAME,
      Key: newProductImageEdit + '.jpg',
      bucketRegion: BUCKET_REIGON,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType

    };

    bucket.upload(params, function (err, data) {
      if (err) {
        throw err;
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }

  //Edit Brand Image Upload
  editBrandImageUpload(file,EditBrandName ) {
    const contentType = file.type;

    const BUCKET_REIGON = 'ap-southeast-1';

    const bucket = new S3(
      {
        accessKeyId: 'AKIAI6NFX2ZLAZHOGRNQ',
        secretAccessKey: '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',
        region: BUCKET_REIGON,

      }
    );


    const BUCKET_NAME = 'ws-brand';


    const params = {
      Bucket: BUCKET_NAME,
      Key: EditBrandName + '.jpg',
      bucketRegion: BUCKET_REIGON,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType

    };

    bucket.upload(params, function (err, data) {
      if (err) {
        throw err;
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('File Uploaded.');
      return true;
    });
  }

}

//matiral.angular.io/component/icons/overview
