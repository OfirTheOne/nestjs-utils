import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import { Base64DecodePipe, Base64EncodePipe } from "./pipes/common";
import { IS_EXISTS_ENTITY_PROVIDER_TOKEN, FIND_ENTITY_PROVIDER_TOKEN } from './pipes/entity/consts';
import { IsEntityExistsProvider, FindEntityProvider } from './pipes/entity/entity-provider.interface';

interface NestJsOptions {
    isExistsEntityProvider?: Type<IsEntityExistsProvider> | IsEntityExistsProvider;
    findEntityProvider?: Type<FindEntityProvider> | FindEntityProvider;   
}

@Module({
    imports: [Base64DecodePipe, Base64EncodePipe],
    providers: [],
    exports: [Base64DecodePipe, Base64EncodePipe]
})
export class NestJsUtilsModule {
    static forRoot(options?: NestJsOptions): DynamicModule {
        const additionalInjectable: Provider[] = [];
        if(options && options.isExistsEntityProvider) {
            if('prototype' in options.isExistsEntityProvider) {
                additionalInjectable.push({
                    provide: IS_EXISTS_ENTITY_PROVIDER_TOKEN,
                    useClass: options.isExistsEntityProvider
                });
            } else {
                additionalInjectable.push({
                    provide: IS_EXISTS_ENTITY_PROVIDER_TOKEN,
                    useValue: options.isExistsEntityProvider
                });
            }
        }
        if(options && options.findEntityProvider) {
            if('prototype' in options.findEntityProvider) {
                additionalInjectable.push({
                    provide: FIND_ENTITY_PROVIDER_TOKEN,
                    useClass: options.findEntityProvider
                });
            } else {
                additionalInjectable.push({
                    provide: FIND_ENTITY_PROVIDER_TOKEN,
                    useValue: options.findEntityProvider
                });
            }
        }
        return {
            module: NestJsUtilsModule,
            imports: [Base64DecodePipe, Base64EncodePipe],
            providers: [...additionalInjectable],
            exports: [Base64DecodePipe, Base64EncodePipe, ...additionalInjectable]
        }
    }
}