
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class Base64DecodePipe implements PipeTransform<string, string> { 
    constructor() { }
    transform(value: string, _metadata: ArgumentMetadata): string {
        return Buffer.from(value, 'base64').toString('utf-8');
    }
}
