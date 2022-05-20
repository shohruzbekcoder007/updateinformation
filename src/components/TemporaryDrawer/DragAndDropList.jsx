import update from 'immutability-helper'
import { useCallback, useState, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import  Card  from './Card'
import { setTableOrder, getTableOrder } from '../../globalState'
import { observer } from "mobx-react";

const DragAndDropList = () => {
    const [cards, setCards] = useState(getTableOrder())

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])

    useEffect(() => {
      setTableOrder(cards)
    }, [cards])

    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={index}
          index={index}
          id={card.id}
          text={card.name_savol}
          moveCard={moveCard}
        />
      )
    }, [])

    return (
      <DndProvider backend={HTML5Backend}>
        <div>{cards.map((card, i) => renderCard(card, i))}</div>
      </DndProvider>
    )
}

export default observer(DragAndDropList)