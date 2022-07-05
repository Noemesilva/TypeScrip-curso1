export class View {
    protected elemento: HTMLElement;// ( protected )  todo mundo que herdar vai ter acesso

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
}