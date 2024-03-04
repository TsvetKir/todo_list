import { useRef, useState } from "react";

export function useList() {
  const [list, pushList] = useState([]);
  // const [itemTitle, setTitle] = useState();
  // const ref = useRef();

  function findItem(id, temp) {
    for (const i in temp){
      if (temp[i]['id'] == id) {
        return Number(i);
      }
    };
  }

  /** Создать новый элемент. */
  const createItem = () => {
    const temp = [...list];
    temp.push({
      id: Date.now(),
      title: "",
      done: false,
    })
    pushList(temp)
    
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    const temp = [...list];
    const index = findItem(id, temp);
    temp[index]['title'] = title;
    pushList(temp);
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => { 
    const temp = [...list];
    const index = findItem(id, temp);
    temp[index]['done'] = !temp[index]['done'];
    pushList(temp);
  }
  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    let temp = [...list]
    const index = findItem(id, temp);
    temp.splice(index, 1);
    pushList(temp);
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
