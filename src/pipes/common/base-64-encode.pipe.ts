
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class Base64EncodePipe implements PipeTransform<string, string> { 
    constructor() { }
    transform(value: string, _metadata: ArgumentMetadata): string {
        return Buffer.from(value, 'utf8').toString('base64');
    }
}

 