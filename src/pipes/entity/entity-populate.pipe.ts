


import { ArgumentMetadata, PipeTransform, Injectable, Inject } from "@nestjs/common";
import { FIND_ENTITY_PROVIDER_TOKEN } from "./consts";
import { FindEntityProvider } from "./entity-provider.interface";

@Injectable()
export class EntityPopulatePipe<T> implements PipeTransform<string, Promise<T>> { 
    constructor(@Inject(FIND_ENTITY_PROVIDER_TOKEN) protected provider: FindEntityProvider<T>) { }
    async transform(id: string, _metadata: ArgumentMetadata) {
        return await this.provider.find(id);
    }
}

 

