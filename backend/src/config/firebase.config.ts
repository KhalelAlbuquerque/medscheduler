import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private static firebaseApp: admin.app.App;
  private bucket;

  constructor(private configService: ConfigService) {
    if (!FirebaseService.firebaseApp) {
      const serviceAccount: ServiceAccount = require("../../firebase-credentials.json");

      FirebaseService.firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: this.configService.get<string>('FIREBASE_BUCKET_URL'),
      });
    }

    this.bucket = FirebaseService.firebaseApp.storage().bucket();
  }

  public getBucket() {
    return this.bucket;
  }
}
