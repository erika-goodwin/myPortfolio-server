import { v4 as uuid4} from 'uuid';
import { createReducer} from '@reduxjs/toolkit'

const initState = {
    projectList: [
        {
            id: uuid4(),
            title: 'Blog Web App',
            LangTag: ['Node.js', 'Express', 'MongoDB', 'Tailwindcss'],
            deployedUrl: '#',
            githubUrl: 'https://github.com/erika-goodwin/a0521-node-midpr/tree/master',
            summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat facilis, deleniti officia magnam iusto possimus ullam atque, non rem sint voluptatibus exercitationem nobis laboriosam! Itaque, sequi. Ad, voluptatibus? Porro.',
            

        },
        {
            id: uuid4(),
            title: 'World Weather App',
            LangTag: ['React.js', 'Tailwindcss'],
            deployedUrl: 'https://afternoon-ravine-59477.herokuapp.com/',
            githubUrl: 'https://github.com/erika-goodwin/a-0521-react-midpr/tree/Main',
            summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat facilis, deleniti officia magnam iusto possimus ullam atque, non rem sint voluptatibus exercitationem nobis laboriosam! Itaque, sequi. Ad, voluptatibus? Porro.',


        },
        {
            id: uuid4(),
            title: 'My Portfolio Webb App',
            LangTag: ['React.js', 'Redux', 'Tailwindcss'],
            deployedUrl: '#',
            githubUrl: 'https://github.com/erika-goodwin/myproject-2-portofolio',
            summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat facilis, deleniti officia magnam iusto possimus ullam atque, non rem sint voluptatibus exercitationem nobis laboriosam! Itaque, sequi. Ad, voluptatibus? Porro.',


        }
    ]
}

const reducer = (state=initState, action) => {
    switch(action.type){
        case "ADD_PROJECT":
            return{
                ...state,
                projectList: [...state.projectList, action.payload]
            };
        default:
            return state;
    }
}
export default reducer;