import { db } from "../config/firebase";
import { 
  push, child, ref, 
  onValue, update, remove, 
  get, query, orderByChild, equalTo 
} from "firebase/database";
import { State } from "../types/State";


// Adiciona contato na lista

export const addContact = ( state: State, toast: any ) => {
  push(child(ref(db), 'contacts'), state).then(() => {
    toast.success("Contato adicionado na lista com sucesso!");
  }).catch((err) => {
    toast.error(err);
  });
}

// Atualiza contato na lista

export const updateContact = ( state: State, toast: any, id?: String ) => {
  update(child(ref(db), `contacts/${id}`), state).then(() => {
    toast.success("Contato atualizado na lista com sucesso!");
  }).catch((err) => {
    toast.error(err);
  });
}

// Recebe os dados do contato para atualização

export const updateToList = ( setData: any ) => {
  onValue(child(ref(db), 'contacts'), snapshot => {
    if(snapshot !== null){
      setData({ ...snapshot.val() });

    }else{
      setData({});
    }
  });
}

// Lista meus contatos na tabela de dados

export const listContact = ( setData: any ) => {
  onValue(child(ref(db), 'contacts'), snapshot => {
    if(snapshot.val() !== null){
        setData({ ...snapshot.val() });
    }else{
      setData({});
    }
  })
}

// Apaga meu contato na lista

export const deleteContact = ( id: String , toast: any ) => {
  if(window.confirm("Você tem certeza que deseja deletar este contato?")){
    remove(child(ref(db), `contacts/${id}`)).then(() => {
      toast.success("Contato removido na lista com sucesso!");
    }).catch((err) => {
      toast.error(err);
    })
  }
}

// Sortea meus contatos de acordo com o dado filtrado

export const sortContact = ( value: String, setSortedData: any ) => {

  const querysort = query(child(ref(db), 'contacts'), orderByChild(`${value}`))

  onValue(querysort, snapshot => {
    let sortedData: any = [];
    snapshot.forEach((snap) => {
      sortedData.push(snap.val());
    });
    setSortedData(sortedData);
  });
}

// Reseta a lista de contatos

export const resetListContact = ( setData: any ) => {
  onValue(child(ref(db), 'contacts'), snapshot => {
    if(snapshot.val() !== null){
        setData({ ...snapshot.val() });
    }else{
      setData({});
    }
  });
}

// Filtra a lista de contatos, pelo seu status

export const filterContact = ( value: string, setData: any ) => {
  const queryfilter = query(child(ref(db), 'contacts'), orderByChild('status'), equalTo(value));

  onValue(queryfilter, snapshot => {
    if(snapshot.val()){
      const data = snapshot.val();
      setData(data);
    }
  });
}

// Busca o contato na lista pelo seu nome 

export const searchContact = ( usersearch: string | null, setData: any ) => {
  const querysearch = query(child(ref(db), 'contacts'), orderByChild('nome'), equalTo(usersearch));

  onValue(querysearch, snapshot => {
    if(snapshot.val()){
      const data = snapshot.val();
      setData(data);
    }
  });
}

// Visualiza os dados do usuário na lista 

export const viewDetailContact = ( setUser: any, id?: string ) => {
  get(child(ref(db), `/contacts/${id}`)).then( snapshot => {
    if(snapshot.exists()){
      setUser({ ...snapshot.val() });

    }else{
      setUser({});
    }
  });
}