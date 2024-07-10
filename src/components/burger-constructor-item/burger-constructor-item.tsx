import styles from "./burger-constructor-item.module.css";
import type {Identifier} from "dnd-core";

import {useRef, FC, PropsWithChildren} from "react";
import {useDispatch} from "react-redux";

import {useDrag, useDrop} from "react-dnd";

import {SORT_BURGER_INGREDIENTS} from "../../services/actions/burger-constructor";

interface IBurgerConstructorItem {
    index: number;
}

const BurgerConstructorItem: FC<PropsWithChildren<IBurgerConstructorItem>> = ({children, index}) => {
    const dispatch = useDispatch();

    const ref = useRef<HTMLDivElement>(null);

    const [{handlerId}, drop] = useDrop<
        IBurgerConstructorItem,
        { handlerId: Identifier | null },
        { handlerId: Identifier | null }
    >
    ({
        accept: "innerIngridient",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset?.y || 0) - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({type: SORT_BURGER_INGREDIENTS, rest: {from: dragIndex, to: hoverIndex}});

            // Сразу меняем индекс перемещаемого элемента
            item.index = hoverIndex;
        }
    });

    const [{isDragging}, drag] = useDrag({
        type: "innerIngridient",
        item: () => {
            return {index};
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div ref={ref} data-handler-id={handlerId} className={`${styles.item}`}>
            {children}
        </div>
    )
}


export default BurgerConstructorItem;