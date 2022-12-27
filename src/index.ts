


import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class EntityExistsPipe implements PipeTransform<string> { 
    constructor() { }
    async transform(value: string, metadata: ArgumentMetadata) {
        
        return value;
    }

}

 

