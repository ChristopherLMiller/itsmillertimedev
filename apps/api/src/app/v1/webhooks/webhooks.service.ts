import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksService {
  constructor(private httpService: HttpService) {}
}
