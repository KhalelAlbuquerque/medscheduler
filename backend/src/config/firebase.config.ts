import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private bucket;

  constructor(private configService: ConfigService) {
    const serviceAccount: ServiceAccount = require('../../firebase-credentials.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: this.configService.get<string>('FIREBASE_BUCKET_URL'),
    });

    this.bucket = admin.storage().bucket();
  }

  public getBucket() {
    return this.bucket;
  }
}
