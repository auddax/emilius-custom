import sofa1 from '../../../../assets/planner/sofa1.png'
import sofa2 from '../../../../assets/planner/sofa2.png'
import sofa3 from '../../../../assets/planner/sofa3.png'
import armchair1 from '../../../../assets/planner/armchair1.png'
import armchair2 from '../../../../assets/planner/armchair2.png'
import armchair3 from '../../../../assets/planner/armchair3.png'
import table1 from '../../../../assets/planner/table1.png'
import table2 from '../../../../assets/planner/table2.png'
import table3 from '../../../../assets/planner/table3.png'
import { plannerObjectType } from './constants'

export const plannerObjects = [
    {
        id: 1,
        top: 0,
        left: 0,
        width: 170,
        height: 100,
        type: plannerObjectType.SOFA,
        img: sofa1
    },
    {
        id: 2,
        top: 0,
        left: 0,
        width: 185,
        height: 94,
        type: plannerObjectType.SOFA,
        img: sofa2
    },
    {
        id: 3,
        top: 0,
        left: 0,
        width: 154,
        height: 88,
        type: plannerObjectType.SOFA,
        img: sofa3
    },
    {
        id: 4,
        top: 0,
        left: 0,
        width: 82,
        height: 83,
        type: plannerObjectType.ARMCHAIR,
        img: armchair1
    },
    {
        id: 5,
        top: 0,
        left: 0,
        width: 78,
        height: 63,
        type: plannerObjectType.ARMCHAIR,
        img: armchair2
    },
    {
        id: 6,
        top: 0,
        left: 0,
        width: 76,
        height: 72,
        type: plannerObjectType.ARMCHAIR,
        img: armchair3
    },
    {
        id: 7,
        top: 0,
        left: 0,
        width: 93,
        height: 52,
        type: plannerObjectType.TABLE,
        img: table1
    },
    {
        id: 8,
        top: 0,
        left: 0,
        width: 120,
        height: 120,
        type: plannerObjectType.TABLE,
        img: table2
    },
    {
        id: 9,
        top: 0,
        left: 0,
        width: 130,
        height: 58,
        type: plannerObjectType.TABLE,
        img: table3
    },
]