export default function kidReducer(state = {kids: [], totalDiscipline_Level: ''}, action) {
       let total = 0
   switch (action.type) {
     case 'FETCH_KIDS':

       action.payload.map(k => total += k.discipline_level)
       return {...state, kids: action.payload, totalDiscipline_Level: total}
     case 'ADD_KID':

         state.kids.map(k => total += k.discipline_level)
         total += action.payload.discipline_level
       return {...state, kids: [...state.kids, action.payload]}
       case 'ADD_REVIEW':

           state.kids.map(k => total += k.discipline_level)
           total += action.payload.discipline_level
         return  {...state, kids: state.kids.map(kid => {
           if (kid.id === action.payload.id ) {
             return action.payload
           } else {
             return kid
           }
         })}
     default:
       return state
   }
 }