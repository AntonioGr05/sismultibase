import nc from "next-connect";
import {obtenerLibros} from "../../../controller/libros";

const handler=nc();
handler.get(obtenerLibros);
export default handler;