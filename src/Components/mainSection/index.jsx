import { useState } from "react";
import { FinancialSummary } from "../financialSummary";
import { FormSection } from "../formSection";
import { v4 as uuidv4 } from "uuid";
import styles from "./style.module.scss"
import { SumSection } from "../sumSection";

export const MainSection = () => {
  const [noteList, setNoteList] = useState([]);

  const addNote = (formData) => {
    const newNote = { ...formData, id: uuidv4() };

    setNoteList([...noteList, newNote]);
  };

  const removeNote = (removeId) => {
    const newNoteList = noteList.filter((element) => element.id !== removeId);
    setNoteList(newNoteList)
  };


  return (
    <main className={styles.container}>
      <FormSection addNote={addNote} />
      <FinancialSummary noteList={noteList} removeNote={removeNote} />
      <SumSection noteList={noteList}/>
    </main>
  );
};
