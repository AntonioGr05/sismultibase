import { collection, getDocs} from "firebase/firestore";
import { dbF } from "../../../DB/firebase";

export default async function handler(req, res) {
    const usuariosRef = collection(dbF, "usuarios");
    const usuariosRefSnapshot = await getDocs(usuariosRef)
    const usuarios = {}
    usuariosRefSnapshot.forEach((doc) => {
        usuarios[doc.id] = doc.data()
    })
    console.log(usuarios);;
    return res.status(200).json({usuarios})
}   