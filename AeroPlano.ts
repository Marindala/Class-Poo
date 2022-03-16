import { Alas } from "./Alas";
import { Cabina } from "./Cabina";
import { Helice } from "./Helice";
import { Turbina} from "./Turbina";

export class Aeroplano{
    //Atributos
    private helice: Helice;
    private turbina: Turbina;
    private alas:Alas;
    private cabina: Cabina;
    //Constructor
    public constructor(phelice: Helice, pturbina:Turbina, pcabina: Cabina, palas: Alas,)
    {
        this.helice=phelice;
        this.turbina=pturbina;
        this.cabina=pcabina;
        this.alas=palas;
    }
    public ToString()
    {
        let mensaje = "Aeroplano compuesto por: " + '\n';
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString() + '\n';
        //mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cabina.ToString();
        return mensaje;
    }
}