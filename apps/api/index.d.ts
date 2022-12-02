import { Multer as MulterNamed } from 'multer';

declare global {
  namespace Express {
    type Multer = MulterNamed;
  }
}
