export interface IsEntityExistsProvider {
    isExits(id: string): Promise<boolean>
}


export interface FindEntityProvider<T=any> {
    find(id: string): Promise<T>
}