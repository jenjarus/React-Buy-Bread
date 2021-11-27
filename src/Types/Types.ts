export interface IState {
    items: IDataItems[],
    products: IDataProducts[],
    themeDark: boolean,
    inputEdit: boolean,
    idEdit: number,
}

export interface IAction {
    type: string,
    id: number,
    item: IDataItems,
    product: IDataProducts,
    edit: boolean,
}

export interface IDataItems {
    id: number,
    done: boolean,
    show: boolean,
    color: string,
    text: string,
}

export interface IDataProducts {
    id: number,
    name: string,
    color: string,
    count: number,
}

export interface IListProducts {
    filter: string;
}

export interface IListProductsItem {
    item: IDataItems
}

export interface IInputColorList {
    set: (name: string) => void,
    color: string,
}

export interface IInputColorItem {
    name: string,
    set: (name: string) => void,
    active: string,
}

export interface IInputNameProductList {
    input: string,
    setProduct: (id: number) => void,
}

export interface IInputNameProductItem {
    item: IDataProducts,
    setProduct: (id: number) => void,
}
