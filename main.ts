import { Aeroplano } from "./AeroPlano";
import { Cabina } from "./Cabina";
import { Helice } from "./Helice";

let h:Helice = new Helice(4);
let c: Cabina = new Cabina(true,false,true,5,2);
let a: Alas = new AnalyserNode(2,2);
let t: Turbina = new Turbina(2);
let ar:Aeroplano = new Aeroplano(h,t,c,a);
;