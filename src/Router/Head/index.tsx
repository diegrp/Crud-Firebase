import { useEffect } from "react";

type Props = {
  title: string
  description: string
}

// Header e Description 

export const Head = ( { title, description }: Props ): null => {
  
  useEffect(() => {
    document.title = `CRUD FIREBASE | ${title}` || "";
    const desc =  document.querySelector("meta[name='description']");
    desc?.setAttribute("content", description || "");
  },[title, description]);

  return null;
}