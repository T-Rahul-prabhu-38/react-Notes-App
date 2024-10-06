import { createContext,useEffect,useState } from "react";
import {notes as noteData} from '../data/notesData'

export const notecontext = createContext(null);

export default function ContextProvider(props) {

        const[notes,setNotes] = useState(null);

        useEffect(()=>{
            setNotes(noteData);
        },[]);

        const val = { 
            notes,
        }

    return(
        <notecontext.Provider value ={val}>{props.children}</notecontext.Provider>
    )
} 