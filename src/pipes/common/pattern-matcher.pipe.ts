
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class PatternMatcherPipe implements PipeTransform<string, boolean> { 
    constructor(protected pattern: string | RegExp) { }
    transform(value: string, _metadata: ArgumentMetadata): boolean {
        return new RegExp(this.pattern).test(value);
    }
}

 