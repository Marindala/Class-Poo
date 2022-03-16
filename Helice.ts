export class Helice {
    //Atributo
    private numHelices:number = 0;
    //Constructor
    public constructor( n:number)

    {
        this.numHelices = n;
    }
    //Método
    public ToString()
    {
        return "Hélices: " + `${this.numHelices} hélices/s \n`;
    }
}

